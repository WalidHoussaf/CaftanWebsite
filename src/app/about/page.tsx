import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      {/* Hero section */}
      <div className="relative h-80 bg-navy/90 overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] bg-repeat opacity-10"></div>
        <div className="container-custom h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">Our Story</h1>
          <p className="text-cream/80 max-w-2xl">
            Discover the passion and craftsmanship behind our authentic Moroccan garments.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-full h-12 bg-gradient-to-t from-cream to-transparent"></div>
      </div>

      <div className="container-custom">
        {/* Our mission section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-navy mb-6">Our Mission</h2>
            <p className="text-navy/80 leading-relaxed mb-8">
              At Khadija's Treasures, we are dedicated to preserving and celebrating the rich heritage of Moroccan craftsmanship 
              while bringing its timeless beauty to the modern world. Each piece in our collection represents centuries of tradition, 
              artisanal expertise, and cultural significance.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy to-taupe mx-auto"></div>
          </div>
        </div>

        {/* Our journey section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif text-navy mb-6">Our Journey</h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Founded in 2018 by Khadija Benali, our journey began with a simple vision: to share the beauty of authentic Moroccan 
              craftsmanship with the world. Born and raised in Fez, one of Morocco's most historic cities, Khadija grew up surrounded 
              by the rich traditions of textile artistry.
            </p>
            <p className="text-navy/80 leading-relaxed mb-4">
              After studying fashion design in Paris and working with several luxury brands, Khadija returned to her roots with a 
              mission to create a platform that would showcase the exceptional skills of Moroccan artisans while adapting traditional 
              designs for the contemporary wardrobe.
            </p>
            <p className="text-navy/80 leading-relaxed">
              What started as a small collection of handcrafted caftans has grown into a celebrated brand that bridges cultures and 
              generations, bringing the magic of Moroccan craftsmanship to customers around the world.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/about/founder.jpg" 
              alt="Khadija Benali, Founder" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent flex items-end">
              <div className="p-6 text-cream">
                <p className="font-serif text-xl">Khadija Benali</p>
                <p className="text-cream/80 text-sm">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our artisans section */}
        <div className="bg-sand/20 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif text-navy mb-6 text-center">Our Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image 
                  src="/images/about/artisan1.jpg" 
                  alt="Master Embroiderer" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-navy mb-2">Master Embroiderers</h3>
                <p className="text-navy/70 text-sm">
                  Our embroidery artisans have honed their craft over decades, creating intricate patterns that tell stories 
                  of Moroccan culture and heritage.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image 
                  src="/images/about/artisan2.jpg" 
                  alt="Textile Weavers" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-navy mb-2">Textile Weavers</h3>
                <p className="text-navy/70 text-sm">
                  Using traditional looms and techniques passed down through generations, our weavers create fabrics of 
                  exceptional quality and beauty.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image 
                  src="/images/about/artisan3.jpg" 
                  alt="Master Tailors" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-navy mb-2">Master Tailors</h3>
                <p className="text-navy/70 text-sm">
                  With meticulous attention to detail, our tailors transform beautiful fabrics into garments that 
                  combine traditional silhouettes with contemporary elegance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/artisans" 
              className="inline-block px-6 py-3 bg-navy text-cream rounded-full hover:bg-navy/90 transition-colors"
            >
              Learn More About Our Artisans
            </Link>
          </div>
        </div>

        {/* Our values section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-navy mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-medium text-navy mb-2">Authenticity</h3>
              <p className="text-navy/70 text-sm">
                We honor traditional Moroccan craftsmanship in every piece we create, ensuring authenticity in materials, 
                techniques, and designs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-navy mb-2">Community</h3>
              <p className="text-navy/70 text-sm">
                We support artisan communities in Morocco, providing fair compensation and helping to preserve 
                traditional crafts for future generations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-navy mb-2">Sustainability</h3>
              <p className="text-navy/70 text-sm">
                We are committed to ethical production practices, using natural materials and minimizing waste 
                in our manufacturing process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-medium text-navy mb-2">Innovation</h3>
              <p className="text-navy/70 text-sm">
                While respecting tradition, we embrace innovation to create pieces that are relevant to contemporary 
                lifestyles and global fashion trends.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-navy/90 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] bg-repeat opacity-10"></div>
          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-3xl font-serif text-cream mb-4">Experience Moroccan Craftsmanship</h2>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              Explore our collection of handcrafted caftans and jellabas, each piece telling a story of Moroccan heritage and artistry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/collections" 
                className="px-6 py-3 bg-cream text-navy rounded-full hover:bg-white transition-colors"
              >
                View Collections
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border border-cream/30 text-cream rounded-full hover:bg-cream/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
