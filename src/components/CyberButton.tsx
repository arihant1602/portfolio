import React from 'react';

export default function CyberButton({ children, onClick, className = '' }: any) {
  return (
    <button 
      onClick={onClick}
      className={`relative group px-6 py-3 font-mono text-sm font-bold tracking-wider text-cyber-neon uppercase transition-colors duration-300 ${className}`}
    >
      <span className="absolute inset-0 border border-cyber-neon/50 group-hover:border-cyber-neon transition-colors duration-300 
        [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyber-neon -translate-x-1 translate-y-1"></span>
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyber-neon translate-x-1 -translate-y-1"></span>
      
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-cyber-neon opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </button>
  );
}
