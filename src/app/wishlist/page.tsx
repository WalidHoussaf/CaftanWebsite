'use client';

import { useState, useEffect } from 'react';
import { useWishlistStore } from '@/store/wishlistStore';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function WishlistPage() {
  const { items: wishlistItems, clearWishlist } = useWishlistStore();
  const [isClient, setIsClient] = useState(false);
  
  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse w-full max-w-4xl">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <main className="container mx-auto px-4 pt-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-navy">My Wishlist</h1>
            <p className="text-navy/60 mt-2">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center text-navy/70 hover:text-navy transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              Continue Shopping
            </Link>
            
            {wishlistItems.length > 0 && (
              <button 
                onClick={() => {
                  if (confirm('Are you sure you want to clear your wishlist?')) {
                    clearWishlist();
                  }
                }}
                className="text-sm text-red-600 hover:text-red-800 transition-colors"
              >
                Clear Wishlist
              </button>
            )}
          </div>
        </div>
        
        {/* Decorative border */}
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-[#E6C200]/10 rounded-2xl p-8 md:p-16 relative">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-16 max-w-md mx-auto">
                <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium text-navy mb-2">Your wishlist is empty</h2>
                <p className="text-navy/60 mb-8">
                  Add items you love to your wishlist. Review them anytime and easily move them to your cart.
                </p>
                <Link 
                  href="/" 
                  className="inline-block px-6 py-3 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
                >
                  Discover Products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wishlistItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
