import React from 'react';

const labs = [
  { 
    name: 'Operating Systems Lab',
    code: 'OS LAB',
    block: 'C',
    room: 'K12',
    floor: '2nd Floor',
    capacity: '60 students',
    facilities: ['60 Computers', 'Projector', 'AC', 'Linux & Windows'],
    icon: '💻',
    color: 'from-cyan-400 to-sky-400'
  },
  { 
    name: 'Database Management Lab',
    code: 'DBMS LAB',
    block: 'C',
    room: 'L23',
    floor: '1st Floor',
    capacity: '50 students',
    facilities: ['50 Computers', 'MySQL Server', 'Oracle DB', 'AC'],
    icon: '🗄️',
    color: 'from-teal-400 to-cyan-400'
  },
  { 
    name: 'Computer Networks Lab',
    code: 'CN LAB',
    block: 'C',
    room: 'M15',
    floor: 'Ground Floor',
    capacity: '55 students',
    facilities: ['Network Equipment', 'Cisco Tools', 'Servers', 'AC'],
    icon: '🌐',
    color: 'from-sky-400 to-cyan-400'
  },
  { 
    name: 'AI & Machine Learning Lab',
    code: 'AI LAB',
    block: 'C',
    room: 'N10',
    floor: '3rd Floor',
    capacity: '40 students',
    facilities: ['GPU Workstations', 'Python', 'TensorFlow', 'Jupyter'],
    icon: '🤖',
    color: 'from-cyan-400 to-teal-400'
  },
  { 
    name: 'Data Structures Lab',
    code: 'DS LAB',
    block: 'C',
    room: 'P20',
    floor: '2nd Floor',
    capacity: '60 students',
    facilities: ['60 Computers', 'C/C++ IDE', 'Debugging Tools'],
    icon: '📊',
    color: 'from-sky-400 to-blue-400'
  },
  { 
    name: 'Web Technology Lab',
    code: 'WT LAB',
    block: 'C',
    room: 'Q18',
    floor: '1st Floor',
    capacity: '50 students',
    facilities: ['Modern Browsers', 'VS Code', 'Node.js', 'React Setup'],
    icon: '🌍',
    color: 'from-teal-400 to-sky-400'
  },
  {
    name: 'Electronics Lab',
    code: 'ELEC LAB',
    block: 'E',
    room: 'R05',
    floor: 'Ground Floor',
    capacity: '45 students',
    facilities: ['Multimeters', 'Oscilloscopes', 'Signal Generators', 'Breadboards'],
    icon: '⚡',
    color: 'from-cyan-500 to-sky-500'
  },
  {
    name: 'Digital Electronics Lab',
    code: 'DIGITAL LAB',
    block: 'E',
    room: 'R06',
    floor: '1st Floor',
    capacity: '48 students',
    facilities: ['Logic Analyzers', 'FPGA Boards', 'Programmers', 'Training Kits'],
    icon: '🔌',
    color: 'from-sky-500 to-cyan-500'
  },
  {
    name: 'Microprocessors & Microcontrollers Lab',
    code: 'MICRO LAB',
    block: 'E',
    room: 'R07',
    floor: '2nd Floor',
    capacity: '50 students',
    facilities: ['8051/ARM Kits', 'Assembly Tools', 'Programmers', 'Debuggers'],
    icon: '🎛️',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    name: 'Power Electronics Lab',
    code: 'POWER LAB',
    block: 'E',
    room: 'R08',
    floor: '3rd Floor',
    capacity: '40 students',
    facilities: ['Power Supply Units', 'Rectifiers', 'Inverters', 'Oscilloscopes'],
    icon: '⚙️',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    name: 'Civil Engineering Materials Lab',
    code: 'MAT LAB',
    block: 'D',
    room: 'S10',
    floor: 'Ground Floor',
    capacity: '30 students',
    facilities: ['Testing Machines', 'Compression Tester', 'Tensile Tester', 'Balance'],
    icon: '🧪',
    color: 'from-sky-400 to-teal-400'
  },
  {
    name: 'Structural Analysis Lab',
    code: 'STRUCT LAB',
    block: 'D',
    room: 'S11',
    floor: '1st Floor',
    capacity: '35 students',
    facilities: ['Load Testing Equipment', 'Strain Gauges', 'Data Logger', 'Software'],
    icon: '🏗️',
    color: 'from-slate-400 to-gray-400'
  },
  {
    name: 'Soil Mechanics Lab',
    code: 'SOIL LAB',
    block: 'D',
    room: 'S12',
    floor: '2nd Floor',
    capacity: '32 students',
    facilities: ['Triaxial Cell', 'Consolidation Apparatus', 'Sieve Analysis Kit', 'Proctor Apparatus'],
    icon: '🌍',
    color: 'from-cyan-600 to-teal-600'
  },
  {
    name: 'Mechanical Workshop',
    code: 'WORKSHOP',
    block: 'M',
    room: 'T01',
    floor: 'Ground Floor',
    capacity: '25 students',
    facilities: ['Lathe Machine', 'Milling Machine', 'Shaper', 'Drilling Machine'],
    icon: '🔧',
    color: 'from-teal-600 to-sky-600'
  },
  {
    name: 'Thermodynamics Lab',
    code: 'THERMO LAB',
    block: 'M',
    room: 'T02',
    floor: '1st Floor',
    capacity: '40 students',
    facilities: ['Boiler Unit', 'Calorimeter', 'Thermal Analyzer', 'Pressure Gauge'],
    icon: '🌡️',
    color: 'from-sky-500 to-cyan-500'
  },
  {
    name: 'Fluid Mechanics Lab',
    code: 'FLUID LAB',
    block: 'M',
    room: 'T03',
    floor: '2nd Floor',
    capacity: '38 students',
    facilities: ['Flow Meters', 'Hydraulic Bench', 'Pump Unit', 'Manometers'],
    icon: '💧',
    color: 'from-cyan-600 to-sky-600'
  },
];

export default function LabsPage({ setActiveTab }) {
  const blockCoordinates = {
    'C': '10.879015,77.020482',
    'D': '10.879215,77.021549',
    'E': '10.877071,77.020843',
    'M': '10.8802599,77.0209488'
  };

  const handleGetDirections = (blockLetter) => {
    // Open Google Maps in a new tab
    const coordinates = blockCoordinates[blockLetter];
    if (coordinates) {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordinates)}`;
      window.open(mapUrl, '_blank');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-6 overflow-hidden">
      {/* Cool glow background overlay */}
      <div 
        className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.2) 0%, transparent 70%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
            Computer Labs
          </h1>
          <p className="text-gray-300">
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
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center text-white">
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
                <button 
                  onClick={() => handleGetDirections(lab.block)}
                  className={`w-full py-3 rounded-lg bg-gradient-to-r ${lab.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
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
