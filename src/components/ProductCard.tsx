"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon, PlusIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { ProductType } from '../types/product';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import toast from 'react-hot-toast';

// Color mapping for product colors
const colorNameMap: { [key: string]: string } = {
  '#1e40af': 'Royal Blue',
  '#047857': 'Emerald Green',
  '#b91c1c': 'Ruby Red',
  '#d97706': 'Gold',
  '#94a3b8': 'Silver',
  '#171717': 'Black',
  '#fef3c7': 'Ivory',
  // Additional common colors
  '#ffffff': 'White',
  '#f8fafc': 'White',
  '#f1f5f9': 'Light Gray',
  '#cbd5e1': 'Gray',
  '#64748b': 'Dark Gray',
  '#334155': 'Slate',
  '#020617': 'Black',
  '#881337': 'Dark Red',
  '#9f1239': 'Red',
  '#dc2626': 'Bright Red',
  '#ea580c': 'Orange',
  '#ca8a04': 'Yellow',
  '#65a30d': 'Lime',
  '#16a34a': 'Green',
  '#059669': 'Emerald',
  '#0d9488': 'Teal',
  '#0891b2': 'Cyan',
  '#0284c7': 'Light Blue',
  '#2563eb': 'Blue',
  '#4f46e5': 'Indigo',
  '#7c3aed': 'Violet',
  '#9333ea': 'Purple',
  '#c026d3': 'Fuchsia',
  '#db2777': 'Pink',
  '#be123c': 'Rose',
  '#854d0e': 'Brown',
  '#78350f': 'Dark Brown',
  '#422006': 'Deep Brown'
};

const getColorName = (hexColor: string): string => {
  // Convert the hex color to lowercase for consistent matching
  const normalizedHex = hexColor.toLowerCase();
  // Remove any spaces and ensure hex format
  const formattedHex = normalizedHex.trim().startsWith('#') ? normalizedHex : `#${normalizedHex}`;
  
  return colorNameMap[formattedHex] || 
         // Try to find a close match if exact match not found
         Object.entries(colorNameMap).find(([key]) => 
           key.toLowerCase() === formattedHex
         )?.[1] || 
         // If no match found, make the hex code more readable
         formattedHex;
};

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { id, name, price, oldPrice, category, images, isNew } = product;
  
  // Get wishlist functions
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const isFavorite = isInWishlist(id);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Tag */}
      {oldPrice && (
        <span className="absolute top-3 left-3 z-10 bg-[#E6C200]/80 text-cream text-xs uppercase tracking-wider px-3 py-1 rounded-sm backdrop-blur-sm">
          Sale
        </span>
      )}
      
      {/* New Tag */}
      {isNew && !oldPrice && (
        <span className="absolute top-3 left-3 z-10 bg-navy/80 text-cream text-xs uppercase tracking-wider px-3 py-1 rounded-sm backdrop-blur-sm">
          New
        </span>
      )}
      
      {/* Decorative corner elements - visible on hover */}
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cream/30 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cream/30 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>

      {/* Image Container */}
      <div className="block relative">
        <div className="aspect-[3/4] overflow-hidden bg-[#f0ede5] relative">
          {/* Overlay with gradient - more visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <Link href={`/product/${id}`} className="block">
            {images && images[0] ? (
              <>
                <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                  <Image
                    src={images[0]}
                    alt={name}
                    fill
                    className="object-cover object-center w-full h-full transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={90}
                  />
                </div>
                
                {/* Subtle radial gradient overlay */}
                <div className="absolute inset-0 bg-radial-subtle opacity-30 mix-blend-overlay pointer-events-none"></div>
              </>
            ) : (
              <div className="w-full h-full bg-taupe/10 flex items-center justify-center">
                <span className="text-navy/50 text-sm uppercase tracking-wider">No image available</span>
              </div>
            )}
          </Link>
          
          {/* Quick view button - appears on hover */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
            <button 
              onClick={() => window.location.href = `/product/${id}`}
              className="p-3 bg-cream/90 hover:bg-cream rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
            >
              <EyeIcon className="h-5 w-5 text-navy" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-cream/50 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <Link href={`/product/${id}`} className="block">
            <h3 className="font-medium text-navy group-hover:text-navy/70 transition-colors duration-300">{name}</h3>
          </Link>
          
          {/* Action Buttons Group */}
          <div className="flex space-x-3">
            {/* Favorite Button */}
            <button
              onClick={() => {
                if (isFavorite) {
                  removeFromWishlist(id);
                  toast.success(`${name} removed from your wishlist`);
                } else {
                  addToWishlist(product);
                  toast.success(`${name} added to your wishlist`, {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                }
              }}
              className="text-navy/60 hover:text-[#E6C200] transition-colors"
              aria-label="Add to favorites"
            >
              {isFavorite ? (
                <HeartIconSolid className="h-5 w-5 text-[#E6C200]" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
            </button>
            
            {/* Add to Cart Button */}
            <button 
              onClick={() => {
                const { addItem } = useCartStore.getState();
                addItem(product, '', product.sizes?.[0] || '', 1);
                toast.success(`${product.name} added to your cart!`, {
                  style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                  },
                  iconTheme: {
                    primary: '#713200',
                    secondary: '#FFFAEE',
                  },
                });
              }}
              className="text-navy/60 hover:text-navy transition-colors" 
              aria-label="Add to cart"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-navy font-medium">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-xs text-navy/50 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Decorative line */}
        <div className="mt-3 w-1/4 h-px bg-gradient-to-r from-[#E6C200]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
      
      {/* Add CSS for radial gradient */}
      <style jsx>{`
        .bg-radial-subtle {
          background: radial-gradient(circle at center, rgba(230,194,0,0.05) 0%, rgba(0,0,0,0) 70%);
        }
      `}</style>
    </div>
  );
}