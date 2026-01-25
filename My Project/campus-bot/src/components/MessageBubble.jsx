import React from 'react';

export default function MessageBubble({ sender, text, isPlace }) {
  const isUser = sender === 'user';
  
  if (isPlace) {
    // Place cards are handled separately by PlaceCard component
    return null;
  }
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[75%] md:max-w-md rounded-2xl px-4 py-3 shadow-lg transform hover:scale-105 transition-all duration-300 ${
          isUser
            ? 'bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 text-white rounded-br-none'
            : 'bg-slate-800 text-gray-100 rounded-bl-none border border-cyan-400/30'
        }`}
        style={isUser ? {boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'} : {boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)'}}
      >
        <p className="text-sm whitespace-pre-line break-words font-medium">{text}</p>
      </div>
    </div>
  );
}
