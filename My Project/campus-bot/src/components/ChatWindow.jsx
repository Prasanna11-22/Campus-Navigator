import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import PlaceCard from './PlaceCard';
import FollowUpChip from './FollowUpChip';
import TypingIndicator from './TypingIndicator';

export default function ChatWindow({ messages, loading, onFollowUpClick }) {
  const chatEndRef = useRef(null);
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);
  
  // Helper to parse place data from bot message
  const parsePlaceData = (text) => {
    const lines = text.split('\n');
    if (lines.length >= 3 && text.includes('Location:')) {
      const title = lines[0];
      const location = lines.find(l => l.includes('Location:'))?.replace('Location:', '').trim();
      const guidanceIndex = lines.findIndex(l => l.includes('How to reach:'));
      const guidance = guidanceIndex !== -1 ? lines.slice(guidanceIndex + 1).join('\n').trim() : '';
      
      return { title, location, guidance, isPlace: true };
    }
    return null;
  };
  
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Welcome to Campus Navigator
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Ask me anything about campus locations, labs, or facilities
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <div className="text-xs bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-gray-600 dark:text-gray-400">
                Try: "Where is OS Lab?"
              </div>
              <div className="text-xs bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-gray-600 dark:text-gray-400">
                Try: "ஓஎஸ் லேப் எங்கே?"
              </div>
            </div>
          </div>
        )}
        
        {messages.map((msg, index) => {
          const placeData = msg.sender === 'bot' ? parsePlaceData(msg.text) : null;
          
          return (
            <div key={index}>
              {msg.sender === 'user' ? (
                <MessageBubble sender="user" text={msg.text} />
              ) : placeData ? (
                <div className="flex justify-start mb-4">
                  <PlaceCard
                    title={placeData.title}
                    location={placeData.location}
                    guidance={placeData.guidance}
                    mapUrl={msg.mapUrl}
                  />
                </div>
              ) : (
                <MessageBubble sender="bot" text={msg.text} />
              )}
              
              {/* Follow-up chip */}
              {msg.followUp && (
                <div className="flex justify-start mb-4">
                  <FollowUpChip
                    text={`Where is ${msg.followUp}?`}
                    onClick={() => onFollowUpClick(`Where is ${msg.followUp}`)}
                  />
                </div>
              )}
            </div>
          );
        })}
        
        {loading && <TypingIndicator />}
        
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}
