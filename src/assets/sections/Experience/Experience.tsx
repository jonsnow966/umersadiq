import CardExperience from "../../components/CardExperience/CardExperience"
import experience from '../../JSON/experience.json'

interface ExperienceData{
  id?:number,
  title?:string,
  companyName?:string;
  date?:string;
  location?:string;
  details?: string[];
  tools?: string[];
}

function Experience() {

  const cardData : ExperienceData [] = experience as ExperienceData [];

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
          {
            cardData.map(items =>(
              <CardExperience 
                title={items.title}
                companyName={items.companyName}
                date={items.date}
                location={items.location}
                details={items.details}
                tools={items.tools}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience