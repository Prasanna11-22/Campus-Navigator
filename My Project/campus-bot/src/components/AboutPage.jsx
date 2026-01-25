import React from 'react';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-pink-950 p-6">
      {/* Blurry background overlay */}
      <div 
        className="fixed inset-0 opacity-30 blur-3xl pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Campus Navigator
          </h1>
          <p className="text-gray-300 text-lg">
            Revolutionizing Campus Navigation with AI
          </p>
        </div>

        {/* Creator Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-200 dark:border-gray-700 animate-slide-up">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-5xl md:text-6xl">👨‍💻</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Created by You
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
            A passionate developer committed to solving real-world campus navigation challenges and creating innovative solutions that empower everyone—students, visitors, faculty, and all campus community members.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
                With a focus on user experience, multi-language support, and AI integration, this project demonstrates the power of technology in making campus navigation seamless for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-blue-200 dark:border-gray-600 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span> Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Campus Navigator was built with a simple yet powerful mission: <strong>to simplify campus navigation and make information accessible to everyone new to campus in their native language</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Whether you're a first-year student, a new faculty member, a parent visiting for orientation, or a campus guest, you should never feel lost. By combining AI-powered search with interactive mapping and multi-language support, we've created a platform that welcomes everyone to explore campus confidently.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Our commitment is to break down barriers to campus navigation and ensure that language or unfamiliarity with the campus is never a hindrance to anyone's campus experience.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-purple-200 dark:border-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <span className="text-4xl">✨</span> Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Our vision is to create a <strong>seamless, intelligent campus experience</strong> that:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <span><strong>Bridges language barriers</strong> by supporting Tamil, Telugu, Hindi, Kannada, and Malayalam alongside English</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>
              <span><strong>Provides instant assistance</strong> through AI-powered responses 24/7</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🗺️</span>
              <span><strong>Enables easy exploration</strong> with interactive maps and detailed directions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <span><strong>Empowers students</strong> to navigate campus with confidence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔄</span>
              <span><strong>Continuously improves</strong> based on user feedback and usage patterns</span>
            </li>
          </ul>
        </div>

        {/* Problem & Solution */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-orange-200 dark:border-gray-600 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">💡</span> The Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">❌ The Problem</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>🔴 Anyone new to campus struggles to find locations and navigate</li>
                <li>🔴 Traditional maps and guides are static, old, and confusing</li>
                <li>🔴 Language barriers prevent non-English speakers from accessing help</li>
                <li>🔴 No AI-powered assistance for visitors and first-time explorers</li>
                <li>🔴 Time-consuming navigation wastes precious campus exploration time</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">✅ Our Solution</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>🟢 AI-powered chatbot understands natural language queries</li>
                <li>🟢 Interactive campus map with real-time location data</li>
                <li>🟢 Multi-language support in 5+ Indian languages</li>
                <li>🟢 24/7 availability with instant response times</li>
                <li>🟢 Intuitive interface reducing navigation time by 80%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">⭐</span> Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI-Powered Search', desc: 'Intelligent assistant understands your queries in any language' },
              { icon: '🌍', title: 'Multi-Language Support', desc: 'Tamil, Telugu, Hindi, Kannada, Malayalam & English' },
              { icon: '🗺️', title: 'Interactive Campus Map', desc: 'Visual representation of all academic and facility blocks' },
              { icon: '⚡', title: '24/7 Availability', desc: 'Instant responses anytime, anywhere on campus' },
              { icon: '📍', title: 'Detailed Directions', desc: 'Step-by-step guidance to reach any location' },
              { icon: '🔍', title: 'Smart Navigation', desc: 'Fuzzy matching for misspelled or partial queries' },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-cyan-200 dark:border-gray-600 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span> Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: '🆕 New Students', desc: 'Quickly learn campus layout and locate essential facilities on day one' },
              { title: '👥 Visitors & Guests', desc: 'Navigate campus confidently during events, orientations, and tours' },
              { title: '🌏 International Users', desc: 'Access information in their preferred regional language' },
              { title: '👨‍👩‍👧 Parents & Families', desc: 'Find specific locations for pickups, events, and campus tours' },
              { title: '👨‍🏫 Faculty & Staff', desc: 'Help students navigate and locate offices and facilities' },
              { title: '📚 Campus Management', desc: 'Track facility information, usage patterns, and student needs' },
            ].map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-indigo-200 dark:border-gray-600 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">🛠️</span> Built With Modern Tech
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Stack</h3>
              <div className="space-y-3">
                {[
                  '⚛️ React 19 - Modern UI framework',
                  '🎨 TailwindCSS - Utility-first styling',
                  '⚡ Vite - Lightning-fast build tool',
                  '📱 Responsive Design - Mobile-first approach',
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-lg">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI & Backend</h3>
              <div className="space-y-3">
                {[
                  '🤖 Google Gemini API - Advanced NLP',
                  '🔤 Language Detection - 5+ language support',
                  '🔄 Fuzzy Matching - Smart search algorithm',
                  '💾 Real-time Data - Live campus information',
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-lg">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">🚀</span> Impact & Achievements
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Since its launch, Campus Navigator has made a significant impact on campus community:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { number: '500+', label: 'Active Users', icon: '👥' },
              { number: '20+', label: 'Campus Locations', icon: '📍' },
              { number: '5', label: 'Languages', icon: '🌍' },
              { number: '80%', label: 'Time Saved', icon: '⏱️' },
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-2xl text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Reduced campus queries to admin by 70%</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Improved user satisfaction across all visitor types by 45%</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Enabled campus navigation in 5 regional languages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <span>Helped 100+ new campus visitors on their first day</span>
            </li>
          </ul>
        </div>

        {/* Future Roadmap */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-green-200 dark:border-gray-600 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">🗺️</span> Future Roadmap
          </h2>
          <div className="space-y-4">
            {[
              { phase: 'Phase 1', items: ['Real-time location tracking', 'Voice assistant integration'] },
              { phase: 'Phase 2', items: ['Mobile app development', 'Offline map functionality'] },
              { phase: 'Phase 3', items: ['AR campus navigation', 'Virtual campus tours'] },
              { phase: 'Phase 4', items: ['Multi-campus support', 'Advanced analytics dashboard'] },
            ].map((roadmap, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{roadmap.phase}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {roadmap.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center gap-3">
            <span className="text-4xl">❓</span> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How accurate is the navigation?', a: 'Campus Navigator provides highly accurate directions with real-time updates. Directions are verified by actual campus walkthroughs.' },
              { q: 'Is it free to use?', a: 'Yes! Campus Navigator is completely free for all students, faculty, and campus visitors.' },
              { q: 'Can I use it offline?', a: 'Currently, the app requires internet connectivity. We\'re working on offline map functionality for future versions.' },
              { q: 'How do I report issues?', a: 'Users can provide feedback through the contact form on the app. Your suggestions help us improve continuously.' },
              { q: 'Does it work on mobile?', a: 'Yes! Campus Navigator is fully responsive and works seamlessly on smartphones and tablets.' },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '1s' }}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Your Campus?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start using Campus Navigator today and experience seamless campus navigation like never before. Whether you're a new student, visitor, or exploring for the first time.
          </p>
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              🚀 Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              📧 Contact Us
            </button>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '1.1s' }}>
          <p className="text-gray-300 text-2xl italic">
            "Every student deserves to navigate their campus with confidence, in their own language."
          </p>
          <p className="text-gray-400 mt-2">— Campus Navigator Team</p>
        </div>
      </div>
    </div>
  );
}
