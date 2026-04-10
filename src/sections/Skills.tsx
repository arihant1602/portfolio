import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreatGraph from '../three/scenes/ThreatGraph';
import GlitchText from '../components/GlitchText';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative min-h-screen flex flex-col">
      <div className="container mx-auto px-6 z-10 mb-8">
        <h2 className="text-3xl font-bold font-mono text-cyber-neon mb-8 text-center">
          <GlitchText text="03. THREAT_MODEL" />
        </h2>
      </div>
      
      <div className="flex-1 w-full relative z-10 h-[800px] min-h-[800px]">
        <Canvas camera={{ position: [0, 0, 35], fov: 50 }}>
          <Suspense fallback={null}>
            <ThreatGraph />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 z-10 mt-8">
        <div className="flex justify-center gap-8 font-mono text-sm">
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-cyber-danger rounded-full"></span>Offensive</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-cyber-cyan rounded-full"></span>Defensive</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-cyber-neon rounded-full"></span>AI</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full"></span>Cloud</div>
        </div>
      </div>
    </section>
  );
}
