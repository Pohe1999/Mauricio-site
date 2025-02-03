import React, { useState, useEffect } from 'react'

const About = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/profile-photo-1.jpg', // Ruta de la primera imagen
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
            Let me introduce myself. My name is Mauricio Portillo Gutierrez, and I'm 24 years old. I was born in Tecamac, State of Mexico, on May 21, 1999, and I've spent my entire life in this town, living peacefully and happily with my family. I have a pet, a Saint Bernard named Dalila, and also Bruce, a 14-year-old Schnauzer who still keeps us company. <br /> <br />
            Regarding my education, I completed university, earning a degree in Systems Engineering. After graduating, I continued my studies independently, seeking online courses and tech documentation. That's how I keep up with my ongoing self-education and learning in web development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
