import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Html } from '@react-three/drei';
import * as THREE from 'three';
import { projects } from '../../data/projects';

export default function ProjectCarousel() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 5;
  const count = projects.length;

  useFrame((state) => {
    if (groupRef.current) {
      // Auto-rotate slowly
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {projects.map((project, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <ProjectCard 
            key={project.id} 
            project={project} 
            position={[x, 0, z]} 
            rotation={[0, angle, 0]} 
          />
        );
      })}
    </group>
  );
}

function ProjectCard({ project, position, rotation }: any) {
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <group 
      position={position} 
      rotation={rotation}
    >
      <group
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHover(false); document.body.style.cursor = 'auto'; }}
        onClick={(e) => { e.stopPropagation(); setClicked(!clicked); }}
      >
        <RoundedBox 
          args={[3.5, 4.5, 0.2]} 
          radius={0.15} 
          smoothness={4} 
          scale={hovered ? 1.05 : 1}
        >
          <meshStandardMaterial 
            color={hovered ? '#1a1a2e' : '#0a0a0f'} 
            roughness={0.2}
            metalness={0.8}
            transparent 
            opacity={0.85} 
          />
        </RoundedBox>
        <RoundedBox 
          args={[3.55, 4.55, 0.1]} 
          radius={0.15} 
          smoothness={4} 
          scale={hovered ? 1.05 : 1}
        >
          <meshBasicMaterial 
            color={project.color} 
            wireframe
            transparent
            opacity={hovered ? 0.8 : 0.3}
          />
        </RoundedBox>

        <Text 
          position={[0, 1.2, 0.15]} 
          fontSize={0.35} 
          color={project.color}
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>
        
        <Text 
          position={[0, 0, 0.15]} 
          fontSize={0.18} 
          color="#ffffff" 
          maxWidth={2.8} 
          textAlign="center"
        >
          {project.description}
        </Text>
        
        <Text 
          position={[0, -1.5, 0.15]} 
          fontSize={0.12} 
          color={project.color} 
          opacity={0.8}
        >
          {project.tags.join(' // ')}
        </Text>
      </group>

      {clicked && (
        <Html
          position={[0, 0, 0.4]}
          center
          transform
          distanceFactor={12}
          zIndexRange={[100, 0]}
        >
          <div className="border-2 border-cyber-neon/50 bg-cyber-surface/95 backdrop-blur-xl rounded-lg shadow-[0_0_30px_rgba(0,255,157,0.3)] p-6 relative pointer-events-auto" style={{ width: '450px', borderColor: project.color }}>
            <div className="flex items-center mb-4 border-b border-cyber-neon/30 pb-2">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-cyber-danger" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-cyber-neon" />
              </div>
              <div className="flex-1 text-center text-sm font-mono" style={{ color: project.color }}>{project.title}.exe</div>
            </div>
            <h3 className="text-3xl font-bold font-mono mb-3" style={{ color: project.color }}>{project.title}</h3>
            <p className="text-gray-200 font-sans text-base mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-sm px-3 py-1 bg-cyber-bg/80 rounded font-mono border" style={{ color: project.color, borderColor: `${project.color}40` }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.githubUrl} className="flex-1 text-center py-3 text-base font-bold font-mono border transition-colors" style={{ color: project.color, borderColor: project.color, backgroundColor: 'transparent' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = `${project.color}20`} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                [ GITHUB ]
              </a>
              <a href={project.liveUrl} className="flex-1 text-center py-3 text-base font-bold font-mono transition-colors text-black" style={{ backgroundColor: project.color }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
                [ LIVE ]
              </a>
            </div>
            <button 
              className="absolute top-4 right-4 text-xl hover:text-white font-mono font-bold transition-colors"
              style={{ color: project.color }}
              onClick={(e) => { e.stopPropagation(); setClicked(false); }}
            >
              [X]
            </button>
          </div>
        </Html>
      )}
    </group>
  );
}
