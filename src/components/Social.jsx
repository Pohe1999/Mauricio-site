import { FaInstagram, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa"
import SendMessage from "./SendMessage"

const Social = () => {

    return(
        <div name="social" className=''>

            {/* Social icons */}
            <div className='hidden sm:flex fixed flex-col top-[35%] left-0'>
                <ul>
                <li className='w-[250px] h-[55px] flex justify-between items-center ml-[-200px] hover:ml-[-180px] duration-300 bg-blue-600 rounded-lg'>
                    <a className='flex justify-end w-full text-white font-semibold' href="https://www.facebook.com/Mauricio.Portillo99/" target='_blank'><FaFacebookF className="text-4xl me-2" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 background rounded-lg bg-purple-500'>
                    <a className='flex justify-end w-full text-gray-100 pe-2' href="https://www.instagram.com/mauriciopgz/" target='_blank'><FaInstagram className="text-4xl" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center ml-[-200px] hover:ml-[-180px] duration-300 bg-green-500 text-white rounded-lg'>
                    <p>WhatsApp</p><SendMessage  />
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 background rounded-lg bg-gray-900'>
                    <a className='flex justify-end w-full text-gray-100 pe-2' href="https://github.com/Pohe1999" target='_blank'><FaGithub className="text-4xl" /></a>
                </li>
                </ul>
            </div>
    </div>
    )
}

export default Social