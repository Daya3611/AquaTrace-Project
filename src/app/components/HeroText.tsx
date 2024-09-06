"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"



function Showmssg() {
    toast("Sabar Rakh BSDK , abhi pura nhi hua hai");

}
function Showmssg1() {
    toast("BKL ek bar bola to samz nahi aata terko ");

}

function HeroText() {
  return (
    <div className='grid lg:grid-cols-2 py-12 px-3 grid-cols-1'>
      <div>
        <img
          src='/img/bg.jpg'
          alt='Hero Image'
          className='w-full h-full object-cover object-center rounded-full' />
      </div>
      <div className='w-7xl mx-auto px-6 py-12'>
        <div className='bg-transparent  rounded-lg p-8'>
          <h1 className='lg:text-5xl md:text-4xl text-2xl font-semibold text-gray-900 mb-6'>
            Fair & Smart Use of the Worlds Fresh Water
          </h1>
          <p className='lg:text-md text-sm text-gray-700 mb-6 italic'>
            We are a network of partner organizations, water footprint professionals, and donors who support our mission. As a non-profit organization, we rely on the support of donors and contributors to continue our work. Your involvement is vital to our success.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <button 
              className='bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 px-4 py-2 rounded-3xl' 
              onClick={Showmssg}
            >
              Calculate Your Water Footprint
            </button>
            <button 
              className='bg-orange-500 text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-gray-400 px-4 py-2 rounded-3xl' onClick={Showmssg1} 
            >
              What is a Water Footprint?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroText
