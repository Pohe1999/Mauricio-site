import React, { useState, useEffect } from 'react';

const Projects = () => {
  const dataCards = [
    {
        title: 'Personal Website',
        images: ['/samuel-1.png', '/samuel-2.png', '/samuel-3.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: 'https://www.samuelhernandez.si',
      },
      {
        title: 'BankApp',
        images: ['/bank-1.png', '/bank-2.png', '/bank-3.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: 'https://bankappbymau.netlify.app',
      },
      {
        title: 'MarketPlace',
        images: ['/market-1.png', '/market-2.png', '/market-3.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: 'https://marketplacemau.netlify.app/',
      },
      {
        title: 'Payment Calculator',
        images: ['/calculator.png', '/calculator.png', '/calculator.png'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto doloremque enim odit sint',
        link: 'https://paymentcalculator.netlify.app',
      }
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 3) // 3 imágenes por tarjeta
    }, 4000) // Cambia la imagen cada 3 segundos (3000 milisegundos)

    return () => clearInterval(interval)
  }, [])

  return (
    <section name="projects" className="pt-20 lg:pt-[120px] py-20 sm:py-32 bg-blue-800 text-gray-200 sm:px-16 px-8">
      <h2 className='text-center text-4xl sm:text-6xl font-thin'>
        Projects
      </h2>
      <h4 className='font-extralight text-center py-5'>// Here are some of my projects, take a look!</h4>
      <p className='font-extralight text-center'>Swipe to see more</p>
      <div className="overflow-x-auto">
        <div className="flex whitespace-nowrap py-8">
          {dataCards.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 px-4 inline-block">
              <div className="bg-gray-200 rounded-2xl overflow-hidden mb-10 sm:w-[400px] w-[255px]">
                <img
                  src={card.images[currentImage]}
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center border-t-4 border-slate-900">
                  <h3 className="text-pink-600 font-normal sm:text-4xl text-2xl mb-4 block hover:text-primary sm:pb-10 pb-20">
                    {card.title}
                  </h3>
                  <a
                    target='_blank'
                    href={card.link}
                    className="font-extralight text-gray-900 text-xl border-2 border-blue-700 px-4 py-2 rounded-3xl"
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
  )
}

export default Projects
