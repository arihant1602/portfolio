import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '../../data/skills';

export default function ThreatGraph() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Simple force-directed mock placement
  const nodes = useMemo(() => {
    return skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 2.5;
      return {
        ...skill,
        pos: new THREE.Vector3(
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 5,
          Math.cos(angle) * radius
        ),
        color: skill.category === 'offensive' ? '#ff2d55' : 
               skill.category === 'defensive' ? '#00d4ff' : 
               skill.category === 'AI' ? '#00ff9d' : '#ffffff'
      };
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Edges */}
      {nodes.map((node) => 
        node.connected_to.map(targetId => {
          const target = nodes.find(n => n.id === targetId);
          if (!target) return null;
          const points = [node.pos, target.pos];
          const curve = new THREE.LineCurve3(points[0], points[1]);
          return (
            <mesh key={`edge-${node.id}-${targetId}`}>
              <tubeGeometry args={[curve, 20, 0.08, 8, false]} />
              <meshBasicMaterial color="#333333" transparent opacity={0.6} />
            </mesh>
          );
        })
      )}

      {/* Nodes */}
      {nodes.map(node => (
        <Node key={node.id} node={node} />
      ))}
    </group>
  );
}

function Node({ node }: { node: any }) {
  const [hovered, setHover] = useState(false);
  const scale = hovered ? 1.3 : 1;

  return (
    <group position={node.pos}>
      <mesh 
        scale={[scale, scale, scale]} 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color={node.color} wireframe />
      </mesh>
      <Text position={[0, 1.8, 0]} fontSize={0.6} color={node.color} opacity={hovered ? 1 : 0.8}>
        {node.label}
      </Text>
    </group>
  );
}
