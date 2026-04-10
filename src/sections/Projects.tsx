import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ProjectCarousel from '../three/scenes/ProjectCarousel';
import GlitchText from '../components/GlitchText';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Python', 'React', 'Rust', 'ML', 'C++'];

  return (
    <section id="projects" className="py-24 relative min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 z-10 mb-8 text-center">
        <h2 className="text-3xl font-bold font-mono text-cyber-neon mb-8">
          <GlitchText text="02. SECURE_ARCHIVES" />
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tags.map(tag => (
            <button 
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1 text-sm font-mono border transition-colors ${filter === tag ? 'border-cyber-neon text-cyber-neon bg-cyber-neon/10' : 'border-cyber-surface text-gray-500 hover:text-cyber-cyan hover:border-cyber-cyan/50'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-full h-[600px] relative z-10 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ProjectCarousel />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
