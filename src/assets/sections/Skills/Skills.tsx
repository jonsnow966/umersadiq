import CardSkills from "../../components/CardSkills/CardSkills";
import skills from '../../JSON/skills.json';

interface SkillsData{
  id?: number;
  title?: string;
  skillSet?: string[];
}

const Skills : React.FC = () => {
  
  const cardData : SkillsData[] = skills as SkillsData[];

  return (
    <div  id='about' className="w-full min-h-screen 
    flex flex-col justify-start items-center pt-5 pb-10
    bg-black">
      <h1 className="p-1 text-center text-4xl font-bold text-white mb-4 text-wrap">
        Skills & Technologies
      </h1>
      <hr className="w-24 border-t-4 border-blue-500 animate-pulse" />  
       
      <div className="w-full pt-15 px-4 gap-7
      md:px-5 2xl:px-[150px]
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      text-lg sm:text-xl lg:text-2xl xl:text-xl text-gray-400">
        {
          cardData.map(items =>(
            <CardSkills 
              title={items.title}
              skillSet = {items.skillSet}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Skills