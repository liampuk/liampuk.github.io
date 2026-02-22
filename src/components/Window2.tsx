import { Canvas } from '@react-three/fiber';
import { DoubleSide, Path, Shape, ShapeGeometry } from 'three';

const INVISIBLE_SHADOW_CASTER = {
  colorWrite: false,
  depthWrite: false,
} as const;

export const Window2 = () => {
  const shape = new Shape();

  // Outer wall (big rectangle)
  shape.moveTo(-20, -20);
  shape.lineTo(20, -20);
  shape.lineTo(20, 20);
  shape.lineTo(-20, 20);
  shape.lineTo(-20, -20);

  // Hole (window)
  const hole = new Path();
  hole.moveTo(-2, -2);
  hole.lineTo(2, -2);
  hole.lineTo(2, 2);
  hole.lineTo(-2, 2);
  hole.lineTo(-2, -2);

  shape.holes.push(hole);

  const geometry = new ShapeGeometry(shape);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    >
      <Canvas style={{ pointerEvents: 'none' }} shadows gl={{ alpha: true }}>
        <ambientLight intensity={0.02} />
        <directionalLight
          position={[0, 0, 3]}
          intensity={1.2}
          color="white"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-camera-near={0.1}
          shadow-camera-far={30}
        />

        {/* Plane facing camera — receives the window shadow */}
        <mesh receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh geometry={geometry} castShadow position={[1, 0, 2]}>
          {/* <boxGeometry args={[1, 1, 1]} /> */}
          <meshStandardMaterial
            side={DoubleSide}
            color="blue"
            colorWrite={false}
            depthWrite={false}
          />
        </mesh>
      </Canvas>
    </div>
  );
};
