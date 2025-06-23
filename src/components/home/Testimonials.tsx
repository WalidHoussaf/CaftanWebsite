'use client';

import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Zineb Lahbib",
    location: "Mohammedia, Morocco",
    date: "June 2025",
    rating: 5,
    image: "/images/testimonials/zineb.jpg",
    text: "I ordered a caftan for my sister's wedding and was amazed by the quality and details. The embroidery is beautiful and the colors exactly as in the photos.",
    gradient: "from-navy/70 via-[#E6C200]/50 to-navy/30"
  },
  {
    id: 2,
    name: "Leila Bensaid",
    location: "Rabat, Morocco",
    date: "May 2025",
    rating: 5,
    image: "/images/testimonials/leila.jpg",
    text: "The jellaba I purchased has become my favorite outfit for special occasions. The fabric is of very high quality and the comfort is incredible. I highly recommend!",
    gradient: "from-[#E6C200]/50 via-navy/50 to-[#E6C200]/50"
  },
  {
    id: 3,
    name: "Kamal El Haddad",
    location: "Casablanca, Morocco",
    date: "April 2025",
    rating: 4,
    image: "/images/testimonials/kamal.jpg",
    text: "I bought a caftan as a gift for my wife and she absolutely loves it. The craftsmanship is exceptional and the customer service was outstanding.",
    gradient: "from-navy/30 via-[#E6C200]/50 to-navy/70"
  }
];

export default function Testimonials() {
  return (
    <section className="relative pt-8 pb-24 bg-cream overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <div className="inline-block mb-6 relative">
            <span className="font-serif text-2xl text-navy/70 relative z-10">Testimonials</span>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-navy/20 to-transparent"></div>
          </div>
          
          {/* Enhanced title with Moroccan-inspired decorative elements */}
          <div className="relative">
            <h2 className="font-serif text-3xl md:text-6xl font-semibold mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
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
        
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-cream/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative">
              {/* Decorative top border */}
              <div className={`h-1 w-full bg-gradient-to-r ${testimonial.gradient}`}></div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E6C200]/20 z-20 pointer-events-none"></div>
              
              <div className="p-8 md:p-10 relative">
                {/* Client profile */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-[#E6C200] rounded-full mr-4 flex items-center justify-center text-cream overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-105">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy text-lg">{testimonial.name}</h4>
                    <div className="flex text-[#E6C200] mt-1 group-hover:scale-105 transition-transform duration-500">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 mr-0.5" 
                          viewBox="0 0 24 24" 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                          stroke="currentColor"
                        >
                          <path fillRule="evenodd" d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.2L12 2z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text */}
                <div className="relative">
                  <p className="text-navy/80 leading-relaxed relative pl-4 border-l-2 border-[#E6C200]/30 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Subtle decorative element */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent"></div>
                </div>
                
                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-taupe/10 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-navy/50">{testimonial.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy/40 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-navy/50">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
  );
}