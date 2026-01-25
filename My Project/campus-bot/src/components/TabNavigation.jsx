import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'navigator', name: 'Navigator', icon: '🧭', gradient: 'from-cyan-500 to-sky-500' },
    { id: 'labs', name: 'Labs', icon: '🔬', gradient: 'from-sky-500 to-cyan-500' },
    { id: 'departments', name: 'Departments', icon: '🏛️', gradient: 'from-teal-500 to-cyan-500' },
    { id: 'facilities', name: 'Facilities', icon: '🏢', gradient: 'from-cyan-500 to-teal-500' },
    { id: 'map', name: 'Campus Map', icon: '🗺️', gradient: 'from-sky-500 to-teal-500' },
  ];

  return (
    <nav className="relative z-40 bg-gradient-to-r from-cyan-600/10 via-sky-600/10 to-teal-600/10 shadow-lg border-b border-cyan-500/30 backdrop-blur-md dark overflow-x-auto scrollbar-hide" style={{boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-nowrap gap-2 py-3 overflow-x-auto scrollbar-hide min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-105`
                  : 'text-gray-400 hover:bg-slate-800 hover:text-gray-300'
                }
              `}
              style={activeTab === tab.id ? {boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'} : {}}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
