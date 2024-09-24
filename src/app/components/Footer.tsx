import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='px-6 md:px-20 mb-6 lg:px-32 mt-4'>
      <div className='flex items-center gap-2'>
        <Image src='/img/logo.png' width={45} height={45} alt='logo' />
        <div>
          <h1 className='text-xl font-bold'>AquaTrace</h1>
          <p className='text-xs'>
            Optimizing Every Drop for a Sustainable Future
          </p>
        </div>
      </div>
      <p className='mt-3 text-sm text-foreground/85 max-w-2xl'>
        This is an hackathon project built by a team of 6. for <span className='text-foreground/70'>Smart India Hackathon 2024</span> from colloge <span className='text-foreground/70'>VSIT</span>.
      </p>
      <ul className='flex gap-3 mt-1'>
        <li><Link href='/' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>Home</Link></li>
        <li><Link href='/waterfootprintcalculator' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>Calculator</Link></li>
        <li><Link href='/about' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>About</Link></li>
        <li><Link href='/faq' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>FAQ</Link>
        </li>
      </ul>
    </div>

  )
}

export default Footer
