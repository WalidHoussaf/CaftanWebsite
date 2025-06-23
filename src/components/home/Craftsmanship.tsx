'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Craftsmanship() {
  return (
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
              
              <h2 className="font-serif text-3xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
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
              
              {/* Hover text */}
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
  );
}