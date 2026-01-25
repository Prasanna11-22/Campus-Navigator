import React from 'react';

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-2 mb-4">
      <div className="bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-cyan-400/30" style={{boxShadow: '0 0 10px rgba(6, 182, 212, 0.15)'}}>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
