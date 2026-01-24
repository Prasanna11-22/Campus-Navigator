import React, { useState } from 'react';

export default function Header({ darkMode, setDarkMode, onHome, onFeatures, isHome }) {
  const [showMenu, setShowMenu] = useState(false);
  const gradient = 'linear-gradient(120deg, #0E5C9A 0%, #AB47BC 35%, #F18835 70%, #607D8B 100%)';

  return (
    <header className="text-white shadow-2xl relative overflow-hidden sticky top-0 z-50 bg-transparent dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Gradient base layer with adjustable blend on home */}
      <div
        className="absolute inset-0"
        style={{ background: gradient, opacity: isHome ? 0.78 : 1 }}
      ></div>
      {/* Animated overlay for depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-gradient bg-[length:200%_200%]" style={{ background: gradient }}></div>
      </div>
      {/* Subtle dark veil for contrast */}
      <div className="absolute inset-0" style={{ background: isHome ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.12)' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="hidden sm:block hover:opacity-80 transition-opacity">
              <h1 className="text-xl font-bold drop-shadow-lg">Campus Navigator</h1>
              <p className="text-xs text-white/70 font-medium">AI Campus Guide</p>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={onHome}
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm"
            >
              Home
            </button>
            <button 
              onClick={onFeatures}
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm"
            >
              Features
            </button>
            <button className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm">
              About
            </button>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 hidden sm:flex items-center justify-center" title="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 group flex items-center justify-center"
              aria-label="Toggle theme"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 md:hidden flex items-center justify-center"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMenu && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-3">
            <button 
              onClick={() => {
                onHome();
                setShowMenu(false);
              }}
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm text-left"
            >
              Home
            </button>
            <button 
              onClick={() => {
                onFeatures();
                setShowMenu(false);
              }}
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm text-left"
            >
              Features
            </button>
            <button className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm text-left">
              About
            </button>
          </nav>
        )}
      </div>
      
      {/* Bottom Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, #0E5C9A 0%, #AB47BC 33%, #F18835 66%, #607D8B 100%)', opacity: isHome ? 0.6 : 0.8 }}
      ></div>
    </header>
  );
}
