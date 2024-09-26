"use client";
import React, { useRef } from 'react';
import HeroText from './HeroText';
import Image from 'next/image';
import Section from './Section';

const img = [
  { src: '/img/p1.jpg' },
  { src: '/img/p2.jpg' },
  { src: '/img/p3.jpg' },
];

function Hero() {
  return (
    <div className="pt-9">
      {/* Hero Section */}
      <HeroText />

      {/* Image Carousel or Hero Images */}
      <div className="relative text-center p-8 rounded-lg">
        <div className="flex justify-center gap-4">
          {img.map((image, index) => (
            <Image 
              key={index} 
              src={image.src} 
              alt={`Slide ${index + 1}`} 
              width={400} 
              height={300} 
              className="rounded-lg shadow-md" 
            />
          ))}
        </div>
      </div>

      <div>
        <Section />
      </div>

      {/* Why and How Section */}
      <div className="mt-16 p-8 bg-white rounded-lg shadow-md">
        
        
        <div className="mt-16 p-8 bg-blue-100 rounded-lg shadow-md" id="why">
          
        <h2 className="text-5xl font-bold mb-4 text-blue-900 text-center">Why ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Water Resource Management */}
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">	1. Water Resource Management </h3>
              <p className="text-gray-600 mb-4">
                Agriculture uses around 70% of the worlds freshwater. Understanding the water footprint helps optimize water use, ensuring that water resources are used efficiently and conserved for future needs, especially in water-scarce regions.

              </p>

            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-2">2. Sustainability </h3>
              <p className="text-gray-600 mb-4">
                Calculating water footprints promotes sustainable farming practices. By knowing how much water is used for specific crops, farmers can adopt more water-efficient methods, reduce waste, and lessen environmental impact.


              </p>
              
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-2">3. Climate Change Adaptation</h3>
              <p className="text-gray-600 mb-4">
                With changing weather patterns due to climate change, tracking water footprints allows farmers to adapt irrigation and crop choices based on water availability, helping to mitigate the effects of droughts and floods.
              </p>
              
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-2">4. Economic Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Efficient water use reduces costs for farmers by minimizing water waste, improving crop yields, and avoiding over-irrigation. This leads to better financial sustainability in the agricultural sector.
              </p>
              
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold text-blue-800 mb-2">5. Food Security</h3>
              <p className="text-gray-600 mb-4">
                By managing water efficiently, agricultural production becomes more reliable, helping to ensure a stable food supply, especially as global demand for food rises due to population growth.

              </p> 
              
            </div>

            
          </div>
        </div>

        {/* How Section */}
        <div className="mt-16 p-8 bg-blue-100 rounded-lg shadow-md" id="how">
          <h2 className="text-5xl font-bold mb-4 text-blue-900 text-center">How ?</h2>
          <p className="text-lg mb-8 text-gray-700 text-center max-w-3xl mx-auto">
            {/* Explore methods like precision agriculture, drought-resistant crops, and rainwater harvesting to save water while boosting productivity and ensuring long-term sustainability. */}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Efficient Irrigation Techniques */}
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Adopt Efficient Irrigation Techniques</h3>
              <p className="text-gray-600 mb-4">
               Drip irrigation and sprinkler systems deliver water directly to the plants roots, reducing evaporation and runoff. These systems use much less water than traditional irrigation methods like flood irrigation.

              </p>
              
            </div>

            {/* Drought-Resistant Crops */}
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Use Drought-Resistant Crops</h3>
              <p className="text-gray-600 mb-4">
               Growing drought-tolerant or water-efficient crops helps reduce water consumption. These crops require less water to grow and can thrive in regions with limited water resources.

              </p>
              
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Rainwater Harvesting</h3>
              <p className="text-gray-600 mb-4">
               Collecting and storing rainwater for irrigation helps farmers reduce their reliance on freshwater from other sources. This method is especially useful in areas with seasonal rains.

              </p>
              
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Precision Agriculture</h3>
              <p className="text-gray-600 mb-4">
               Using technology like soil moisture sensors, drones, and satellite data helps farmers monitor water needs accurately and apply water only where and when it’s needed. This reduces unnecessary water use.

              </p>
              
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Soil and Crop Management</h3>
              <p className="text-gray-600 mb-4">
               Practices like mulching, cover cropping, and improving soil health increase water retention in the soil, reducing the need for irrigation. Healthy soils absorb more water and release it slowly to plants.

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
