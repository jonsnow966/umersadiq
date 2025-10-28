function Footer() {

  const email = "umar9733@yahoo.com";
  const mailtoLink = `mailto:${email}`;

  return (
    <div className="w-full md:w-[80%] h-fit
    flex flex-col gap-8 sm:gap-10
    ">
      <div className="w-full flex flex-col gap-7 sm:gap-0 sm:flex-row">
        <div className="w-[90%] h-fit
        flex flex-col justify-start gap-2 pt-0.5
        ">
          <div className="w-full h-fit
          flex justify-start gap-2
          ">
            <div className="w-10
            flex justify-center items-center">
              <img rel="logo" alt="logo-main" src="/public/logo-main.png" 
              className="max-w-full max-h-full object-contain"></img>
            </div>

            <div className="flex justify-center items-center gap-1">
                <p className="text-white text-[20px]">Umer</p>
                <p className="text-white text-[20px]">Sadiq</p>
            </div>
          </div>
          <div className="w-full h-fit
          flex justify-start">
            <p className="text-white text-[16px]">Web designer and front-end developer</p>
          </div>
        </div>
        <div className="w-full sm:w-[20%] 
        flex justify-start items-center sm:items-start sm:flex-col gap-2
        transition-all duration-1000 ease-in-out
        sm:pt-[7px] 
        ">
          <p className="text-white font-bold text-xl">Connect: </p>
          <div className="w-fit 500:w-full
          flex justify-center sm:justify-start items-center gap-2">
              <a href="https://wa.me/03332050848" target="_blank" 
              className="w-10
              cursor-pointer flex justify-center items-center rounded-[20px] p-1 hover:bg-background-2">
                  <img rel="icon" src="/public/icon-whatsapp.svg" className="w-full"></img>
              </a>

              <a href={mailtoLink}
              className="w-11
              cursor-pointer
              rounded-[3px] hover:bg-background-2">
                  <img rel="icon" src="/public/icon-mail.svg" className="w-full"></img>
              </a>

              <a href="https://www.linkedin.com/in/umer-sadiq-619615386" target="_blank" 
              className="w-11
              cursor-pointer flex justify-center items-center rounded-[3px] p-1 hover:bg-background-2">
                  <img rel="icon" src="/public/icon-linkedin.svg" className="w-full"></img>
              </a>
          </div>
        </div>
      </div>
      <div className="w-full 
      flex justify-center">
        <p className="text-white text-[16px]">&copy; Copyright 2025. Developed by Umer</p>
      </div>

    </div>
  )
}

export default Footer
