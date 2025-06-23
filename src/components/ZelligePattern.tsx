'use client';

import React, { useEffect, useState } from 'react';

interface ZelligePatternProps {
  color?: string;
}

const ZelligePattern = ({ color = '#183661' }: ZelligePatternProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a placeholder during SSR and initial client render to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-50 pointer-events-none z-10 overflow-hidden">
        <div className="relative w-[600px] h-[600px] translate-x-[100px] translate-y-[100px]">
          {/* Empty placeholder to maintain layout */}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-50 pointer-events-none z-10 overflow-hidden">
      <div className="relative w-[600px] h-[600px] translate-x-[100px] translate-y-[100px]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background circle */}
          <circle cx="100" cy="100" r="95" fill="#F8F5ED" />
          
          {/* Additional inner circle */}
          <circle cx="100" cy="100" r="85" fill="#FAF7F0" stroke="#E6C200" strokeWidth="0.3" />
          
          {/* Central star pattern */}
          <g transform="translate(100,100)">
            {/* Blue petals */}
            {[...Array(12)].map((_, i) => (
              <path 
                key={`petal-${i}`}
                d={`M 0 0 L ${35 * Math.cos(i * Math.PI / 6)} ${35 * Math.sin(i * Math.PI / 6)} L ${40 * Math.cos((i + 0.5) * Math.PI / 6)} ${40 * Math.sin((i + 0.5) * Math.PI / 6)} L ${35 * Math.cos((i + 1) * Math.PI / 6)} ${35 * Math.sin((i + 1) * Math.PI / 6)} Z`}
                fill={color}
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            ))}
            
            {/* Golden accents on petals */}
            {[...Array(6)].map((_, i) => (
              <path 
                key={`golden-accent-${i}`}
                d={`M 0 0 L ${30 * Math.cos(i * Math.PI / 3)} ${30 * Math.sin(i * Math.PI / 3)} L ${32 * Math.cos((i + 0.1) * Math.PI / 3)} ${32 * Math.sin((i + 0.1) * Math.PI / 3)} L ${30 * Math.cos((i + 0.2) * Math.PI / 3)} ${30 * Math.sin((i + 0.2) * Math.PI / 3)} Z`}
                fill="#E6C200"
                stroke="#FFFFFF"
                strokeWidth="0.3"
              />
            ))}
            
            {/* Central black circle */}
            <circle cx="0" cy="0" r="15" fill="#222222" />
            <circle cx="0" cy="0" r="10" fill="#E6C200" strokeWidth="0.5" stroke="#FFFFFF" />
            <circle cx="0" cy="0" r="5" fill={color} />
            
            {/* Outer pattern elements */}
            {[...Array(8)].map((_, i) => (
              <g key={`outer-${i}`} transform={`rotate(${i * 45})`}>
                <path d={`M 45 0 L 55 -5 L 65 0 L 55 5 Z`} fill="#E6C200" stroke="#FFFFFF" strokeWidth="0.3" />
                <path d={`M 70 0 L 75 -8 L 85 0 L 75 8 Z`} fill={color} stroke="#FFFFFF" strokeWidth="0.3" />
              </g>
            ))}
          </g>
          
          {/* Border pattern */}
          <g>
            {[...Array(24)].map((_, i) => (
              <path 
                key={`border-${i}`}
                d={`M ${100 + 95 * Math.cos(i * Math.PI / 12)} ${100 + 95 * Math.sin(i * Math.PI / 12)} L ${100 + 95 * Math.cos((i + 0.7) * Math.PI / 12)} ${100 + 95 * Math.sin((i + 0.7) * Math.PI / 12)} L ${100 + 85 * Math.cos((i + 0.5) * Math.PI / 12)} ${100 + 85 * Math.sin((i + 0.5) * Math.PI / 12)} Z`}
                fill={i % 4 === 0 ? "#E6C200" : (i % 4 === 1 ? color : (i % 4 === 2 ? "#22A45D" : "#B2A59B"))}
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            ))}
          </g>
          
          {/* Golden accent ring */}
          <circle cx="100" cy="100" r="60" fill="none" stroke="#E6C200" strokeWidth="0.8" strokeDasharray="1,5" />
        </svg>
      </div>
    </div>
  );
};

export default ZelligePattern; 