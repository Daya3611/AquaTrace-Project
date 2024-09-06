import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='px-4 sm:px-5 mt-4'>
  <div className='w-full bg-white rounded-t-[55px] p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
    
    <div className='flex flex-col items-center sm:items-start max-w-full sm:max-w-[200px]'>
      <div className='flex items-center gap-2 text-center sm:text-left'>
        <Image src='/img/logo.png' width={50} height={50} alt='logo' />
        <h1 className='text-2xl sm:text-3xl font-bold'>AquaTrace</h1>
      </div>
      <p className='mt-3 text-center sm:text-left'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. ......
      </p>
    </div>
    
    <div className='mt-4 sm:mt-0'>
      <h4 className='text-lg sm:text-xl font-bold'>Pages</h4>
      <ul className='mt-4 space-y-2'>
        <li>Home</li>
        <li>About</li>
        <li>Team Members</li>
        <li>More pages...</li>
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
