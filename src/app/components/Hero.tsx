"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='px-6 md:px-20 lg:px-32 py-9'>
      <div className='relative  py-12 px-3 bg-blue-100 rounded-3xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <div className='relative z-10 max-w-6xl mx-auto'>
              <div className='bg-transparent rounded-lg px-8'>
                <h1 className='text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 animate-in'>
                  Join Us in the <span className='bg-blue-600 text-white px-3 py-1'>Fight</span> for the Environment
                </h1>
                <p className='text-sm md:text-base text-gray-600 mb-6 animate-in animate-delay-200'>
                  We are a network of partner organizations, water footprint professionals, and donors supporting our mission. As a non-profit, we rely on your support to continue our work. Your involvement is crucial to our success.
                </p>
                <div className='md:flex gap-3 grid'>
                  <Button size="lg" asChild variant="gooeyLeft">
                    <Link href="/waterfootprintcalculator">
                      Calculate your water footprint
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://www.google.com/search?q=what+is+water+footprint">
                      What is a Footprint?
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=' items-center justify-center hidden lg:flex'>
            <Image src="/img/hero.png" alt='sdd' width={600} height={600} className='rounded-3xl' />

          </div>
        </div>


      </div>
    </div>
  );
}