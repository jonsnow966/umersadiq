import {useState, useEffect, useRef} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Header() {
  const location = useLocation();
    const navigate = useNavigate();

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const navButtonRef = useRef<HTMLButtonElement | null>(null);

    const toggleNavbar = () =>{
        setIsNavOpen((prev) => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target as Node) &&
            navButtonRef.current &&
            !navButtonRef.current.contains(event.target as Node)
        ) {
            setIsNavOpen(false); 
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getDesktopLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `cursor-pointer hidden md:flex h-fit items-center transition-colors ${
        isActive
            ? "text-black"
            : "text-gray hover:text-primary"
        }`;
    };

    const isActive = (path: string) => location.pathname === path;
  return (
    <div className="w-full h-full 
    flex jusify-center items-center
    shadow-sm
    bg-background
    ">
      <div className="w-[70%] md:w-[30%] h-full
      flex justify-start items-center gap-3
      p-3 md:pl-1">

        <div className="w-10
        flex justify-center items-center">
          <img rel="logo" alt="logo-main" src="/logo-main.png" 
          className="max-w-full max-h-full object-contain"></img>
        </div>

        <div className="hidden xxs:flex justify-center items-center gap-1">
          <p className="text-white text-[20px]">Umer</p>
          <p className="text-white text-[20px]">Sadiq</p>
        </div>
      </div>

      <div className="w-[30%] md:w-[70%] h-full
      flex justify-end items-center gap-5 lg:gap-6
      pr-5 md:pr-0 pt-1 md:pt-0">

        <a className={getDesktopLinkClass("/home")}
        onClick={() => navigate("/")}>
          <span className="text-primary text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out">#</span>
          <span className={`text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out ${
          location.pathname === "/" ? "text-white" : "text-gray"
          }`}>home</span>
        </a>

        <a className={getDesktopLinkClass("/about")}
        onClick={() => navigate(`/about`)}>
          <span className="text-primary text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out">#</span>
          <span className={`text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out ${
          location.pathname === "/about" ? "text-white" : "text-gray"
          }`}>about-me</span>
        </a>

        <a className={getDesktopLinkClass("/work")}
        onClick={() => navigate(`/work`)}>
            <span className="text-primary text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out">#</span>
            <span className={`text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out ${
            location.pathname === "/work" ? "text-white" : "text-gray"
            }`}>works</span>
        </a>

        <a className={getDesktopLinkClass("/contact")}
        onClick={() => navigate(`/contact`)}>
          <span className="text-primary text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out">#</span>
          <span className={`text-[16px] lg:text-[20px] transition-all duration-900 ease-in-out ${
          location.pathname === "/contact" ? "text-white" : "text-gray"
          }`}>contact</span>
        </a>

        <button className="w-8 h-fit
        md:w-0 
        transition-all duration-1000
        hover:w-9
        cursor-pointer"
        onClick={toggleNavbar}
        ref={navButtonRef}>
          <img rel="icon" alt="icon-menu" src="/icon-menu-button.png" 
          className="w-[90%] hover:w-full transition-all duration-1000 ease-in-out"></img>
        </button>

        <div className={`h-screen
        fixed top-[71px] right-0 z-3 
        flex items-center justify-center 
        overflow-hidden shadow-sm
        transition-all duration-500 ease-in-out
        bg-[#282c33f5]
        ${isNavOpen ? 'w-screen xs:w-[350px] sm:w-[400px] md:hidden' : 'w-px'}`}
        ref={navRef}>
          <Navbar isActive={isActive} closeMenu={() => setIsNavOpen(false)}/>
        </div>
      </div>
    </div>
  )
}

export default Header
