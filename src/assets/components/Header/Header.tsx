import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
// import Navbar from "../Navbar/Navbar";

type HeaderProps = {
    scrollToSection: (sectionId: string) => void;
    scrolled: boolean;
}

function Header({ scrollToSection, scrolled }: HeaderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navButtonRef = useRef<HTMLButtonElement | null>(null);
  const navlinkRef = useRef<HTMLAnchorElement | null>(null);

  const toggleNavbar = () =>{
    setIsOpen(!isOpen); 
  }


  return (
    <div className={`w-full h-full
    flex justify-between items-center px-5 sm:px-6 2xl:px-[150px]
    ${scrolled 
    ? 'bg-black border-b border-gray-800 shadow-[0px_1px_0px_5px_rgba(0,0,0,0.2)]' 
    : 'bg-linear-to-r from-gray-900 via-navy-blue-2 to-black'}`}>

      <h1 className="text-white font-bold text-2xl">Umer Sadiq</h1>

      <div className="hidden md:flex gap-8">
        <a onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 cursor-pointer">Home</a>
        <a onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 cursor-pointer">About</a>
        <a onClick={() => scrollToSection('skills')} className="text-white hover:text-blue-400 cursor-pointer">Skills</a>
        <a onClick={() => scrollToSection('experience')} className="text-white hover:text-blue-400 cursor-pointer">Experience</a>
        <a onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-400 cursor-pointer">Projects</a>
        <a onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-400 cursor-pointer">Contact</a>
      </div>

      <button
      className="w-8 h-8 
      flex md:hidden  items-center justify-center
      rounded-full 
      bg-inherit 
      border border-white cursor-pointer
      transition-transform duration-300 ease-in-out"
      aria-label="Toggle menu"

      onClick={toggleNavbar}
      ref={navButtonRef}
    >
      {isOpen ? (
        <X size={20} className="text-white" />
      ) : (
        <Menu size={20} className="text-white" />
      )}
    </button>

    <div className={`fixed top-[71px] right-0 z-100 
        flex items-center justify-center overflow-hidden equal-shadow
        transition-all duration-300 ease-in-out
        h-fit  border-t border-gray-700
        ${scrolled 
        ? 'bg-black' 
        : 'bg-[#000000dc]'}

        ${
        isOpen ? 'w-screen md:hidden' : 'w-0'
        }`}

        ref={navRef}>
          {/* <Navbar scrollToSection={scrollToSection}/> */}
        <div className="w-full h-fit flex flex-col gap-5 pl-10 pt-5  pb-5">
          <a ref={navlinkRef} 
          onClick={() => {scrollToSection('home'); toggleNavbar();}} 
          className="text-gray-200 hover:text-blue-400 cursor-pointer">
            Home
          </a>
          
          <a ref={navlinkRef} onClick={() => {scrollToSection('about'); toggleNavbar();}} 
          className="text-gray-200 hover:text-blue-400 cursor-pointer">
            About
          </a>

          <a ref={navlinkRef} onClick={() => {scrollToSection('skills'); toggleNavbar();}} 
          className="text-gray-200 hover:text-blue-400 cursor-pointer">
            Skills
          </a>

          <a ref={navlinkRef} onClick={() => {scrollToSection('experience'); toggleNavbar();}} 
          className="text-gray-200 hover:text-blue-400 cursor-pointer">
            Experience
          </a>

          <a ref={navlinkRef} onClick={() => {scrollToSection('projects'); toggleNavbar();}} 
          className="text-gray-200 hover:text-blue-400 cursor-pointer">
            Projects
          </a>
          
          <a ref={navlinkRef} onClick={() => {scrollToSection('contact'); toggleNavbar();}} 
          className="text-gray-200 hover:text-blue-400 cursor-pointer">
            Contact
          </a>
        </div>

    </div>

    </div>
  )
}

export default Header
