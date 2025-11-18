interface CardSkillsProps {
    title?: string;
    skillSet?: string[];
}

function CardSkills({ title, skillSet }: CardSkillsProps) {
    return (
        <div className="flex-1 h-fit
            flex flex-col justify-start items-start py-6 px-5 gap-7
            bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]
            transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-5
            hover:shadow-[0px_30px_0px_5px_rgba(0,0,0,0.2)]
            text-white hover:text-blue-400">

            <p className="font-extrabold text-[18px]">{title}</p>
            <ul className="w-full h-fit 
            flex flex-wrap justify-start items-start gap-3 ">
            {skillSet?.map((skill, index) => (
                <li className="px-3 py-1 
                rounded-full bg-card-fav-blue 
                text-[12px] text-blue-300 hover:text-blue-300 font-bold" key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default CardSkills