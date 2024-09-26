import Link from 'next/link';
import React from 'react';

function Translator() {
  return (
    <div className='flex justify-center mt-6 space-x-4'>
      <Link href='/waterfootprintcalculator/hindi'>
        <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          हिन्दी में
        </button>
      </Link>
      <Link href='/waterfootprintcalculator/marathi'>
        <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          मराठीत
        </button>
      </Link>
      <Link href='/waterfootprintcalculator'>
        <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          In English
        </button>
      </Link>
    </div>
  );
}

export default Translator;
