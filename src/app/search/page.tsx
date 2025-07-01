"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { productsData } from '@/data/products';
import { ProductType } from '@/types/product';
import ProductCard from '@/components/ProductCard';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = (query: string) => {
    if (!query.trim()) return;
    
    const updatedSearches = [
      query,
      ...recentSearches.filter(item => item !== query)
    ].slice(0, 5); // Keep only the 5 most recent searches
    
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim().length > 2) {
      setIsSearching(true);
      performSearch(query);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      saveRecentSearch(searchQuery);
    }
  };

  // Perform search against product data
  const performSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    
    const results = productsData.filter(product => {
      // Search in product name
      if (product.name.toLowerCase().includes(normalizedQuery)) return true;
      
      // Search in product description
      if (product.description.toLowerCase().includes(normalizedQuery)) return true;
      
      // Search in product category
      if (product.category.toLowerCase().includes(normalizedQuery)) return true;
      
      // Search in product material
      if (product.material?.toLowerCase().includes(normalizedQuery)) return true;
      
      // Search in product occasions
      if (product.occasions?.some(occasion => occasion.toLowerCase().includes(normalizedQuery))) return true;
      
      // Search in product details if available
      if (product.details) {
        if (product.details.fabricDetails && 
            product.details.fabricDetails.toLowerCase().includes(normalizedQuery)) return true;
        
        if (product.details.careInstructions && 
            product.details.careInstructions.toLowerCase().includes(normalizedQuery)) return true;
        
        if (product.details.designFeatures && 
            product.details.designFeatures.some(feature => 
              feature.toLowerCase().includes(normalizedQuery))) return true;
      }
      
      return false;
    });
    
    setSearchResults(results);
    setIsSearching(false);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Use a recent search
  const useRecentSearch = (query: string) => {
    setSearchQuery(query);
    performSearch(query);
  };

  // Remove a recent search
  const removeRecentSearch = (query: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const updatedSearches = recentSearches.filter(item => item !== query);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="container-custom px-4 md:px-0 md:py-8">
        <div className="max-w-7xl w-full pl-4 md:pl-10 pr-4 md:pr-10">
          <h1 className="text-3xl font-serif text-navy mb-6 text-left">Search Our Collection</h1>
          {/* Search area with background and border */}
          <div className="bg-white/80 border border-gray-200 rounded-lg p-6 mb-8 w-full">
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4 mb-0 w-full">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-navy/50" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for caftans, jellabas, colors, materials..."
                  className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/30 text-navy"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-navy/50 hover:text-navy"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-navy text-cream rounded-lg hover:bg-navy/90 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
          {/* Recent searches */}
          {recentSearches.length > 0 && !searchResults.length && !isSearching && (
            <div className="mb-8">
              <h2 className="text-lg font-medium text-navy mb-4 text-left">Recent Searches</h2>
              <div className="flex flex-wrap gap-2 gap-y-3 w-full">
                {recentSearches.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => useRecentSearch(query)}
                    className="group flex items-center bg-white px-4 py-2 rounded-full text-sm text-navy/70 hover:text-navy hover:bg-white/80 transition-colors"
                  >
                    <span>{query}</span>
                    <button
                      onClick={(e) => removeRecentSearch(query, e)}
                      className="ml-2 text-navy/40 hover:text-navy/70"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Loading indicator */}
          {isSearching && (
            <div className="py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-navy"></div>
              <p className="mt-2 text-navy/70 text-left">Searching...</p>
            </div>
          )}
          {/* Search results */}
          {searchQuery && !isSearching && (
            <div className="mb-8">
              <h2 className="text-lg font-medium text-navy mb-4 text-left">
                {searchResults.length === 0
                  ? `No results found for "${searchQuery}"`
                  : `${searchResults.length} results for "${searchQuery}"`}
              </h2>
              {searchResults.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
              {searchResults.length === 0 && (
                <div className="bg-white rounded-lg p-8 w-full">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-navy mb-2 text-left">No matches found</h3>
                  <p className="text-navy/70 mb-6 text-left">
                    We couldn't find any products matching your search. Try using different keywords or browse our collections.
                  </p>
                  <Link
                    href="/collections"
                    className="inline-block px-6 py-3 bg-navy text-cream rounded-full hover:bg-navy/90 transition-colors"
                  >
                    Browse All Collections
                  </Link>
                </div>
              )}
            </div>
          )}
          {/* Suggested searches if no query */}
          {!searchQuery && !isSearching && (
            <div className="mt-12">
              <h2 className="text-lg font-medium text-navy mb-4 text-left">Popular Searches</h2>
              <div className="flex flex-wrap gap-2 gap-y-3 mb-8 w-full">
                {['Wedding Caftan', 'Blue Jellaba', 'Ramadan', 'Embroidered', 'Velvet', 'Silk', 'Traditional'].map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(term);
                      performSearch(term);
                      saveRecentSearch(term);
                    }}
                    className="bg-white px-4 py-2 rounded-full text-sm text-navy/70 hover:text-navy hover:bg-white/80 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                <div className="bg-navy/10 rounded-lg p-6 h-full flex-1 w-full">
                  <h3 className="text-lg font-medium text-navy mb-2 text-left">Browse by Category</h3>
                  <div className="space-y-2">
                    <Link href="/categories/caftans" className="block text-navy/70 hover:text-navy hover:underline">
                      Caftans
                    </Link>
                    <Link href="/categories/jellabas" className="block text-navy/70 hover:text-navy hover:underline">
                      Jellabas
                    </Link>
                  </div>
                </div>
                <div className="bg-navy/10 rounded-lg p-6 h-full flex-1 w-full">
                  <h3 className="text-lg font-medium text-navy mb-2 text-left">Browse by Occasion</h3>
                  <div className="space-y-2">
                    <Link href="/collections?occasion=wedding" className="block text-navy/70 hover:text-navy hover:underline">
                      Wedding
                    </Link>
                    <Link href="/collections?occasion=ramadan" className="block text-navy/70 hover:text-navy hover:underline">
                      Ramadan
                    </Link>
                    <Link href="/collections?occasion=festive" className="block text-navy/70 hover:text-navy hover:underline">
                      Festive
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
