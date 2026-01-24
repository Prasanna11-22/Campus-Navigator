import React from 'react';

export default function HomePage({ onGetStarted }) {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto custom-scrollbar">
      {/* Blurry Background Images - Full Screen */}
      <div className="absolute inset-0 z-0">
        {/* Multiple layered backgrounds for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_#0E5C9A_0%,_#AB47BC_30%,_#F18835_65%,_#607D8B_100%)] opacity-90"></div>
        {/* Soft overlay for legibility */}
        <div className="absolute inset-0 bg-black/18"></div>
        <div 
          className="absolute inset-0 opacity-30 blur-3xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0E5C9A] rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#AB47BC] rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#607D8B] rounded-full mix-blend-multiply filter blur-3xl opacity-16 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content - Scrollable Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="flex flex-col min-h-screen items-center justify-center">
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-2xl animate-slide-up">
              <span className="text-2xl">🎓</span>
              <span className="font-semibold">AI-Powered Campus Navigation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Explore Your
              <span className="block bg-[linear-gradient(90deg,_#ffffff_0%,_#F9D7A8_35%,_#F18835_65%,_#AB47BC_100%)] bg-clip-text text-transparent filter drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                Campus World
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Navigate easily around the campus with AI-powered assistance in your native language
            </p>

            {/* CTA Button - Now Properly Positioned */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={onGetStarted}
                className="group relative px-10 py-5 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,_#0E5C9A_0%,_#AB47BC_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        <div className="py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {[
              { icon: '🗺️', title: 'Smart Navigation', desc: 'AI-powered directions' },
              { icon: '🌍', title: 'Multi-Language', desc: 'Tamil, Hindi, Telugu & more' },
              { icon: '⚡', title: 'Instant Answers', desc: 'Real-time assistance' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div id="why-choose" className="py-20 bg-black/20 rounded-3xl mx-6 px-8 backdrop-blur-sm border border-white/10 animate-slide-up scroll-mt-20" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Campus Navigator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <span className="text-2xl">✨</span> Smart AI Integration
              </h3>
              <p className="text-white/80">Get instant answers powered by advanced AI technology</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <span className="text-2xl">🌐</span> Multiple Languages
              </h3>
              <p className="text-white/80">Support for Tamil, Hindi, Telugu, Kannada, Malayalam & English</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <span className="text-2xl">🗺️</span> Campus Mapping
              </h3>
              <p className="text-white/80">Explore your campus with interactive maps and directions</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <span className="text-2xl">⚡</span> Real-Time Assistance
              </h3>
              <p className="text-white/80">24/7 availability with instant response to your queries</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to explore?</h2>
          <button
            onClick={onGetStarted}
            className="group relative px-12 py-6 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden animate-slide-up"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(120deg,_#0E5C9A_0%,_#AB47BC_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
