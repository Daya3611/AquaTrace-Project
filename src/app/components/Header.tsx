"use client";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import { Button } from '@/components/ui/button';


function goTok() {
  if (typeof window !== 'undefined') {
    window.location.href = "/waterfootprintcalculator";
  }
}

function Header() {

 
  return (
    <header className='fixed top-0 left-0 w-full bg-white z-50'>
  <div className='py-5 px-6 md:px-20 lg:px-32'>
    
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <Image src='/img/logo.png' width={30} height={30} alt='AquaTrace Logo' />
        <h1 className='text-2xl font-bold text-gray-900'>AquaTrace</h1>
      </div>

      
      <div className='hidden lg:flex space-x-8 mr-4'>
        <a href='/' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          Home
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='/waterfootprintcalculator' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          Calculator
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='/about' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          About
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='/faq' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          FAQ
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

      </div>


      <div className='block lg:hidden space-x-4 mr-4'>
        {/* Mobile Menu Trigger and Call-to-Action */}
    <div className='flex items-center gap-4'>
      {/* Mobile Menu Trigger (visible only on small screens) */}
      <Sheet>
        <SheetTrigger className='block lg:hidden p-2'>
          <HamburgerMenuIcon className='w-5 h-5 text-gray-800' />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigate through the available options.</SheetDescription> */}
            <div className='flex flex-col space-y-4'>
              <a href='/' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          Home
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='/waterfootprintcalculator' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          Calculator
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='/about' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          About
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>

        <a href='/faq' className='relative group text-gray-600 hover:text-blue-700 font-medium'>
          FAQ
          <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full'></span>
        </a>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
      </div>
      
    </div>

    
  </div>
</header>
  );
}

export default Header;
