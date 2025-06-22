'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import FeaturedProducts from '@/components/FeaturedProducts';
import ZelligePattern from '@/components/ZelligePattern';
import { Cinzel_Decorative } from 'next/font/google';

const cinzel = Cinzel_Decorative({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Home() {
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
    <div className="flex flex-col bg-cream">
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
                <span className="text-5xl md:text-6xl lg:text-7xl block font-light -ml-24 animate-fade-in hover:text-navy transition-colors duration-500 cursor-default" style={{ color: '#0B1D51' }}>Moroccan</span>
                <span className="text-5xl md:text-6xl lg:text-7xl block font-light mt-[-5px] -ml-10 text-taupe animate-fade-in-up hover:text-[#8e9aaf] transition-colors duration-500 cursor-default">Elegance</span>
              </h1>
            </div>

            {/* Season Title */}
            <div className="flex items-center -ml-12 opacity-80 mt-8 mb-6 group">
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
                className="uppercase tracking-widest text-sm border-b border-noir pb-1 transition-all hover:text-navy -ml-24 hover:border-navy hover:pb-2 animate-fade-in-up animation-delay-500 relative group inline-block overflow-hidden">
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

      {/* Collections Section */}
      <section className="pt-8 pb-32 bg-cream relative overflow-hidden">
        
        {/* Moroccan pattern decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="#183661" strokeWidth="1" />
            <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke="#183661" strokeWidth="0.8" />
            <path d="M50,20 L80,50 L50,80 L20,50 Z" fill="none" stroke="#183661" strokeWidth="0.6" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#E6C200" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" fill="none" stroke="#E6C200" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10 pointer-events-none rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#E6C200" strokeWidth="1" />
            <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="none" stroke="#E6C200" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#183661" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="inline-block mb-6 relative">
              <span className="font-serif text-2xl text-navy/70 relative z-10">Our Collections</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-taupe/30 to-transparent"></div>
            </div>
            
            <h2 className="font-serif text-3xl md:text-6xl font-light mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
              TIMELESS HERITAGE
              <span className="block text-2xl mt-2 text-[#E6C200]/70 font-normal">MOROCCAN ELEGANCE</span>
            </h2>
            
            <p className="text-navy/80 max-w-lg mx-auto leading-relaxed mb-8">
              Discover our carefully curated collections that blend traditional craftsmanship with contemporary elegance.
            </p>
            
            {/* Decorative divider */}
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#E6C200]/40 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Caftan Collection Card */}
            <div className="group relative h-[70vh] overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-taupe/10">
              {/* Category label */}
              <div className="absolute top-6 left-6 z-30">
                <span className="inline-block px-3 py-1 bg-[#E6C200]/80 text-cream text-xs uppercase tracking-wider rounded-sm backdrop-blur-sm">
                  Featured
                </span>
              </div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-transparent z-10 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-cream/30 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-cream/30 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              
              {/* Decorative side line */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
              
              <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                {/* Background fill for empty space */}
                <div className="absolute inset-0 bg-[#f0ede5]"></div>
                
                {/* Caftan image - with custom styling */}
                <div className="relative h-full w-full max-w-[85%] mx-auto">
                  <Image 
                    src="/images/caftans/caftan3.jpg"
                    alt="Caftan collection"
                    fill
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                    priority
                  />
                </div>
                
                {/* Subtle radial gradient overlay */}
                <div className="absolute inset-0 bg-radial-subtle opacity-30 mix-blend-overlay pointer-events-none"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end z-20 p-8 md:p-12">
                <div className="text-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  {/* Decorative element */}
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-cream to-transparent mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  
                  {/* Decorative Moroccan symbol */}
                  <div className="w-12 h-12 mx-auto mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/70">
                      {/* Diamond shape */}
                      <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
                      {/* Inner diamond */}
                      <path d="M12,5 L19,12 L12,19 L5,12 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      {/* Center diamond */}
                      <path d="M12,8 L16,12 L12,16 L8,12 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                      {/* Center circle */}
                      <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="0.3" />
                      {/* Diamond accents */}
                      <path d="M12,2 L12,22" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M2,12 L22,12" stroke="currentColor" strokeWidth="0.3" />
                      {/* Decorative corners */}
                      <path d="M4,4 L7,7" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M20,4 L17,7" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M4,20 L7,17" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M20,20 L17,17" stroke="currentColor" strokeWidth="0.3" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-6">Caftans</h3>
                  
                  <p className="text-cream/90 max-w-xs mx-auto mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 text-sm md:text-base">
                    Elegant, handcrafted garments that embody Moroccan heritage with intricate embroidery and luxurious fabrics.
                  </p>
                  
                  <Link href="/categories/caftans" 
                    className="inline-block uppercase tracking-widest text-sm text-cream border border-cream/40 px-8 py-3 rounded-full hover:bg-cream/10 transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E6C200]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center">
                      <span>Explore Collection</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Quick view button */}
              <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <button className="p-2 bg-cream/10 hover:bg-cream/20 rounded-full backdrop-blur-sm transition-all duration-300 text-cream/90 hover:text-cream">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Jellaba Collection Card */}
            <div className="group relative h-[70vh] overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-taupe/10">
              {/* Category label */}
              <div className="absolute top-6 left-6 z-30">
                <span className="inline-block px-3 py-1 bg-navy/80 text-cream text-xs uppercase tracking-wider rounded-sm backdrop-blur-sm">
                  New Arrival
                </span>
              </div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-transparent z-10 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-cream/30 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-cream/30 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
              
              {/* Decorative side line */}
              <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
              
              <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                {/* Background fill for empty space */}
                <div className="absolute inset-0 bg-[#f0ede5]"></div>
                
                {/* Jellaba image - with custom styling */}
                <div className="relative h-full w-full max-w-[85%] mx-auto">
                  <Image 
                    src="/images/jellabas/jellaba2.jpg"
                    alt="Jellaba collection"
                    fill
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                  />
                </div>
                
                {/* Subtle radial gradient overlay */}
                <div className="absolute inset-0 bg-radial-subtle opacity-30 mix-blend-overlay pointer-events-none"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end z-20 p-8 md:p-12">
                <div className="text-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  {/* Decorative element */}
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-cream to-transparent mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  
                  {/* Decorative Moroccan symbol */}
                  <div className="w-12 h-12 mx-auto mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/70">
                      {/* Diamond shape */}
                      <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
                      {/* Inner diamond */}
                      <path d="M12,5 L19,12 L12,19 L5,12 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      {/* Center diamond */}
                      <path d="M12,8 L16,12 L12,16 L8,12 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                      {/* Center circle */}
                      <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="0.3" />
                      {/* Diamond accents */}
                      <path d="M12,2 L12,22" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M2,12 L22,12" stroke="currentColor" strokeWidth="0.3" />
                      {/* Decorative corners */}
                      <path d="M4,4 L7,7" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M20,4 L17,7" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M4,20 L7,17" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M20,20 L17,17" stroke="currentColor" strokeWidth="0.3" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-6">Jellabas</h3>
                  
                  <p className="text-cream/90 max-w-xs mx-auto mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 text-sm md:text-base">
                    Traditional Moroccan robes with distinctive designs, combining comfort and elegance for everyday sophistication.
                  </p>
                  
                  <Link href="/categories/jellabas" 
                    className="inline-block uppercase tracking-widest text-sm text-cream border border-cream/40 px-8 py-3 rounded-full hover:bg-cream/10 transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E6C200]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center">
                      <span>Explore Collection</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Quick view button */}
              <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <button className="p-2 bg-cream/10 hover:bg-cream/20 rounded-full backdrop-blur-sm transition-all duration-300 text-cream/90 hover:text-cream">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative footer element */}
          <div className="mt-20 flex justify-center">
            <div className="relative w-40 h-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-taupe/30 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-[#E6C200]/30 flex items-center justify-center bg-cream">
                  <div className="w-2 h-2 rounded-full bg-[#E6C200]/50"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* View all collections button */}
          <div className="mt-12 text-center">
            <Link href="/collections" className="inline-flex items-center justify-center px-8 py-3 border border-taupe/30 rounded-full text-navy hover:text-[#E6C200] transition-all duration-300 group">
              <span className="mr-2">View All Collections</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Beautiful horizontal line separator */}
          <div className="mt-20 flex justify-center">
            <div className="relative w-full max-w-3xl h-16 flex items-center justify-center">
              {/* Main horizontal line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6C200]/40 to-transparent"></div>
              
              {/* Decorative elements on the line */}
              <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C200]/30 rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 border border-[#E6C200]/40 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#E6C200]/50 rounded-full"></div>
              </div>
              <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C200]/30 rounded-full"></div>
              
              {/* Moroccan-inspired decorative elements */}
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/40">
                  <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M12,6 L18,12 L12,18 L6,12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
                </svg>
              </div>
              
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/40">
                  <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M12,6 L18,12 L12,18 L6,12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add CSS for radial gradient */}
        <style jsx>{`
          .bg-radial-subtle {
            background: radial-gradient(circle at center, rgba(230,194,0,0.05) 0%, rgba(0,0,0,0) 70%);
          }
        `}</style>
      </section>

      {/* Featured Products Section - Caftans */}
      <FeaturedProducts 
        category="caftan" 
        title="FEATURED CAFTANS" 
        className="bg-cream pt-0 pb-32" 
      />

      {/* Featured Products Section - Jellabas */}
      <FeaturedProducts 
        category="jellaba" 
        title="FEATURED JELLABAS" 
        className="bg-cream pt-0 pb-32" 
      />

      {/* Craftsmanship Section */}
      <section className="bg-cream pt-0 pb-32 relative overflow-hidden">
        {/* Moroccan Zellige design in bottom right */}
        <div className="absolute top-20 right-40 w-32 h-32 border border-navy/5 rounded-full"></div>
        
        {/* Decorative element */}
        <div className="absolute bottom-20 right-20 w-16 h-16 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#E6C200" strokeWidth="1" />
            <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="none" stroke="#E6C200" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#183661" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="5" fill="none" stroke="#E6C200" strokeWidth="0.3" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 px-4 md:px-8 py-8 relative">
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-transparent via-navy/20 to-transparent hidden md:block"></div>
              
              <div className="relative">
                <div className="inline-block mb-6 relative">
                  <span className="font-serif text-2xl text-navy/70 relative z-10">Our Heritage</span>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-navy/20 to-transparent"></div>
                </div>
                
                <h2 className="font-serif text-3xl md:text-6xl font-light mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
                  TRADITIONAL MOROCCAN
                  <span className="block text-2xl mt-2 text-[#E6C200]/70 font-normal">CRAFTSMANSHIP</span>
                </h2>
                
                <div className="space-y-6 relative">
                  <p className="text-navy/80 text-justify leading-relaxed relative pl-4 border-l-2 border-taupe/20 italic">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="block pl-0 hover:pl-3 transition-all duration-500">Each piece is meticulously crafted by talented artisans who perpetuate a know-how passed down through generations.</span>
                  </p>
                  
                  <p className="text-navy/80 text-justify leading-relaxed relative pl-4 border-l-2 border-taupe/20 italic">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="block pl-0 hover:pl-3 transition-all duration-500">Our caftans and jellabas combine ancestral techniques with contemporary designs, creating garments that are both authentic and modern.</span>
                  </p>
                  
                  {/* Additional paragraph with decorative element */}
                  <p className="text-navy/80 text-justify leading-relaxed relative pl-4 border-l-2 border-taupe/20 italic">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="block pl-0 hover:pl-3 transition-all duration-500">We honor the rich textile heritage of Morocco while embracing innovation, ensuring each garment tells a story of cultural pride and artistic excellence.</span>
                  </p>
                </div>
                
                <div className="mt-12 relative inline-block group">
                  <Link href="/about" 
                    className="uppercase tracking-widest text-sm border border-navy/30 px-8 py-3 rounded-full text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-cream inline-flex items-center cursor-pointer">
                    <span>Our Story</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <div className="absolute -bottom-2 -right-2 w-full h-full border border-navy/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-8 left-0 w-16 h-1 bg-gradient-to-r from-[#E6C200]/40 to-transparent"></div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="relative w-[600px] h-[640px] group overflow-hidden rounded-xl">
                <Image 
                  src="/images/caftans/caftan4.jpg"
                  alt="Traditional craftsmanship"
                  width={600}
                  height={782}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-7000"
                  quality={95}
                  priority
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Improved hover text - more elegant and subtle */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-noir/70 to-transparent py-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="container-custom">
                    <div className="max-w-xs mx-auto text-center">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E6C200]/50 to-transparent mx-auto mb-4"></div>
                      <p className="text-cream font-light tracking-wide">Handcrafted with passion and precision</p>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E6C200]/50 to-transparent mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Beautiful horizontal line separator */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-3xl h-16 flex items-center justify-center">
            {/* Main horizontal line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6C200]/40 to-transparent"></div>
            
            {/* Decorative elements on the line */}
            <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C200]/30 rounded-full"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 border border-[#E6C200]/40 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#E6C200]/50 rounded-full"></div>
            </div>
            <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C200]/30 rounded-full"></div>
            
            {/* Moroccan-inspired decorative elements */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/40">
                <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M12,6 L18,12 L12,18 L6,12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>
            
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/40">
                <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M12,6 L18,12 L12,18 L6,12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Add CSS for radial gradient */}
        <style jsx>{`
          .bg-radial-subtle {
            background: radial-gradient(circle at center, rgba(230,194,0,0.05) 0%, rgba(0,0,0,0) 70%);
          }
        `}</style>
      </section>

      {/* Testimonials Section */}
      <section className="relative pt-8 pb-24 bg-cream overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <div className="inline-block mb-6 relative">
              <span className="font-serif text-2xl text-navy/70 relative z-10">Testimonials</span>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-navy/20 to-transparent"></div>
            </div>
            
            {/* Enhanced title with Moroccan-inspired decorative elements */}
            <div className="relative">
              <h2 className="font-serif text-3xl md:text-6xl font-light mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
                CLIENT STORIES
                <span className="block text-2xl mt-2 text-[#E6C200]/70 font-normal">AUTHENTIC EXPERIENCES</span>
              </h2>
              
              {/* Decorative line under heading */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-[2px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E6C200] to-transparent"></div>
              </div>
              
              {/* Decorative diamond shape */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-[#E6C200]/30"></div>
            </div>
            
            <p className="text-navy/80 max-w-lg mx-auto leading-relaxed mb-8">
              Our customers love our products and we're proud to share their stories with you.
            </p>
          </div>
          
          {/* Testimonial cards with enhanced design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-cream/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative">
              {/* Decorative top border */}
              <div className="h-1 w-full bg-gradient-to-r from-navy/70 via-[#E6C200]/50 to-navy/30"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              
              <div className="p-8 md:p-10 relative">
                {/* Client profile with enhanced styling */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-[#E6C200] rounded-full mr-4 flex items-center justify-center text-cream overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105">
                    <Image 
                      src="/images/testimonials/sarah.jpg" 
                      alt="Sophie Martin"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-lg">Sophie Martin</h4>
                    <div className="flex text-[#E6C200] mt-1 group-hover:scale-105 transition-transform duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.2L12 2z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text with enhanced styling */}
                <div className="relative">
                  <p className="text-navy/80 leading-relaxed relative pl-4 border-l-2 border-[#E6C200]/30 italic">
                    "I ordered a caftan for my sister's wedding and was amazed by the quality and details. The embroidery is beautiful and the colors exactly as in the photos."
                  </p>
                  
                  {/* Subtle decorative element */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent"></div>
                </div>
                
                {/* Footer with enhanced styling */}
                <div className="mt-8 pt-4 border-t border-taupe/10 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-navy/50">Mohammedia, Morocco</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-navy/50">June 2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-cream/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative">
              {/* Decorative top border */}
              <div className="h-1 w-full bg-gradient-to-r from-[#E6C200]/50 via-navy/50 to-[#E6C200]/50"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              
              <div className="p-8 md:p-10 relative">
                {/* Client profile with enhanced styling */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E6C200] to-navy rounded-full mr-4 flex items-center justify-center text-cream overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105">
                    <Image 
                      src="/images/testimonials/amina.jpg" 
                      alt="Leila Bensaid"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-lg">Leila Bensaid</h4>
                    <div className="flex text-[#E6C200] mt-1 group-hover:scale-105 transition-transform duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.2L12 2z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text with enhanced styling */}
                <div className="relative">
                  <p className="text-navy/80 leading-relaxed relative pl-4 border-l-2 border-[#E6C200]/30 italic">
                    "The jellaba I purchased has become my favorite outfit for special occasions. The fabric is of very high quality and the comfort is incredible. I highly recommend!"
                  </p>
                  
                  {/* Subtle decorative element */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent"></div>
                </div>
                
                {/* Footer with enhanced styling */}
                <div className="mt-8 pt-4 border-t border-taupe/10 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-navy/50">Rabat, Morocco</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-navy/50">May 2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-cream/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative">
              {/* Decorative top border */}
              <div className="h-1 w-full bg-gradient-to-r from-navy/30 via-[#E6C200]/50 to-navy/70"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              
              <div className="p-8 md:p-10 relative">
                {/* Client profile with enhanced styling */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy/80 to-[#E6C200]/80 rounded-full mr-4 flex items-center justify-center text-cream overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105">
                    <Image 
                      src="/images/testimonials/john.jpg" 
                      alt="James Wilson"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-lg">James Wilson</h4>
                    <div className="flex text-[#E6C200] mt-1 group-hover:scale-105 transition-transform duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-0.5" viewBox="0 0 24 24" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor">
                          <path fillRule="evenodd" d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.2L12 2z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text with enhanced styling */}
                <div className="relative">
                  <p className="text-navy/80 leading-relaxed relative pl-4 border-l-2 border-[#E6C200]/30 italic">
                    "I bought a caftan as a gift for my wife and she absolutely loves it. The craftsmanship is exceptional and the customer service was outstanding."
                  </p>
                  
                  {/* Subtle decorative element */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent"></div>
                </div>
                
                {/* Footer with enhanced styling */}
                <div className="mt-8 pt-4 border-t border-taupe/10 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-navy/50">Casablanca, Morocco</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-navy/50">April 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* View more testimonials button */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-[#E6C200]/30 text-navy/80 rounded-lg hover:bg-[#E6C200]/10 transition-colors duration-300 group relative overflow-hidden">
              <span className="relative z-10 font-medium tracking-wide">View More Testimonials</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E6C200]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Beautiful horizontal line separator */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-3xl h-16 flex items-center justify-center">
            {/* Main horizontal line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6C200]/40 to-transparent"></div>
            
            {/* Decorative elements on the line */}
            <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C200]/30 rounded-full"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 border border-[#E6C200]/40 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#E6C200]/50 rounded-full"></div>
            </div>
            <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E6C200]/30 rounded-full"></div>
            
            {/* Moroccan-inspired decorative elements */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/40">
                <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M12,6 L18,12 L12,18 L6,12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>
            
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/40">
                <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M12,6 L18,12 L12,18 L6,12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-cream pt-8 pb-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy/[0.03] to-taupe/[0.05] rounded-2xl p-8 md:p-16 shadow-sm relative overflow-hidden">
              {/* Decorative Moroccan border */}
              <div className="absolute inset-0 border-2 border-[#E6C200]/10 rounded-2xl pointer-events-none"></div>
              
              {/* Moroccan corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E6C200]/20 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#E6C200]/20 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#E6C200]/20 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E6C200]/20 rounded-br-lg"></div>
              
              <div className="text-center mb-12 relative">
                {/* Decorative element above title */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E6C200]/30 to-transparent mx-auto mb-8"></div>
                
                <div className="inline-block mb-6 relative">
                  <span className="uppercase tracking-widest text-2xl text-[#E6C200]/70 relative z-10">Stay Connected</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#E6C200]/30 to-transparent"></div>
                </div>
                
                {/* Enhanced title with Moroccan-inspired decorative elements */}
                <div className="relative">
                  <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 uppercase tracking-wider bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">Join Our Community</h2>
                  
                  {/* Decorative line under heading */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-[2px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E6C200] to-transparent"></div>
                  </div>
                  
                  {/* Decorative diamond shape */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-[#E6C200]/30"></div>
                </div>
                
                <p className="text-navy/80 mx-auto max-w-lg leading-relaxed mt-10">
                  Subscribe to our newsletter to receive exclusive offers, style tips, and updates on new collections.
                </p>
              </div>
              
              <form className="max-w-xl mx-auto relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow group">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-6 py-4 bg-cream/80 backdrop-blur-sm border border-[#E6C200]/20 rounded-full text-navy focus:outline-none focus:border-[#E6C200]/50 focus:ring-2 focus:ring-[#E6C200]/10 transition-all duration-300 shadow-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-navy text-cream rounded-full hover:bg-navy/90 transition-all duration-300 shadow-sm flex items-center justify-center group"
                  >
                    <span>Subscribe</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Last Section */}
      <footer className="bg-navy/95 text-cream mt-auto">
        <div className="container-custom py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-[#E6C200]">KONOZ KHADIJA</h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Discover the timeless beauty of Moroccan fashion through our carefully curated collection of handcrafted caftans and jellabas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
                <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg mb-6 text-[#E6C200]">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/collections" className="text-cream/70 hover:text-[#E6C200] transition-colors">Collections</Link>
                </li>
                <li>
                  <Link href="/about" className="text-cream/70 hover:text-[#E6C200] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/categories/caftans" className="text-cream/70 hover:text-[#E6C200] transition-colors">Caftans</Link>
                </li>
                <li>
                  <Link href="/categories/jellabas" className="text-cream/70 hover:text-[#E6C200] transition-colors">Jellabas</Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-serif text-lg mb-6 text-[#E6C200]">Customer Service</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact" className="text-cream/70 hover:text-[#E6C200] transition-colors">Contact Us</Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-cream/70 hover:text-[#E6C200] transition-colors">Shipping Info</Link>
                </li>
                <li>
                  <Link href="/returns" className="text-cream/70 hover:text-[#E6C200] transition-colors">Returns & Exchanges</Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-cream/70 hover:text-[#E6C200] transition-colors">Size Guide</Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-serif text-lg mb-6 text-[#E6C200]">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-cream/70">
                  <svg className="h-7 w-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span> Résidence Alia, Quartier Azzouhour, n°27, Mohammédia</span>
                </li>
                <li className="flex items-center space-x-3 text-cream/70">
                  <svg className="h-7 w-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@konozkhadija.com</span>
                </li>
                <li className="flex items-center space-x-3 text-cream/70">
                  <svg className="h-7 w-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+2125 24 40 00 00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-cream/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-cream/60 text-sm">
                © 2025 Konoz Khadija. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-cream/60 hover:text-[#E6C200] transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-cream/60 hover:text-[#E6C200] transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 