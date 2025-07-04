"use client";

import React from 'react';
import Link from 'next/link';
import ProductCard from '../ProductCard';
import { productsData } from '../ClientProductsData';

interface FeaturedProductsProps {
  category: 'caftan' | 'jellaba';
  title: string;
  className?: string;
}

export default function FeaturedProducts({ category, title, className = '' }: FeaturedProductsProps) {
  // Filter products by category
  const products = productsData
    .filter(p => p.category === category && p.isFeatured)
    .slice(0, 4);

  return (
    <section className={`py-32 relative overflow-hidden ${className}`}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-navy/10 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 border border-taupe/20 rounded-full opacity-30"></div>
      
      {/* Moroccan pattern decorative element */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-10 pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke={category === 'caftan' ? "#183661" : "#E6C200"} strokeWidth="1" />
          <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="none" stroke={category === 'caftan' ? "#183661" : "#E6C200"} strokeWidth="0.8" />
          <circle cx="50" cy="50" r="10" fill="none" stroke={category === 'caftan' ? "#E6C200" : "#183661"} strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-6 relative">
            <span className="font-serif text-2xl text-navy/70 relative z-10">Curated Selection</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-taupe/30 to-transparent"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">
            {title}
            <span className="block text-xl mt-2 text-[#E6C200]/70 font-normal">HANDCRAFTED EXCELLENCE</span>
          </h2>
          
          <p className="text-navy/80 max-w-lg mx-auto leading-relaxed mb-8">
            Discover our selection of premium {category === 'caftan' ? 'caftans' : 'jellabas'} crafted with traditional Moroccan artisanship.
          </p>
          
          {/* Decorative divider */}
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#E6C200]/40 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href={`/categories/${category}s`} 
            className="inline-flex items-center justify-center px-8 py-3 border border-taupe/30 rounded-full text-navy hover:text-[#E6C200] transition-all duration-300 group">
            <span className="mr-2">View All {category === 'caftan' ? 'Caftans' : 'Jellabas'}</span>
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
        
        {/* Decorative element */}
        <div className="absolute bottom-20 right-20 w-16 h-16 opacity-10 pointer-events-none">
        </div>
      </div>
    </section>
  );
}