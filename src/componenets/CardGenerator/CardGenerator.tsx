'use client';

import React, { useState } from 'react';

interface DegreeData {
  id: number;
  degree: string;
  program: string;
  image: string;
  instname: string;
  year: string;
  score: string;
}

const CardGenerator: React.FC<{ degree: DegreeData }> = ({ degree }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    /* -------------------------------------------------
       Click anywhere on the card → toggle state
       ------------------------------------------------- */
    <div
      onClick={toggle}
      className="w-full xs:w-[80%] sm:w-full h-70 md:h-80 
      relative 
      flex justify-center items-center 
      perspective-1200 cursor-pointer"
    >
      {/* ---------- BACK COVER (revealed when open) ---------- */}
      <div
        className={`
          absolute inset-0 z-0 flex flex-col items-start justify-center
          px-3 pt-5 md:pt-4 gap-1
          bg-background from-background-2 to-background rounded-xl shadow-md md:shadow-xl
          text-white text-[14px] xs:text-[16px] md:text-xl
          transition-opacity duration-1100 ease-in-out
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <p>
          <span className="text-primary">#major:</span>
          <br />
          {degree.program}
        </p>
        <p>
          <span className="text-primary">#institute:</span>
          <br />
          {degree.instname}
        </p>
        <p>
          <span className="text-primary">#years:</span>
          <br />
          {degree.year}
        </p>
        <p>
          <span className="text-primary">#percentage:</span>
          <br />
          {degree.score}
        </p>
      </div>

      {/* ---------- FOLDER (top layer) ---------- */}
      <div
        className={`
          absolute inset-0 z-10 flex flex-col preserve-3d
          transition-transform duration-1000 ease-in-out
          ${isOpen ? 'translate-z-20' : ''}
        `}
      >
        {/* ---- TOP TAB ---- */}
        <div
          className="
            h-fit w-[50%] flex items-center justify-center
            p-1 bg-background-2 rounded-t-xl shadow-lg
          "
          style={{ transformStyle: 'preserve-3d' }}
        >
          <p className="text-3xl md:text-4xl font-bold text-white">{degree.degree}</p>
        </div>

        {/* ---- BOTTOM PAGE (flips DOWN) ---- */}
        <div
          className={`
            h-[60%] w-full flex items-center justify-center
            bg-background-2 rounded-b-xl shadow-lg
            backface-hidden origin-bottom
            transition-all duration-1000 ease-in-out
            translate-y-0.5
            ${isOpen ? '-rotate-x-200' : ''}
          `}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img
            src={degree.image}
            alt={degree.instname}
            className="w-24 md:w-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CardGenerator;