import React, { useState } from 'react';

export default function TerminalWindow({ children, title = 'bash' }: any) {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  if (isClosed) return null;

  return (
    <div 
      className={`border border-cyber-neon/30 bg-cyber-surface/80 backdrop-blur-md overflow-hidden font-mono text-sm text-cyber-neon transition-all duration-300 ${
        isMaximized 
          ? 'fixed inset-4 z-50 rounded-lg shadow-2xl' 
          : 'rounded shadow-[0_0_15px_rgba(0,255,157,0.1)] w-full'
      }`}
    >
      <div className="flex items-center px-4 py-2 border-b border-cyber-neon/30 bg-cyber-bg/50">
        <div className="flex space-x-2 mr-4 group">
          <button 
            onClick={() => setIsClosed(true)}
            className="w-3 h-3 rounded-full bg-cyber-danger hover:brightness-125 focus:outline-none flex items-center justify-center"
            title="Close"
          />
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-125 focus:outline-none flex items-center justify-center"
            title="Minimize"
          />
          <button 
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-3 h-3 rounded-full bg-cyber-neon hover:brightness-125 focus:outline-none flex items-center justify-center"
            title="Maximize"
          />
        </div>
        <div className="flex-1 text-center text-xs opacity-70 cursor-default select-none">{title}</div>
      </div>
      
      {!isMinimized && (
        <div className={`p-4 relative ${isMaximized ? 'h-[calc(100%-2rem)] overflow-auto' : ''}`}>
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20" />
          {children}
        </div>
      )}
    </div>
  );
}
