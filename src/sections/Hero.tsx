import React from 'react';
import GlitchText from '../components/GlitchText';
import CyberButton from '../components/CyberButton';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cyber-bg">
      <div className="relative z-10 text-center flex flex-col items-center mt-20">
        <div className="mb-4 text-cyber-neon font-mono text-sm tracking-[0.2em] opacity-80 uppercase">
          [INITIALIZING...]
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-white mb-6">
          <GlitchText text="Arihant Pratap Singh" />
        </h1>
        <p className="text-xl md:text-2xl text-cyber-cyan font-mono mb-10 max-w-3xl px-4">
          <GlitchText text="> Cyber Security Specialist & Creative Developer_" as="span" />
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <CyberButton onClick={() => window.location.href='#projects'}>View Work</CyberButton>
          <CyberButton onClick={() => window.location.href='#contact'} className="!text-cyber-cyan border-cyber-cyan/50 hover:!border-cyber-cyan">Contact</CyberButton>
        </div>
      </div>
    </section>
  );
}
