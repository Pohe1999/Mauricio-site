import React from 'react';

const Skills = () => {
  const skills = [
    {
        title: 'HTML',
        percent: '95',
        color: 'bg-orange-400',
        textColor: 'text-gray-200',
        logo: '/html-logo.png'
      },
      {
        title: 'CSS',
        percent: '70',
        color: 'bg-blue-500',
        textColor: 'text-gray-200',
      },
      {
        title: 'Tailwind CSS',
        percent: '90',
        color: 'bg-blue-300',
        textColor: 'text-gray-200',
      },
      {
          title: 'Bootstrap',
          percent: '90',
          color: 'bg-purple-400',
          textColor: 'text-gray-200',
      },
      {
          title: 'JavaSript',
          percent: '90',
          color: 'bg-yellow-300',
          textColor: 'text-slate-900',
      },
      {
          title: 'React',
          percent: '90',
          color: 'bg-blue-400',
          textColor: 'text-gray-200',
      },
      {
          title: 'Node',
          percent: '90',
          color: 'bg-green-500',
          textColor: 'text-gray-200',
      },
      {
          title: 'Express',
          percent: '90',
          color: 'bg-white',
          textColor: 'text-gray-900',
      },
      {
          title: 'Mongo DB',
          percent: '90',
          color: 'bg-green-400',
          textColor: 'text-gray-200',
      },
      {
          title: 'Github',
          percent: '90',
          color: 'bg-gray-900',
          textColor: 'text-gray-200',
      },
      {
          title: 'Excel',
          percent: '90',
          color: 'bg-green-800',
          textColor: 'text-gray-200',
      },
      {
          title: 'Ninox Database',
          percent: '90',
          color: 'bg-blue-600',
          textColor: 'text-gray-200',
      },
    // Agrega más habilidades con sus clases de colores aquí
  ];

  return (
    <div name="skills" className="min-h-screen sm:pt-0 pt-20 flex flex-col justify-center items-center bg-blue-800 text-gray-100">
      <div className=''>
        <h2 className='text-center text-4xl sm:text-6xl font-thin'>Skills</h2>
        <p className='font-thin text-center text-xl pt-4 px-4'>Here are the technologies I have studied and continue to learn.</p>
      </div>
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {skills.map((skill, index) => (
          <div key={index} className={`relative rounded-md overflow-hidden w-64 h-48 ${skill.color} ${skill.textColor} cursor-pointer`}>
            <div className="w-full h-full flex items-center justify-center text-center">
              <h3 className="text-5xl font-thin">{skill.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;