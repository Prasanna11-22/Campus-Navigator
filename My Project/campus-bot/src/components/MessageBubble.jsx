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
        className={`max-w-[75%] md:max-w-md rounded-2xl px-4 py-2.5 shadow-sm ${
          isUser
            ? 'bg-primary-light text-white rounded-br-none'
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
        }`}
      >
        <p className="text-sm whitespace-pre-line break-words">{text}</p>
      </div>
    </div>
  );
}
