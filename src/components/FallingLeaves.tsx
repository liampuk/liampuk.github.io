import { useFrame } from '@react-three/fiber';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { DoubleSide, MathUtils, Mesh } from 'three';

export type Leaf = {
  id: number;
  origin: [number, number, number];
  radius: number;
  fallSpeed: number;
  swayAmpX: number;
  swayAmpZ: number;
  swayFreqX: number;
  swayFreqZ: number;
  phase: number;
  spawnTime: number;
};

export type FallingLeavesHandle = {
  spawnLeaves: (count?: number) => void;
};

export const FallingLeaves = forwardRef<FallingLeavesHandle>((_, ref) => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const leavesRef = useRef<Leaf[]>([]);
  const nextIdRef = useRef(1);
  const leafMeshesRef = useRef<Map<number, Mesh>>(new Map());
  const spawnTimeoutsRef = useRef<number[]>([]);

  const syncLeaves = (newLeaves: Leaf[]) => {
    leavesRef.current = newLeaves;
    setLeaves(newLeaves);
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        spawnTimeoutsRef.current.forEach((id) => window.clearTimeout(id));
      }
      spawnTimeoutsRef.current = [];
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      spawnLeaves(count?: number) {
        const numLeaves = count ?? MathUtils.randInt(2, 4);
        const delayMs = 60;

        for (let i = 0; i < numLeaves; i += 1) {
          const timeoutId =
            typeof window !== 'undefined'
              ? window.setTimeout(() => {
                  const now = performance.now() / 1000;
                  const isMobile =
                    typeof window !== 'undefined' &&
                    window.matchMedia?.('(max-width: 768px)').matches;
                  const xMin = isMobile ? -5 : 1;
                  const id = nextIdRef.current++;
                  const newLeaf: Leaf = {
                    id,
                    origin: [
                      MathUtils.randFloat(xMin, 20),
                      MathUtils.randFloat(5, 9),
                      MathUtils.randFloat(15, 25),
                    ],
                    radius: MathUtils.randFloat(0.2, 0.3),
                    fallSpeed: MathUtils.randFloat(2, 5),
                    swayAmpX: MathUtils.randFloat(1, 2),
                    swayAmpZ: MathUtils.randFloat(1, 2),
                    swayFreqX: MathUtils.randFloat(0.6, 1.2),
                    swayFreqZ: MathUtils.randFloat(0.8, 1.5),
                    phase: MathUtils.randFloat(0, Math.PI * 2),
                    spawnTime: now,
                  };
                  syncLeaves([...leavesRef.current, newLeaf]);
                }, i * delayMs)
              : undefined;

          if (typeof timeoutId === 'number') {
            spawnTimeoutsRef.current.push(timeoutId);
          }
        }
      },
    }),
    []
  );

  useFrame(() => {
    const now = performance.now() / 1000;
    const removalY = -15;
    const remaining: Leaf[] = [];
    let removedAny = false;

    for (const leaf of leavesRef.current) {
      const mesh = leafMeshesRef.current.get(leaf.id);
      const t = now - leaf.spawnTime;
      const [x0, y0, z0] = leaf.origin;
      const y = y0 - leaf.fallSpeed * t;

      if (mesh) {
        const swayX = leaf.swayAmpX * Math.sin(leaf.swayFreqX * t + leaf.phase);
        const swayZ =
          leaf.swayAmpZ * Math.sin(leaf.swayFreqZ * t + leaf.phase * 1.3);
        mesh.position.set(x0 + swayX, y, z0 + swayZ);

        const rotX = 1.8 * Math.sin(t * 1.1 + leaf.phase * 0.7);
        const rotZ = 1.7 * Math.sin(t * 0.9 + leaf.phase * 1.3);
        const rotY = 0.2 * t;
        mesh.rotation.set(rotX, rotY, rotZ);
      }

      if (y > removalY) {
        remaining.push(leaf);
      } else {
        removedAny = true;
        if (mesh) {
          leafMeshesRef.current.delete(leaf.id);
        }
      }
    }

    if (removedAny) {
      syncLeaves(remaining);
    }
  });

  return (
    <>
      {leaves.map((leaf) => (
        <mesh
          key={leaf.id}
          ref={(mesh) => {
            if (mesh) {
              const scaleX = 1.2;
              const scaleY = 0.8;
              const scaleZ = 1;
              mesh.scale.set(scaleX, scaleY, scaleZ);
              leafMeshesRef.current.set(leaf.id, mesh);
            } else {
              leafMeshesRef.current.delete(leaf.id);
            }
          }}
          castShadow
        >
          <circleGeometry args={[leaf.radius, 8]} />
          <meshStandardMaterial side={DoubleSide} colorWrite={false} />
        </mesh>
      ))}
    </>
  );
});
