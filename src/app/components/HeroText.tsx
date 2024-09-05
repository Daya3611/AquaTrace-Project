"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"



function Showmssg() {
    toast("Sabar Rakh BSDK");

}
function Showmssg1() {
    toast("BKL ek bar bola to samz nahi aata terko ");

}

function HeroText() {
  return (
    <div className='relative bg-cover bg-center bg-no-repeat min-h-screen py-12' style={{ backgroundImage: "url('./img/bg.jpg')" }}>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <div className='bg-white shadow-md rounded-lg p-8'>
          <h1 className='text-3xl md:text-4xl font-semibold text-gray-900 mb-6'>
            Fair & Smart Use of the World's Fresh Water
          </h1>
          <p className='text-base text-gray-700 mb-6'>
            We are a network of partner organizations, water footprint professionals, and donors who support our mission. As a non-profit organization, we rely on the support of donors and contributors to continue our work. Your involvement is vital to our success.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <button 
              className='bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 px-4 py-2 rounded-md' 
              onClick={Showmssg}
            >
              Calculate Your Water Footprint
            </button>
            <button 
              className='bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 px-4 py-2 rounded-md' onClick={Showmssg1} 
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
