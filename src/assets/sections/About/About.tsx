import CardAbout from "../../components/CardAbout/CardAbout"


function About() {
  return (
    <div  id='about' className="w-full min-h-screen 
    flex flex-col justify-start items-center pt-5 pb-10
    bg-bg-gray">
      <h1 className="text-4xl font-bold text-white mb-4">About Me</h1> 
      <hr className="w-24 border-t-4 border-blue-500 animate-pulse" />
      
      <div className='w-full h-fit pt-15 px-1 sm:px-10 2xl:px-40
      flex flex-col lg:flex-row justify-center items-center gap-10'>
        
        <div className="w-full lg:w-1/2 
        flex flex-col justify-start items-center gap-5
        md:mt-10 sm:mt-8 px-5 sm:px-0
        text-lg sm:text-xl text-gray-200">
          <p className=" ">
            Front-End Dev Proficient in React.js, 
            JavaScript and Tailwindcss. Demonstrated ability 
            to craft dynamic interfaces and optimize performance.
          </p>

          <p className=" ">
            Expertise incudes integrating tailwindcss for dynamic styling, 
            React Hooks, React-Hook-Form, TanStack Query for state 
            management and flawless data fetching, 
            Zod and Yup for data validation. 
          </p>

          <p className=" ">
            Strong communicator and collaborative team player, committed to 
            delivering high-quality, user-centric solutions on time. Good at problem-solving
            and adapting to new technologies quickly to meet evolving project needs.
          </p>
        </div>
          
        <div className="w-full lg:w-1/2 
        grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-15  sm:gap-x-5 sm:gap-y-10
        md:mt-10 sm:mt-8 px-5 sm:px-0
        text-lg sm:text-xl lg:text-2xl xl:text-xl text-gray-400">
         
          <CardAbout 
            icon="dev"
            heading="Responsive & Adaptive Designs"
            text="Can develop responsive
            and user-friendly web interfaces using modern front-end technologies."
          />

          <CardAbout 
            icon="dev"
            heading="Responsive & Adaptive Designs"
            text="Can develop responsive
            and user-friendly web interfaces using modern front-end technologies."
          />

          <CardAbout 
            icon="dev"
            heading="Responsive & Adaptive Designs"
            text="Can develop responsive
            and user-friendly web interfaces using modern front-end technologies."
          />

          <CardAbout 
            icon="dev"
            heading="Responsive & Adaptive Designs"
            text="Can develop responsive
            and user-friendly web interfaces using modern front-end technologies."
          />  
        </div>
      </div>
    </div>
  )
}

export default About
