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
    <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
      <div className='flex justify-between items-center py-4 px-6 lg:px-12'>
        {/* Logo and Title */}
        <div className='flex items-center gap-2'>
          <Image src='/img/logo.png' width={30} height={30} alt='AquaTrace Logo' />
          <h1 className='text-2xl font-bold text-gray-900'>AquaTrace</h1>
        </div>
        
        {/* Navigation and Button */}
        <div className='flex items-center gap-4'>
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger className='block lg:hidden p-2'>
              <HamburgerMenuIcon className='w-8 h-8 text-gray-800' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through the available options.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          
          {/* Call-to-Action Button */}
          <Button className='hidden lg:block rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={goTok} >
            Calculate Your Water Footprint
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
