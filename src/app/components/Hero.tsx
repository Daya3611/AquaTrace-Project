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

const img = [
  { src: './img/p1.jpg' },
  { src: './img/p2.jpg' },
  { src: './img/p3.jpg' },
];

function Hero() {
  return (
      <div className='relative tems-center text-center  rounded-xl '>
        <HeroText />
      <div className='mt-4'>
      <Carousel className=' text-center items-center mx-auto px-1 max-w-[90%] mt-1 rounded-xl'>
            <CarouselContent className='w-full rounded-xl border '>
                {img.map((item, index) => (
                <CarouselItem key={index} className='flex justify-center items-center'>
                    <img 
                    src={item.src} 
                    alt={`Carousel Image ${index + 1}`} 
                    className='w-full max-h-[550px] object-fill rounded-xl' 
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
                {/* <CarouselPrevious className='absolute top-1/2 left-6 transform -translate-y-1/2' />
                <CarouselNext className='absolute top-1/2 right-9 transform -translate-y-1/2' /> */}
        </Carousel>
      </div>
        

    </div>
   
    
  );
}

export default Hero;
