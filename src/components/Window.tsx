import { SoftShadows, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useControls } from 'leva';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/general';

type WindowVariant = 'fixed' | 'inline';
import {
  BackSide,
  DoubleSide,
  MathUtils,
  Mesh,
  PCFSoftShadowMap,
  Path,
  Shape,
  ShapeGeometry,
} from 'three';
import type { DirectionalLight } from 'three';

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
  camSize: 46,
  near: 0.1,
  far: 280,
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
  const originalPositionsRef = useRef<Map<Mesh, Float32Array>>(new Map());
  const windBoundsRef = useRef<{
    minY: number;
    maxY: number;
    maxRadius: number;
  } | null>(null);

  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    originalPositionsRef.current.clear();
    let minY = Infinity;
    let maxY = -Infinity;
    let maxRadius = 0;
    clone.traverse((child) => {
      if ('isMesh' in child && (child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = !!castShadow;
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
          originalPositionsRef.current.set(mesh, new Float32Array(arr));
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
    return clone;
  }, [scene, castShadow]);

  useFrame((_, delta) => {
    const time = performance.now() * 0.001;
    const T = time * windFrequency;
    const phaseNoise = windRandomness * Math.PI * 2;
    const bounds = windBoundsRef.current;
    clonedScene.traverse((child) => {
      if ('isMesh' in child && (child as Mesh).isMesh) {
        const mesh = child as Mesh;
        const originalPos = originalPositionsRef.current.get(mesh);
        if (!originalPos) return;
        const posAttr = mesh.geometry.getAttribute('position');
        if (!posAttr) return;
        const positions = posAttr.array as Float32Array;
        const { minY, maxY, maxRadius } = bounds ?? {
          minY: 0,
          maxY: 1,
          maxRadius: 1,
        };
        const yRange = maxY - minY;
        for (let i = 0; i < positions.length; i += 3) {
          const x = originalPos[i];
          const y = originalPos[i + 1];
          const z = originalPos[i + 2];
          // More wind at top (above bottom half) and at extremities (branch/leaf tips)
          const heightNorm = yRange > 0 ? (y - minY) / yRange : 0;
          const heightFactor = smoothstep(0.45, 0.7, heightNorm); // ramp from ~bottom half into top
          const radius = Math.sqrt(x * x + z * z);
          const extremityFactor =
            maxRadius > 0 ? Math.min(1, radius / maxRadius) : 0;
          const windScale = heightFactor * (0.4 + 0.6 * extremityFactor);
          const vPhase = vertexPhase(x, y, z) * phaseNoise;
          const py = y * windPhaseScale;
          // Multiple incommensurate waves so motion isn't a single visible sine
          const swayX =
            windAmplitude *
            windScale *
            (0.45 * Math.sin(T + py + vPhase) +
              0.3 * Math.sin(T * 1.73 + py * 0.87 + 1 + vPhase * 0.7) +
              0.15 * Math.sin(T * 2.41 + py * 1.13 + 2 + vPhase * 0.5) +
              0.1 * Math.sin(T * 0.61 + py * 0.6 + vPhase * 1.2));
          const swayZ =
            windAmplitude *
            0.6 *
            windScale *
            (0.5 * Math.sin(T * 0.7 + py * 1.2 + 0.5 + vPhase) +
              0.35 * Math.sin(T * 1.31 + py * 0.9 + 1.3 + vPhase * 0.8) +
              0.15 * Math.sin(T * 1.97 + py * 1.4 + 2.1 + vPhase * 0.4));
          positions[i] = originalPos[i] + swayX;
          positions[i + 1] = originalPos[i + 1];
          positions[i + 2] = originalPos[i + 2] + swayZ;
        }
        posAttr.needsUpdate = true;
        mesh.geometry.computeVertexNormals();
      }
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
  const lightRef = useRef<DirectionalLight>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sceneReady, setSceneReady] = useState(false);
  const isMobile = useIsMobile();
  // When variant is set, use it; otherwise treat undefined as mobile so we never flash desktop layout
  const useMobileLayout =
    variant === 'inline'
      ? true
      : variant === 'fixed'
      ? false
      : isMobile !== false;

  useLayoutEffect(() => {
    if (!sceneReady) return;
    const el = wrapperRef.current;
    if (!el) return;
    gsap.set(el, { opacity: 0 });
    gsap.to(el, { opacity: 1, duration: 1, ease: 'power1.out' });
  }, [sceneReady]);

  const controls = useControls({
    qualityPreset: {
      value: 'Sharp',
      options: ['Sharp', 'Balanced', 'Soft'],
    },
    showWindow: { value: false },
    windowX: { value: useMobileLayout ? 0 : 6, min: -20, max: 20, step: 0.05 },
    windowY: { value: 1, min: -20, max: 20, step: 0.05 },
    windowZ: { value: 3, min: -20, max: 20, step: 0.05 },
    planeRotateY: { value: -0.16, min: -Math.PI, max: Math.PI, step: 0.005 },
    frameSize: { value: 50, min: 1, max: 100, step: 0.1 },
    holeSize: {
      value: useMobileLayout ? 6 : 5.3,
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

  const treeControls = useControls('Tree', {
    treeX: { value: 10.79, min: -100, max: 100, step: 0.01 },
    treeY: { value: -9.24, min: -100, max: 100, step: 0.01 },
    treeZ: { value: 13.06, min: -100, max: 100, step: 0.01 },
    scale: { value: 0.58, min: 0.1, max: 2, step: 0.01 },
  });

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
        camera={{ position: [0, 0, 12] }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <NotifySceneReady onReady={() => setSceneReady(true)} />
        <SoftShadows />
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
          shadow-camera-left={-STABLE_SHADOW_FRUSTUM.camSize}
          shadow-camera-right={STABLE_SHADOW_FRUSTUM.camSize}
          shadow-camera-top={STABLE_SHADOW_FRUSTUM.camSize}
          shadow-camera-bottom={-STABLE_SHADOW_FRUSTUM.camSize}
          shadow-camera-near={STABLE_SHADOW_FRUSTUM.near}
          shadow-camera-far={STABLE_SHADOW_FRUSTUM.far}
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

  return (
    <div ref={wrapperRef} className={wrapperClassName}>
      {windowContent}
    </div>
  );
};
