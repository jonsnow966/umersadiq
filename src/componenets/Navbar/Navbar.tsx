import { useNavigate } from "react-router-dom"

interface NavbarProps {
  isActive: (path: string) => boolean;
  closeMenu: () => void;
}

export default function Navbar({ isActive, closeMenu }: NavbarProps){

const navigate = useNavigate();

const handleClick = (path: string) => {
    navigate(path);
    closeMenu();
};

const linkClass = (path: string) => 
    `flex items-center gap-2 
    px-6 py-3 
    text-lg 
    transition-colors ${
    isActive(path) ? "text-white " : "text-gray hover:text-primary"
    }`;

return(
    <div className="w-full h-full
    flex flex-col justify-start items-start gap-12
    shadow-sm z-50
    pb-20">
      <div className="flex flex-2 flex-col justify-start items-start 
      pt-10 pl-5 gap-5">
        <a className={linkClass("/")} onClick={() => handleClick("/")}>
          <span className="text-primary text-[40px] md:text-[30px]">#</span>
          <span className={`text-[40px] ${
          location.pathname === "/" ? "text-white" : "text-gray"
          }`}>home</span>
        </a>
        <a className={linkClass("/about")} onClick={() => handleClick("/about")}>
          <span className="text-primary text-[40px]">#</span>
          <span className={`text-[40px] ${
          location.pathname === "/about" ? "text-white" : "text-gray"
          }`}>about-me</span>
        </a>
        <a className={linkClass("/work")} onClick={() => handleClick("/work")}>
          <span className="text-primary text-[40px]">#</span>
          <span className={`text-[40px] ${
          location.pathname === "/work" ? "text-white" : "text-gray"
          }`}>works</span>
        </a>
        <a className={linkClass("/contact")} onClick={() => handleClick("/contact")}>
          <span className="text-primary text-[40px]">#</span>
          <span className={`text-[40px] ${
          location.pathname === "/contact" ? "text-white" : "text-gray"
          }`}>contact</span>
        </a>
      </div>

      <div className="w-full h-fit flex flex-1 flex-row justify-center items-center gap-4">
        <a href="https://github.com/jonsnow966" target="_blank" 
        className="cursor-pointer w-15">
          <img rel="icon" src="/icon-github.svg" className="w-full"></img>
        </a>

        <a href="https://www.linkedin.com/in/umer-sadiq-619615386" target="_blank" 
        className="cursor-pointer w-15">
          <img rel="icon" src="/icon-linkedin.svg" className="w-full"></img>
        </a>

        <a href="https://www.figma.com/files/team/1534145559889077837/user/1534145557215091001?fuid=1534145557215091001" 
        target="_blank" className="cursor-pointer w-15">
          <img rel="icon" src="/icon-figma.svg" className="w-full"></img>
        </a>
      </div>
    </div>
  )
}
