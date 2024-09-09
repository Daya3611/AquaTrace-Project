"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import Image from 'next/image';

function Showmssg() {
    toast("Feature not developed yet");
}

function Showmssg1() {
    toast("Please contact us for more details");
}

function HeroText() {
  return (
    <div className='relative bg-transparent py-12 px-3'>
      {/* Uncomment and adjust the image if needed */}
      {/* <div className='absolute inset-0'>
        <Image
          src='/img/bg.jpg'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          className='w-full h-full object-cover'
        />
      </div> */}
      <div className='relative z-10 max-w-6xl mx-auto px-6 py-12'>
        <div className='bg-transparent  rounded-lg p-8'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6'>
            Join Us in the <span className='bg-blue-500 text-white rounded-full px-3 py-1'>fight</span> for the Environment
          </h1>
          <p className='text-base md:text-lg text-gray-600 mb-8'>
            We are a network of partner organizations, water footprint professionals, and donors supporting our mission. As a non-profit, we rely on your support to continue our work. Your involvement is crucial to our success.
          </p>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <Button 
              className='bg-blue-600 text-white rounded-full py-3 px-6 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={Showmssg}
            >
              Calculate Your Water Footprint
            </Button>
            <Button 
              className='bg-orange-500 text-white rounded-full py-3 px-6 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500'
              onClick={Showmssg1}
            >
              What is a Footprint?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
