import { Calendar, MapPinIcon } from "lucide-react";

interface CardExperienceProps {
    title?: string;
    company?: string;
    date?: string;
    location?: string;
    text?: string[];
    points?: string[];
}

function CardExperience({ title, company, date, location, text, points }: CardExperienceProps) {
    
    return (
        <div className="flex-1 h-fit
        flex flex-col justify-start items-start py-5 px-5 gap-3 text-left
        bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]">
            
            <div className="w-full h-fit flex flex-col md:flex-row justify-start items-start gap-3">
                <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
                    <p className="text-white font-bold text-[1rem]">{title}</p>

                    <p className="text-blue-400 text-[14px] animate-pulse">{company}</p>
                </div>
                <div className="w-full h-fit flex flex-col md:flex-row 
                justify-start items-start md:justify-end gap-1 md:gap-3">
                    <p className="text-gray-400 text-[14px] flex justify-center items-center gap-1">
                    <Calendar size={14} />{date}</p>

                    <p className="text-gray-400 text-[14px] flex justify-center items-center gap-1">
                    <MapPinIcon size={14} />{location}</p>
                </div>
            </div>
            
            <ul className="w-full h-fit mt-5
            flex flex-col justify-start items-start gap-3 ">
            {text?.map((description, index) => (
                <li className="flex justify-center items-start gap-2
                text-[14px] text-gray-200" key={index}>
                    <span className="text-blue-300">&bull;</span>{description}</li>
                ))}
            </ul>

            <ul className="w-full h-fit mt-5
            flex flex-wrap justify-start items-start gap-3 ">
            {points?.map((point, index) => (
                <li className="px-3 py-[4px] 
                rounded-full bg-inherit border border-blue-800
                text-[12px] text-blue-300 hover:text-blue-300 font-bold" key={index}>{point}</li>
                ))}
            </ul>
        </div>
    )
}

export default CardExperience