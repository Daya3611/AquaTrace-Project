"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import Image from 'next/image';

function toWFC() {
    if (typeof window !== 'undefined') {
      window.location.href = "/waterfootprintcalculator";
    }
}


function Showmssg1() {
    toast("Please contact us for more details");
}

function HeroText() {
  return (
    <div className='px-9'>
      <div className='relative  py-12 px-3 bg-blue-100 rounded-3xl'>
      
      <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
          <div className='relative z-10 max-w-6xl mx-auto px-6 py-12'>
          <div className='bg-transparent rounded-lg p-8'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 animate-fadeIn'>
              Join Us in the <span className='bg-blue-600 text-white rounded-full px-3 py-1 animate-pulse'>fight</span> for the Environment
            </h1>
            <p className='text-base md:text-lg text-gray-600 mb-8 animate-fadeIn animate-delay-200'>
              We are a network of partner organizations, water footprint professionals, and donors supporting our mission. As a non-profit, we rely on your support to continue our work. Your involvement is crucial to our success.
            </p>
            <div className='grid grid-cols-1 gap-4 items-center justify-center lg:flex'>
              <Button 
                className='bg-white text-black hover:bg-blue-200 rounded-full py-6 px-6 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-slideIn animate-delay-300'
                onClick={toWFC}
              >
                <p className='py-4 text-[9px] lg:text-[13px]'>Calculate Your Water Footprint</p>
              </Button>
              <Button 
                className='bg-white text-black hover:bg-green-200 rounded-full py-6 px-6 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 animate-slideIn animate-delay-400'
                onClick={Showmssg1}
              >
                What is a Footprint?
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

export default HeroText;
