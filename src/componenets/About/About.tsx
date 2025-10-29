import data from '../../assets/JSON/data.json';
import CardGenerator from '../CardGenerator/CardGenerator';

function About() {
  return (
  <div className="w-full
  flex flex-col
  pt-10 px-5 md:px-0 pb-20
  transition-all duration-1000 ease-in-out">

    <div className="w-full h-fit 
    flex flex-col md:flex-row justify-center items-start gap-10 md:gap-2
    pb-10">

      <div className="w-full md:w-[60%] 2xl:w-[80%] h-fit
      flex flex-col justify-start items-start 
      gap-4 lg:gap-4 xl:gap-6 
      pt-2 pr-0 md:pr-2 770:pr-4
      transition-all duration-1000 ease-in-out">
        <div>
          <h1 className="text-white text-4xl font-semibold">
            <span className="text-primary">/</span>
            about-me
          </h1>
            <p className="text-gray mt-4 text-2xl">
            Who am i?</p>
        </div>

        <p className="text-gray md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-xl">
          Hello, I'm Umer!</p>
        <p className="text-gray md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-xl">
          I'm a computer science graduate and a self-taught front-end developer based in Islamabad,
          Pakistan. I can develop responsive websites from scratch and raise them into modern user-friendly web
          experiences.</p>
        <p className="text-gray md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-xl">
          Transforming my creativity and knowledge into websites has been my passion for over a year. 
          I have been working to develop skills to further pursue a career as a front-end developer. I always 
          strive to learn about the newest technologies and frameworks.</p>
      </div>

      <div className="w-full md:w-[50%] lg:w-[40%] 2xl:w-[50%]  h-fit
      flex justify-center md:justify-end
      md:pt-7 lg:pt-0
      transition-all duration-1000 ease-in-out">
          <img rel="image" alt="pic-umer-1" src="/pic-about.png" 
          className="max-w-full object-contain"/> 
      </div>
    </div>

    <div className="w-full h-fit
    flex flex-col items-start gap-10
    px-5 md:px-0 pb-10 mt-10
    transition-all duration-1000 ease-in-out">
      <h1 className="text-white text-4xl font-semibold">
            <span className="text-primary">#</span>
            education
      </h1>
      <div className="w-full h-fit 
      flex justify-start items-center">
        <div className="w-full h-full 
        grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10 xl:gap-5">
          {data.map((degree) => (
              <CardGenerator key={degree.id} degree={degree} />
          ))}
        </div> 
      </div>
    </div>   
    
    <div className="w-full h-fit 
    flex flex-col items-start gap-10
    px-5 md:px-0 pb-20
    transition-all duration-1000 ease-in-out">
      <h1 className="text-white text-4xl font-semibold">
        <span className="text-primary">#</span>
        skills
      </h1>
      
      <div className="w-full h-full
      grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10 xl:gap-5">

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2
          border-b border-gray'>
            <p className="text-white text-2xl">
              Languages</p>
          </div>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2'>
            <p className="text-gray text-2xl">
              C++ JavaScript TypeScript<br/></p>
          </div>
        </div>
          
        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2
          border-b border-gray'>
            <p className="text-white text-2xl">
              Others</p>
          </div>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2'>
            <p className="text-gray text-2xl">
              HTML CSS SCSS</p>
          </div>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2
          border-b border-gray'>
            <p className="text-white text-2xl">
              Tools</p>
          </div>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2'>
            <p className="text-gray text-2xl">
              VS-Code Figma Git Grok Office</p>
          </div>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2
          border-b border-gray'>
            <p className="text-white text-2xl">
              Frameworks</p>
          </div>
          <div className='w-full h-fit
          flex justify-start items-center
          p-2'>
            <p className="text-gray text-2xl">
              React React-Native Node.js</p>
          </div>
        </div>
      </div> 
    </div>

    <div className="w-full h-fit 
    flex flex-col items-start gap-10
    px-5 md:px-0 pb-0
    transition-all duration-1000 ease-in-out">
      <h1 className="text-white text-4xl font-semibold">
        <span className="text-primary">#</span>
        my-fun-facts
      </h1>
      
      <div className="w-full h-full 
      grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10 xl:gap-5">

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <p className="text-gray text-2xl p-4">
            I like winter more than summer</p>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <p className="text-gray text-2xl p-4">
            I like to take long drives</p>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <p className="text-gray text-2xl p-4">
            I am a hardcore MCU fan</p>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <p className="text-gray text-2xl p-4">
            I prefer desi food over junk food</p>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <p className="text-gray text-2xl p-4">
            I'm happily un-married</p>
        </div>

        <div className='w-full h-fit
        flex flex-col justify-center items-center border border-gray'>
          <p className="text-gray text-2xl p-4">
            I hate diet and exercise</p>
        </div>
      </div> 
    </div>
  </div>
  )
}

export default About
