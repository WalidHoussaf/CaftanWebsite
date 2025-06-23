'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Collections() {
  return (
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
          
          <h2 className="font-serif text-3xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
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
  );
}