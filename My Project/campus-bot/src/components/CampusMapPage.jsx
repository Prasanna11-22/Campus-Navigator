import React from 'react';

export default function CampusMapPage() {
  const blocks = [
    // Ordered to mirror campusData sequence
    { id: 'A', name: 'Science & Humanities', color: 'bg-blue-500', position: 'top-[20%] left-[12%]' },
    { id: 'B', name: 'MBA & MCA', color: 'bg-purple-500', position: 'top-[24%] left-[30%]' },
    { id: 'C', name: 'Computer Science & IT', color: 'bg-cyan-500', position: 'top-[32%] left-[50%]' },
    { id: 'D', name: 'Civil & AIDS', color: 'bg-green-500', position: 'top-[26%] left-[66%]' },
    { id: 'E', name: 'ECE / EEE / VLSI / Cyber', color: 'bg-pink-500', position: 'top-[78%] left-[26%]' },
    { id: 'M', name: 'Mechanical', color: 'bg-orange-500', position: 'top-[12%] left-[82%]' },
    // Extra campus points
    { id: 'G', name: 'CSE Labs', color: 'bg-indigo-500', position: 'top-[46%] left-[72%]' },
    { id: 'H', name: 'IT Labs', color: 'bg-teal-500', position: 'top-[72%] left-[10%]' },
    { id: 'L', name: 'Library', color: 'bg-yellow-500', position: 'top-[36%] left-[22%]' },
    { id: 'Sports', name: 'Sports Complex', color: 'bg-green-600', position: 'top-[64%] left-[72%]' },
    { id: 'F', name: 'Block F', color: 'bg-purple-600', position: 'top-[76%] left-[84%]' },
    { id: 'I', name: 'Block I', color: 'bg-purple-600', position: 'top-[76%] left-[92%]' },
    { id: 'J', name: 'Block J', color: 'bg-purple-600', position: 'top-[86%] left-[88%]' },
    { id: 'Café', name: 'Cafeteria', color: 'bg-red-500', position: 'top-[82%] left-[52%]' },
    { id: 'FC', name: 'Food Court', color: 'bg-rose-500', position: 'top-[40%] left-[58%]' },
    { id: 'PC', name: 'Placement Cell', color: 'bg-amber-500', position: 'top-[52%] left-[38%]' },
  ];

  const landmarks = [
    // Place main gate directly in front of Block A (entrance)
    { icon: '🚪', name: 'Main Gate', position: 'top-[0%] left-[4%]' },
    { icon: '🅿️', name: 'Parking', position: 'top-[14%] left-[-4%]' },
    // Store placed near auditorium area
    { icon: '🏪', name: 'Store', position: 'top-[44%] left-[80%]' },
    { icon: '🎭', name: 'Auditorium', position: 'top-[40%] left-[85%]' },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#0E5C9A11_0%,_#AB47BC11_30%,_#F1883511_65%,_#607D8B11_100%)] dark:from-gray-900 dark:via-[#0E5C9A] dark:to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold bg-[linear-gradient(90deg,_#0E5C9A_0%,_#AB47BC_33%,_#F18835_66%,_#607D8B_100%)] bg-clip-text text-transparent mb-3">
            Campus Map
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interactive campus layout and navigation
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-gray-200 dark:border-gray-700">
          {/* Map Canvas */}
          <div className="relative h-[600px] bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-4 border-dashed border-gray-300 dark:border-gray-500 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            {/* Roads */}
            <div className="absolute top-[15%] left-0 right-0 h-12 bg-gray-400 dark:bg-gray-600 opacity-30"></div>
            <div className="absolute top-[45%] left-0 right-0 h-12 bg-gray-400 dark:bg-gray-600 opacity-30"></div>
            <div className="absolute top-[70%] left-0 right-0 h-12 bg-gray-400 dark:bg-gray-600 opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-[25%] w-12 bg-gray-400 dark:bg-gray-600 opacity-30"></div>
            <div className="absolute top-0 bottom-0 left-[60%] w-12 bg-gray-400 dark:bg-gray-600 opacity-30"></div>

            {/* Blocks */}
            {blocks.map((block, index) => (
              <div
                key={block.id}
                className={`absolute ${block.position} transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-slide-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`${block.color} w-24 h-24 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-3`}>
                  <div className="text-3xl font-bold">{block.id}</div>
                  <div className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2 max-w-full overflow-hidden text-ellipsis">
                    {block.name}
                  </div>
                </div>
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                  {block.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            ))}

            {/* Landmarks */}
            {landmarks.map((landmark, index) => (
              <div
                key={index}
                className={`absolute ${landmark.position} transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                  {landmark.icon}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {landmark.name}
                </div>
              </div>
            ))}

            {/* Compass */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-xl flex items-center justify-center border-4 border-gray-300 dark:border-gray-600">
              <div className="text-3xl animate-spin" style={{ animationDuration: '20s' }}>
                🧭
              </div>
            </div>

            {/* Scale */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl px-4 py-2 border border-gray-300 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 bg-[linear-gradient(90deg,_#0E5C9A_0%,_#AB47BC_33%,_#F18835_66%,_#607D8B_100%)]"></div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">100m</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Academic Blocks</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sports & Recreation</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Facilities</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Departments</span>
            </div>
          </div>

          {/* Campus Location Button */}
          <div className="mt-6 text-center">
            <button className="px-8 py-4 bg-[linear-gradient(120deg,_#0E5C9A_0%,_#AB47BC_100%)] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:brightness-110 transform hover:scale-105 transition-all duration-300">
              📍 Campus Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
