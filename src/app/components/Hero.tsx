"use client";
import React from 'react';
import HeroText from './HeroText';
import Section from './Section';
import '../globals.css'
import Features from './Features';

const whyData = [
  {
    title: "1. Water Resource Management",
    description: "Agriculture uses around 70% of the world's freshwater. Understanding the water footprint helps optimize water use, ensuring that water resources are used efficiently and conserved for future needs, especially in water-scarce regions.",
  },
  {
    title: "2. Sustainability",
    description: "Calculating water footprints promotes sustainable farming practices. By knowing how much water is used for specific crops, farmers can adopt more water-efficient methods, reduce waste, and lessen environmental impact.",
  },
  {
    title: "3. Climate Change Adaptation",
    description: "With changing weather patterns due to climate change, tracking water footprints allows farmers to adapt irrigation and crop choices based on water availability, helping to mitigate the effects of droughts and floods.",
  },
  {
    title: "4. Economic Efficiency",
    description: "Efficient water use reduces costs for farmers by minimizing water waste, improving crop yields, and avoiding over-irrigation. This leads to better financial sustainability in the agricultural sector.",
  },
  {
    title: "5. Food Security",
    description: "By managing water efficiently, agricultural production becomes more reliable, helping to ensure a stable food supply, especially as global demand for food rises due to population growth.",
  }
];

const howData = [
  {
    title: "Adopt Efficient Irrigation Techniques",
    description: "Drip irrigation and sprinkler systems deliver water directly to the plants' roots, reducing evaporation and runoff. These systems use much less water than traditional irrigation methods like flood irrigation.",
  },
  {
    title: "Use Drought-Resistant Crops",
    description: "Growing drought-tolerant or water-efficient crops helps reduce water consumption. These crops require less water to grow and can thrive in regions with limited water resources.",
  },
  {
    title: "Rainwater Harvesting",
    description: "Collecting and storing rainwater for irrigation helps farmers reduce their reliance on freshwater from other sources. This method is especially useful in areas with seasonal rains.",
  },
  {
    title: "Precision Agriculture",
    description: "Using technology like soil moisture sensors, drones, and satellite data helps farmers monitor water needs accurately and apply water only where and when it’s needed. This reduces unnecessary water use.",
  },
  {
    title: "Soil and Crop Management",
    description: "Practices like mulching, cover cropping, and improving soil health increase water retention in the soil, reducing the need for irrigation. Healthy soils absorb more water and release it slowly to plants.",
  }
];

function Hero() {
  return (
    <div className="pt-9">
      <HeroText />
      <Section />
      {/* <Features /> */}

      {/* Why and How Section */}
      <div className="mt-16 p-8 bg-white rounded-lg ">
        
        {/* Why Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-300 via-blue-100 to-purple-200 rounded-3xl shadow-md " id="why">
          <h2 className="text-5xl font-bold mb-4 text-blue-900 text-center">Why?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {whyData.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-3xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-300 via-blue-100 to-purple-200 rounded-3xl shadow-md" id="how">
          <h2 className="text-5xl font-bold mb-4 text-blue-900 text-center">How can we save water ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {howData.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-3xl hover:shadow-2xl transition duration-300 animt transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
