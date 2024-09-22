"use client"; 
import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
const page = () => {
  

  const faqs = [
    {
        question: "What is AquaTrace?",
        answer: "AquaTrace is a water footprint calculator designed to help farmers and individuals better understand their water usage."
    },
    {
        question: "How does AquaTrace calculate water usage?",
        answer: "AquaTrace uses a detailed algorithm to estimate water consumption based on various factors like irrigation practices, livestock, and crop types."
    },
    {
        question: "Who can benefit from using AquaTrace?",
        answer: "Farmers, agricultural managers, and individuals interested in understanding and optimizing their water usage can benefit from AquaTrace."
    },
    {
        question: "Is AquaTrace suitable for all types of farming?",
        answer: "Yes, AquaTrace is designed to accommodate various types of farming, including crop production, livestock management, and mixed farming operations."
    },
    {
        question: "What types of data does AquaTrace need to provide accurate calculations?",
        answer: "AquaTrace requires data on irrigation methods, crop types, livestock numbers, and any other water-related activities specific to the farming practices being assessed."
    },
    {
        question: "Can AquaTrace help reduce my water usage?",
        answer: "Yes, AquaTrace provides insights and recommendations on how to optimize water use, which can lead to reduced water consumption and increased efficiency."
    },
    {
        question: "How often should I update my data in AquaTrace?",
        answer: "It is recommended to update your data regularly, especially when there are significant changes in your farming practices or water usage patterns, to ensure accurate and relevant results."
    },
    {
        question: "Are there any costs associated with using AquaTrace?",
        answer: "AquaTrace offers various pricing plans, including free and subscription-based options, to cater to different needs and provide access to its full range of features."
    },
    {
        question: "How can I get started with AquaTrace?",
        answer: "You can get started by signing up on our website, entering your farming details into the calculator, and exploring the insights and recommendations provided."
    },
    {
        question: "Does AquaTrace offer support or resources for using the tool?",
        answer: "Yes, AquaTrace provides support through tutorials, user guides, and customer service to help users effectively utilize the tool and make the most of its features."
    },
  ];

  return (
    <div className="mt-[90px] px-7">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-10">Frequently Asked Questions</h1>
        <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq,index) => (
             <Accordion type="single" collapsible key={index}>
             <AccordionItem value="item-1">
                 <AccordionTrigger className='bg-blue-100 px-2 rounded-lg border border-blue-600 text-md text-blue-900'>{faq.question}</AccordionTrigger>
                 <AccordionContent className='pt-2 bg-blue-50 rounded-b-xl p-3'>
                 {faq.answer}
                 </AccordionContent>
             </AccordionItem>
             </Accordion>
        ))}
        </div>

            

      </div>
    </div>
  );
};

export default page;
