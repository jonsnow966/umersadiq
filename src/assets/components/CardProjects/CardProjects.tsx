import { Code, LinkIcon, YoutubeIcon } from "lucide-react";
import type { JSX } from "react";

interface CardProjectProps {
    id?: number;
    icon?: string;
    title?: string;
    description?: string;
    link?: string;
    details?: string[];
    tech?: string[];
}

function CardProject({ icon, title, description, link, details, tech }: CardProjectProps) {
    const IconContainer: JSX.Element | null = icon === 'api' ? <Code size={'2rem'}/> :
    icon === 'airbnb' ? <img src='airbnb-icon.svg' alt="Airbnb Icon" width="28px" /> :
    icon === 'youtube' ? <YoutubeIcon size={'2rem'}/> : 
    icon === 'cartify' ? <img src='cartify-icon.svg' alt='Cartify Icon' width='28px'/>: null;

    const dummyLink = icon === 'cartify' ? 'apk.link/drive' : link;
    
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
                       <LinkIcon size={'1rem'}/>{dummyLink}
                    </a>
                </div>
            </div>
            
            <ul className="w-full h-fit mt-5
            flex flex-col justify-start items-start gap-3 ">
                <p className="text-white font-bold text-[1rem]">Key Features:</p>
                {details?.map((description, index) => (
                    <li className="flex justify-center items-start gap-2
                    text-[14px] text-gray-200" key={index}>
                        <span className="text-blue-300">&bull;</span>{description}</li>
                    ))}
            </ul>

            <ul className="w-full h-fit mt-5
            flex flex-wrap justify-start items-start gap-3 ">
                {tech?.map((point, index) => (
                    <li className="px-3 py-1 
                    rounded-full bg-inherit border border-blue-800
                    text-[12px] text-blue-300 hover:text-blue-300 font-bold" key={index}>{point}</li>
                    ))}
            </ul>
        </div>
    )
}

export default CardProject