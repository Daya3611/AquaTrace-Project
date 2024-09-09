"use client";
import React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", WaterUse: 186, WaterRecycle: 80 },
  { month: "February", WaterUse: 305, WaterRecycle: 200 },
  { month: "March", WaterUse: 237, WaterRecycle: 120 },
  { month: "April", WaterUse: 73, WaterRecycle: 190 },
  { month: "May", WaterUse: 209, WaterRecycle: 130 },
  { month: "June", WaterUse: 214, WaterRecycle: 140 },
];

const chartConfig = {
  WaterUse: {
    label: "Water Use",
    color: "#2563eb",
  },
  WaterRecycle: {
    label: "Water Recycled",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

function Graph() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-9">
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4 border-b-4 border-teal-500 pb-2">Water Usage Report</h2>
        <p className="text-base text-slate-600 mb-4">Monthly Average Report</p>
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-2">
            <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: chartConfig.WaterUse.color }}></span>
            <span className="text-lg font-semibold text-slate-900">Water Used</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: chartConfig.WaterRecycle.color }}></span>
            <span className="text-lg font-semibold text-slate-900">Water Recycled</span>
          </div>
        </div>
        <small className="text-sm text-gray-500 italic">
          Note: This data has been collected from various locations in the Mumbai, Navi Mumbai, and Thane regions for testing purposes. It may not be accurate.
        </small>
      </div>
      <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
        <div className="relative w-full">
          <ChartContainer 
            config={chartConfig} 
            className="w-full bg-slate-200 rounded-lg p-4 shadow-inner"
          >
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#4a4a4a' }} />
              <YAxis tick={{ fontSize: 12, fill: '#4a4a4a' }} />
              <Tooltip />
              <Bar dataKey="WaterUse" fill={chartConfig.WaterUse.color} radius={[4, 4, 0, 0]} />
              <Bar dataKey="WaterRecycle" fill={chartConfig.WaterRecycle.color} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}

export default Graph;
