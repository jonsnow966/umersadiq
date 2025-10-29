function SidebarLeft() {
  return (
    <div className="md:w-fit h-0 md:h-fit
    flex flex-col justify-start items-center gap-3
    transition-all duration-800 ease-in-out
    pl-[10%]">
      <div className="w-0 h-0 md:h-50 transition-all duration-700 ease-in-out border-r-2 border-gray"></div>

      <a href="https://github.com/jonsnow966" target="_blank" className="w-0 md:w-10 cursor-pointer
      transition-all duration-700 ease-in-out rounded-3xl hover:bg-background-2">
          <img rel="icon" src="/icon-github.svg" className="w-full "></img> 
      </a>

      <a href="https://www.linkedin.com/in/umer-sadiq-619615386" target="_blank" className="w-0 md:w-10 cursor-pointer
      transition-all duration-700 ease-in-out rounded-[3px] hover:bg-background-2">
          <img rel="icon" src="/icon-linkedin.svg" className="w-full"></img>
      </a>

      <a 
      href="https://www.figma.com/files/team/1534145559889077837/user/1534145557215091001?fuid=1534145557215091001" 
      target="_blank" className="w-0 md:w-10 cursor-pointer rounded-[10px] 
      transition-all duration-700 ease-in-out hover:bg-background-2">
          <img rel="icon" src="/icon-figma.svg" className="w-full"></img>
      </a>
    </div>
  )
}

export default SidebarLeft
