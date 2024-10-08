import Link from 'next/link'
import React from 'react'

function Translat() {
  return (
    <div>
      <div className='flex justify-end mt-6 space-x-4'>
      <Link href='/waterfootprintcalculator/hindi'>
        <button className='px-6 py-1 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          हिन्दी 
        </button>
      </Link>
      <Link href='/waterfootprintcalculator/marathi'>
        <button className='px-6 py-1 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          मराठी
        </button>
      </Link>
      <Link href='/waterfootprintcalculator'>
        <button className='px-6 py-1 bg-blue-600 text-white font-semibold rounded-3xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
          English
        </button>
      </Link>
    </div>
    </div>
  )
}

export default Translat
