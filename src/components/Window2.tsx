import { SoftShadows } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import {
  BackSide,
  CameraHelper,
  DoubleSide,
  MathUtils,
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
  camSize: 36,
  near: 0.1,
  far: 180,
} as const;

const ShadowCameraDebug = ({
  lightRef,
  enabled,
}: {
  lightRef: RefObject<DirectionalLight | null>;
  enabled: boolean;
}) => {
  const { scene } = useThree();
  const helperRef = useRef<CameraHelper | null>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!enabled || !light) {
      if (helperRef.current) {
        scene.remove(helperRef.current);
        helperRef.current.dispose();
        helperRef.current = null;
      }
      return;
    }

    const helper = new CameraHelper(light.shadow.camera);
    helperRef.current = helper;
    scene.add(helper);

    return () => {
      scene.remove(helper);
      helper.dispose();
      if (helperRef.current === helper) helperRef.current = null;
    };
  }, [enabled, lightRef, scene]);

  useFrame(() => {
    if (!enabled || !helperRef.current) return;
    helperRef.current.update();
  });

  return null;
};

export const Window2 = () => {
  const lightRef = useRef<DirectionalLight>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const controls = useControls({
    qualityPreset: {
      value: 'Balanced',
      options: ['Sharp', 'Balanced', 'Soft'],
    },
    lightStart: {
      value: { x: -78.5, y: 9.5 },
      joystick: 'invertY',
      step: 1,
    },
    lightEnd: {
      value: { x: -2.5, y: 52.75 },
      joystick: 'invertY',
      step: 1,
    },
    lightZ: { value: 24.5, min: -60, max: 60, step: 0.25 },
    showWindow: { value: false },
    window: { value: { x: 0, y: 1, z: 3 }, step: 0.05 },
    planeRotateY: { value: -0.15, min: -Math.PI, max: Math.PI, step: 0.005 },
    frameSize: { value: 50, min: 1, max: 100, step: 0.1 },
    holeSize: { value: 6, min: 0.1, max: 10, step: 0.1 },
    barThickness: { value: 0.3, min: 0.05, max: 4, step: 0.05 },
  });

  useEffect(() => {
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
  }, []);

  console.log(controls.lightStart, controls.lightEnd);

  // Leva vector2d can return [x, y] or { x, y }; support both.
  const start = controls.lightStart as
    | { x: number; y: number }
    | [number, number];
  const end = controls.lightEnd as { x: number; y: number } | [number, number];
  const startX = Array.isArray(start) ? start[0] : start.x;
  const startY = Array.isArray(start) ? start[1] : start.y;
  const endX = Array.isArray(end) ? end[0] : end.x;
  const endY = Array.isArray(end) ? end[1] : end.y;

  const lightX = MathUtils.lerp(startX, endX, scrollProgress);
  const lightY = MathUtils.lerp(startY, endY, scrollProgress);
  const intensity = MathUtils.lerp(10, 1, scrollProgress);
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
    const widthMod = 1.5;
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

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        mixBlendMode: 'screen',
      }}
    >
      <Canvas
        shadows={{ type: PCFSoftShadowMap }}
        camera={{ position: [0, 0, 12] }}
      >
        <SoftShadows />
        <directionalLight
          key={`sun-shadow-${shadowSettings.shadowMapSize}`}
          ref={lightRef}
          position={[lightX, lightY, controls.lightZ]}
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
        {/* <mesh
          position={[controls.windowX, controls.windowY, controls.windowZ]}
          castShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" side={DoubleSide} />
        </mesh> */}
        <mesh
          geometry={geometry}
          castShadow
          position={[controls.window.x, controls.window.y, controls.window.z]}
        >
          <meshStandardMaterial
            side={controls.showWindow ? DoubleSide : BackSide}
            color="blue"
          />
        </mesh>
      </Canvas>
    </div>
  );
};
