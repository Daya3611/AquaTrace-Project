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
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function Header() {

  return (
    <header className='fixed top-0 left-0 w-full bg-white z-50'>
      <div className='py-4 px-6 md:px-20 lg:px-32'>

        <div className='flex justify-between items-center'>
          <Link href="/" className='flex items-center gap-2'>
            <Image src='/img/logo.png' width={30} height={30} alt='AquaTrace Logo' />
            <h1 className='text-2xl font-bold text-gray-900'>AquaTrace</h1>
          </Link>

          <div className='hidden lg:flex space-x-8 mr-4'>
            <Link href='/' className='text-gray-600 hover:text-foreground hover:underline font-medium text-base text-foreground'>
              Home
            </Link>
            <Link href='/waterfootprintcalculator' className='text-gray-600 hover:text-foreground hover:underline font-medium text-base text-foreground'>
              Calculator
            </Link>
            <Link href='/about' className='text-gray-600 hover:text-foreground hover:underline font-medium text-base text-foreground'>
              About
            </Link>
            <Link href='/faq' className='text-gray-600 hover:text-foreground hover:underline font-medium text-base text-foreground'>
              FAQ
            </Link>
          </div>


          <div className='block lg:hidden space-x-4'>
            <div className='flex items-center gap-4'>
              <Sheet>
                <SheetTrigger className='block lg:hidden p-2'>
                  <Button size="icon" variant="ringHover">
                    <HamburgerMenuIcon className='w-4 h-4' />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className='w-full h-full flex items-center justify-center'>
                    <div className='flex flex-col space-y-4'>
                      <Link href='/' className='text-gray-600 hover:text-foreground hover:underline font-medium text-lg text-foreground'>
                        Home
                      </Link>
                      <Link href='/waterfootprintcalculator' className='text-gray-600 hover:text-foreground hover:underline font-medium text-lg text-foreground'>
                        Calculator
                      </Link>
                      <Link href='/about' className='text-gray-600 hover:text-foreground hover:underline font-medium text-lg text-foreground'>
                        About
                      </Link>
                      <Link href='/faq' className='text-gray-600 hover:text-foreground hover:underline font-medium text-lg text-foreground'>
                        FAQ
                      </Link>
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
};