import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { getPerformanceTier } from '../utils/performanceTier';

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse } = useThree();
  
  const tier = getPerformanceTier();
  const particleCount = tier === 'high' ? 15000 : tier === 'medium' ? 6000 : 1500;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 15 + Math.random() * 10;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    return [pos, vel];
  }, [particleCount]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Add sinusoidal drift & mouse repulsion
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] += velocities[i3] + Math.sin(state.clock.elapsedTime + positions[i3+1]) * 0.01;
      positions[i3+1] += velocities[i3+1] + Math.cos(state.clock.elapsedTime + positions[i3]) * 0.01;
      positions[i3+2] += velocities[i3+2] + Math.sin(state.clock.elapsedTime + positions[i3+2]) * 0.01;
      
      // Mouse repulsion (naive mapping)
      const dx = mouse.x * 20 - positions[i3];
      const dy = mouse.y * 20 - positions[i3+1];
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 5) {
        positions[i3] -= (dx / dist) * 0.1;
        positions[i3+1] -= (dy / dist) * 0.1;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    if (pointsRef.current) {
        pointsRef.current.rotation.y += 0.001;
        pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00ff9d" transparent opacity={0.8} />
      </points>
      {/* TODO: Add lines when proximity threshold met (expensive, skipping for now) */}
    </group>
  );
}
