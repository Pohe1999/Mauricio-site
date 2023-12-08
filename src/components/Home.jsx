import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import MovingText from 'react-moving-text'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-20 sm:pt-0 bg-blue-800'>

        {/* Container */}
        <div name='hero' className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-pink-600 font-extralight px-9 text-3xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-normal px-9 text-gray-300'>Mauricio Portillo</h1>
            <h2 className='text-3xl sm:text-7xl font-light px-7 text-[#8892b0]'>
            <MovingText type="typewriter" duration='9000ms' 
              dataText={[
              "I'm a Front-end Dev",
              "Welcome",
              "Bienvenido . . ."
            ]} />
            </h2>
            <p className='text-gray-200 py-4 max-w-[700px] font-extralight text-lg px-9 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
               tenetur! Expedita quasi magni sunt consectetur doloribus dign
               issimos repellendus eum, deleniti nostrum in impedit itaque dolore officia omnis dolorem quisquam a.
            </p>
            <div className='px-9 flex justify-center sm:justify-start'>
                  <Link to="projects" smooth={true} duration={2500}>
                  <button className='group text-white border-2 px-6 py-20 rounded-full flex items-center hover:bg-pink-600 hover:border-pink-300 sm:duration-700'>
                    <p className='flex items-center font-thin text-xl'>
                    View projects <span className=''><HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300' /></span>
                    </p>
                    </button>

                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Home