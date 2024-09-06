import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className='px-5 mt-4'>
        <div className='w-full h-[300px] bg-white rounded-t-[55px] p-5  grid grid-cols-4'>
            <div className='max-w-[200px] pl-3 grid grid-cols-1'>
                <div className='flex gap-2  text-center items-center '>
                <Image src='/img/logo.png' width={50} height={50} alt='logo' />
                <h1 className='text-3xl font-bold '>AquaTrace</h1>
                
                {/* <div className='flex items-center text-center '>
                    <span className='mt-3 '>
                        <div className='w-2 h-2 rounded-full bg-blue-600 text-center items-center'>
                            <div className='w-2 h-2 rounded-full bg-blue-600 animate-ping'></div>
                        </div>
                    </span>
                </div> */}
                </div>
                <p className='mt-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. ......
                </p>
            </div>
            <div className='mt-[45px]'>
                <h4 className='text-xl font-bold'>Pages</h4>
                <ul className='mt-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Team Members</li>
                    <li>more pages...</li>
                </ul>
            </div>
            <div className='mt-[45px]'>
                <h3>Project For</h3>
                <Image src='/img/SIH-logo.png' width={150} height={150} alt='logo' className='pt-4' />
            </div>
            <div className='mt-[45px]'>
                <h3>Collage Name</h3>
                <Image src='/img/vsit-logo.png' width={200} height={200} alt='logo' className='pt-4' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
