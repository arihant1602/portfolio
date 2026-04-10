import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import { projects } from '../data/projects';
import TerminalWindow from '../components/TerminalWindow';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Python', 'React', 'Rust', 'ML', 'C++'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 relative min-h-screen flex flex-col items-center bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        <div className="container mx-auto px-6 z-10 mb-12 text-center">
          <h2 className="text-4xl font-bold font-mono text-cyber-neon mb-8 mt-12">
            <GlitchText text="02. SECURE_ARCHIVES" />
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map(tag => (
              <button 
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 text-base font-mono border transition-colors ${filter === tag ? 'border-cyber-neon text-cyber-neon bg-cyber-neon/10' : 'border-cyber-surface text-gray-500 hover:text-cyber-cyan hover:border-cyber-cyan/50'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <TerminalWindow key={project.id} title={`Project: ${project.title}`}>
                <div className="p-6 font-mono">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: project.color || '#00ff9d' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-8 text-xl leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-sm border border-cyber-surface text-cyber-cyan bg-cyber-bg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-auto">
                    <a href={project.githubUrl} className="text-cyber-neon hover:underline text-lg hover:text-white transition-colors">[ GitHub ]</a>
                    <a href={project.liveUrl} className="text-cyber-neon hover:underline text-lg hover:text-white transition-colors">[ Live View ]</a>
                  </div>
                </div>
              </TerminalWindow>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
