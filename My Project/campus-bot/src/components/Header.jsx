import React, { useState } from 'react';

export default function Header({ onHome, onFeatures, onAbout, isHome }) {
  const [showMenu, setShowMenu] = useState(false);
  const gradient = 'linear-gradient(135deg, #0f172a 0%, #164e63 25%, #0e7490 50%, #06b6d4 75%, #0f172a 100%)';

  return (
    <header className="text-white shadow-2xl relative overflow-hidden sticky top-0 z-50 bg-slate-950 dark">
      {/* Cool glow gradient base layer */}
      <div
        className="absolute inset-0"
        style={{ background: gradient, opacity: 0.5 }}
      ></div>
      {/* Glow effect with blur */}
      <div className="absolute inset-0 opacity-25 blur-2xl" style={{ background: 'radial-gradient(ellipse at center, #06b6d4 0%, transparent 70%)' }}></div>
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-slate-950/40"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={onHome}>
            <img 
              src="/campus-logo.jpg.jpeg" 
              alt="Campus Navigator Logo" 
              className="w-12 h-12 drop-shadow-lg hover:scale-110 transition-transform duration-300 object-contain rounded-xl"
            />
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
            {isHome && (
              <button 
                onClick={onFeatures}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm"
              >
                Features
              </button>
            )}
            <button 
              onClick={onAbout}
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm"
            >
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
            {isHome && (
              <button 
                onClick={() => {
                  onFeatures();
                  setShowMenu(false);
                }}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm text-left"
              >
                Features
              </button>
            )}
            <button 
              onClick={() => {
                onAbout();
                setShowMenu(false);
              }}
              className="text-white/80 hover:text-white font-medium transition-colors duration-200 text-sm text-left"
            >
              About
            </button>
          </nav>
        )}
      </div>
      
      {/* Bottom Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 glow-cyan"
        style={{ background: 'linear-gradient(90deg, #06b6d4 0%, #0ea5e9 33%, #0369a1 66%, #164e63 100%)', opacity: isHome ? 0.6 : 0.8 }}
      ></div>
    </header>
  );
}
