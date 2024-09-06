"use client"
import React from "react"
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", WaterUse: 186, WaterRecycle: 80 },
  { month: "February", WaterUse: 305, WaterRecycle: 200 },
  { month: "March", WaterUse: 237, WaterRecycle: 120 },
  { month: "April", WaterUse: 73, WaterRecycle: 190 },
  { month: "May", WaterUse: 209, WaterRecycle: 130 },
  { month: "June", WaterUse: 214, WaterRecycle: 140 },
]

const chartConfig = {
  WaterUse: {
    label: "WaterUse",
    color: "#2563eb",
  },
  WaterRecycle : {
    label: "WaterRecycle",
    color: "#60a5fa",
  },
} satisfies ChartConfig




function Graph() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 px-4">
  <div className="flex flex-col  p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl font-semibold text-slate-900 mb-2 border-b-4 border-teal-500 pb-2 mt-2">Water Usage Report</h2>
    <p className="text-base text-slate-600 mt-3">Monthly Average Report</p>
    <p className="grid grid-cols-1">
        <div className="flex gap-2 text-center items-center">
            <span className="text-lg font-semibold text-slate-900">Water Is Used:</span>
            <span className="w-5 h-5 rounded-md bg-[#2563eb]"></span>
        </div>
        <div className="flex gap-2 text-center items-center">
            <span className="text-lg font-semibold text-slate-900">Water Is Recycled:</span>
            <span className="w-5 h-5 rounded-md bg-[#60a5fa]"></span>
        </div>
       
        <small  className="mt-9 font-mono italic">Note: This data has been collected from various locations in the Mumbai, Navi Mumbai, and Thane regions for testing purposes. It may not be accurate.
        </small>

        <p className="pt-6">
        Some Text/ imgs hose here
        </p>
        
    </p>
  </div>
  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
  <div className="relative w-full">
    <ChartContainer 
      config={chartConfig} 
      className="min-h-[200px] w-full bg-slate-200 rounded-lg shadow-inner p-4"
    >
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="WaterUse" fill="var(--color-WaterUse)" radius={4} />
        <Bar dataKey="WaterRecycle" fill="var(--color-WaterRecycle)" radius={4} />
      </BarChart>
    </ChartContainer>

    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 bg-white rounded-b-lg shadow-md">
      {chartData.map((entry, index) => (
        <p key={index} className="text-xs text-slate-600 text-center flex-1">
          {entry.month}
        </p>
      ))}
    </div>
  </div>
</div>

</div>

  )
}

export default Graph
