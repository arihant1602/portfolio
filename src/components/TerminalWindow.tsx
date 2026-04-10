import React, { useEffect, useState } from 'react';

export default function TerminalWindow({ children, title = 'bash' }: any) {
  return (
    <div className="border border-cyber-neon/30 bg-cyber-surface/80 backdrop-blur-md rounded shadow-[0_0_15px_rgba(0,255,157,0.1)] overflow-hidden font-mono text-sm text-cyber-neon">
      <div className="flex items-center px-4 py-2 border-b border-cyber-neon/30 bg-cyber-bg/50">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-cyber-danger" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-cyber-neon" />
        </div>
        <div className="flex-1 text-center text-xs opacity-70">{title}</div>
      </div>
      <div className="p-4 relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20" />
        {children}
      </div>
    </div>
  );
}
