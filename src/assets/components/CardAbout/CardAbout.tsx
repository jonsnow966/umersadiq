import { Code } from "lucide-react";
import type { JSX } from "react";

interface CardAboutProps {
    icon?: string;
    heading?: string;
    text?: string;
}

function CardAbout({ icon, heading, text }: CardAboutProps) {
    const IconContainer: JSX.Element | null = icon === 'dev' ? <Code size={'2rem'}/> : null;

    return (
        <div className="w-fit h-fit
            flex flex-col justify-center items-center py-5 px-5 gap-3 text-center
            bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]
            transition-all duration-500 ease-in-out hover:scale-105 hover:translate-y-[-20px]
            hover:shadow-[0px_30px_0px_5px_rgba(0,0,0,0.2)]">

            <p className="text-blue-500 animate-bounce">{IconContainer}</p>
            <p className="text-white font-bold text-[1rem]">{heading}</p>
            <p className="text-gray-400 text-[14px]">{text}</p>
        </div>
    )
}

export default CardAbout
