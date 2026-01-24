import React from 'react';

export default function ChatInput({ value, onChange, onSend, disabled }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };
  
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-2xl">
      <div className="max-w-4xl mx-auto flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask in any language..."
            disabled={disabled}
            className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 dark:focus:ring-purple-400/30 dark:focus:border-purple-400 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50 transition-all duration-300 shadow-lg"
          />
          {value.length > 0 && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm font-medium">
              {value.length}
            </div>
          )}
        </div>
        <button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95"
        >
          <span className="hidden sm:inline">Send</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
