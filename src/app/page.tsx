'use client';

import Hero from '@/components/home/Hero';
import Collections from '@/components/home/Collections';
import FeaturedProducts from '@/components/FeaturedProducts';
import Craftsmanship from '@/components/home/Craftsmanship';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col bg-cream">
      {/* Hero Section */}
      <Hero />

      {/* Clip Animation for Hero Section */}
      <svg height="0" width="0" className="absolute">
        <defs>
          <clipPath id="hero-wave-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.9 C0.8,1,0.7,0.9,0.5,0.9 C0.3,0.9,0.2,1,0,0.9 V0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Collections Section */}
      <Collections />

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
      <Craftsmanship />

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}