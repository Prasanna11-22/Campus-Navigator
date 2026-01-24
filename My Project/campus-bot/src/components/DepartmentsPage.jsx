import React from 'react';

const departments = [
  {
    name: 'Computer Science & Engineering',
    code: 'CSE',
    block: 'Block A',
    icon: '💻',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    faculty: 25,
    labs: 8,
    students: 240,
    hod: 'Dr. Rajesh Kumar',
    programs: ['B.Tech CSE', 'M.Tech CSE', 'Ph.D'],
  },
  {
    name: 'Electronics & Communication',
    code: 'ECE',
    block: 'Block B',
    icon: '⚡',
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    faculty: 20,
    labs: 6,
    students: 200,
    hod: 'Dr. Priya Sharma',
    programs: ['B.Tech ECE', 'M.Tech VLSI'],
  },
  {
    name: 'Mechanical Engineering',
    code: 'MECH',
    block: 'Block C',
    icon: '⚙️',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
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
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    faculty: 15,
    labs: 5,
    students: 150,
    hod: 'Dr. Sunita Reddy',
    programs: ['B.Tech Civil', 'M.Tech Structural'],
  },
  {
    name: 'Information Technology',
    code: 'IT',
    block: 'Block E',
    icon: '🌐',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    faculty: 22,
    labs: 7,
    students: 220,
    hod: 'Dr. Vikram Singh',
    programs: ['B.Tech IT', 'M.Tech IT'],
  },
  {
    name: 'Artificial Intelligence & ML',
    code: 'AI/ML',
    block: 'Block F',
    icon: '🤖',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    faculty: 12,
    labs: 4,
    students: 120,
    hod: 'Dr. Neha Gupta',
    programs: ['B.Tech AI/ML', 'M.Tech AI'],
  },
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Academic Departments
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Excellence in Education & Research
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 dark:border-gray-700 hover:border-transparent animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Location</p>
                    <p className="font-bold text-gray-800 dark:text-white">{dept.block}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Head of Dept</p>
                    <p className="font-bold text-gray-800 dark:text-white text-sm">{dept.hod}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-around py-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{dept.faculty}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Faculty</p>
                  </div>
                  <div className="w-px bg-gray-300 dark:bg-gray-600"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{dept.labs}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Labs</p>
                  </div>
                  <div className="w-px bg-gray-300 dark:bg-gray-600"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{dept.programs.length}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Programs</p>
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
