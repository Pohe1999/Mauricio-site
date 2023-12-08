import React, { useState, useEffect } from 'react'

const About = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/about-image-3.jpeg', // Ruta de la primera imagen
  ]

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div name="about" className="bg-blue-800 sm:h-screen py-20">
      <div>
        <h2 className="text-center text-4xl sm:text-6xl text-gray-300 font-thin">About Me</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-4xl mx-auto my-8">
        <div name="imagenes" className="md:w-1/2 md:order-1 mb-4 md:mb-0">
          <img
            className="sm:w-full sm:h-full w-[300px] h-[400px] rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-700 cursor-pointer"
            src={images[currentImage]}
            alt="Imagen sobre el tema del texto"
          />
        </div>
        <div className="sm:w-1/2 md:order-2 md:pl-8">
          <p className="text-xl text-gray-300 px-4 font-thin text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris non mi hendrerit, ac finibus lorem aliquet. Integer at est ut turpis fermentum auctor non id libero. <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla mauris non mi hendrerit, ac finibus lorem aliquet. Integer at est ut turpis fermentum auctor non id libero.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About