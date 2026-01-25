import React from 'react';

const facilities = [
  {
    name: 'Central Library',
    icon: '📚',
    gradient: 'from-cyan-600 to-sky-600',
    description: 'Modern library with digital resources and study areas',
    features: ['50,000+ Books', 'E-Library', 'Reading Rooms', 'Wi-Fi'],
    timing: '9:00 AM - 6:00 PM',
    location: 'Block L, Ground Floor',
    image: '🏛️'
  },
  {
    name: 'Sports Complex',
    icon: '⚽',
    gradient: 'from-sky-600 to-cyan-600',
    description: 'State-of-the-art sports facilities for all students',
    features: ['Cricket Ground', 'Basketball Court', 'Gym', 'Indoor Games'],
    timing: '6:00 AM - 8:00 PM',
    location: 'Sports Block',
    image: '🏃'
  },
  {
    name: 'Cafeteria',
    icon: '🍽️',
    gradient: 'from-teal-600 to-cyan-600',
    description: 'Hygienic food court with variety of cuisines',
    features: ['South Indian', 'North Indian', 'Snacks', 'Beverages'],
    timing: '8:00 AM - 7:00 PM',
    location: 'Block M, Ground Floor',
    image: '👨‍🍳'
  },
  {
    name: 'Auditorium',
    icon: '🎭',
    gradient: 'from-cyan-600 to-teal-600',
    description: 'Modern auditorium for events and seminars',
    features: ['500 Seating', 'AC', 'Audio System', 'Projector'],
    timing: 'Event Based',
    location: 'Main Block',
    image: '🎪'
  },
  {
    name: 'Medical Center',
    icon: '🏥',
    gradient: 'from-sky-600 to-teal-600',
    description: '24/7 medical facility with qualified doctors',
    features: ['First Aid', 'Doctor', 'Pharmacy', 'Ambulance'],
    timing: '24/7 Available',
    location: 'Block N',
    image: '⚕️'
  },
  {
    name: 'Innovation Lab',
    icon: '💡',
    gradient: 'from-teal-600 to-sky-600',
    description: 'Maker space for projects and innovation',
    features: ['3D Printer', 'Electronics', 'Robotics', 'IoT Kits'],
    timing: '9:00 AM - 6:00 PM',
    location: 'Block O, 3rd Floor',
    image: '🔧'
  },
  {
    name: 'Computer Center',
    icon: '💻',
    gradient: 'from-cyan-600 to-sky-600',
    description: 'Central computing facility with high-speed internet',
    features: ['100+ Systems', 'High-Speed Net', 'Printing', 'Scanning'],
    timing: '8:00 AM - 8:00 PM',
    location: 'Block P',
    image: '🖥️'
  },
  {
    name: 'Hostel',
    icon: '🏠',
    gradient: 'from-sky-600 to-cyan-600',
    description: 'Comfortable accommodation for students',
    features: ['Wi-Fi', 'Mess', 'Security', 'Recreation'],
    timing: '24/7',
    location: 'Hostel Block',
    image: '🛏️'
  },
];

export default function FacilitiesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 p-6 overflow-hidden dark">
      {/* Blurry background overlay */}
      <div 
        className="absolute inset-0 opacity-30 blur-3xl pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 text-center animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent mb-3">
            Campus Facilities
          </h1>
          <p className="text-gray-300 text-lg">
            World-class amenities for holistic development
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${facility.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4 text-6xl opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                  {facility.image}
                </div>
                <div className="relative z-10 p-4 text-white">
                  <div className="text-4xl mb-2 animate-float">{facility.icon}</div>
                  <h3 className="text-lg font-bold">{facility.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 min-h-[40px]">
                  {facility.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {facility.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Info Cards */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">⏰</span>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Timing</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{facility.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">📍</span>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{facility.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${facility.gradient} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm`}>
                  Get Directions
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
