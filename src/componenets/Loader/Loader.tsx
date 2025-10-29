import React, { useState, useEffect } from 'react';

interface LoaderProps {
  className?: string; 
}

const Loader: React.FC<LoaderProps> = ({ className = '' }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    console.log('Dots:', dots); // Debug
    const interval = setInterval(() => {
      setDots((prev) => (prev === '' ? '.' : prev === '.' ? '..' : prev === '..' ? '...' : ''));
    }, 300); // 300ms per dot, 1.2s cycle
    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${className}`} style={{ backgroundColor: '#282C33' }}>
      <style>
        {`
          @keyframes fillProgress {
            0% { stroke-dashoffset: 283; }
            100% { stroke-dashoffset: 0; }
          }
          .dots {
            display: inline-block;
            width: 1.5em; /* Fixed width to prevent shift */
            text-align: left;
          }
        `}
      </style>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <svg className="absolute inset-0 z-0" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3F9BD966" // 40% opacity
              strokeWidth="1"
            />
          </svg>
          <svg className="absolute inset-0 z-10" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3F9BD9"
              strokeWidth="1"
              strokeDasharray="283"
              strokeDashoffset="283"
              strokeLinecap="round"
              className="animate-[fillProgress_3s_ease-in-out]"
            />
          </svg> 
          <img
            src="/logo-main.png"
            className="absolute inset-5 w-14 h-14 rounded-full z-20 animate-[spin_4s_linear_infinite]"
            alt="Loading Logo"
          />
        </div>
        <p className="text-lg font-bold animate-pulse" style={{ color: '#ABB2BF' }}>
          Loading<span className="dots">{dots}</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
