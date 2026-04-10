import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="about" className="py-24 relative min-h-screen flex items-center bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold font-mono text-cyber-neon mb-12 text-center lg:text-left">
          <GlitchText text="01. ABOUT_ME" />
        </h2>
        <div className="max-w-5xl mx-auto lg:mx-0">
          <TerminalWindow title="root@arihant-os:~">
            <pre className="whitespace-pre-wrap font-mono text-base md:text-lg text-cyber-neon leading-relaxed p-4">
              {bio}
            </pre>
          </TerminalWindow>
        </div>
      </motion.div>
    </section>
  );
}
