"use client";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';

function Header() {
  return (
    <header className='fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b'>
      <div className='py-4 px-6 lg:px-12'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image src='/img/logo.png' width={30} height={30} alt='AquaTrace Logo' />
            <h1 className='text-2xl font-bold text-blue-900'>AquaTrace</h1>
          </div>

          <div className='hidden lg:flex space-x-8 mr-4'>
            <a href='/' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
              Home
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='/waterfootprintcalculator' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
              Calculator
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='/#why' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
              Why ?
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='/#how' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
              How ?
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='/about' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
              About
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
            </a>

            <a href='https://docs.google.com/forms/d/e/1FAIpQLSeUqLRY-XIdW-wFjQSoh4Z6LPlY5qUa2Lll2KZps1m0qgJqtw/viewform' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
              Contact
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
            </a>
          </div>

          <div className='block lg:hidden space-x-4 mr-4'>
            <div className='flex items-center gap-4'>
              <Sheet>
                <SheetTrigger className='p-2 rounded-md hover:bg-gray-200 transition duration-300'>
                  <HamburgerMenuIcon className='w-8 h-8 text-gray-800' />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <div className='flex flex-col space-y-4'>
                      <a href='/' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
                        Home
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
                      </a>

                      <a href='/waterfootprintcalculator' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
                        Calculator
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
                      </a>

                      <a href='/about' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
                        About
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
                      </a>

                      <a href='/faq' className='relative group text-gray-700 hover:text-blue-600 font-medium transition-all duration-300'>
                        FAQ
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full'></span>
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
