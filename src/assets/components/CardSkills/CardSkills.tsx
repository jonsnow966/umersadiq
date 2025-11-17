interface CardSkillsProps {
    heading?: string;
    text?: string[];
}

function CardSkills({ heading, text }: CardSkillsProps) {
    return (
        <div className="flex-1 h-fit
            flex flex-col justify-start items-start py-6 px-5 gap-7
            bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]
            transition-all duration-500 ease-in-out hover:scale-105 hover:translate-y-[-20px]
            hover:shadow-[0px_30px_0px_5px_rgba(0,0,0,0.2)]
            text-white hover:text-blue-400">

            <p className="font-extrabold text-[18px]">{heading}</p>
            <ul className="w-full h-fit 
            flex flex-wrap justify-start items-start gap-3 ">
            {text?.map((skill, index) => (
                <li className="px-3 py-[4px] 
                rounded-full bg-card-fav-blue 
                text-[12px] text-blue-300 hover:text-blue-300 font-bold" key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default CardSkills