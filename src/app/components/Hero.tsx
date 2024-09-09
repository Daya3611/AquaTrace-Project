import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import HeroText from './HeroText';
import Image from 'next/image';

const img = [
  { src: '/img/p1.jpg' },
  { src: '/img/p2.jpg' },
  { src: '/img/p3.jpg' },
];

function Hero() {
  return (
    <div className='relative text-center rounded-xl'>
    <HeroText />
    <div className='mt-4'>
        <Carousel className='w-[95%] mx-auto mt-1 rounded-xl overflow-hidden'>
            <CarouselContent className='flex w-full'>
                {img.map((item, index) => (
                    <CarouselItem key={index} className='flex-shrink-0 w-full'>
                        <Image 
                            width={500}
                            height={500}
                            src={item.src} 
                            alt={`Carousel Image ${index + 1}`} 
                            className='w-full max-h-[550px] object-fill rounded-[55px]'
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* Optional navigation buttons */}
            {/* <CarouselPrevious className='absolute top-1/2 left-6 transform -translate-y-1/2 z-10' />
            <CarouselNext className='absolute top-1/2 right-6 transform -translate-y-1/2 z-10' /> */}
        </Carousel>
    </div>
</div>

   
    
  );
}

export default Hero;
