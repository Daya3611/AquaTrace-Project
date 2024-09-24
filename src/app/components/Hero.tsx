import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import HeroText from './HeroText';
import Image from 'next/image';

const img = [
  { src: '/img/p1.jpg' },
  { src: '/img/p2.jpg' },
  { src: '/img/p3.jpg' },
];

function Hero() {
  return (
    <div className='pt-9'>
      <HeroText />
      <div className='relative text-center p-8 rounded-lg'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 md:justify-center'>
          {['Active Farmers', 'Active Farmers', 'Active Farmers'].map((title, index) => (
            <div key={index} className='w-full h-[200px] bg-blue-200 rounded-xl flex items-center justify-center shadow-lg transition-transform transform hover:scale-105'>
              <div className='text-center'>
                <p className='text-lg font-medium mb-2'>{title}</p>
                <p className='text-3xl font-bold mb-1'>
                  50+
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
