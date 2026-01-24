import React from 'react';

const labs = [
  { 
    name: 'Operating Systems Lab',
    code: 'OS LAB',
    block: 'J',
    room: 'K12',
    floor: '2nd Floor',
    capacity: '60 students',
    facilities: ['60 Computers', 'Projector', 'AC', 'Linux & Windows'],
    icon: '💻',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Database Management Lab',
    code: 'DBMS LAB',
    block: 'H',
    room: 'L23',
    floor: '1st Floor',
    capacity: '50 students',
    facilities: ['50 Computers', 'MySQL Server', 'Oracle DB', 'AC'],
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    name: 'Computer Networks Lab',
    code: 'CN LAB',
    block: 'G',
    room: 'M15',
    floor: 'Ground Floor',
    capacity: '55 students',
    facilities: ['Network Equipment', 'Cisco Tools', 'Servers', 'AC'],
    icon: '🌐',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'AI & Machine Learning Lab',
    code: 'AI LAB',
    block: 'F',
    room: 'N10',
    floor: '3rd Floor',
    capacity: '40 students',
    facilities: ['GPU Workstations', 'Python', 'TensorFlow', 'Jupyter'],
    icon: '🤖',
    color: 'from-orange-500 to-red-500'
  },
  { 
    name: 'Data Structures Lab',
    code: 'DS LAB',
    block: 'E',
    room: 'P20',
    floor: '2nd Floor',
    capacity: '60 students',
    facilities: ['60 Computers', 'C/C++ IDE', 'Debugging Tools'],
    icon: '📊',
    color: 'from-indigo-500 to-purple-500'
  },
  { 
    name: 'Web Technology Lab',
    code: 'WT LAB',
    block: 'D',
    room: 'Q18',
    floor: '1st Floor',
    capacity: '50 students',
    facilities: ['Modern Browsers', 'VS Code', 'Node.js', 'React Setup'],
    icon: '🌍',
    color: 'from-pink-500 to-rose-500'
  },
];

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Computer Labs
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            State-of-the-art laboratories equipped with modern technology
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${lab.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-8xl opacity-10 transform rotate-12">
                  {lab.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-4xl mb-2">{lab.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{lab.name}</h3>
                  <p className="text-sm opacity-90">{lab.code}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Location */}
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-semibold">Block {lab.block}, Room {lab.room}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{lab.floor}</p>
                  </div>
                </div>

                {/* Capacity */}
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    👥
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Capacity</p>
                    <p className="font-semibold">{lab.capacity}</p>
                  </div>
                </div>

                {/* Facilities */}
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Facilities</p>
                  <div className="flex flex-wrap gap-2">
                    {lab.facilities.map((facility, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${lab.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  View Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
