import React, { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './hooks/useReducedMotion';

import Navbar from './components/Navbar';
import HexGrid from './components/HexGrid';

// Lazy load sections
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Skills = React.lazy(() => import('./sections/Skills'));
const Contact = React.lazy(() => import('./sections/Contact'));

gsap.registerPlugin(ScrollTrigger);

function CyberLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-cyber-bg">
      <div className="font-mono text-cyber-neon animate-pulse text-sm">
        [LOADING_MODULES...]
      </div>
    </div>
  );
}

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !mainRef.current) return;

    // Choreography
    const ctx = gsap.context(() => {
      // General reveal for all section headings
      gsap.utils.toArray('h2').forEach((heading: any) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
          },
          opacity: 0,
          y: 20,
          duration: 1,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div className="bg-cyber-bg text-white min-h-screen selection:bg-cyber-neon selection:text-cyber-bg" ref={mainRef}>
      <Navbar />
      <HexGrid />
      <Suspense fallback={<CyberLoader />}>
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
