import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="w-full
    flex flex-col gap-20
    pt-10 px-5 md:px-0 pb-20
    transition-all duration-1000 ease-in-out">

      <div className="w-full h-fit 
      flex flex-col md:flex-row justify-center items-start gap-10 md:gap-2">

        <div className="w-full md:w-[60%] 2xl:w-[80%] h-fit
        flex flex-col justify-start items-start  
        gap-10 md:gap-[53px]
        pt-2 pr-0 md:pr-2 770:pr-4
        transition-all duration-1000 ease-in-out">

            <h1 className="text-white text-2xl sm:text-2xl xl:text-4xl font-semibold">
              Umer is a <span className="text-primary">web designer </span>
              and <span className="text-primary">front-end developer</span>
            </h1>

            <p className="text-gray text-[18px] sm:text-xl xl:text-2xl">He crafts responsive websites where technologies meet creativity</p>

            <button className="w-fit 
            flex 
            py-1 px-3
            transition-all duration-1000 ease-in-out
            border border-primary  
            text-white text-[18px] lg:text-[22px]
            animate-pulse md:animate-none md:hover:animate-pulse
            cursor-pointer"
              onClick={() => navigate(`/contact`)}>
                  Contact me !!
            </button>
        </div>

        <div className="w-full md:w-[50%] lg:w-[40%] 2xl:w-[50%]  h-fit
        flex justify-center md:justify-end
        transition-all duration-1000 ease-in-out">
            <img rel="image" alt="pic-umer-1" src="/pic-home.png" 
            className="max-w-full object-contain animate-fade-in"/>
        </div>
      </div>

      <div className="w-full 
      flex justify-center items-center">
        <img rel="image" alt="quote" src="/quote-mobile.png" className="flex md:hidden max-w-full object-contain"/>
        <img rel="image" alt="quote" src="/quote-desktop.png" className="hidden md:flex max-w-[80%] object-contain"/>
      </div>
    </div>
  )
}

export default Home
