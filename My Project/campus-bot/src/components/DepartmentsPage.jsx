import React from 'react';

const departments = [
  {
    name: 'Science & Humanities',
    code: 'S&H',
    block: 'Block A',
    icon: '📚',
    gradient: 'from-cyan-400 via-sky-400 to-blue-400',
    faculty: 20,
    labs: 3,
    students: 150,
    hod: 'Dr. Prakash Kumar',
    programs: ['B.Sc Science', 'B.A Humanities', 'Diploma'],
  },
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    block: 'Block C',
    icon: '💻',
    gradient: 'from-sky-400 via-cyan-400 to-teal-400',
    faculty: 25,
    labs: 8,
    students: 240,
    hod: 'Dr. Rajesh Kumar',
    programs: ['B.Tech CSE', 'M.Tech CSE', 'Ph.D'],
  },
  {
    name: 'Information Technology',
    code: 'IT',
    block: 'Block C',
    icon: '🌐',
    gradient: 'from-teal-400 via-cyan-400 to-sky-400',
    faculty: 22,
    labs: 7,
    students: 220,
    hod: 'Dr. Vikram Singh',
    programs: ['B.Tech IT', 'M.Tech IT'],
  },
  {
    name: 'Electronics & Communication',
    code: 'ECE',
    block: 'Block E',
    icon: '⚡',
    gradient: 'from-cyan-400 via-teal-400 to-sky-400',
    faculty: 20,
    labs: 6,
    students: 200,
    hod: 'Dr. Priya Sharma',
    programs: ['B.Tech ECE', 'M.Tech VLSI'],
  },
  {
    name: 'Electrical & Electronics',
    code: 'EEE',
    block: 'Block E',
    icon: '🔌',
    gradient: 'from-sky-400 via-blue-400 to-cyan-400',
    faculty: 18,
    labs: 5,
    students: 180,
    hod: 'Dr. Suresh Babu',
    programs: ['B.Tech EEE', 'M.Tech Power Systems'],
  },
  {
    name: 'VLSI & Embedded Systems',
    code: 'VLSI',
    block: 'Block E',
    icon: '🔧',
    gradient: 'from-teal-400 via-sky-400 to-cyan-400',
    faculty: 12,
    labs: 4,
    students: 100,
    hod: 'Dr. Anand Nair',
    programs: ['M.Tech VLSI', 'B.Tech specialization'],
  },
  {
    name: 'Cyber Security',
    code: 'CYBER',
    block: 'Block E',
    icon: '🔐',
    gradient: 'from-cyan-500 via-sky-500 to-blue-500',
    faculty: 10,
    labs: 3,
    students: 80,
    hod: 'Dr. Ravi Teja',
    programs: ['M.Tech Cyber Security', 'Certificate courses'],
  },
  {
    name: 'Mechanical Engineering',
    code: 'MECH',
    block: 'Block M',
    icon: '⚙️',
    gradient: 'from-sky-500 via-cyan-500 to-teal-500',
    faculty: 18,
    labs: 7,
    students: 180,
    hod: 'Dr. Arun Patel',
    programs: ['B.Tech Mech', 'M.Tech CAD/CAM'],
  },
  {
    name: 'Civil Engineering',
    code: 'CIVIL',
    block: 'Block D',
    icon: '🏗️',
    gradient: 'from-teal-500 via-cyan-500 to-sky-500',
    faculty: 15,
    labs: 5,
    students: 150,
    hod: 'Dr. Sunita Reddy',
    programs: ['B.Tech Civil', 'M.Tech Structural'],
  },
  {
    name: 'Artificial Intelligence & Data Science',
    code: 'AIDS',
    block: 'Block D',
    icon: '🤖',
    gradient: 'from-cyan-500 via-teal-500 to-sky-500',
    faculty: 14,
    labs: 4,
    students: 120,
    hod: 'Dr. Pradeep Singh',
    programs: ['B.Tech AIDS', 'M.Tech AI & DS', 'Ph.D'],
  },
  {
    name: 'MBA & Management',
    code: 'MBA',
    block: 'Block B',
    icon: '📊',
    gradient: 'from-sky-500 via-blue-500 to-cyan-500',
    faculty: 16,
    labs: 4,
    students: 200,
    hod: 'Dr. Anita Sharma',
    programs: ['MBA', 'PGDM', 'Executive MBA'],
  },
  {
    name: 'Master of Computer Applications',
    code: 'MCA',
    block: 'Block B',
    icon: '🎓',
    gradient: 'from-teal-500 via-sky-500 to-blue-500',
    faculty: 14,
    labs: 5,
    students: 120,
    hod: 'Dr. Deepak Verma',
    programs: ['MCA', 'M.Tech specialization'],
  },
];

export default function DepartmentsPage({ setActiveTab }) {
  const navigateToBlock = (block) => {
    if (setActiveTab) {
      setActiveTab('map');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-6 overflow-hidden dark">
      {/* Cool glow background overlay */}
      <div 
        className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.2) 0%, transparent 70%)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 bg-clip-text text-transparent mb-3">
            Academic Departments
          </h1>
          <p className="text-gray-300 text-lg">
            Excellence in Education & Research
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-cyan-400/30 hover:border-cyan-400/60 animate-slide-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s`, boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)' }}
            >
              {/* Header with animated gradient */}
              <div className={`bg-gradient-to-r ${dept.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r ${dept.gradient} animate-gradient bg-[length:200%_200%]"></div>
                <div className="relative z-10 flex items-center justify-between text-white">
                  <div>
                    <div className="text-6xl mb-2 animate-float">{dept.icon}</div>
                    <h2 className="text-2xl font-bold mb-1">{dept.name}</h2>
                    <p className="text-sm opacity-90 font-semibold">{dept.code} Department</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                      <p className="text-3xl font-bold">{dept.students}</p>
                      <p className="text-xs opacity-90">Students</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                {/* Location & HOD */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => navigateToBlock(dept.block)}
                    className="text-left bg-gradient-to-br from-cyan-500/20 to-sky-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer group"
                  >
                    <p className="text-xs text-cyan-300 mb-1">📍 Location</p>
                    <p className="font-bold text-gray-100 group-hover:text-cyan-300 transition-colors">{dept.block}</p>
                  </button>
                  <div className="bg-gradient-to-br from-sky-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-4 border border-sky-400/30">
                    <p className="text-xs text-sky-300 mb-1">Head of Dept</p>
                    <p className="font-bold text-gray-100 text-sm">{dept.hod}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-around py-4 bg-slate-700/30 backdrop-blur-sm rounded-xl border border-cyan-400/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-cyan-400">{dept.faculty}</p>
                    <p className="text-xs text-gray-400">Faculty</p>
                  </div>
                  <div className="w-px bg-cyan-400/20"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-sky-400">{dept.labs}</p>
                    <p className="text-xs text-gray-400">Labs</p>
                  </div>
                  <div className="w-px bg-cyan-400/20"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-teal-400">{dept.programs.length}</p>
                    <p className="text-xs text-gray-400">Programs</p>
                  </div>
                </div>

                {/* Programs */}
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-semibold">Programs Offered</p>
                  <div className="flex flex-wrap gap-2">
                    {dept.programs.map((program, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 bg-gradient-to-r ${dept.gradient} text-white rounded-full text-sm font-medium shadow-md`}
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${dept.gradient} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    View Details
                  </button>
                  <button className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
                    📍
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
