import React, { useState, useEffect } from 'react';

const Projects = () => {
  const dataCards = [
    {
        title: 'Personal Website',
        images: ['/samuel-1.png', '/samuel-2.png', '/samuel-3.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: 'https://www.samuelhernandez.si',
      },
      {
        title: 'Project 2',
        images: ['/samuel-2.png', '/samuel-3.png', '/samuel-1.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: '/project2.html',
      },
      {
        title: 'Project 3',
        images: ['/samuel-2.png', '/samuel-3.png', '/samuel-1.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: '/project3.html',
      },
      {
        title: 'Project 4',
        images: ['/samuel-2.png', '/samuel-1.png', '/samuel-3.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: '/project4.html',
      },
      {
        title: 'Project 5',
        images: ['/samuel-2.png', '/samuel-3.png', '/samuel-1.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: '/project5.html',
      },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 3); // 3 imágenes por tarjeta
    }, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)

    return () => clearInterval(interval);
  }, []);

  return (
    <section name="projects" className="pt-20 lg:pt-[120px] py-20 sm:py-32 bg-blue-800 text-gray-200 sm:px-16 px-8">
      <h2 className='text-center text-4xl sm:text-6xl font-thin'>
        Projects
      </h2>
      <div className="container pt-8 sm:w-[3000px] w-[320px]">
        <div className="sm:flex">
          {dataCards.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-gray-200 rounded-2xl overflow-hidden mb-10">
                <img
                  src={card.images[currentImage]}
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center border-t-4 border-slate-900">
                  <h3 className="text-pink-600 font-normal text-2xl mb-4 block hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="font-light text-black text-lg leading-relaxed mb-7 text-justify">
                    {card.description}
                  </p>
                  <a
                    target='_blank'
                    href={card.link}
                    className="inline-block py-2 px-7 border border-slate-900 rounded-full text-xl font-extralight text-black hover:border-primary hover:bg-primary transition"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
