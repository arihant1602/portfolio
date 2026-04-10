import React, { useState } from 'react';
import TerminalWindow from '../components/TerminalWindow';
import GlitchText from '../components/GlitchText';
import CyberButton from '../components/CyberButton';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-3xl z-10">
        <h2 className="text-3xl font-bold font-mono text-cyber-neon mb-12 text-center">
          <GlitchText text="04. ESTABLISH_CONNECTION" />
        </h2>

        <TerminalWindow title="secure-channel.sh">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm text-cyber-neon">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="opacity-80">{'> name:'}</label>
                <input id="name" type="text" required className="bg-transparent border-b border-cyber-neon/30 focus:border-cyber-neon outline-none text-white py-1 transition-colors" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="opacity-80">{'> email:'}</label>
                <input id="email" type="email" required className="bg-transparent border-b border-cyber-neon/30 focus:border-cyber-neon outline-none text-white py-1 transition-colors" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="opacity-80">{'> message:'}</label>
                <textarea id="message" rows={4} required className="bg-transparent border border-cyber-neon/30 focus:border-cyber-neon outline-none text-white p-2 transition-colors resize-none"></textarea>
              </div>
              <div className="pt-4 text-right">
                <CyberButton type="submit" className="w-full sm:w-auto">Transmit</CyberButton>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 text-cyber-neon font-mono animate-pulse">
              <pre className="text-xs mb-4">
{`  ___________
< TRANSMISSION SENT >
  -----------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||`}
              </pre>
              <p>Connection closed.</p>
            </div>
          )}
        </TerminalWindow>
      </div>
    </section>
  );
}
