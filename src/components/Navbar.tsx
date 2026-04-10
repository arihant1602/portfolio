import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-bg/30 backdrop-blur-[12px] border-b border-cyber-neon/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-6'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg/80 to-transparent pointer-events-none -z-10" />
      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
        <div className="text-xl font-bold text-cyber-neon font-mono">
          <GlitchText text="ARIHANT_OS" />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-mono">
          {['ABOUT', 'PROJECTS', 'SKILLS'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyber-neon transition-colors relative group">
              <span className="opacity-0 group-hover:opacity-100 absolute -left-4 text-cyber-neon">{'>'}</span>
              {link}
            </a>
          ))}
        </div>
        <button onClick={() => window.location.href='#contact'} className="text-cyber-neon font-mono text-sm px-4 py-2 border border-cyber-neon/50 hover:bg-cyber-neon/10 hover:border-cyber-neon transition-colors">
          [ HIRE ME ]
        </button>
      </div>
    </nav>
  );
}
