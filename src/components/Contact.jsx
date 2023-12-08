import React from 'react'
import SendMessage from './SendMessage'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-blue-800 flex justify-center items-center px-4 pt-16'>
        <form method='POST' action="https://getform.io/f/2b135768-3f66-408b-92fc-0a9643db2a05" className='flex flex-col max-w-[600px] w-full sm:hover:border-2 sm:duration-300 sm:hover:px-1 rounded-lg border-[#0a192f] sm:hover:border-pink-600'>
            <div className='pb-8'>
                <p className='text-center text-4xl sm:text-6xl font-thin text-gray-100'>Contact</p>
                <p className='text-gray-100 py-4 font-thin sm:text-center'>// Submit the form bellow to shoot me an email - mapogu99@gmail.com</p>
                <div className='flex justify-center font-thin text-gray-100 items-center'>
                    <p className='pe-2'>Or WharsApp me here: </p> <span className=' rounded-full px-1 py-1'><SendMessage /></span>
                </div>
            </div>
            <input className='bg-[#e0e8ff] p-2 rounded-lg' type="text" placeholder='Name' name="name" id="" />
            <input className='my-4 p-2 bg-[#e0e8ff] rounded-lg' type="email" placeholder='Type your Email' name="email" id="" />
            <textarea className='bg-[#e0e8ff] p-2 rounded-lg' name="message" rows="7" placeholder='Message'></textarea>
            <button className='text-gray-100 font-thin text-lg rounded-xl border-2 px-6 py-3 my-5 mx-auto hover:bg-pink-600 duration-700 hover:border-pink-300 flex items-center'>
                // Send Message!
            </button>
        </form>
    </div>
  )
}

export default Contact