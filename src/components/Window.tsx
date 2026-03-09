import { SoftShadows, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useControls } from 'leva';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

type WindowVariant = 'fixed' | 'inline';
import {
  BackSide,
  DoubleSide,
  MathUtils,
  Mesh,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  PCFSoftShadowMap,
  Path,
  RGBADepthPacking,
  Shape,
  ShapeGeometry,
} from 'three';
import type { DirectionalLight } from 'three';
import { FallingLeaves, type FallingLeavesHandle } from './FallingLeaves';
import { useWebHaptics } from 'web-haptics/react';

const WINDOW_PANE_COLUMNS = 5;
const WINDOW_PANE_ROWS = 3;

const QUALITY_PRESET_VALUES = {
  Sharp: {
    shadowMapSize: 4096,
    shadowBias: -0.00008,
    shadowNormalBias: 0.035,
  },
  Balanced: {
    shadowMapSize: 2048,
    shadowBias: -0.0001,
    shadowNormalBias: 0.04,
  },
  Soft: {
    shadowMapSize: 1024,
    shadowBias: -0.00015,
    shadowNormalBias: 0.05,
  },
} as const;
type QualityPreset = keyof typeof QUALITY_PRESET_VALUES;
const STABLE_SHADOW_FRUSTUM = {
  camSize: 23,
  near: 0.1,
  far: 200,
} as const;

// Hash vertex position to a 0–1 value for per-vertex phase variation (no extra deps)
function vertexPhase(x: number, y: number, z: number): number {
  const u = Math.sin(x * 12.9898 + y * 78.233 + z * 45.164) * 43758.5453;
  return u - Math.floor(u);
}

// Smooth ramp: 0 for x<=a, 1 for x>=b, smooth in between
function smoothstep(a: number, b: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

const Tree = ({
  position,
  castShadow,
  scale = 1,
  windAmplitude = 0.08,
  windFrequency = 2.5,
  windPhaseScale = 0.5,
  windRandomness = 0.4,
}: {
  position: [number, number, number];
  castShadow?: boolean;
  scale?: number;
  windAmplitude?: number;
  windFrequency?: number;
  windPhaseScale?: number;
  windRandomness?: number;
}) => {
  const { scene } = useGLTF('/tree_small-opt.glb');
  const windBoundsRef = useRef<{
    minY: number;
    maxY: number;
    maxRadius: number;
  } | null>(null);
  const windMaterialsRef = useRef<any[]>([]);
  const windMeshesRef = useRef<Mesh[]>([]);

  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    windMaterialsRef.current = [];
    windMeshesRef.current = [];
    let minY = Infinity;
    let maxY = -Infinity;
    let maxRadius = 0;
    clone.traverse((child) => {
      if ('isMesh' in child && (child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = !!castShadow;
        windMeshesRef.current.push(mesh);

        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        materials.forEach((mat) => {
          mat.transparent = true;
          mat.opacity = 0;
        });

        const posAttr = mesh.geometry.getAttribute('position');
        if (posAttr) {
          const arr = posAttr.array as Float32Array;
          for (let i = 0; i < arr.length; i += 3) {
            const x = arr[i];
            const y = arr[i + 1];
            const z = arr[i + 2];
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
            const r = Math.sqrt(x * x + z * z);
            maxRadius = Math.max(maxRadius, r);
          }
        }
      }
    });
    windBoundsRef.current =
      maxY > minY && maxRadius > 0 ? { minY, maxY, maxRadius } : null;

    const bounds = windBoundsRef.current ?? {
      minY: 0,
      maxY: 1,
      maxRadius: 1,
    };

    const patchMaterial = (mat: any) => {
      if (!mat || mat.userData?.windPatched) return;
      mat.userData = mat.userData || {};
      mat.userData.windPatched = true;
      mat.onBeforeCompile = (shader: any) => {
        shader.uniforms.uTime = { value: 0 };
        shader.uniforms.uWindAmplitude = { value: windAmplitude };
        shader.uniforms.uWindFrequency = { value: windFrequency };
        shader.uniforms.uWindPhaseScale = { value: windPhaseScale };
        shader.uniforms.uWindRandomness = { value: windRandomness };
        shader.uniforms.uMinY = { value: bounds.minY };
        shader.uniforms.uMaxY = { value: bounds.maxY };
        shader.uniforms.uMaxRadius = { value: bounds.maxRadius };

        mat.userData.windUniforms = {
          uTime: shader.uniforms.uTime,
          uWindAmplitude: shader.uniforms.uWindAmplitude,
          uWindFrequency: shader.uniforms.uWindFrequency,
          uWindPhaseScale: shader.uniforms.uWindPhaseScale,
          uWindRandomness: shader.uniforms.uWindRandomness,
        };

        shader.vertexShader = shader.vertexShader
          .replace(
            '#include <common>',
            `
            #include <common>
            uniform float uTime;
            uniform float uWindAmplitude;
            uniform float uWindFrequency;
            uniform float uWindPhaseScale;
            uniform float uWindRandomness;
            uniform float uMinY;
            uniform float uMaxY;
            uniform float uMaxRadius;

            float vertexPhase(vec3 p) {
              float u = sin(p.x * 12.9898 + p.y * 78.233 + p.z * 45.164) * 43758.5453;
              return fract(u);
            }
          `
          )
          .replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>

            float yRange = uMaxY - uMinY;
            float heightNorm = yRange > 0.0 ? (transformed.y - uMinY) / yRange : 0.0;
            float heightFactor = smoothstep(0.45, 0.7, heightNorm);
            float radius = length(transformed.xz);
            float extremityFactor = uMaxRadius > 0.0 ? min(1.0, radius / uMaxRadius) : 0.0;
            float windScale = heightFactor * (0.4 + 0.6 * extremityFactor);

            float phaseNoise = uWindRandomness * 6.2831853;
            float vPhase = vertexPhase(transformed) * phaseNoise;
            float py = transformed.y * uWindPhaseScale;
            float T = uTime * uWindFrequency;

            float swayX =
              uWindAmplitude *
              windScale *
              (0.45 * sin(T + py + vPhase) +
                0.3 * sin(T * 1.73 + py * 0.87 + 1.0 + vPhase * 0.7) +
                0.15 * sin(T * 2.41 + py * 1.13 + 2.0 + vPhase * 0.5) +
                0.1 * sin(T * 0.61 + py * 0.6 + vPhase * 1.2));

            float swayZ =
              uWindAmplitude *
              0.6 *
              windScale *
              (0.5 * sin(T * 0.7 + py * 1.2 + 0.5 + vPhase) +
                0.35 * sin(T * 1.31 + py * 0.9 + 1.3 + vPhase * 0.8) +
                0.15 * sin(T * 1.97 + py * 1.4 + 2.1 + vPhase * 0.4));

            transformed.x += swayX;
            transformed.z += swayZ;
          `
          );
      };

      windMaterialsRef.current.push(mat);
      mat.needsUpdate = true;
    };

    windMeshesRef.current.forEach((mesh) => {
      const baseMaterials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      baseMaterials.forEach((mat) => patchMaterial(mat));

      if (!mesh.customDepthMaterial) {
        mesh.customDepthMaterial = new MeshDepthMaterial({
          depthPacking: RGBADepthPacking,
        });
      }
      patchMaterial(mesh.customDepthMaterial);

      if (!mesh.customDistanceMaterial) {
        mesh.customDistanceMaterial = new MeshDistanceMaterial();
      }
      patchMaterial(mesh.customDistanceMaterial);
    });

    return clone;
  }, [
    scene,
    castShadow,
    windAmplitude,
    windFrequency,
    windPhaseScale,
    windRandomness,
  ]);

  useFrame(() => {
    const time = performance.now() * 0.001;
    windMaterialsRef.current.forEach((mat: any) => {
      const uniforms = mat.userData?.windUniforms;
      if (!uniforms) return;
      uniforms.uTime.value = time;
      uniforms.uWindAmplitude.value = windAmplitude;
      uniforms.uWindFrequency.value = windFrequency;
      uniforms.uWindPhaseScale.value = windPhaseScale;
      uniforms.uWindRandomness.value = windRandomness;
    });
  });

  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={[scale, scale, scale]}
    />
  );
};

// Notify parent once the Canvas has rendered a few frames (avoids 3D "pop" on fade-in)
function NotifySceneReady({ onReady }: { onReady: () => void }) {
  const frameCount = useRef(0);
  const notified = useRef(false);
  useFrame(() => {
    if (notified.current) return;
    frameCount.current += 1;
    if (frameCount.current >= 2) {
      notified.current = true;
      onReady();
    }
  });
  return null;
}

type WindowProps = { variant?: WindowVariant };

export const Window = ({ variant }: WindowProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLImageElement>(null);
  const lightRef = useRef<DirectionalLight>(null);
  const leavesRef = useRef<FallingLeavesHandle | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sceneReady, setSceneReady] = useState(false);
  const useMobileLayout = variant === 'inline';

  const { trigger } = useWebHaptics();

  const handleSpawnLeavesClick = () => {
    leavesRef.current?.spawnLeaves(20);
    trigger([
      { duration: 40, intensity: 0.7 },
      { delay: 40, duration: 40, intensity: 0.7 },
      { delay: 40, duration: 40, intensity: 0.9 },
      { delay: 40, duration: 50, intensity: 0.6 },
    ]);
  };

  useLayoutEffect(() => {
    if (!sceneReady) return;
    const el = wrapperRef.current;
    if (!el) return;
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 1, ease: 'power1.out' });

    const placeholder = placeholderRef.current;
    if (placeholder) {
      gsap.to(placeholder, {
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        onComplete: () => placeholder.remove(),
      });
    }
  }, [sceneReady]);

  const controls = useControls({
    qualityPreset: {
      value: useMobileLayout ? 'Soft' : 'Soft',
      options: ['Sharp', 'Balanced', 'Soft'],
    },
    showWindow: { value: false },
    windowX: { value: useMobileLayout ? 0 : 6, min: -20, max: 20, step: 0.05 },
    windowY: { value: 1, min: -20, max: 20, step: 0.05 },
    windowZ: { value: 3, min: -20, max: 20, step: 0.05 },
    planeRotateY: { value: -0.16, min: -Math.PI, max: Math.PI, step: 0.005 },
    frameSize: { value: 50, min: 1, max: 100, step: 0.1 },
    holeSize: {
      value: useMobileLayout ? 6.4 : 5.3,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    barThickness: { value: 0.25, min: 0.05, max: 4, step: 0.05 },
  });

  const lightControls = useControls('Light', {
    lightX: { value: 25, min: -300, max: 300, step: 1 },
    lightY: { value: 48, min: -300, max: 300, step: 1 },
    lightZStart: { value: 174.5, min: -60, max: 200, step: 0.25 },
    lightZEnd: { value: 35, min: -60, max: 200, step: 0.25 },
  });

  const shadowFrustumControls = useControls('Shadow Frustum', {
    camSize: {
      value: STABLE_SHADOW_FRUSTUM.camSize,
      min: 1,
      max: 200,
      step: 1,
    },
    near: {
      value: STABLE_SHADOW_FRUSTUM.near,
      min: 0.01,
      max: 10,
      step: 0.01,
    },
    far: {
      value: STABLE_SHADOW_FRUSTUM.far,
      min: 10,
      max: 400,
      step: 1,
    },
  });

  const treeControls = useControls('Tree', {
    treeX: { value: 10.79, min: -100, max: 100, step: 0.01 },
    treeY: { value: -9.24, min: -100, max: 100, step: 0.01 },
    treeZ: { value: 13.06, min: -100, max: 100, step: 0.01 },
    scale: { value: 0.58, min: 0.1, max: 2, step: 0.01 },
  });

  // const sphereControls = useControls('Sphere', {
  //   sphereX: { value: 0, min: -50, max: 50, step: 0.1 },
  //   sphereY: { value: 1, min: -50, max: 50, step: 0.1 },
  //   sphereZ: { value: 5, min: -50, max: 50, step: 0.1 },
  // });

  const windControls = useControls('Tree Wind', {
    windAmplitude: { value: 0.18, min: 0, max: 2, step: 0.01 },
    windFrequency: { value: 1.8, min: 0.1, max: 10, step: 0.1 },
    windPhaseScale: { value: 0.5, min: 0, max: 2, step: 0.05 },
    windRandomness: {
      value: 0.4,
      min: 0,
      max: 1,
      step: 0.05,
    },
  });

  useEffect(() => {
    if (useMobileLayout) return; // no scroll-driven animation on mobile
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      setScrollProgress(MathUtils.clamp(scrollTop / maxScroll, 0, 1));
      if (lastScrollYRef.current === null) {
        lastScrollYRef.current = scrollTop;
        return;
      }
      const delta = Math.abs(scrollTop - lastScrollYRef.current);
      if (delta >= 20) {
        const count = 1;
        leavesRef.current?.spawnLeaves(count);
        lastScrollYRef.current = scrollTop;
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, [useMobileLayout]);

  const effectiveScrollProgress = useMobileLayout ? 0 : scrollProgress;
  const lightZ = MathUtils.lerp(
    lightControls.lightZStart as number,
    lightControls.lightZEnd as number,
    effectiveScrollProgress
  );
  const intensity = MathUtils.lerp(10, 0.9, effectiveScrollProgress);
  const shadowSettings =
    QUALITY_PRESET_VALUES[controls.qualityPreset as QualityPreset];

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    // Three.js can keep the previous shadow render target alive when map size changes.
    // Dispose and null it to force reallocation at the new resolution.
    if (light.shadow.map) {
      light.shadow.map.dispose();
      light.shadow.map = null;
    }
    light.shadow.camera.updateProjectionMatrix();
    light.shadow.needsUpdate = true;
  }, [
    controls.qualityPreset,
    shadowSettings.shadowMapSize,
    shadowSettings.shadowBias,
    shadowSettings.shadowNormalBias,
    shadowFrustumControls.camSize,
    shadowFrustumControls.near,
    shadowFrustumControls.far,
  ]);

  const geometry = useMemo(() => {
    const shape = new Shape();
    const size = controls.frameSize;
    const holeSize = controls.holeSize;
    const barThickness = controls.barThickness;
    const widthMod = 1.3;
    const halfWindowWidth = holeSize * widthMod;
    const halfWindowHeight = holeSize;
    const halfBar = Math.min(
      barThickness / 2,
      halfWindowWidth - 0.01,
      halfWindowHeight - 0.01
    );
    const addRectHole = (
      xMin: number,
      xMax: number,
      yMin: number,
      yMax: number
    ) => {
      if (xMax <= xMin || yMax <= yMin) return;

      const hole = new Path();
      hole.moveTo(xMin, yMin);
      hole.lineTo(xMax, yMin);
      hole.lineTo(xMax, yMax);
      hole.lineTo(xMin, yMax);
      hole.lineTo(xMin, yMin);
      shape.holes.push(hole);
    };

    // Outer wall (big rectangle)
    shape.moveTo(-size, -size);
    shape.lineTo(size, -size);
    shape.lineTo(size, size);
    shape.lineTo(-size, size);
    shape.lineTo(-size, -size);

    // Build a generic pane grid. Bars are the material between holes.
    const paneColumns = Math.max(1, WINDOW_PANE_COLUMNS);
    const paneRows = Math.max(1, WINDOW_PANE_ROWS);
    const barThicknessClamped = halfBar * 2;
    const totalWindowWidth = halfWindowWidth * 2;
    const totalWindowHeight = halfWindowHeight * 2;
    const totalBarWidth = (paneColumns - 1) * barThicknessClamped;
    const totalBarHeight = (paneRows - 1) * barThicknessClamped;
    const paneWidth = (totalWindowWidth - totalBarWidth) / paneColumns;
    const paneHeight = (totalWindowHeight - totalBarHeight) / paneRows;

    for (let row = 0; row < paneRows; row += 1) {
      for (let col = 0; col < paneColumns; col += 1) {
        const xMin = -halfWindowWidth + col * (paneWidth + barThicknessClamped);
        const xMax = xMin + paneWidth;
        const yMin =
          -halfWindowHeight + row * (paneHeight + barThicknessClamped);
        const yMax = yMin + paneHeight;
        addRectHole(xMin, xMax, yMin, yMax);
      }
    }

    return new ShapeGeometry(shape);
  }, [controls.frameSize, controls.holeSize, controls.barThickness]);

  const windowContent = (
    <>
      <Canvas
        shadows={{ type: PCFSoftShadowMap }}
        dpr={[1, 1]}
        camera={{ position: [0, 0, 12] }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <NotifySceneReady
          onReady={() => {
            setSceneReady(true);
            leavesRef.current?.spawnLeaves(20);
          }}
        />
        <SoftShadows />
        <FallingLeaves ref={leavesRef} />
        <directionalLight
          key={`sun-shadow-${shadowSettings.shadowMapSize}`}
          ref={lightRef}
          position={[
            lightControls.lightX as number,
            lightControls.lightY as number,
            lightZ,
          ]}
          intensity={intensity}
          castShadow
          shadow-mapSize-width={shadowSettings.shadowMapSize}
          shadow-mapSize-height={shadowSettings.shadowMapSize}
          shadow-camera-left={-shadowFrustumControls.camSize}
          shadow-camera-right={shadowFrustumControls.camSize}
          shadow-camera-top={shadowFrustumControls.camSize}
          shadow-camera-bottom={-shadowFrustumControls.camSize}
          shadow-camera-near={shadowFrustumControls.near}
          shadow-camera-far={shadowFrustumControls.far}
          shadow-bias={shadowSettings.shadowBias}
          shadow-normalBias={shadowSettings.shadowNormalBias}
        />
        <mesh receiveShadow rotation-y={controls.planeRotateY}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <Tree
          position={[
            useMobileLayout ? 5 : (treeControls.treeX as number),
            treeControls.treeY,
            treeControls.treeZ,
          ]}
          castShadow
          scale={treeControls.scale}
          windAmplitude={windControls.windAmplitude}
          windFrequency={windControls.windFrequency}
          windPhaseScale={windControls.windPhaseScale}
          windRandomness={windControls.windRandomness}
        />
        {/* <mesh
          castShadow
          position={[
            sphereControls.sphereX as number,
            sphereControls.sphereY as number,
            sphereControls.sphereZ as number,
          ]}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
        <mesh
          geometry={geometry}
          castShadow
          position={[
            controls.windowX as number,
            controls.windowY as number,
            controls.windowZ as number,
          ]}
        >
          <meshStandardMaterial
            side={controls.showWindow ? DoubleSide : BackSide}
            color="blue"
          />
        </mesh>
      </Canvas>
    </>
  );

  const wrapperClassName = useMobileLayout
    ? 'window-mobile mix-blend-screen opacity-0'
    : 'w-full h-full fixed top-0 mix-blend-screen opacity-0';

  const placeholderClassName = useMobileLayout
    ? 'window-mobile mix-blend-screen object-cover pointer-events-none blur-sm'
    : 'w-[64vw] h-full fixed top-[-3vh] right-[-1vw] mix-blend-screen object-contain pointer-events-none blur-md';

  return (
    <>
      <img
        ref={placeholderRef}
        src="/placeholder.jpg"
        alt=""
        className={placeholderClassName}
      />
      <div
        ref={wrapperRef}
        className={wrapperClassName}
        onClick={handleSpawnLeavesClick}
      >
        {windowContent}
      </div>
    </>
  );
};
