import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HologramPanel from '../three/scenes/HologramPanel';
import TerminalWindow from '../components/TerminalWindow';
import GlitchText from '../components/GlitchText';

export default function About() {
  const bio = `> whoami
Loading profile data...
Name: Arihant Pratap Singh
Alias: Arihant
Role: Senior Full-Stack Architect
Specialty: Offensive Security & AI

> cat motivation.txt
I build digital fortresses and break into them. 
Specializing in secure-by-design architecture, 
I blend advanced web technologies with deep 
security principles.

> status
[ONLINE] Ready for new contracts.`;

  return (
    <section id="about" className="py-24 relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="h-[500px] w-full relative z-10 hidden lg:block">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <HologramPanel />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="z-10">
          <h2 className="text-3xl font-bold font-mono text-cyber-neon mb-8">
            <GlitchText text="01. ABOUT_ME" />
          </h2>
          <TerminalWindow title="root@arihant-os:~">
            <pre className="whitespace-pre-wrap font-mono text-sm text-cyber-neon leading-relaxed">
              {bio}
            </pre>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
