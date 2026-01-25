import React from 'react';

export default function HomePage({ onGetStarted }) {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto custom-scrollbar dark">
      {/* Blurry Background Images - Full Screen */}
      <div className="absolute inset-0 z-0">
        {/* Cool dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 opacity-95"></div>
        {/* Soft overlay for legibility */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Floating cool glow shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content - Scrollable Section */}
      <div className="relative z-10 py-6 px-6">
        <div className="flex flex-col min-h-screen items-center justify-center">
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 backdrop-blur-md rounded-full border border-cyan-400/30 text-cyan-200 shadow-2xl animate-slide-up" style={{boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'}}>
              <span className="text-2xl">🎓</span>
              <span className="font-semibold">AI-Powered Campus Navigation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Explore Your
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent filter drop-shadow-[0_6px_18px_rgba(6,182,212,0.4)]">
                Campus World
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Navigate easily around the campus with AI-powered assistance in your native language
            </p>

            {/* CTA Button - Now Properly Positioned */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={onGetStarted}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                  Get Started
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Section - Below Hero */}
        <div className="py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {[
              { icon: '🗺️', title: 'Smart Navigation', desc: 'AI-powered directions' },
              { icon: '🌍', title: 'Multi-Language', desc: 'Tamil, Hindi, Telugu & more' },
              { icon: '⚡', title: 'Instant Answers', desc: 'Real-time assistance' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-cyan-500/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/30 hover:bg-cyan-500/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, boxShadow: '0 0 15px rgba(6, 182, 212, 0.15)' }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div id="why-choose" className="py-10 bg-slate-900/40 rounded-3xl mx-6 px-8 backdrop-blur-sm border border-cyan-400/30 animate-slide-up scroll-mt-20" style={{ animationDelay: '0.6s', boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)' }}>
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Campus Navigator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-3">
                <span className="text-2xl">✨</span> Smart AI Integration
              </h3>
              <p className="text-gray-400">Get instant answers powered by advanced AI technology</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-sky-300 flex items-center gap-3">
                <span className="text-2xl">🌐</span> Multiple Languages
              </h3>
              <p className="text-gray-400">Support for Tamil, Hindi, Telugu, Kannada, Malayalam & English</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-300 flex items-center gap-3">
                <span className="text-2xl">🗺️</span> Campus Mapping
              </h3>
              <p className="text-gray-400">Explore your campus with interactive maps and directions</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-3">
                <span className="text-2xl">⚡</span> Real-Time Assistance
              </h3>
              <p className="text-gray-400">24/7 availability with instant response to your queries</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="py-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to explore?</h2>
          <button
            onClick={onGetStarted}
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-slide-up"
            style={{ animationDelay: '0.8s', boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
              Start Now
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
