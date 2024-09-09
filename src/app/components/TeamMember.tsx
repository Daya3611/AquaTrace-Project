import React from 'react';

const members = [
  {
    img: './img/demoF.jpg',
    name: 'Miss. Jyoti Umesh Gupta',
    role: 'Team Leader',
  },
  {
    img: './img/demoF.jpg',
    name: 'Miss. Kashish Sanjay Maurya',
    role: 'Team Member',
  },
  {
    img: './img/demoM.jpg',
    name: 'Mr. Sam Justin Charles Nadar',
    role: 'Team Member',
  },
  {
    img: './img/demoM.jpg',
    name: 'Mr. Dayanand Prasad Gawade',
    role: 'Team Member',
  },
  {
    img: './img/demoM.jpg',
    name: 'Mr. Asgar Akbar Khan',
    role: 'Team Member',
  },
  {
    img: './img/demoM.jpg',
    name: 'Mr. Sanjog Satyaprakash Ram',
    role: 'Team Member',
  },
];

const mentor = [
  {
    img: './img/demoF.jpg',
    name: 'Prof. Akshtha Chaitanya Jain',
    role: 'Mentor',
  }
];

function TeamMember() {
  return (
    <div className='px-4 py-8 bg-transparent'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        
        {/* Mentor Section */}
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-teal-500 pb-2 mb-6'>
          Mentor
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {mentor.map((member, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300'>
              <img 
                src={member.img} 
                alt={member.name} 
                className='w-full h-48 object-fill rounded-t-lg' 
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold text-gray-900'>{member.name}</h4>
                <p className='text-blue-600 text-sm'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-teal-500 pb-2 mb-6 mt-8'>
          Team Members
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {members.map((member, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300'>
              <img 
                src={member.img} 
                alt={member.name} 
                className='w-full h-48 object-fill rounded-t-lg' 
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold text-gray-900'>{member.name}</h4>
                <p className='text-blue-600 text-sm'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
