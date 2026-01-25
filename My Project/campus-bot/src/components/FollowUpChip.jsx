import React from 'react';

export default function FollowUpChip({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 px-4 py-2 mt-2 text-sm bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-200 rounded-full hover:from-cyan-500/30 hover:to-sky-500/30 transition-all border border-cyan-400/30 backdrop-blur-sm"
      style={{boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)'}}
    >
      <span>📍</span>
      <span>{text}</span>
    </button>
  );
}
