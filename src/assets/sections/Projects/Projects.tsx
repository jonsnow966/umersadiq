import CardProject from "../../components/CardProjects/CardProjects";

const firstCardArray : string[] = [
  'Data input with react-hook-form', 
  'Manual user input validations', 
  'Promises for API calls', 
  'State management with tanStackQuery', 
  'Dark and Light Theme toggle via useContext', 
  'Responsive design with TailwindCSS.',
];

const firstPointArray : string[] = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'react-hook-form',
  'tanStackQuery',
  'Fetch API',
  'Dark Mode',
  'CRUD Operations',
];


const secondCardArray : string[] = [
  'Responsive design with TailwindCSS',
  'Page to page navigation with React Router',
  'Dynamic Card rendering from JSON data',
  'Deployment with Vercel',
];

const secondPointArray : string[] = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'React Router',
  'JSON',
  'Vercel',
];

const thirdCardArray : string[] = [
  'Responsive design with TailwindCSS',
  'Page to page navigation with React Router',
  'Dynamic Card rendering from JSON data',
  'Deployment with Vercel',
];

const thirdPointArray : string[] = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'React Router',
  'JSON',
  'Vercel',
];

function Projects() {
  return (
    <div  id='about' className="w-full min-h-screen
    flex flex-col justify-start items-center pt-5 pb-30
    bg-black">
      <h1 className="p-1 text-center text-4xl font-bold text-white mb-4 text-wrap">Featured Projects</h1>
      <hr className="w-24 border-t-4 border-blue-500 animate-pulse" />  
       
      <div className="w-full pt-15 px-4 gap-7
      md:px-5 2xl:px-[150px]
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      text-lg sm:text-xl lg:text-2xl xl:text-xl text-gray-400">
         
          <CardProject
            icon='api'
            title="API Integration Project"
            description="A simple project demonstrating API integration and CRUD Ops using React.js and Fetch API."
            link="api-demo-3.vercel.app"
            text={firstCardArray}
            points={firstPointArray}
            status="Complete"
          />

          <CardProject
            icon='airbnb'
            title="Air Bnb Clone"
            description="A responsive Air Bnb clone built with React.js and TailwindCSS"
            link="air-bnb-app-3.vercel.app"
            text={secondCardArray}
            points={secondPointArray}
            status="In Progress"
          />

          <CardProject
            icon='youtube'
            title="YouTube Clone"
            description="A responsive YouTube clone built with React.js and TailwindCSS"
            link="youtube-app-jonsnow.vercel.app"
            text={thirdCardArray}
            points={thirdPointArray}
            status="Early Development Stage"
          />

          
        </div>
    </div>
  )
}

export default Projects