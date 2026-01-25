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
    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-2 md:px-4 dark">
      {/* Cool glow pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 70%)'
        }}
      ></div>

      {/* Chat conversation area - centered responsive container */}
      <div className="relative z-10 w-full max-w-sm md:max-w-2xl lg:max-w-4xl max-h-[calc(100vh-250px)] md:max-h-[500px] bg-slate-900/60 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-cyan-400/25 flex flex-col overflow-hidden" style={{boxShadow: '0 0 40px rgba(6, 182, 212, 0.25)'}}>
        {/* Messages scrollable area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 lg:p-8 space-y-4">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border-2 border-cyan-400/30 max-w-md text-center" style={{boxShadow: '0 0 30px rgba(6, 182, 212, 0.15)'}}>
                {/* Animated background glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 via-teal-500/5 to-sky-500/5 blur-3xl -z-10 animate-pulse"></div>
                
                <div className="text-5xl md:text-6xl mb-4 animate-bounce">🎓</div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent mb-3">
                  Welcome to Campus Navigator
                </h2>
                <p className="text-gray-400 mb-6 text-base md:text-lg font-medium">
                  Ask me anything about campus locations, labs, or facilities
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="text-xs bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-md px-4 py-2 rounded-full text-cyan-200 border border-cyan-400/40 hover:border-cyan-300 transition-all" style={{boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)'}}>
                    Try: "Where is OS Lab?"
                  </div>
                  <div className="text-xs bg-gradient-to-r from-sky-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-2 rounded-full text-sky-200 border border-sky-400/40 hover:border-sky-300 transition-all" style={{boxShadow: '0 0 15px rgba(3, 174, 239, 0.2)'}}>
                    Try: "ஓஎஸ் லேப் எங்கே?"
                  </div>
                </div>
              </div>
            </div>
          )}

          {messages.map((msg, index) => {
            const placeData = msg.sender === 'bot' ? parsePlaceData(msg.text) : null;
            
            return (
              <div key={index} className="flex flex-col gap-2">
                {msg.sender === 'user' ? (
                  <MessageBubble sender="user" text={msg.text} />
                ) : placeData ? (
                  <div className="flex justify-start">
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
                  <div className="flex justify-start">
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
    </div>
  );
}
