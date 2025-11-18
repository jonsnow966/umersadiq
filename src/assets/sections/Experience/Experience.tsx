import CardExperience from "../../components/CardExperience/CardExperience"

const firstCardArray : string[] = [
  'Delivered specialized technical support for blockchain-powered platforms and cryptocurrency exchange interfaces developed by Fexen, ensuring seamless user functionality and issue resolution.',
  'Designed and maintained user-centric support infrastructure, including dynamic "How It Works" interactive guides in Figma and detailed FAQ sections to empower users and elevate on boarding experiences.',
  'Concurrently initiated self-directed exploration into front-end development during tenure, acquiring foundational skills in HTML, CSS, JavaScript, and React.js to enhance technical proficiency and contribute to team projects.',
];

const firstPointArray : string[] = [
  'Zendesk',
  'Jira',
  'Blockchain',
  'MS Office',
  'Figma',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
];


const secondCardArray : string[] = [
  'Over the course of this self-directed learning journey, I have acquired foundational proficiency in HTML, CSS, TailwindCSS, JavaScript, and React.js.',
  'I excel in crafting responsive and component based engaging web experiences using TailwindCSS, seamlessly weaving pre-built dynamic components into bespoke layouts while adeptly integrating externally authored constructs into established project architectures.',
  'I am well-versed in leveraging React hooks—useState, useRef, useEffect, and useContext—to efficiently manage component life-cycle, state, and shared context.',
 'I am experienced with React Router for seamless navigation, react-hook-form for streamlined data input, and schema-based validation using Zod and Yup.',
 'I have hands-on familiarity with asynchronous patterns including callbacks and Promises for API interactions, alongside TanStack Query for robust, declarative data fetching, caching, and background synchronization.',
 'I possess a solid conceptual understanding of RESTful APIs, the Virtual DOM, and SPA architecture.',
];

const secondPointArray : string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TailwindCSS',
  'React Hooks',
  'React Router',
  'react-hook-form',
  'Zod',
  'Yup',
  'TanStack Query',
  'Fetch API', 
  'Promises',   
  'Virtual DOM',
  'SPA Architecture', 
  'Restful APIs',
];



function Experience() {
  return (
    <div  id='about' className="w-full min-h-screen
    flex flex-col justify-start items-center pt-5 pb-30
    bg-bg-gray">
      <h1 className="text-4xl font-bold text-white mb-4">Experience</h1> 
      <hr className="w-24 border-t-4 border-blue-500 animate-pulse" />
      
      <div className='w-full h-fit pt-15 px-1 sm:px-10 2xl:px-40
      flex flex-col lg:flex-row justify-center items-center gap-10'>
         
        <div className="w-full
        grid grid-cols-1 gap-x-10 gap-y-15  sm:gap-x-5 sm:gap-y-10
        md:mt-4 sm:mt-8 px-5 sm:px-0
        text-lg sm:text-xl lg:text-2xl xl:text-xl text-gray-400">
         
          <CardExperience 
            title="Self-Directed Front-End Developer Journey"
            company="Home-Based"
            date="August 2025 – Ongoing"
            location="Islamabad, Pakistan" 
            text={secondCardArray}
            points={secondPointArray}
          />

          <CardExperience 
            title="Technical Support Engineer"
            company="Fexen Smart Solutions"
            date="12/2024 - 9/2025"
            location="Islamabad, Pakistan" 
            text={firstCardArray}
            points={firstPointArray}
          />

          
        </div>
      </div>
    </div>
  )
}

export default Experience