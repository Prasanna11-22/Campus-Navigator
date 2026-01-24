import React from 'react';

export default function PlaceCard({ title, location, guidance, mapUrl }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 max-w-sm">
      {/* Header */}
      <div className="relative p-4 bg-[linear-gradient(115deg,_#0E5C9A_0%,_#AB47BC_100%)]">
        <div className="absolute inset-0 bg-black/10"></div>
        <h3 className="relative text-white font-semibold text-lg drop-shadow-sm">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Location */}
        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Location</p>
            <p className="text-sm text-gray-800 dark:text-gray-200">{location}</p>
          </div>
        </div>
        
        {/* Guidance */}
        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">How to reach</p>
            <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{guidance}</p>
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
            className="flex items-center justify-center gap-2 w-full bg-primary-light hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-light text-white py-2.5 rounded-lg transition-colors font-medium"
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
