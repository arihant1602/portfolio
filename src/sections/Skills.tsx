import React from 'react';
import GlitchText from '../components/GlitchText';
import { skills } from '../data/skills';
import TerminalWindow from '../components/TerminalWindow';

export default function Skills() {
  const categories = ['offensive', 'defensive', 'AI', 'cloud'] as const;

  return (
    <section id="skills" className="py-24 relative min-h-screen flex flex-col">
      <div className="container mx-auto px-6 z-10 mb-16 mt-12">
        <h2 className="text-4xl font-bold font-mono text-cyber-neon mb-8 text-center">
          <GlitchText text="03. THREAT_MODEL // SKILLS" />
        </h2>
      </div>
      
      <div className="container mx-auto px-6 z-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map(category => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;
            
            return (
              <TerminalWindow key={category} title={`Category: ${category.toUpperCase()}`}>
                <div className="p-6 font-mono">
                  {categorySkills.map(skill => (
                    <div key={skill.id} className="mb-8 last:mb-0">
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-cyber-cyan font-bold text-2xl tracking-wide">{skill.label}</span>
                        <span className="text-cyber-neon text-xl font-bold">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-cyber-surface/30 h-6 border border-cyber-surface relative overflow-hidden">
                        <div 
                          className="h-full bg-cyber-neon/80" 
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                        <div className="absolute inset-0 bg-[url('/assets/scanline.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                      </div>
                      {skill.connected_to.length > 0 && (
                        <div className="mt-3 text-sm text-gray-500 flex flex-wrap gap-2">
                          <span className="text-gray-400">Related Domains:</span> 
                          {skill.connected_to.map(id => {
                            const relatedSkill = skills.find(s => s.id === id);
                            return relatedSkill ? (
                              <span key={id} className="text-cyber-neon/70">[{relatedSkill.label}]</span>
                            ) : null;
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TerminalWindow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
