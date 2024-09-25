import { Button } from '@/components/ui/button';
import React from 'react'


const relatedVideos = [
    {
        id: 1,
        title: "Drip Irrigation: The Ultimate Water Saver",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Button_dripper.JPG/1200px-Button_dripper.JPG",
        channel: "AgroTech Solutions",
        views: "500K",
        uploaded: "3 days ago",
      },
      {
        id: 2,
        title: "Smart Farming: Using Sensors for Water Conservation",
        thumbnail: "https://media.wired.com/photos/5909530976f462691f012799/master/pass/GettyImages-468171106.jpg",
        channel: "Future Farms",
        views: "1.1M",
        uploaded: "1 week ago",
      },
      {
        id: 3,
        title: "Rainwater Harvesting Techniques for Agriculture",
        thumbnail: "https://www.fao.org/images/devrtpwslibraries/bestpractices/this-rainwater-harvesting-system-uses-a-corrugated-roof-angled-to-catch-rainwater-and-drain-it-into-a-collection-tank-so-that-water-can-be-used-throughout-the-dry-season.-suco.jpg?sfvrsn=29cb3a6e_2",
        channel: "Green Agriculture",
        views: "650K",
        uploaded: "5 days ago",
      },
      {
        id: 4,
        title: "Mulching: Reducing Water Loss in Crops",
        thumbnail: "https://sswm.info/sites/default/files/inline-images/WANDER%202011.%20Mulching%20of%20staked%20tomatoes.jpg",
        channel: "Sustainable Farming Co.",
        views: "300K",
        uploaded: "2 days ago",
      },
      {
        id: 5,
        title: "Vertical Farming with Water Recirculation",
        thumbnail: "https://commercialwaste.trade/wp-content/uploads/2019/07/bigstock-Hydroponic-System-Young-Vegeta-298618252-1-1024x684.jpg",
        channel: "Urban Green",
        views: "900K",
        uploaded: "2 weeks ago",
      },
    // Add more related videos...
  ];


function page() {
  return (
    <div className="mt-[90px] p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Related Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedVideos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <div className='flex items-center gap-[185px]'>
                <p className="text-sm text-gray-500">{video.views} views • {video.uploaded}</p>
                <p className=''><Button className='bg-blue-700 rounded-3xl'>Watch Now</Button></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
