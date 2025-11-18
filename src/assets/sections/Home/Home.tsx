import { LinkedinIcon, Mail, MapPinIcon, PhoneIcon } from "lucide-react";
import Typewriter from "../../components/Typewriter/Typewriter";
import links from '../../JSON/links.json'

type ScrollProps = {
    scrollToSection: (sectionId: string) => void;
}

interface LinkData{
  mail?: string;
  linkedin?: string;
  phone?: string;
  location?: string;
}

const phrases = [
  'Web Developer',
  'React Developer',
  'Front-End Developer',
  'I Love to Develop.',
];

function Home({ scrollToSection }: ScrollProps) {
  
  const link : LinkData = links as LinkData;

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center 
    bg-linear-to-r from-gray-900 via-navy-blue-2 to-black">
      
      <h1 className="text-white font-bold 
      text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Umer<span className="text-blue-400 animate-pulse"> Sadiq</span>
      </h1>

      <div className="h-fit flex items-center justify-center mt-5 px-4">
        <Typewriter
          phrases={phrases}
          period={2000}
          typingSpeed={150}
          deletingSpeed={40}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:5xl text-blue-400"
        />
      </div>

      <p className=" sm:w-150 lg:w-180 
      mt-5 md:mt-10 sm:mt-8 px-5 sm:px-0
      text-center text-wrap 
      text-lg sm:text-xl md:text-2xl  text-gray-400">
        Proficient in React.js, 
        JavaScript and Tailwindcss. Passionate about crafting dynamic 
        interfaces and building scalable solutions.
      </p>

      <div className="w-3/4 md:w-fit
      flex flex-wrap justify-center items-center
      gap-x-5 gap-y-2 md:gap-5 mt-5 sm:mt-10">

        <a href={link.location}
        target="_blank" rel="noopener noreferrer"
        className=' flex justify-center items-center gap-2 
        text-[12px] sm:text-[14px] md:text-[16px]  text-gray-400 hover:text-blue-400'>
          <MapPinIcon size={'1rem'}/>
          Islamabad, Pakistan
        </a>

        <a href={link.phone}
        target="_blank" rel="noopener noreferrer"
        className=' flex justify-center items-center gap-2 
        text-[12px] sm:text-[14px] md:text-[16px]  text-gray-400 hover:text-blue-400'>
          <PhoneIcon size={'1rem'}/>
          +92333-2050848
        </a>

        <a href={link.mail}
        target="_blank" rel="noopener noreferrer"
        className=' flex justify-center items-center gap-2 
        text-[12px] sm:text-[14px] md:text-[16px]  text-gray-400 hover:text-blue-400'>
          <Mail size={'1rem'}/>
          umar9733@yahoo.com
        </a>
      </div>

      <div className="w-full h-fit flex justify-center items-center gap-5 mt-5 sm:mt-10 
      ">
        <button className="w-fit h-fit py-2 px-3 sm:py-3 sm:px-4 md:px-5 
        text-sm  
        rounded-[7px] bg-blue-600 text-white
        hover:scale-110 hover:shadow-2xl cursor-pointer
        transition-all duration-500 ease-in-out"
        onClick={() => scrollToSection('contact')}>
          Get in Touch
        </button>

        <button className="w-fit h-fit py-2 px-3 sm:py-3 sm:px-4 md:px-5 
        text-sm 
        rounded-[7px] bg-white text-gray-700
        hover:scale-110 hover:shadow-2xl hover:bg-gray-700 hover:text-white cursor-pointer
        transition-all duration-500 ease-in-out"
        onClick={() => scrollToSection('projects')}>
          View Projects
        </button>
      </div>

      <div className="w-full h-fit flex justify-center items-center gap-5 mt-5 md:mt-10">
        <a href={link.linkedin}
        target="_blank" rel="noopener noreferrer"
        className='flex justify-center items-center gap-2
        text-[12px] sm:text-[14px] md:text-[16px] text-gray-400 hover:text-blue-400 
        transition-all duration-500 ease-in-out hover:scale-110'>
          <LinkedinIcon />
        </a>

        <a href={link.mail}
        target="_blank" rel="noopener noreferrer"
        className='flex justify-center items-center gap-2
        text-[12px] sm:text-[14px] md:text-[16px] text-gray-400 hover:text-blue-400 
        transition-all duration-500 ease-in-out hover:scale-110'>
          <Mail/>
        </a>
      </div>
    </div>
  );
}

export default Home;