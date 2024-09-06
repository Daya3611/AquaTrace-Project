import React from 'react'

const members =  [
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

const mentor =[
  {
    img:'./img/demoF.jpg',
    name: 'Prof. Akshtha Chaitanya Jain',
    role: 'Mentor',
  }
];


function TeamMember() {
  return (
    <div className='px-7 py-3'>
  <div className='bg-white p-6 rounded-[55px] shadow-xl pb-9'>
    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-teal-500 pb-2 mb-4 mt-4 lg:mb-6'>
      Team Members
    </h1>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
      {members.map((member, index) => (
        <div key={index} className='bg-white rounded-[35px] shadow-xl hover:shadow-teal-200 hover:transform hover:-translate-y-1 transition-transform duration-300'>
          <img 
            src={member.img} 
            alt={member.name} 
            className='w-full h-[250px] sm:h-[300px] object-fill rounded-t-[35px]' 
          />
          <div className='p-4'>
            <h4 className='text-base sm:text-lg md:text-xl font-semibold'>{member.name}</h4>
            <p className='text-blue-500 text-sm sm:text-base'>{member.role}</p>
          </div>
        </div>
      ))}
    </div>

    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-teal-500 pb-2 mb-4 mt-9 lg:mb-6'>Mentor</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
      {mentor.map((member, index) => (
        <div key={index} className='bg-white rounded-[35px] shadow-xl hover:shadow-teal-200 hover:transform hover:-translate-y-1 transition-transform duration-300'>
          <img 
            src={member.img} 
            alt={member.name} 
            className='w-full h-[250px] sm:h-[300px] object-fill rounded-t-[35px]' 
          />
          <div className='p-4'>
            <h4 className='text-base sm:text-lg md:text-xl font-semibold'>{member.name}</h4>
            <p className='text-blue-500 text-sm sm:text-base'>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  )
}

export default TeamMember
