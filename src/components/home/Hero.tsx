'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ZelligePattern from '@/components/ZelligePattern';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', e.clientX.toString());
      document.documentElement.style.setProperty('--mouse-y', e.clientY.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hero Section - Split Screen Design */}
      <section className="relative min-h-screen hero-clip-path">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/5 to-taupe/5 z-0 pointer-events-none"></div>
        
        {/* Left Side - Full Height Image */}
        <div className="absolute top-0 left-0 w-full md:w-1/2 h-[calc(100vh-6rem)] mt-24 md:mt-28 flex items-center justify-center">
          <div className="relative h-[95%] w-auto aspect-[600/782] max-h-full group">
            {/* Image highlight overlay */}
            <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-navy/20 to-transparent group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none"></div>
            
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)] z-10 pointer-events-none"></div>
            
            {/* Animated border around image */}
            <div className="absolute inset-0 border-2 border-transparent hover:border-cream/20 transition-all duration-700 z-10"></div>
            
            <Image 
              src="/images/caftans/caftan1.jpg"
              alt="Moroccan caftan collection - model in red caftan"
              width={600}
              height={782}
              className="h-full w-auto transform transition-transform duration-15000 hover:scale-105 object-cover"
              priority
              quality={100}
            />
          </div>
        </div>
        
        {/* Right Side - Minimal Content */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-screen bg-cream flex items-center justify-center md:justify-start">
          {/* Fine line decoration */}
          <div className="absolute left-0 h-[60%] w-px bg-gradient-to-b from-transparent via-taupe/30 to-transparent hidden md:block"></div>
          
          {/* Moroccan Chandelier */}
          <div className="absolute top-0 right-[15%] w-40 h-80 pointer-events-none hidden md:block">
            {isClient ? (
              <>
                {/* Chandelier chain */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#E6C200]/20 to-[#E6C200]/20"></div>
                
                {/* Chandelier top */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border border-[#E6C200]/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#E6C200]/20"></div>
                </div>
                
                {/* Chandelier main body */}
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
                  {/* Outer geometric shape */}
                  <div className="relative w-32 h-32">
                    {/* Octagonal frame */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon 
                        points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" 
                        fill="none" 
                        stroke="rgba(230,194,0,0.3)" 
                        strokeWidth="1"
                      />
                      <polygon 
                        points="35,10 65,10 90,35 90,65 65,90 35,90 10,65 10,35" 
                        fill="none" 
                        stroke="rgba(230,194,0,0.2)" 
                        strokeWidth="0.5"
                      />
                      
                      {/* Central circle */}
                      <circle cx="50" cy="50" r="10" fill="none" stroke="rgba(230,194,0,0.3)" strokeWidth="0.5" />
                      
                      {/* Decorative lines */}
                      {[...Array(8)].map((_, i) => (
                        <line 
                          key={`line-${i}`}
                          x1="50" 
                          y1="50" 
                          x2={50 + 40 * Math.cos(i * Math.PI / 4)} 
                          y2={50 + 40 * Math.sin(i * Math.PI / 4)} 
                          stroke="rgba(230,194,0,0.15)" 
                          strokeWidth="0.5"
                        />
                      ))}
                    </svg>
                  </div>
                  
                  {/* Lower hanging elements */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={`hang-${i}`}
                        className="mx-2 w-px bg-gradient-to-b from-[#E6C200]/30 to-transparent relative"
                        style={{ 
                          height: i === 0 || i === 4 
                            ? `${Math.max(5, 6 - Math.abs(i - 2) * 3)}rem`
                            : `${Math.max(5, 10 - Math.abs(i - 2) * 3)}rem`,
                          marginTop: i === 0 || i === 4 ? '-0.5rem' : '0'
                        }}
                      >
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-[#E6C200]/30"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Light glow effect */}
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-radial-pulse opacity-5 rounded-full"></div>
                
                {/* Golden light effect for chandelier */}
                <style jsx>{`
                  @keyframes golden-pulse {
                    0% { opacity: 0.4; }
                    50% { opacity: 0.7; }
                    100% { opacity: 0.4; }
                  }
                  
                  @keyframes golden-flicker {
                    0% { opacity: 0.5; }
                    25% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                    75% { opacity: 0.4; }
                    100% { opacity: 0.5; }
                  }
                  
                  .animate-golden-pulse {
                    animation: golden-pulse 4s ease-in-out infinite;
                  }
                  
                  .animate-golden-flicker {
                    animation: golden-flicker 2s ease-in-out infinite;
                  }
                `}</style>
                
                {/* Main light glow */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-60 h-60 rounded-full animate-golden-pulse"
                     style={{
                       background: 'radial-gradient(circle, rgba(230,194,0,0.15) 0%, rgba(230,194,0,0) 70%)',
                       boxShadow: '0 0 30px 10px rgba(230,194,0,0.1)'
                     }}>
                </div>
                
                {/* Secondary light effects */}
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full animate-golden-flicker"
                     style={{
                       background: 'radial-gradient(circle, rgba(230,194,0,0.2) 0%, rgba(230,194,0,0) 60%)',
                     }}>
                </div>
                
                {/* Bright center */}
                <div className="absolute top-35 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full"
                     style={{
                       background: 'radial-gradient(circle, rgba(230,194,0,0.3) 0%, rgba(230,194,0,0) 100%)',
                     }}>
                </div>
              </>
            ) : (
              // Placeholder during SSR to prevent hydration mismatch
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border border-[#E6C200]/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#E6C200]/20"></div>
              </div>
            )}
          </div>
          
          <div className="px-6 md:px-16 lg:px-24 py-16 w-full max-w-lg relative z-20">
            
            {/* Main Title */}
            <div className="relative mb-4 -ml-16">
              <h1 className="font-serif relative">
                <span className="text-5xl md:text-6xl lg:text-7xl block font-semibold -ml-24 animate-fade-in hover:text-navy transition-colors duration-500 cursor-default" style={{ color: '#0B1D51' }}>Moroccan</span>
                <span className="text-5xl md:text-6xl lg:text-7xl block font-semibold mt-[-5px] -ml-10 text-taupe animate-fade-in-up hover:text-[#8e9aaf] transition-colors duration-500 cursor-default">Elegance</span>
              </h1>
            </div>

            {/* Season Title */}
            <div className="flex items-center -ml-12 font-semibold opacity-80 mt-8 mb-6 group">
              <span className="uppercase tracking-widest text-xs -ml-24 animate-fade-in-up relative inline-block text-golden-glow">
                Spring / Summer Collection 2025
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-golden-glow to-transparent group-hover:w-full transition-all duration-500"></span>
              </span>
            </div>
            
            {/* Enhanced description with glass effect */}
            <div className="mb-8 -ml-12 animate-fade-in-up animation-delay-300">
              <div className="relative -ml-24 max-w-sm overflow-hidden glass-effect rounded-lg p-3">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#E6C200] animate-shimmer"></div>
                <p className="text-navy/90 pl-4 py-3 text-base md:text-lg font-light leading-relaxed tracking-wide">
                  Discover our collection of <span className="font-medium text-navy relative inline-block group">
                    handcrafted
                    <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-[#E6C200]/70 group-hover:bg-[#E6C200] transition-all duration-300"></span>
                  </span> traditional <span className="font-medium text-navy relative group">
                    Moroccan
                    <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-navy/50 group-hover:bg-navy transition-all duration-300"></span>
                  </span> garments
                </p>
                <div className="absolute bottom-0 left-4 right-0 h-[1px] bg-gradient-to-r from-taupe/40 via-[#E6C200]/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Discover Button */}
            <div className="mb-8 -ml-12">
              <Link href="/collections" 
                className="uppercase tracking-widest text-sm font-semibold border-b border-noir pb-1 transition-all hover:text-navy -ml-24 hover:border-navy hover:pb-2 animate-fade-in-up animation-delay-500 relative group inline-block overflow-hidden">
                <span className="relative z-10">Discover</span>
                <span className="absolute -bottom-[1px] left-0 w-0 h-px bg-navy group-hover:w-full transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-navy/5 group-hover:h-full -z-1 transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Overlay for better text readability on small screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir/20 to-transparent md:hidden"></div>
        
        {/* Moroccan Zellige Pattern in bottom right - showing more of the shape */}
        <ZelligePattern />
      </section>

      <svg height="0" width="0" className="absolute">
        <defs>
          <clipPath id="hero-wave-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.9 C0.8,1,0.7,0.9,0.5,0.9 C0.3,0.9,0.2,1,0,0.9 V0 Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}