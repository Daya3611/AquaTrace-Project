import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

function page() {

    const teamMembers = [
        {
          name: 'Akshatha Jain',
          role: 'Mentorr',         
          image: './img/demoF.jpg',
        },
        {
          name: 'Jyoti Gupta',
          role: 'Team Leader',
          image: './img/demoF.jpg',
        },
        {
          name: 'Kashish Maurya',
          role: 'Team Member',
          image: './img/demoF.jpg',
        },
        {
          name: 'Asgar Khan',
          role: 'Team Member',
          image: './img/demoM.jpg',
        },
        {
            name: 'Dayanand Gawade',
            role: 'Team Member',
            image: './img/demoM.jpg',
        },
        {
            name: 'Sam Justin Nadar',
            role: 'Team Member',
            image: './img/demoM.jpg',
        },
        {
            name: 'Sanjog Ram',
            role: 'Team Member',
            image: './img/demoM.jpg',
        },
      ];

   
      
  return (
    <div className="mt-[90px] px-7">
        <div className="bg-gradient-to-b from-blue-200 via-blue-100 to-white rounded-3xl shadow-lg border border-blue-300">
            <div className="container mx-auto py-12 px-8 text-center">
            <h1 className="text-5xl font-extrabold text-blue-900">About Us</h1>
            <p className="mt-6 text-md text-gray-700 leading-relaxed text-justify">
        <strong className='text-blue-800 text-lg'>AquaTrace: Empowering Farmers with Sustainable Water Usage Practices</strong>
        <br /><br />
        Water scarcity is one of the most pressing global challenges of our time, affecting millions of people and ecosystems around the world. As population growth and industrial expansion increase demand for water, it is essential to promote sustainable water usage practices to preserve this vital resource. Agriculture is a significant contributor to global water consumption, with farming accounting for roughly 70% of the worlds freshwater withdrawals. To address this critical issue, AquaTrace aims to help farmers better understand their water footprint and adopt practices that promote more efficient and sustainable water use.
        <br /><br />
        <strong className='text-blue-800 text-lg'>The Importance of Water Management in Agriculture</strong>
        <br /><br />
        Agriculture relies heavily on water for various processes, from crop irrigation to livestock management. The efficiency with which water is used can have profound impacts not only on farm productivity but also on the sustainability of water resources in surrounding communities and ecosystems. Poor water management can lead to over-extraction from rivers, lakes, and groundwater sources, which in turn can cause environmental degradation, reduce biodiversity, and contribute to the desertification of fertile lands.
        <br /><br />
        Moreover, the challenges posed by climate change have made water resources increasingly unpredictable. Shifts in rainfall patterns, rising temperatures, and more frequent droughts have made water management even more critical for farmers. As these environmental pressures intensify, it is essential to raise awareness among farmers about their water usage and encourage practices that reduce waste and optimize the use of this precious resource.
        <br /><br />
        This is where AquaTrace comes in. AquaTrace is a water footprint calculator designed to estimate water usage in daily activities, particularly in agriculture. By providing farmers with a clearer understanding of their water consumption patterns, we empower them to take action and make informed decisions about water management.
        <br /><br />
        <strong className='text-blue-800 text-lg'>AquaTraces Approach to Supporting Farmers</strong>
        <br /><br />
        Our mission at AquaTrace is to help farmers better understand the water footprint associated with their agricultural practices and provide them with actionable insights to optimize water use. Through our calculator, farmers can estimate how much water they use in different stages of farming, from irrigation to processing, and identify areas where improvements can be made.
        <br /><br />
        <strong className='text-blue-800 text-lg' >1. Customized Water Footprint Analysis</strong>
        <br /><br />
        AquaTrace provides farmers with detailed water footprint calculations tailored to their specific farming practices. Whether they are engaged in crop production, livestock management, or mixed farming, our tool helps them assess how much water is being used in various processes. This includes both direct water usage, such as for irrigation and livestock watering, as well as indirect water usage, such as the water embedded in feed production or fertilizer manufacturing.
        <br /><br />
        Understanding this comprehensive water footprint is the first step in making meaningful changes to reduce water waste and improve overall efficiency.
        <br /><br />
        <strong className='text-blue-800 text-lg'>2. Promoting Efficient Irrigation Practices</strong>
        <br /><br />
        One of the largest water expenditures in agriculture comes from irrigation. Many traditional irrigation methods, such as flood irrigation, are highly inefficient, leading to significant water losses through evaporation, runoff, or deep percolation. AquaTrace helps farmers identify more efficient irrigation techniques, such as drip irrigation or sprinkler systems, which can significantly reduce water usage without sacrificing crop yields.
        <br /><br />
        In addition to choosing the right irrigation method, AquaTrace promotes practices such as scheduling irrigation based on crop water requirements and local weather patterns. This helps farmers avoid over-watering and make more precise decisions about when and how much to irrigate, ensuring that crops receive the optimal amount of water.
        <br /><br />
        <strong className='text-blue-800 text-lg'>3. Encouraging Crop and Livestock Management Practices</strong>
        <br /><br />
        AquaTrace not only focuses on irrigation but also provides recommendations for improving water efficiency through better crop and livestock management practices. For example, farmers can be guided to choose drought-resistant crop varieties or adjust planting schedules to align with periods of higher rainfall, reducing the need for supplemental irrigation. Additionally, AquaTrace can help farmers evaluate the water footprint of different crops and livestock and make informed decisions about which products to grow or raise in order to minimize water use.
        <br /><br />
        In livestock farming, water usage is not limited to direct consumption by animals. AquaTrace helps farmers assess water embedded in feed production, drinking water, and water used for cleaning and processing. By identifying areas where water use can be optimized, farmers can significantly reduce their overall water footprint while maintaining productivity.
        <br /><br />
        <strong className='text-blue-800 text-lg'>4. Advocating for Water-Saving Technologies</strong>
        <br /><br />
        Technological advancements have provided new tools and solutions for improving water efficiency on farms. AquaTrace highlights various water-saving technologies and innovations that farmers can implement to reduce their water consumption. These technologies include sensors that monitor soil moisture levels, automated irrigation systems that adjust based on real-time data, and rainwater harvesting systems that collect and store rainwater for future use.
        <br /><br />
        By adopting these technologies, farmers can improve their water management practices, reduce their dependency on external water sources, and ensure that they are using water in the most sustainable and efficient manner possible.
        <br /><br />
        <strong className='text-blue-800 text-lg'>5. Fostering Community Awareness and Collaboration</strong>
        <br /><br />
        In addition to supporting individual farmers, AquaTrace emphasizes the importance of community-wide efforts to promote sustainable water use. Water scarcity is a collective issue, and solutions must be implemented at a regional or watershed level to be truly effective. AquaTrace encourages farmers to collaborate with local water management organizations, government agencies, and other stakeholders to implement best practices and advocate for policies that support sustainable water use in agriculture.
        <br /><br />
        Through education and awareness, AquaTrace seeks to inspire a cultural shift toward water conservation within farming communities. By helping farmers understand the larger environmental context of their water usage, AquaTrace fosters a sense of responsibility and stewardship for the earth’s limited water resources.
        <br /><br />
        <strong className='text-blue-800 text-lg'>Conclusion</strong>
        <br /><br />
        At AquaTrace, we believe that farmers are the stewards of the land and play a crucial role in addressing global water scarcity. By providing farmers with the tools and insights they need to assess and improve their water footprint, we empower them to adopt more sustainable and efficient water management practices. Our goal is to not only help farmers optimize their water use but also to contribute to the global effort to protect and preserve freshwater resources for future generations.
        <br /><br />
        Through tailored water footprint analysis, efficient irrigation practices, improved crop and livestock management, adoption of water-saving technologies, and community collaboration, AquaTrace offers a comprehensive approach to addressing water scarcity in agriculture. Together, we can build a more sustainable future where water resources are protected, and food security is ensured for all.
        </p>
        <p>
  <Link href='/faq'>
    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
      FAQ Page
    </button>
  </Link>
</p>

            </div>
        </div>

        <div className="mt-16">
  <h2 className="text-4xl font-semibold text-center text-blue-900">Meet Our Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 items-center">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="bg-gradient-to-b from-blue-100 to-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center p-6 border border-blue-200"
      >
        <h3 className="text-3xl font-bold text-blue-800">{member.name}</h3>
        <p className="mt-2 text-gray-600 text-md italic">{member.role}</p>
        {/* <div className="mt-4 bg-blue-600 text-white rounded-full px-4 py-2 shadow hover:bg-blue-700 transition duration-300">
          <button className="focus:outline-none">Learn More</button>
        </div> */}
      </div>
    ))}
  </div>
</div>


</div>

  )
}

export default page
