"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { toast } from "sonner";
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';


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
    <div className='py-9'>
      <div className={cn('mt-[55px] gap-7 px-6 py-6 md:px-20 w-full',results &&  'lg:grid grid-cols-2')}>
        {/* <h2 className='text-2xl font-bold mb-6'>Agricultural Water Footprint Calculator</h2> */}
        <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-3'>
          {/* Basic Information */}
          <fieldset className='border p-6 rounded-md h-fit'>
            <h1 className='font-semibold text-lg mb-3 -mt-2'>Basic Information</h1>
            <div>
              <div>
                <Label>Farmers Name:</Label>
                <Input type='text' name='farmerName' value={formData.farmerName} onChange={handleChange} />
              </div>
              <div>
                <Label>Farm Name:</Label>
                <Input type='text' name='farmName' value={formData.farmName} onChange={handleChange} />
              </div>
            </div>
            <div>
              <Label>Location:</Label>
              <Input type='text' name='location' value={formData.location} onChange={handleChange} />
            </div>
            <div>
              <Label>Date:</Label>
              <Input type='date' name='date' value={formData.date} onChange={handleChange} />
            </div>
            <div className='mt-4'>
              <Label>Contact Information:</Label>
              <Input type='text' name='contactInfo' value={formData.contactInfo} onChange={handleChange} />
            </div>
          </fieldset>

          {/* Crop Information */}
          <fieldset className='border p-6 rounded-md'>
            <h1 className='font-semibold text-lg mb-3 -mt-2'>Crop Information</h1>
            <div className='grid md:grid-cols-2 gap-2'>
              <div>
                <Label>Type:</Label>
                <Select defaultValue={cropTypes[0]} onValueChange={value => setFormData(prev => ({ ...prev, cropType: value }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Variety:</Label>
                <Select defaultValue={formData.cropVariety} onValueChange={value => setFormData(prev => ({ ...prev, cropVariety: value }))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Variety" />
                  </SelectTrigger>
                  <SelectContent>
                    {formData.cropType && (cropVarieties as Record<string, string[]>)[formData.cropType]?.map(variety => (
                      <SelectItem key={variety} value={variety}>{variety}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Planting Date:</Label>
              <Input type='date' name='plantingDate' value={formData.plantingDate} onChange={handleChange} />
            </div>
            <div>
              <Label>Harvest Date:</Label>
              <Input type='date' name='harvestDate' value={formData.harvestDate} onChange={handleChange} />
            </div>
            <div>
              <Label>Crop Area (in hectares):</Label>
              <Input type='number' name='cropArea' value={formData.cropArea} onChange={handleChange} />
            </div>
            <div>
              <Label>Crop Yield (tons per hectare):</Label>
              <Input type='number' name='cropYield' value={formData.cropYield} onChange={handleChange} />
            </div>
          </fieldset>

          {/* Water Usage */}
          <fieldset className='border p-6 rounded-md'>
            <h1 className='font-semibold text-lg mb-3 -mt-2'>Water Usage</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div>
                <Label>Green (mm):</Label>
                <Input type='number' name='greenWater' value={formData.greenWater} onChange={handleChange} />
              </div>
              <div>
                <Label>Blue (mm):</Label>
                <Input type='number' name='blueWater' value={formData.blueWater} onChange={handleChange} />
              </div>
              <div>
                <Label>Grey (mm):</Label>
                <Input type='number' name='greyWater' value={formData.greyWater} onChange={handleChange} />
              </div>
            </div>
            <div>
              <Label>Rainfall (mm):</Label>
              <Input type='number' name='rainfall' value={formData.rainfall} onChange={handleChange} />
            </div>
            <div>
              <Label>Irrigation (cubic meters):</Label>
              <Input type='number' name='irrigation' value={formData.irrigation} onChange={handleChange} />
            </div>
          </fieldset>

          {/* Additional Information */}
          <fieldset className='border p-6 rounded-md'>
            <h1 className='font-semibold text-lg mb-3 -mt-2'>Additional Information</h1>
            <div>
              <Label>Fertilizers Used:</Label>
              <Textarea name='fertilizers' value={formData.fertilizers} onChange={handleChange} rows={3}></Textarea>
            </div>
            <div>
              <Label>Pesticides Used:</Label>
              <Textarea name='pesticides' value={formData.pesticides} onChange={handleChange} rows={3}></Textarea>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className='text-center mt-6'>
            <Button type='submit' className='w-full' size="lg" variant="shine">Calculate</Button>
          </div>
        </form>

        {/* Results Section */}
        {/* <div className='bg-green-100 rounded-2xl p-5 md:mt-0 mt-4 shadow-xl'> */}
        {results && (
          <div className='border rounded-md p-5 mt-16 md:mt-0'>
            <div>
              <h3 className='text-xl font-bold mb-1'>Results</h3>
              <p className='text-sm text-muted-foreground'>Total Water Use: <span className='font-bold text-blue-600'>{results.totalWaterUseLiters}</span> Liters (<span className='font-bold text-blue-600'>{results.totalWaterUseGallons}</span> Gallons)</p>
              <p className='text-sm text-muted-foreground'>Water Footprint: <span className='font-bold text-blue-600'>{results.waterFootprint}</span> m³/ton</p>
            </div>
            {/* Chart Section */}
            {chartData.length > 0 && (
              <div className='mt-6'>
                {/* <h3 className='text-xl font-bold mb-4'>Seasonal Water Use</h3> */}
                <div className="md:flex items-center justify-center">
                  <BarChart width={400} className='!w-full !h-full max-w-2xl maxs-h-2xl' height={300} data={chartData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis className='text-xs' dataKey='month' />
                    {/* <YAxis className='text-xs'/> */}
                    <Tooltip contentStyle={{ borderRadius: '8px', height: 'fit-content', padding: "10px 15px", fontSize: "14px" }} />
                    <Bar dataKey='WaterUse' fill='#2563eb' radius={4} />
                  </BarChart>
                </div>
                <p className='text-sm md:mt-0 mt-4 italic text-muted-foreground'><span className='text-foreground'>Note:</span> The water usage values presented in the chart are approximate and based on the data provided by the farmer. Actual water usage may vary depending on additional factors such as unforeseen weather conditions, changes in irrigation practices, and variations in crop growth. Therefore, these values should be used as estimates and not definitive metrics.</p>
                <p className='text-sm md:mt-0 mt-4 italic text-muted-foreground'>The calculation of the water footprint is based on the input data provided by the farmer, including crop yield, water usage, and irrigation details. The accuracy of the water footprint may vary depending on the precision of the data entered and other influencing factors such as water evaporation, runoff, or crop-specific water requirements. These calculations provide an estimate and should be used as a guideline rather than an exact measurement.</p>
              </div>
            )}
          </div>
        )}


      </div>
    </div>



  );
};

export default Page;
