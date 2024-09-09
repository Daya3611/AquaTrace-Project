"use client";
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Button } from '@/components/ui/button'; // Adjust the import according to your file structure

type FormData = {
  cropType: string;
  cropVariety: string;
  harvestDate: string;
  cropArea: number;
  cropYield: number;
  greenWater: number;
  blueWater: number;
  greyWater: number;
  rainfall: number;
  irrigation: number;
  otherSources: number;
  irrigationType: string;
  irrigationEfficiency: number;
  irrigationSchedule: string;
  soilType: string;
  soilMoisture: number;
  climateData: {
    temperature: string;
    humidity: string;
    precipitation: string;
  };
  fertilizers: string;
  pesticides: string;
  waterConservation: string;
  waterCost: number;
  environmentalImpact: string;
  observations: string;
  suggestions: string;
};

const initialFormData: FormData = {
  cropType: '',
  cropVariety: '',
  harvestDate: '',
  cropArea: 0,
  cropYield: 0,
  greenWater: 0,
  blueWater: 0,
  greyWater: 0,
  rainfall: 0,
  irrigation: 0,
  otherSources: 0,
  irrigationType: '',
  irrigationEfficiency: 0,
  irrigationSchedule: '',
  soilType: '',
  soilMoisture: 0,
  climateData: {
    temperature: '',
    humidity: '',
    precipitation: '',
  },
  fertilizers: '',
  pesticides: '',
  waterConservation: '',
  waterCost: 0,
  environmentalImpact: '',
  observations: '',
  suggestions: '',
};

const irrigationTypes = ['Drip', 'Sprinkler', 'Surface'];
const irrigationSchedules = ['Daily', 'Weekly', 'Monthly'];
const soilTypes = ['Clay', 'Silt', 'Sand', 'Loam'];

const Page = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<{ totalWaterUseLiters: number; totalWaterUseGallons: number; waterFootprint: number } | null>(null);
  const [chartData, setChartData] = useState<{ month: string; WaterUse: number }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseFloat(value)
      }));
    } else if (type === 'date' || type === 'text') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else if (type === 'select-one') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else if (type === 'textarea') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example calculation logic
    const totalWaterUseLiters = formData.greenWater + formData.blueWater + formData.greyWater;
    const totalWaterUseGallons = totalWaterUseLiters * 0.264172;
    const waterFootprint = totalWaterUseLiters / formData.cropYield;

    setResults({
      totalWaterUseLiters,
      totalWaterUseGallons,
      waterFootprint
    });

    setChartData([
      { month: 'January', WaterUse: totalWaterUseLiters },
      // Add more data points as needed
    ]);
  };

  return (
    <div className='container mx-auto mt-[55px] p-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold mb-6'>Crop Water Use Calculator</h1>
        <form onSubmit={handleSubmit}>
          {/* Crop Details */}
          <fieldset className='border p-4 rounded mb-4'>
            <legend className='font-semibold'>Crop Details</legend>
            <div>
              <label className='block text-gray-700'>Crop Type:</label>
              <select name='cropType' value={formData.cropType} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Crop Type</option>
                {/* Add crop types as needed */}
                <option value='Wheat'>Wheat</option>
                <option value='Rice'>Rice</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Crop Variety:</label>
              <select name='cropVariety' value={formData.cropVariety} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'>
                <option value=''>Select Crop Variety</option>
                {/* Add crop varieties based on crop type */}
                <option value='Variety1'>Variety1</option>
                <option value='Variety2'>Variety2</option>
              </select>
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
          <fieldset className='border p-4 rounded mb-4'>
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
          <fieldset className='border p-4 rounded mb-4'>
            <legend className='font-semibold'>Climate Data</legend>
            <div>
              <label className='block text-gray-700'>Temperature (°C):</label>
              <input type='text' name='temperature' value={formData.climateData.temperature} onChange={e => setFormData(prev => ({
                ...prev,
                climateData: { ...prev.climateData, temperature: e.target.value }
              }))} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Humidity (%):</label>
              <input type='text' name='humidity' value={formData.climateData.humidity} onChange={e => setFormData(prev => ({
                ...prev,
                climateData: { ...prev.climateData, humidity: e.target.value }
              }))} className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Precipitation (mm):</label>
              <input type='text' name='precipitation' value={formData.climateData.precipitation} onChange={e => setFormData(prev => ({
                ...prev,
                climateData: { ...prev.climateData, precipitation: e.target.value }
              }))} className='w-full p-2 border border-gray-300 rounded' />
            </div>
          </fieldset>

          {/* Additional Fields */}
          <fieldset className='border p-4 rounded mb-4'>
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
              <label className='block text-gray-700'>Water Cost (USD):</label>
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

          <Button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Calculate</Button>
        </form>

        {/* Results and Chart */}
        {results && (
          <div className='mt-8'>
            <h3 className='text-xl font-bold mb-4'>Results</h3>
            <p>Total Water Use: {results.totalWaterUseLiters.toFixed(2)} liters ({results.totalWaterUseGallons.toFixed(2)} gallons)</p>
            <p>Water Footprint: {results.waterFootprint.toFixed(2)} liters per ton</p>
          </div>
        )}

        {results && chartData.length > 0 && (
          <div className='mt-8'>
            <h3 className='text-xl font-bold mb-4'>Seasonal Water Use</h3>
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
