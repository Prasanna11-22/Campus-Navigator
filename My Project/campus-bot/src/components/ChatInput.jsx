import React from 'react';

export default function ChatInput({ value, onChange, onSend, disabled }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };
  
  return (
    <div className="border-t-2 border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-2 md:pt-3 pb-2 md:pb-3 px-2 md:px-4 shadow-2xl dark" style={{boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'}}>
      <div className="max-w-4xl mx-auto flex gap-2 md:gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask in any language..."
            disabled={disabled}
            className="w-full px-3 md:px-6 py-2 md:py-4 border-2 border-cyan-400/30 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-400 bg-slate-800 text-gray-100 placeholder-gray-500 disabled:opacity-50 transition-all duration-300 shadow-lg text-sm md:text-base"
          />
          {value.length > 0 && (
            <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-xs md:text-sm font-medium">
              {value.length}
            </div>
          )}
        </div>
        <button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="px-3 md:px-6 lg:px-8 py-2 md:py-4 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 hover:from-cyan-500 hover:via-sky-500 hover:to-teal-500 text-white rounded-xl md:rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 md:gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95"
          style={{boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)'}}
        >
          <span className="hidden sm:inline text-sm md:text-base">Send</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
