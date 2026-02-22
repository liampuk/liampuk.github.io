import { Canvas } from '@react-three/fiber';
import { SoftShadows } from '@react-three/drei';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { PCFShadowMap, ShaderChunk } from 'three';

type Vec3 = [number, number, number];

type SceneControls = {
  lightPosition: Vec3;
  spherePositions: [Vec3, Vec3, Vec3];
};

const DEFAULT_CONTROLS: SceneControls = {
  lightPosition: [2.5, 8, 5],
  spherePositions: [
    [-1.05, 1.0, -0.6],
    [0, 1.15, 0],
    [1.05, 4.3, 0.7],
  ],
};

function PcssVerification() {
  useEffect(() => {
    const hasPcss = ShaderChunk.shadowmap_pars_fragment.includes(
      'PENUMBRA_FILTER_SIZE'
    );
    if (!hasPcss) {
      console.warn('PCSS shader patch not detected.');
    }
  }, []);

  return null;
}

function updateVec3(vec: Vec3, axisIndex: number, value: number): Vec3 {
  const next = [...vec] as Vec3;
  next[axisIndex] = value;
  return next;
}

function PositionControl({
  label,
  value,
  onChange,
  min = -10,
  max = 10,
  step = 0.05,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label style={controlRowStyle}>
      <span style={controlLabelStyle}>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={sliderStyle}
      />
      <span style={controlValueStyle}>{value.toFixed(2)}</span>
    </label>
  );
}

function ShadowScene({
  lightPosition,
  spherePositions,
}: {
  lightPosition: Vec3;
  spherePositions: [Vec3, Vec3, Vec3];
}) {
  return (
    <>
      <SoftShadows size={24} samples={20} focus={0.35} />
      <PcssVerification />

      {/* <ambientLight intensity={0.8} /> */}
      <directionalLight
        castShadow
        position={lightPosition}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.00015}
        shadow-normalBias={0.02}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.4, 0]}
        receiveShadow
      >
        <planeGeometry args={[12, 12]} />
        <shadowMaterial transparent opacity={0.6} />
      </mesh>

      <mesh castShadow position={spherePositions[0]}>
        <sphereGeometry args={[0.52, 48, 48]} />
        <meshStandardMaterial color="#ffffff" colorWrite={false} />
      </mesh>
      <mesh castShadow position={spherePositions[1]}>
        <sphereGeometry args={[0.52, 48, 48]} />
        <meshStandardMaterial color="#ffffff" colorWrite={false} />
      </mesh>
      <mesh castShadow position={spherePositions[2]}>
        <sphereGeometry args={[0.52, 48, 48]} />
        <meshStandardMaterial color="#ffffff" colorWrite={false} />
      </mesh>
    </>
  );
}

export const Window2 = () => {
  const [controls, setControls] = useState(DEFAULT_CONTROLS);

  const setLightAxis = (axisIndex: number, value: number) => {
    setControls((previous) => ({
      ...previous,
      lightPosition: updateVec3(previous.lightPosition, axisIndex, value),
    }));
  };

  const setSphereAxis = (
    sphereIndex: number,
    axisIndex: number,
    value: number
  ) => {
    setControls((previous) => {
      const nextSpheres = [...previous.spherePositions] as [Vec3, Vec3, Vec3];
      nextSpheres[sphereIndex] = updateVec3(
        previous.spherePositions[sphereIndex],
        axisIndex,
        value
      );
      return {
        ...previous,
        spherePositions: nextSpheres,
      };
    });
  };

  const resetControls = () => {
    setControls(DEFAULT_CONTROLS);
  };

  return (
    <>
      <div style={canvasContainerStyle} aria-hidden="true">
        <div style={canvasWrapperStyle}>
          <Canvas
            shadows={{ type: PCFShadowMap }}
            camera={{ position: [0, 2.5, 5], fov: 36 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            dpr={[2, 3]}
          >
            <ShadowScene
              lightPosition={controls.lightPosition}
              spherePositions={controls.spherePositions}
            />
          </Canvas>
        </div>
      </div>
      <aside style={panelStyle} aria-label="Shadow controls">
        <h2 style={panelTitleStyle}>Shadow Controls</h2>
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>Light</h3>
          <PositionControl
            label="X"
            value={controls.lightPosition[0]}
            onChange={(value) => setLightAxis(0, value)}
          />
          <PositionControl
            label="Y"
            value={controls.lightPosition[1]}
            min={0}
            max={12}
            onChange={(value) => setLightAxis(1, value)}
          />
          <PositionControl
            label="Z"
            value={controls.lightPosition[2]}
            onChange={(value) => setLightAxis(2, value)}
          />
        </div>

        {controls.spherePositions.map((spherePosition, sphereIndex) => (
          <div style={sectionStyle} key={`sphere-${sphereIndex + 1}`}>
            <h3 style={sectionTitleStyle}>Sphere {sphereIndex + 1}</h3>
            <PositionControl
              label="X"
              value={spherePosition[0]}
              onChange={(value) => setSphereAxis(sphereIndex, 0, value)}
            />
            <PositionControl
              label="Y"
              value={spherePosition[1]}
              min={-2}
              max={10}
              onChange={(value) => setSphereAxis(sphereIndex, 1, value)}
            />
            <PositionControl
              label="Z"
              value={spherePosition[2]}
              onChange={(value) => setSphereAxis(sphereIndex, 2, value)}
            />
          </div>
        ))}

        <button type="button" style={buttonStyle} onClick={resetControls}>
          Reset
        </button>
      </aside>
    </>
  );
};

const canvasContainerStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none',
  zIndex: 0,
};

const canvasWrapperStyle: CSSProperties = {
  width: '100%',
  height: '100%',
};

const panelStyle: CSSProperties = {
  position: 'fixed',
  top: 20,
  right: 20,
  width: 280,
  maxHeight: 'calc(100vh - 40px)',
  overflowY: 'auto',
  padding: 12,
  borderRadius: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.86)',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.18)',
  backdropFilter: 'blur(6px)',
  pointerEvents: 'auto',
  color: '#222',
  fontFamily: 'Inter, Roboto, Arial, sans-serif',
  fontSize: 12,
  zIndex: 1001,
};

const panelTitleStyle: CSSProperties = {
  fontSize: 14,
  margin: 0,
  marginBottom: 10,
  fontWeight: 600,
};

const sectionStyle: CSSProperties = {
  marginBottom: 10,
  paddingBottom: 10,
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
};

const sectionTitleStyle: CSSProperties = {
  margin: 0,
  marginBottom: 8,
  fontSize: 12,
  fontWeight: 600,
};

const controlRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '14px 1fr 40px',
  gap: 6,
  alignItems: 'center',
  marginBottom: 5,
};

const controlLabelStyle: CSSProperties = {
  fontWeight: 600,
};

const controlValueStyle: CSSProperties = {
  textAlign: 'right',
  fontVariantNumeric: 'tabular-nums',
};

const sliderStyle: CSSProperties = {
  width: '100%',
};

const buttonStyle: CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  borderRadius: 6,
  border: '1px solid rgba(0, 0, 0, 0.18)',
  backgroundColor: 'rgba(0, 0, 0, 0.06)',
  color: '#222',
  cursor: 'pointer',
};
