"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { toast } from "sonner";
import Link from 'next/link';
import Translator from './translator';





// Helper function to convert cubisc meters to liters and gallons
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

// Define the type for climate data
type ClimateData = {
  temperature: number;
  humidity: number;
  precipitation: number;
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
    cropArea: '',  // in hectares
    cropYield: '',  // tons per hectare
    greenWater: '',  // mm
    blueWater: '',  // mm
    greyWater: '',  // if applicable
    rainfall: '',  // mm
    irrigation: '',  // cubic meters
    otherSources: '',  // cubic meters
    irrigationType: '',
    irrigationEfficiency: '',  // percentage
    irrigationSchedule: '',
    soilType: '',
    soilMoisture: '',  // percentage
    climateData: {
      temperature: '',  // average temperature in °C
      humidity: '',  // average humidity in %
      precipitation: '',  // average precipitation in mm
    },
    fertilizers: '',
    pesticides: '',
    waterConservation: '',
    waterCost: '',  // if applicable
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isChecked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
  
    if (name.startsWith('climateData.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        climateData: {
          ...prev.climateData,
          [key]: type === 'number' ? parseFloat(value) : value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'number' ? parseFloat(value) : type === 'checkbox' ? isChecked : value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { cropArea, cropYield, greenWater, blueWater, greyWater, rainfall, irrigation, otherSources } = formData;

    if (!cropYield || !cropArea || !greenWater || !blueWater) {
      toast("Please ensure crop yield, area, green water, and blue water are provided.");
      return;
    }

    // Calculate total water use in cubic meters
    const greenWaterValue = parseFloat(greenWater) || 0;
    const blueWaterValue = parseFloat(blueWater) || 0;
    const greyWaterValue = parseFloat(greyWater) || 0;
    const rainfallValue = parseFloat(rainfall) || 0;
    const cropAreaValue = parseFloat(cropArea) || 0;
    const irrigationValue = parseFloat(irrigation) || 0;
    const otherSourcesValue = parseFloat(otherSources) || 0;
    const cropYieldValue = parseFloat(cropYield) || 0;

    // Water use in cubic meters per hectare for green and blue water (converted from mm)
    const totalWaterUse = ((greenWaterValue + blueWaterValue) / 1000) * cropAreaValue + irrigationValue + otherSourcesValue;

    // Calculate total yield
    const totalYield = cropYieldValue * cropAreaValue;  // tons

    if (totalYield === 0) {
      toast("Please ensure that crop yield and crop area are greater than zero.");
      return;
    }

    // Calculate water footprint in cubic meters per ton
    const waterFootprint = totalWaterUse / totalYield;

    // Convert cubic meters to liters and gallons
    const convertedWater = convertWater(totalWaterUse);

    // Seasonal water distribution (summer: Apr-May, monsoon: Jun-Sep, winter: Oct-Jan)
    const seasonalWaterUse = [0.5, 0.6, 0.8, 1.5, 2.5, 1.8, 1.2, 1.1, 1.0, 0.7, 0.6, 0.5];
    const newChartData = seasonalWaterUse.map((season, index) => ({
      month: new Date(0, index).toLocaleString('en-US', { month: 'short' }),
      WaterUse: (convertedWater.liters / 12) * season,  // Assuming average monthly usage
    }));

    setChartData(newChartData);
    setResults({
      totalWaterUseLiters: convertedWater.liters.toFixed(2),
      totalWaterUseGallons: convertedWater.gallons.toFixed(2),
      waterFootprint: waterFootprint.toFixed(2),
    });
  };

  return (
    <div className='py-9 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-200'>
  <div className='max-w-4xl mx-auto mt-[55px] p-6 bg-white shadow-2xl rounded-3xl transition-all hover:shadow-3xl'>
    
    
    <h2 className='text-4xl font-bold mb-6 text-blue-800 text-center'>Agricultural Water Footprint Calculator</h2>

    <div>
      <Translator/>
    </div>

    <form onSubmit={handleSubmit} className='space-y-6'>
      {/* Basic Information */}
      <fieldset className='border p-6 bg-blue-50 rounded-lg shadow-sm'>
        <legend className='font-semibold text-blue-700 mb-2 text-xl'>Basic Information</legend>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-800'>Farmers Name:</label>
            <input type='text' name='farmerName' value={formData.farmerName} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Farm Name:</label>
            <input type='text' name='farmName' value={formData.farmName} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <label className='block text-gray-800'>Location:</label>
            <input type='text' name='location' value={formData.location} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Date:</label>
            <input type='date' name='date' value={formData.date} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
        </div>
        <div className='mt-4'>
          <label className='block text-gray-800'>Contact Information:</label>
          <input type='text' name='contactInfo' value={formData.contactInfo} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
        </div>
      </fieldset>

      {/* Crop Information */}
      <fieldset className='border p-6 bg-blue-50 rounded-lg shadow-sm'>
        <legend className='font-semibold text-blue-700 mb-2 text-xl'>Crop Information</legend>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-800'>Crop Type:</label>
            <select name='cropType' value={formData.cropType} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all'>
              <option value=''>Select Crop Type</option>
              {cropTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            

          </div>
          <div>
            <label className='block text-gray-800'>Variety of Crop:</label>
            <select name='cropVariety' value={formData.cropVariety} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all'>
              <option value=''>Select Crop Variety</option>
              {formData.cropType && (cropVarieties as Record<string, string[]>)[formData.cropType]?.map(variety => (
                <option key={variety} value={variety}>{variety}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <label className='block text-gray-800'>Planting Date: </label>
            <input type='date' name='plantingDate' value={formData.plantingDate} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Harvest Date:</label>
            <input type='date' name='harvestDate' value={formData.harvestDate} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <label className='block text-gray-800'>Crop Area (in hectares): <span className='text-red-600'>*</span></label>
            <input type='number' name='cropArea' value={formData.cropArea} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Crop Yield (tons per hectare): <span className='text-red-600'>*</span></label>
            <input type='number' name='cropYield' value={formData.cropYield} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
        </div>
      </fieldset>

      {/* Water Usage */}
      <fieldset className='border p-6 bg-blue-50 rounded-lg shadow-sm'>
        <legend className='font-semibold text-blue-700 mb-2 text-xl'>Water Usage</legend>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-gray-800'>Recyled Water (mm): <span className='text-red-600'>*</span></label>
            <input type='number' name='greenWater' value={formData.greenWater} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Ground Water (mm): <span className='text-red-600'>*</span></label>
            <input type='number' name='blueWater' value={formData.blueWater} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Stored Water (mm): <span className='text-red-600'>*</span></label>
            <input type='number' name='greyWater' value={formData.greyWater} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <div>
            <label className='block text-gray-800'>Rainfall (mm): <span className='text-red-600'>*</span></label>
            <input type='number' name='rainfall' value={formData.rainfall} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
          <div>
            <label className='block text-gray-800'>Irrigation (cubic meters): <span className='text-red-600'>*</span></label>
            <input type='number' name='irrigation' value={formData.irrigation} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' />
          </div>
        </div>
      </fieldset>

      {/* Additional Information */}
      <fieldset className='border p-6 bg-blue-50 rounded-lg shadow-sm'>
        <legend className='font-semibold text-blue-700 mb-2 text-xl'>Additional Information</legend>
        <div>
          <label className='block text-gray-800'>Fertilizers Used:</label>
          <textarea name='fertilizers' value={formData.fertilizers} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' rows={3}></textarea>
        </div>
        <div>
          <label className='block text-gray-800'>Pesticides Used:</label>
          <textarea name='pesticides' value={formData.pesticides} onChange={handleChange} className='w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition-all' rows={3}></textarea>
        </div>
      </fieldset>

      {/* Submit Button */}
      <div className='text-center mt-6'>
        <button type='submit' className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 transition-all'>Calculate</button>
      </div>
    </form>

    {/* Results Section */}
      {/* <div className='bg-green-100 rounded-2xl p-5 mt-4 shadow-xl'> */}
      {results && (
        <div className='bg-green-100 rounded-2xl p-5 mt-4 shadow-lg'>
      <div className='mt-8'>
        <h3 className='text-2xl font-bold mb-4 text-green-800'>Results</h3>
        <p>Total Water Use: <span className='font-bold text-green-600'>{results.totalWaterUseLiters}</span> Liters (<span className='font-bold text-green-600'>{results.totalWaterUseGallons}</span> Gallons)</p>
        <p>Water Footprint: <span className='font-bold text-green-600'>{results.waterFootprint}</span> m³/ton</p>
      </div>
      {/* Chart Section */}
    {chartData.length > 0 && (
      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-4 text-green-800'>Seasonal Water Use</h3>
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='WaterUse' fill='#2e8d23' />
        </BarChart>
        <p className='text-sm mt-4 italic text-gray-500'>Note: The water usage values presented in the chart are approximate and based on the data provided by the farmer. Actual water usage may vary depending on additional factors such as unforeseen weather conditions, changes in irrigation practices, and variations in crop growth. Therefore, these values should be used as estimates and not definitive metrics.</p>
        <p className='text-sm mt-4 italic text-gray-500'>Note: The calculation of the water footprint is based on the input data provided by the farmer, including crop yield, water usage, and irrigation details. The accuracy of the water footprint may vary depending on the precision of the data entered and other influencing factors such as water evaporation, runoff, or crop-specific water requirements. These calculations provide an estimate and should be used as a guideline rather than an exact measurement.</p>
        
        <p>
          <Link href='/relatedvideos'>
            <Button className='mt-8 bg-blue-700 rounded-2xl px-6 py-5'>Watch Some Videos</Button>
          </Link>
          
        </p>
      </div>
    )}
      </div>
    )}

    
      </div>
    </div>
  


  );
};

export default Page;
