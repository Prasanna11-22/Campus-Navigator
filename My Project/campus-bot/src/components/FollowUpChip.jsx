import React from 'react';

export default function FollowUpChip({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1 px-3 py-1.5 mt-2 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border border-blue-200 dark:border-blue-800"
    >
      <span>📍</span>
      <span>{text}</span>
    </button>
  );
}
