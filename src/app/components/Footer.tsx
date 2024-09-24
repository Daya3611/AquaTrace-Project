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
      {/* <div className='flex mt-3 flex-wrap sm:gap-10 justify-between sm:justify-normal'> */}
      {/* <div>
          <h4 className='text-lg font-bold'>Pages</h4>
          <ul className='grid'>
            <li>
              <Link href='/' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/waterfootprintcalculator' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                Calculator
              </Link>
            </li>
            <li>
              <Link href='/about' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                About
              </Link>
            </li>
            <li>
              <Link href='/faq' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-bold'>Contributers</h4>
          <ul className='grid'>
            <li>
              <Link href='https://github.com/daya9611' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                Dayanand
              </Link>
            </li>
            <li>
              <Link href='/' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                Teammate
              </Link>
            </li>
            <li>
              <Link href='/' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                Teammate
              </Link>
            </li>
            <li>
              <Link href='/' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
                Teammate
              </Link>
            </li>
          </ul>
        </div> */}

      {/* <div>
          <h3 className='text-lg font-bold'>College</h3>
          <Image src='/img/vsit-logo.png' width={200} height={200} alt='logo' />
        </div> */}
      {/* </div> */}
      <p className='mt-3 text-sm text-muted-foreground max-w-2xl'>
        This is an hackathon project built by a team of 4. for <span className='text-foreground/70'>Smart India Hackathon 2024</span> from colloge <span className='text-foreground/70'>VSIT</span>.
      </p>
      <div className='flex items-center gap-8 mt-3'>
        {/* <h3 className='text-lg font-bold'>Project For</h3> */}
        <Image src='/img/SIH-logo.png' width={120} height={120} alt='logo' />
        <Image src='/img/vsit-logo.png' width={160} height={160} alt='logo' />
      </div>
      <ul className='flex gap-3 mt-1'>
        <li>
          <Link href='/' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/waterfootprintcalculator' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
            Calculator
          </Link>
        </li>
        <li>
          <Link href='/about' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
            About
          </Link>
        </li>
        <li>
          <Link href='/faq' className='text-sm font-medium underline-offset-2 underline text-foreground/80 hover:text-foreground'>
            FAQ
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default Footer
