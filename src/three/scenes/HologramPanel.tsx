import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { useMouseParallax } from '../../hooks/useMouseParallax';

export default function HologramPanel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Mouse parallax mock integration
  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 10, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -(mouse.y * Math.PI) / 10, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <planeGeometry args={[3, 4, 32, 32]} />
        <meshBasicMaterial color="#0a0a0f" wireframe transparent opacity={0.5} />
      </mesh>
      
      {/* Glow edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(3, 4)]} />
        <lineBasicMaterial color="#00ff9d" linewidth={2} />
      </lineSegments>

      <Text position={[0, 1, 0.1]} fontSize={0.3} color="#00d4ff">
        IDENTIFICATION
      </Text>
      <Text position={[0, 0, 0.1]} fontSize={0.2} color="#00ff9d" maxWidth={2.5} textAlign="center">
        SYSTEM: ARIHANT_OS
        STATUS: ONLINE
        THREAT_LEVEL: ZERO
      </Text>
    </group>
  );
}
