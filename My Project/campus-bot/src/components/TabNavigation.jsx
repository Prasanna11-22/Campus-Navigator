import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'navigator', name: 'Navigator', icon: '🧭', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'labs', name: 'Labs', icon: '🔬', gradient: 'from-purple-500 to-pink-500' },
    { id: 'departments', name: 'Departments', icon: '🏛️', gradient: 'from-orange-500 to-red-500' },
    { id: 'facilities', name: 'Facilities', icon: '🏢', gradient: 'from-green-500 to-emerald-500' },
    { id: 'map', name: 'Campus Map', icon: '🗺️', gradient: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-105`
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
