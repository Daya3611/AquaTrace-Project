"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Helper function to convert cubic meters to liters and gallons
const convertWater = (cubicMeters: number) => {
  return {
    liters: cubicMeters * 1000,
    gallons: cubicMeters * 264.172,
  };
};
// Define the type for chart data
type ChartData = {
  month: string;
  WaterUse: number;
};


// Define the type for results data
type Results = {
  totalWaterUseLiters: string;
  totalWaterUseGallons: string;
  waterFootprint: string;
};


const Page = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    farmName: '',
    location: '',
    date: '',
    contactInfo: '',
    cropType: '',
    cropVariety: '',
    plantingDate: '',
    harvestDate: '',
    cropArea: 0,  // in hectares
    cropYield: 0,  // tons per hectare
    greenWater: 0,  // mm
    blueWater: 0,  // mm
    greyWater: 0,  // if applicable
    rainfall: 0,  // mm
    irrigation: 0,  // cubic meters
    otherSources: 0,  // cubic meters
    irrigationType: '',
    irrigationEfficiency: 0,  // percentage
    irrigationSchedule: '',
    soilType: '',
    soilMoisture: 0,  // percentage
    climateData: {
      temperature: 0,  // average temperature in °C
      humidity: 0,  // average humidity in %
      precipitation: 0,  // average precipitation in mm
    },
    fertilizers: '',
    pesticides: '',
    waterConservation: '',
    waterCost: 0,  // if applicable
    environmentalImpact: '',
    observations: '',
    suggestions: '',
  });
  
  const [results, setResults] = useState<Results | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);


  // Sample data
  const cropTypes = ["Wheat", "Rice", "Corn", "Barley", "Sugarcane"];
  const cropVarieties = {
    "Wheat": ["Hard Red Winter", "Soft Red Winter", "Durum"],
    "Rice": ["Basmati", "Sona Masuri", "Jasmine"],
    "Corn": ["Dent", "Flint", "Popcorn"],
    "Barley": ["Two-row", "Six-row"],
    "Sugarcane": ["Co 86032", "Co 0238", "Co 1148"]
  };
  const irrigationTypes = ["Drip", "Sprinkler", "Surface", "Subsurface"];
  const irrigationSchedules = ["Daily", "Weekly", "Bi-weekly", "Monthly"];
  const soilTypes = ["Loamy", "Clay", "Sandy", "Saline"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: isNaN(Number(value)) ? value : Number(value),  // Convert to number if possible
    }));
  };
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { cropArea, cropYield, greenWater, blueWater, greyWater, rainfall, irrigation, otherSources } = formData;

    if (!cropYield || !cropArea || !greenWater || !blueWater) {
      alert("Please ensure crop yield, area, green water, and blue water are provided.");
      return;
    }

    // Calculate total water use in cubic meters
    const totalWaterUse = ((greenWater + blueWater) / 1000) * cropArea + irrigation + otherSources; // mm to meters

    // Calculate water footprint
    const totalYield = cropYield * cropArea; // tons
    const waterFootprint = totalWaterUse / totalYield; // m³/ton

    // Convert cubic meters to liters and gallons
    const convertedWater = convertWater(totalWaterUse);

    // Set seasonal chart data (summer: Apr-May, monsoon: Jun-Sep, winter: Oct-Jan)
    const seasonalWaterUse = [0.6, 0.6, 0.8, 1.2, 1.2, 1.2, 1.2, 0.8, 0.6, 0.6, 0.5, 0.5];
    const newChartData = seasonalWaterUse.map((season, index) => ({
      month: new Date(0, index).toLocaleString('en-US', { month: 'short' }),
      WaterUse: (convertedWater.liters / 12) * season,  // Seasonal adjustment
    }));

    setChartData(newChartData);
    setResults({
      totalWaterUseLiters: convertedWater.liters.toFixed(2),
      totalWaterUseGallons: convertedWater.gallons.toFixed(2),
      waterFootprint: waterFootprint.toFixed(2),
    });
  };

  return (
    <div>
      <div className='max-w-4xl mx-auto mt-[55px] p-6'>
        <h2 className='text-2xl font-bold mb-4'>Agricultural Water Footprint Calculator</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Basic Information */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Basic Information</legend>
            <div>
              <label className='block text-gray-700'>Farmers Name:</label>
              <input type='text' name='farmerName' value={formData.farmerName} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Farm Name:</label>
              <input type='text' name='farmName' value={formData.farmName} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Location:</label>
              <input type='text' name='location' value={formData.location} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Date:</label>
              <input type='date' name='date' value={formData.date} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Contact Information:</label>
              <input type='text' name='contactInfo' value={formData.contactInfo} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Crop Information */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Crop Information</legend>
            <div>
              <label className='block text-gray-700'>Crop Type:</label>
              <select name='cropType' value={formData.cropType} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Crop Type</option>
                {cropTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Variety of Crop:</label>
              <select name='cropVariety' value={formData.cropVariety} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Crop Variety</option>
                {formData.cropType && cropVarieties[formData.cropType]?.map(variety => (
                  <option key={variety} value={variety}>{variety}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Planting Date:</label>
              <input type='date' name='plantingDate' value={formData.plantingDate} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Harvest Date:</label>
              <input type='date' name='harvestDate' value={formData.harvestDate} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Crop Area (hectares):</label>
              <input type='number' name='cropArea' value={formData.cropArea} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Crop Yield (tons per hectare):</label>
              <input type='number' name='cropYield' value={formData.cropYield} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Water Use Information */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Water Use Information</legend>
            <div>
              <label className='block text-gray-700'>Green Water (mm):</label>
              <input type='number' name='greenWater' value={formData.greenWater} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Blue Water (mm):</label>
              <input type='number' name='blueWater' value={formData.blueWater} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Grey Water (if applicable):</label>
              <input type='number' name='greyWater' value={formData.greyWater} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Total Rainfall (mm):</label>
              <input type='number' name='rainfall' value={formData.rainfall} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Total Irrigation (cubic meters):</label>
              <input type='number' name='irrigation' value={formData.irrigation} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Other Sources of Water (cubic meters):</label>
              <input type='number' name='otherSources' value={formData.otherSources} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Irrigation Details */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Irrigation Details</legend>
            <div>
              <label className='block text-gray-700'>Type of Irrigation System:</label>
              <select name='irrigationType' value={formData.irrigationType} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Irrigation Type</option>
                {irrigationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Irrigation Efficiency (%):</label>
              <input type='number' name='irrigationEfficiency' value={formData.irrigationEfficiency} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Irrigation Schedule:</label>
              <select name='irrigationSchedule' value={formData.irrigationSchedule} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Irrigation Schedule</option>
                {irrigationSchedules.map(schedule => (
                  <option key={schedule} value={schedule}>{schedule}</option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* Soil and Climate Information */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Soil and Climate Information</legend>
            <div>
              <label className='block text-gray-700'>Soil Type:</label>
              <select name='soilType' value={formData.soilType} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Soil Type</option>
                {soilTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Soil Moisture Content (%):</label>
              <input type='number' name='soilMoisture' value={formData.soilMoisture} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Average Temperature (°C):</label>
              <input type='number' name='climateData.temperature' value={formData.climateData.temperature} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />

            </div>
            <div>
              <label className='block text-gray-700'>Average Humidity (%):</label>
              <input type='number' name='climateData.humidity' value={formData.climateData.humidity} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Average Precipitation (mm):</label>
              <input type='number' name='climateData.precipitation' value={formData.climateData.precipitation} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Fertilizer and Pesticide Use */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Fertilizer and Pesticide Use</legend>
            <div>
              <label className='block text-gray-700'>Fertilizers Used:</label>
              <textarea name='fertilizers' value={formData.fertilizers} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='3'></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Pesticides Used:</label>
              <textarea name='pesticides' value={formData.pesticides} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='3'></textarea>
            </div>
          </fieldset>

          {/* Water Management Practices */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Water Management Practices</legend>
            <div>
              <label className='block text-gray-700'>Water Conservation Practices:</label>
              <textarea name='waterConservation' value={formData.waterConservation} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='3'></textarea>
            </div>
          </fieldset>

          {/* Economic and Environmental Impact */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Economic and Environmental Impact</legend>
            <div>
              <label className='block text-gray-700'>Cost of Water (if applicable):</label>
              <input type='number' name='waterCost' value={formData.waterCost} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Environmental Impact:</label>
              <textarea name='environmentalImpact' value={formData.environmentalImpact} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='3'></textarea>
            </div>
          </fieldset>

          {/* Additional Comments */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Additional Comments</legend>
            <div>
              <label className='block text-gray-700'>Observations and Challenges:</label>
              <textarea name='observations' value={formData.observations} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='3'></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Suggestions for Improvement:</label>
              <textarea name='suggestions' value={formData.suggestions} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows='3'></textarea>
            </div>
          </fieldset>

          <Button type='submit' className='bg-blue-600 text-white rounded-full py-2 px-4'>
            Calculate
          </Button>
        </form>

        {results && (
          <div className='mt-8'>
            <h3 className='text-xl font-semibold mb-4'>Results</h3>
            <p>Total Water Use: {results.totalWaterUseLiters} liters ({results.totalWaterUseGallons} gallons)</p>
            <p>Water Footprint: {results.waterFootprint} m³/ton</p>
          </div>
        )}

        {chartData.length > 0 && (
          <div className='mt-8'>
            <h3 className='text-xl font-semibold mb-4'>Water Use Chart</h3>
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='WaterUse' fill='#8884d8' />
            </BarChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
