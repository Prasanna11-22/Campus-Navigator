import React from 'react';

export default function PlaceCard({ title, location, guidance, mapUrl }) {
  return (
    <div className="bg-slate-900/80 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border-2 border-cyan-400/30 max-w-sm transform hover:scale-105 transition-all duration-300 dark" style={{boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'}}>
      {/* Header */}
      <div className="relative p-5 bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-30 blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 text-5xl opacity-15 transform -rotate-12">📍</div>
        <h3 className="relative text-white font-bold text-lg drop-shadow-lg">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Location */}
        <div className="flex items-start gap-3 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 backdrop-blur-sm p-3 rounded-xl border border-cyan-400/20">
          <svg className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="text-xs text-cyan-300 font-bold uppercase tracking-wide">Location</p>
            <p className="text-sm text-gray-200 font-semibold">{location}</p>
          </div>
        </div>
        
        {/* Guidance */}
        <div className="flex items-start gap-3 bg-gradient-to-r from-sky-500/15 to-cyan-500/15 backdrop-blur-sm p-3 rounded-xl border border-sky-400/20">
          <svg className="w-6 h-6 text-sky-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <div>
            <p className="text-xs text-sky-300 font-bold uppercase tracking-wide">How to reach</p>
            <p className="text-sm text-gray-200 font-medium whitespace-pre-line leading-relaxed">{guidance}</p>
          </div>
        </div>
      </div>
      
      {/* Map Button */}
      {mapUrl && (
        <div className="p-4 pt-0">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white py-3 rounded-xl transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            style={{boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)'}}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>View on Map</span>
          </a>
        </div>
      )}
    </div>
  );
}
