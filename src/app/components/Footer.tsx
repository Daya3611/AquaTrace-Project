import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='px- sm:px-5 mt-4'>
  <div className='w-full bg-white rounded-t-[55px] p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
    
    <div className='flex flex-col items-center sm:items-start max-w-full sm:max-w-[200px]'>
      <div className='flex items-center gap-2 text-center sm:text-left'>
        <Image src='/img/logo.png' width={50} height={50} alt='logo' />
        <h1 className='text-2xl sm:text-3xl font-bold'>AquaTrace</h1>
      </div>
      <p className='mt-3 text-sm  sm:text-left'>
      Optimizing Every Drop for a Sustainable Future
      </p>
    </div>
    
    <div className='mt-4 sm:mt-0'>
      <h4 className='text-lg sm:text-xl font-bold'>Pages</h4>
      <ul className='mt-4 space-y-1 grid grid-cols-3 items-center'>
        <li>
          <a href='/' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
            Home
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>

        <li>
          <a href='/waterfootprintcalculator' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
            Calculator
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>

        <li>
          <a href='/#why' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
            Why ? 
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>

        <li>
          <a href='/#how' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
            How ?
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>

        <li>
          <a href='/about' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
            About
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>

        <li>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSeUqLRY-XIdW-wFjQSoh4Z6LPlY5qUa2Lll2KZps1m0qgJqtw/viewform' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
            Contact
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </li>
      </ul>
    </div>
    
    <div className='mt-4 sm:mt-0'>
      <h3 className='text-lg sm:text-xl font-bold'>Project For</h3>
      <Image src='/img/SIH-logo.png' width={150} height={150} alt='logo' className='pt-4' />
    </div>
    
    <div className='mt-4 sm:mt-0'>
      <h3 className='text-lg sm:text-xl font-bold'>College Name</h3>
      <Image src='/img/vsit-logo.png' width={200} height={200} alt='logo' className='pt-4' />
    </div>
  </div>
</div>

  )
}

export default Footer
