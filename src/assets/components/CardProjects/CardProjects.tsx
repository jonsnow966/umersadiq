import { Code, LinkIcon, YoutubeIcon } from "lucide-react";
import type { JSX } from "react";

interface CardProjectProps {
    icon?: string;
    title?: string;
    description?: string;
    link?: string;  
    text?: string[];
    points?: string[];
    status?: string;
}

function CardProject({ icon, title, description, link, text, points, status }: CardProjectProps) {
    const IconContainer: JSX.Element | null = icon === 'api' ? <Code size={'2rem'}/> :
    icon === 'airbnb' ? <img src='airbnb-icon.svg' alt="Airbnb Icon" width="28px" /> :
    icon === 'youtube' ? <YoutubeIcon size={'2rem'}/> : null;

    const statusColor = status === 'Complete' ? 'text-green-500' : status === 'In Progress' ? 'text-yellow-500' : 'text-red-500';
    
    return (
        <div className="flex-1 h-fit
        flex flex-col justify-start items-start py-5 px-5 gap-3 text-left
        bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]">
            
            <div className="w-full h-fit flex flex-col justify-start items-start gap-5">
                <div className="w-full h-fit flex justify-start items-center gap-3">
                    <p className="text-blue-500">{IconContainer}</p>
                    <p className="text-white font-bold text-[1rem]">{title}</p>
                </div>
                <div className="w-full h-fit flex flex-col
                justify-start items-start md:justify-end gap-1 md:gap-3">
                    <p className="flex justify-center items-center gap-1 text-[16px] text-gray-200">
                        {description}
                    </p>
                    <a href={`https://${link}`} className="flex justify-center items-center
                     gap-2 text-[13px] text-blue-300 hover:underline" 
                     target="_blank" rel="noopener noreferrer">
                       <LinkIcon size={'1rem'}/>{link}
                    </a>
                </div>
            </div>
            
            <ul className="w-full h-fit mt-5
            flex flex-col justify-start items-start gap-3 ">
                <p className="text-white font-bold text-[1rem]">Key Features:</p>
                {text?.map((description, index) => (
                    <li className="flex justify-center items-start gap-2
                    text-[14px] text-gray-200" key={index}>
                        <span className="text-blue-300">&bull;</span>{description}</li>
                    ))}
            </ul>

            <ul className="w-full h-fit mt-5
            flex flex-wrap justify-start items-start gap-3 ">
                {points?.map((point, index) => (
                    <li className="px-3 py-1 
                    rounded-full bg-inherit border border-blue-800
                    text-[12px] text-blue-300 hover:text-blue-300 font-bold" key={index}>{point}</li>
                    ))}
            </ul>
            <p className="text-white font-bold text-[1rem] mt-10 
            flex justify-center items-center gap-2">Status: 
                <span className={statusColor}>{status}</span></p>
        </div>
    )
}

export default CardProject