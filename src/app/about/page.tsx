'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ZelligePattern from '@/components/ZelligePattern';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const transition = { duration: 0.6 };

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero section */}
      <div className="relative h-[500px] bg-[#1B4D3E] overflow-hidden">
        {/* Decorative stripes */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                bottom: '-120%',
                right: `${index * 60}px`,
                width: '2px',
                height: '1200px',
                backgroundColor: '#FFB823',
                transform: 'rotate(45deg)',
                opacity: 0.9 - index * 0.15
              }}
            />
          ))}
        </div>
        <div className="container-custom h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#FFF1CA] to-[#FFB823] bg-clip-text text-transparent mb-6 relative z-10">Our Story</h1>
            <p className="text-[#FFF1CA] max-w-2xl text-lg leading-relaxed">
              Discover the passion and craftsmanship behind our authentic Moroccan garments, where tradition meets contemporary elegance.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-20">
        {/* Our mission section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="bg-white rounded-2xl shadow-lg p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#555879] via-[#FFF1CA] to-[#555879]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <motion.h2 variants={fadeInUp} transition={transition} className="text-4xl font-serif bg-gradient-to-r from-cream via-[#555879] to-navy gradient-heading mb-8">Our Mission</motion.h2>
            <motion.p variants={fadeInUp} transition={transition} className="text-navy/80 leading-relaxed text-lg mb-10">
              At Khadija's Treasures, we are dedicated to preserving and celebrating the rich heritage of Moroccan craftsmanship 
              while bringing its timeless beauty to the modern world. Each piece in our collection represents centuries of tradition, 
              artisanal expertise, and cultural significance.
            </motion.p>
            <motion.div variants={fadeInUp} transition={transition} className="w-32 h-1 bg-gradient-to-r from-[#555879] via-[#FFF1CA] to-[#555879] mx-auto" />
          </div>
        </motion.div>

        {/* Our journey section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center"
        >
          <motion.div variants={fadeInUp} transition={transition} className="order-2 md:order-1">
            <h2 className="text-4xl font-serif bg-gradient-to-r from-[#555879] via-[#555879] to-cream gradient-heading mb-8">Our Journey</h2>
            <div className="space-y-6 text-lg">
              <p className="text-navy/80 leading-relaxed text-justify">
                Founded in 2018 by Khadija Benali, our journey began with a simple vision: to share the beauty of authentic Moroccan 
                craftsmanship with the world. Born and raised in Fez, one of Morocco's most historic cities, Khadija grew up surrounded 
                by the rich traditions of textile artistry.
              </p>
              <p className="text-navy/80 leading-relaxed text-justify">
                After studying fashion design in Paris and working with several luxury brands, Khadija returned to her roots with a 
                mission to create a platform that would showcase the exceptional skills of Moroccan artisans while adapting traditional 
                designs for the contemporary wardrobe.
              </p>
              <p className="text-navy/80 leading-relaxed text-justify">
                What started as a small collection of handcrafted caftans has grown into a celebrated brand that bridges cultures and 
                generations, bringing the magic of Moroccan craftsmanship to customers around the world.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="order-1 md:order-2 relative w-[428px] h-[642px] rounded-2xl overflow-hidden shadow-xl group mx-auto hover:shadow-2xl transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-t before:from-navy/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
          >
            <Image 
              src="/images/about/founder.jpg" 
              alt="Khadija Benali, Founder" 
              width={428}
              height={642}
              className="transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-105"
              quality={100}
              priority
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="p-8 text-[#F4EBD3] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif font-bold text-2xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Khadija Benali</p>
                <p className="text-[#DED3C4] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">Founder & Creative Director</p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-cream/0 group-hover:border-cream/20 transition-all duration-500 rounded-xl"></div>
          </motion.div>
        </motion.div>

        {/* Our artisans section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="bg-sand/10 rounded-2xl p-12 mb-20"
        >
          <motion.h2 variants={fadeInUp} transition={transition} className="text-4xl font-serif bg-gradient-to-r from-cream via-[#555879] to-navy gradient-heading mb-12 text-center">Our Artisans</motion.h2>
          <motion.div variants={fadeInUp} transition={transition} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Master Embroiderers",
                name: "Amira Safi",
                image: "/images/about/artisan1.jpg",
                description: "Leading our embroidery atelier, Amira brings 15 years of expertise in traditional Moroccan embroidery. Her masterful hand-stitching techniques and innovative geometric patterns have become a signature element of our luxury caftans."
              },
              {
                title: "Textile Weavers",
                name: "Yasmine El Fassi",
                image: "/images/about/artisan2.jpg",
                description: "A third-generation weaver, Yasmine specializes in creating our signature handwoven fabrics. Her deep understanding of traditional looms and contemporary design has revolutionized our textile development process."
              },
              {
                title: "Master Tailors",
                name: "Sophia Mansouri",
                image: "/images/about/artisan3.jpg",
                description: "With over a decade of experience in haute couture, Sophia leads our tailoring department. Her exceptional eye for detail and understanding of modern silhouettes ensures each garment meets the highest standards of craftsmanship."
              }
            ].map((artisan, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative w-[400px] h-[450px] mx-auto">
                  <Image 
                    src={artisan.image}
                    alt={artisan.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    quality={100}
                  />
                  <div className="absolute inset-0 flex items-end">
                    <div className="p-6 text-[#F4EBD3] bg-gradient-to-t from-black/60 to-transparent w-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <p className="font-serif font-bold text-2xl mb-1">{artisan.name}</p>
                      <p className="text-[#DED3C4]">{artisan.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 transform group-hover:bg-navy/5 transition-colors duration-500">
                  <p className="text-navy/70 leading-relaxed text-center">
                    {artisan.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} transition={transition} className="text-center mt-12">
            <Link 
              href="/artisans" 
              className="inline-block px-8 py-4 bg-navy text-cream rounded-full hover:bg-navy/90 transition-colors text-lg"
            >
              Learn More About Our Artisans
            </Link>
          </motion.div>
        </motion.div>

        {/* Our values section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h2 variants={fadeInUp} transition={transition} className="text-4xl font-serif bg-gradient-to-r from-cream via-[#555879] to-navy gradient-heading mb-12 text-center">Our Values</motion.h2>
          <motion.div variants={fadeInUp} transition={transition} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                title: "Authenticity",
                description: "We honor traditional Moroccan craftsmanship in every piece we create, ensuring authenticity in materials, techniques, and designs."
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Community",
                description: "We support artisan communities in Morocco, providing fair compensation and helping to preserve traditional crafts for future generations."
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Sustainability",
                description: "We are committed to ethical production practices, using natural materials and minimizing waste in our manufacturing process."
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Innovation",
                description: "While respecting tradition, we embrace innovation to create pieces that are relevant to contemporary lifestyles and global fashion trends."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-navy/5 group relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-navy/0 hover:before:border-navy/10 before:transition-all before:duration-500">
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/0 via-navy/5 to-navy/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-navy transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-navy mb-4 text-center transition-all duration-500 group-hover:text-navy/80 group-hover:scale-105">{value.title}</h3>
                <p className="text-navy/70 text-center leading-relaxed transition-colors duration-500 group-hover:text-navy/90">
                  {value.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-navy/0 via-navy/10 to-navy/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={transition}
          className="bg-navy rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0">
            <ZelligePattern className="text-cream/5" />
          </div>
          <div className="relative p-16 md:p-20 text-center">
            <h2 className="text-4xl font-serif bg-gradient-to-r from-[#555879] to-cream gradient-heading mb-6">Experience Moroccan Craftsmanship</h2>
            <p className="text-cream/90 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Explore our collection of handcrafted caftans and jellabas, each piece telling a story of Moroccan heritage and artistry.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/collections" 
                className="px-8 py-4 bg-cream text-navy rounded-full hover:bg-white transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg"
              >
                View Collections
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border-2 border-cream/30 text-cream rounded-full hover:bg-cream/10 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg hover:border-cream/50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
