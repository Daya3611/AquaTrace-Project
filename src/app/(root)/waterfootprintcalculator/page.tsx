"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { toast } from "sonner";
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
    // Ensure values are converted to numbers
const greenWaterValue = parseFloat(formData.greenWater) || 0;
const blueWaterValue = parseFloat(formData.blueWater) || 0;
const cropAreaValue = parseFloat(formData.cropArea) || 0;
const irrigationValue = parseFloat(formData.irrigation) || 0;
const otherSourcesValue = parseFloat(formData.otherSources) || 0;
const cropYieldValue = parseFloat(formData.cropYield) || 0;

const totalWaterUse = ((greenWaterValue + blueWaterValue) / 1000) * cropAreaValue + irrigationValue + otherSourcesValue; // mm to meters

// Calculate water footprint
const totalYield = cropYieldValue * cropAreaValue; // tons

if (totalYield === 0) {
  toast("Please ensure that crop yield and crop area are greater than zero.");
  return;
}

const waterFootprint = totalWaterUse / totalYield; // m³/ton

// Convert cubic meters to liters and gallons
const convertedWater = convertWater(totalWaterUse);


    // Set seasonal chart data (summer: Apr-May, monsoon: Jun-Sep, winter: Oct-Jan)
    const seasonalWaterUse = [0.5, 0.6, 0.8, 1.5, 2.5, 1.8, 1.2, 1.1, 1.0, 0.7, 0.6, 0.5];
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
    <div className='bg-gradient-to-r from-blue-100 via-green-50 to-orange-100 py-9 rounded-3xl' >
      <div className='max-w-4xl mx-auto mt-[55px] p-6 bg-white rounded-3xl'>
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
                {formData.cropType && (cropVarieties as Record<string, string[]>)[formData.cropType]?.map(variety => (
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
              <label className='block text-gray-700'>Crop Area (in hectares):</label>
              <input type='number' name='cropArea' value={formData.cropArea} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Crop Yield (tons per hectare):</label>
              <input type='number' name='cropYield' value={formData.cropYield} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Water Usage */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Water Usage</legend>
            <div>
              <label className='block text-gray-700'>Green Water (mm):</label>
              <input type='number' name='greenWater' value={formData.greenWater} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Blue Water (mm):</label>
              <input type='number' name='blueWater' value={formData.blueWater} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Grey Water (mm):</label>
              <input type='number' name='greyWater' value={formData.greyWater} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Rainfall (mm):</label>
              <input type='number' name='rainfall' value={formData.rainfall} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Irrigation (cubic meters):</label>
              <input type='number' name='irrigation' value={formData.irrigation} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Other Sources (cubic meters):</label>
              <input type='number' name='otherSources' value={formData.otherSources} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Irrigation Type:</label>
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
              <label className='block text-gray-700'>Soil Moisture (%):</label>
              <input type='number' name='soilMoisture' value={formData.soilMoisture} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Climate Data */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Climate Data</legend>
            <div>
              <label className='block text-gray-700'>Temperature (°C):</label>
              <input name='climateData.temperature' value={formData.climateData.temperature} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Humidity (%):</label>
              <input name='climateData.humidity' value={formData.climateData.humidity} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'/>
            </div>
            <div>
              <label className='block text-gray-700'>Precipitation (mm):</label>
              <input name='climateData.precipitation' value={formData.climateData.precipitation} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'/>
            </div>
          </fieldset>

          {/* Additional Information */}
          <fieldset className='border p-4 rounded'>
            <legend className='font-semibold'>Additional Information</legend>
            <div>
              <label className='block text-gray-700'>Fertilizers Used:</label>
              <textarea name='fertilizers' value={formData.fertilizers} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows={3}></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Pesticides Used:</label>
              <textarea name='pesticides' value={formData.pesticides} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows={3}></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Water Conservation Measures:</label>
              <textarea name='waterConservation' value={formData.waterConservation} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows={3}></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Water Cost (if applicable):</label>
              <input type='number' name='waterCost' value={formData.waterCost} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Environmental Impact:</label>
              <textarea name='environmentalImpact' value={formData.environmentalImpact} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows={3}></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Observations:</label>
              <textarea name='observations' value={formData.observations} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows={3}></textarea>
            </div>
            <div>
              <label className='block text-gray-700'>Suggestions:</label>
              <textarea name='suggestions' value={formData.suggestions} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' rows={3}></textarea>
            </div>
          </fieldset>

          <Button className='rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500' type='submit'>Calculate</Button>
        </form>

        {results && (
          <div className='mt-8'>
            <h3 className='text-xl font-bold mb-4'>Results</h3>
            <p>Total Water Use: <span className='font-bold text-blue-600'>{results.totalWaterUseLiters}</span>  Liters (<span className='font-bold text-blue-600'>{results.totalWaterUseGallons}</span> Gallons)</p>
            <p>Water Footprint: <span className='font-bold text-blue-600'>{results.waterFootprint}</span> m³/ton</p>
          </div>
        )}

        {chartData.length > 0 && (
          <div className='mt-8'>
            <h3 className='text-xl font-bold mb-4'>Seasonal Water Use</h3>
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='WaterUse' fill='#2428c9' />
            </BarChart>
            <p className='text-sm mt-4 italic text-gray-500'>Note: The water usage values presented in the chart are approximate and based on the data provided by the farmer. Actual water usage may vary depending on additional factors such as unforeseen weather conditions, changes in irrigation practices, and variations in crop growth. Therefore, these values should be used as estimates and not definitive metrics.</p>

        <p className='text-sm mt-4 italic text-gray-500'>Note: The calculation of the water footprint is based on the input data provided by the farmer, including crop yield, water usage, and irrigation details. The accuracy of the water footprint may vary depending on the precision of the data entered and other influencing factors such as water evaporation, runoff, or crop-specific water requirements. These calculations provide an estimate and should be used as a guideline rather than an exact measurement.</p>
          </div>
        )}
        

      </div>
    </div>
  );
};

export default Page;
