import Link from 'next/link';
import React from 'react';

function Section() {
  return (
    <div className="mt-5 bg-blue-50">
      <div className="flex flex-col items-center py-16">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-blue-800 mb-10">
          Calculate Your Water Footprint
        </h1>

        {/* Grid Layout for the sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 max-w-7xl">
          {/* Section for Hindi */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">English</h3>
            <p className="text-gray-600 text-center mb-6">
              Calculate your water footprint in English.
            </p>
            <Link href="#">
              <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Go to English Page
              </button>
            </Link>
          </div>

          {/* Section for Marathi */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Hindi</h3>
            <p className="text-gray-600 text-center mb-6">
              Calculate your water footprint in Hindi.
            </p>
            <Link href="#">
              <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Go to Hindi Page
              </button>
            </Link>
          </div>

          {/* Section for English */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Marathi</h3>
            <p className="text-gray-600 text-center mb-6">
              Calculate your water footprint in Marathi.
            </p>
            <Link href="#">
              <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Go to Marathi Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
