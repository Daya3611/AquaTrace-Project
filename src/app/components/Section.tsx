import { InputIcon, MagnifyingGlassIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';


function Section() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 mt-7">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-medium text-indigo-600">How It Works</h3>
        <h2 className="text-4xl font-bold text-gray-800">3 Easy Steps</h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Step 1: Input the Data */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
            <InputIcon className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Input the data</h3>
          <p className="text-gray-600">
            Users provide object descriptions or images. Multilingual text input or image recognition is used.
          </p>
        </div>

        {/* Step 2: Calculation */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
            <MagnifyingGlassIcon className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Calculation</h3>
          <p className="text-gray-600">
            AI interprets the input and matches it with water footprint data. Water footprint is calculated for the specified object.
          </p>
        </div>

        {/* Step 3: Presentation */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
            <PaperPlaneIcon className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Presentation</h3>
          <p className="text-gray-600">
            Results are displayed to users with proper illustration.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Section;
