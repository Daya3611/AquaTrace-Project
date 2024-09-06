import React from 'react'

const members =  [
  {
    img:'./img/demoF.jpg',
    name: 'Prof. Akshatha Chaitanya Jain',
    role: 'Mentor',
  },
  {
    img:'./img/demoF.jpg',
    name: 'Miss. Jyoti Umesh Gupta',
    role: 'Team Leader',
  },
  {
    img:'./img/demoF.jpg',
    name: 'Miss. Kashish Sanjay Maurya',
    role: 'Team Member',
  },
  {
    img:'./img/demoM.jpg',
    name: 'Mr. Sam Justin Charles Nadar',
    role: 'Team Member',
  },
  {
    img:'./img/demoM.jpg',
    name: 'Mr. Dayanand Prasad Gawade',
    role: 'Team Member',
  },
  {
    img:'./img/demoM.jpg',
    name: 'Mr.Asgar Akbar Khan',
    role: 'Team Member',
  },
  {
    img:'./img/demoM.jpg',
    name: 'Mr. Sanjog Satyaprakash Ram',
    role: 'Team Member',
  },
];


function TeamMember() {
  return (
    <div className='px-4 py-3'>
  <div className='bg-white p-4 rounded-2xl shadow-xl'>
    <h1 className='text-3xl lg:text-4xl font-bold border-b-4 border-teal-500 pb-2 mb-4 lg:mb-6'>
      Team Members
    </h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {members.map((member, index) => (
        <div key={index} className='bg-white rounded-2xl shadow-lg'>
          <img 
            src={member.img} 
            alt={member.name} 
            className='w-full h-48 object-fill object-center rounded-t-2xl' 
          />
          <div className='p-4'>
            <h4 className='text-lg md:text-xl font-semibold'>{member.name}</h4>
            <p className='text-blue-500'>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default TeamMember
