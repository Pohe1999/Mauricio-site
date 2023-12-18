import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Social from './Social'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-50 w-full h-[65px] flex font-thin justify-between items-center sm:ps-20 sm:pe-20 px-4 bg-blue-800'>
      <div className='px-3 sm:text-2xl text-xl border-2 border-gray-200 rounded-lg py-2 text-gray-100'>
        <a href="/" className='font-thin'>
            <img className='w-[200px] h-[40px]' src="/mauricio-logo.png" alt="site-logo" />
        </a>
      </div>

      {/* menu */}
      <ul className='hidden md:flex justify-between items-center space-x-5 text-white'>
        <li>
          <Link className='cursor-pointer hover:text-pink-600' to='home' smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-pink-600' to='about' smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-pink-600' to='skills' smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer hover:text-pink-600' to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li className='py-1 px-2 text-lg font-thin text-white border-2 border-gray-200 hover:border-pink-600 hover:text-pink-100 hover:shadow-2xl duration-700 rounded-lg cursor-pointer'>
          <Link to='contact' smooth={true} duration={1000}>
            Contact me
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 text-gray-200'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? 'hidden opacity-0 transition-opacity duration-300'
            : 'absolute top-0 left-0 w-full h-screen bg-blue-900 text-gray-200 opacity-95 flex flex-col justify-center items-center transition-all ease-in-out duration-300'
        }`}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={3000}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li className='sm:py-1 py-4 sm:px-2 px-4 sm:text-lg text-5xl font-thin text-white border-2 border-gray-200 hover:border-pink-600 hover:text-pink-100 hover:shadow-2xl duration-700 rounded-lg cursor-pointer'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={1000}>
            Contact me
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <Social />
    </div>
    </div>
  )
}

export default Navbar
