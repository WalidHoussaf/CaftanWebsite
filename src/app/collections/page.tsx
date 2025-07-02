"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productsData } from '@/data/products';
import { ProductType, SizeType, CategoryType } from '@/types/product';
import { AdjustmentsHorizontalIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import ProductCardComponent from '@/components/ProductCard';

interface CategoryOption {
  id: string;
  name: string;
  icon?: string;
}

// Define collection categories with enhanced metadata
const collections = [
  { 
    id: 'all', 
    name: 'All Collections',
    description: 'Explore our complete range of traditional Moroccan garments',
    image: '/images/collections/all.jpg'
  },
  { 
    id: 'wedding', 
    name: 'Wedding Collection', 
    occasions: ['mariage'],
    description: 'Luxurious pieces for your special day',
    image: '/images/collections/wedding.jpg'
  },
  { 
    id: 'festive', 
    name: 'Festive Collection', 
    occasions: ['fête', 'cérémonie'],
    description: 'Celebrate in style with our festive wear',
    image: '/images/collections/festive.jpg'
  },
  { 
    id: 'ramadan', 
    name: 'Ramadan Collection', 
    occasions: ['ramadan'],
    description: 'Elegant comfort for the holy month',
    image: '/images/collections/ramadan.jpg'
  },
  { 
    id: 'daily', 
    name: 'Daily Wear', 
    occasions: ['quotidien'],
    description: 'Sophisticated comfort for everyday elegance',
    image: '/images/collections/daily.jpg'
  },
  { 
    id: 'evening', 
    name: 'Evening Collection', 
    occasions: ['soirée'],
    description: 'Stunning pieces for special evenings',
    image: '/images/collections/evening.jpg'
  },
];

// Define filter options
const filterOptions: {
  categories: CategoryOption[];
  priceRanges: Array<{id: string; name: string; label?: string}>;
  sizes: Array<{id: SizeType; name: string}>;
} = {
  categories: [
    { id: 'all', name: 'All Categories' },
    { id: 'caftan', name: 'Caftans', icon: '/images/dress.png' },
    { id: 'jellaba', name: 'Jellabas', icon: '/images/jellaba.png' },
  ],
  priceRanges: [
    { id: 'all', name: 'All Prices' },
    { id: '0-150', name: 'Under €150', label: 'Budget Friendly' },
    { id: '150-250', name: '€150 - €250', label: 'Mid Range' },
    { id: '250-350', name: '€250 - €350', label: 'Premium' },
    { id: '350+', name: 'Over €350', label: 'Luxury' },
  ],
  sizes: [
    { id: 'XS' as SizeType, name: 'XS' },
    { id: 'S' as SizeType, name: 'S' },
    { id: 'M' as SizeType, name: 'M' },
    { id: 'L' as SizeType, name: 'L' },
    { id: 'XL' as SizeType, name: 'XL' },
    { id: 'XXL' as SizeType, name: 'XXL' },
    { id: 'XXXL' as SizeType, name: 'XXXL' },
  ],
};

export default function CollectionsPage() {
  const [activeCollection, setActiveCollection] = useState('all');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sizes: [] as SizeType[],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Add click outside handler for sort dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.sort-dropdown') && !target.closest('.filter-dropdown')) {
        setShowSortOptions(false);
        setShowFilters(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products based on selected collection and filters
  const filteredProducts = productsData.filter((product) => {
    // Collection filter
    if (activeCollection !== 'all') {
      const collection = collections.find(c => c.id === activeCollection);
      if (collection && collection.occasions) {
        if (!product.occasions || !product.occasions.some(occasion => collection.occasions.includes(occasion))) {
          return false;
        }
      }
    }

    // Category filter
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (product.price < min || product.price > max) return false;
      } else {
        if (product.price < min) return false;
      }
    }

    // Size filter
    if (filters.sizes.length > 0) {
      if (!product.sizes.some(size => filters.sizes.includes(size))) {
        return false;
      }
    }

    return true;
  });

  // Enhanced sorting with animation states
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return a.isNew ? -1 : 1;
      case 'rating':
        return ((b.averageRating || 0) - (a.averageRating || 0));
      case 'featured':
      default:
        return a.isFeatured ? -1 : 1;
    }
  });

  // Handle filter changes with animation
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const activeCollectionData = collections.find(c => c.id === activeCollection) || collections[0];

  // Add a helper function to check if any filter is active
  const isAnyFilterActive = () => {
    return filters.category !== 'all' || 
           filters.priceRange !== 'all' || 
           filters.sizes.length > 0 ||
           activeCollection !== 'all';
  };

  // Handle size toggle
  const handleSizeToggle = (size: SizeType) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      sizes: [],
    });
    setActiveCollection('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] bg-[#B22222] overflow-hidden">
        {/* Decorative stripes */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                bottom: '-100%',
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
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-[#1B2A4E]/30" />
        {/* Content */}
        <div className="relative h-full container-custom flex flex-col justify-center items-center text-center z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#FFF1CA] to-[#FFB823] bg-clip-text text-transparent mb-6 relative z-10">
            Our Collections
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB823] to-transparent"></div>
          <p className="text-lg md:text-xl text-[#FFF1CA] max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our exquisite collections of traditional Moroccan garments, 
            meticulously crafted with authentic techniques and premium materials.
          </p>

          {/* Enhanced Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="text-[#FFF1CA] text-sm font-light mb-2 text-center animate-float">
              <div className="mb-1">استكشف المجموعة</div>
              <div>Explore Collection</div>
            </div>
            <div className="relative">
              <div className="w-8 h-12 border-2 border-[#FFF1CA] rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#FFF1CA] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-20">
        {/* Collection Navigation - Enhanced */}
        <div className="mb-24">
          <div className="text-center mb-16 pt-4">
            <div className="inline-block mb-6 relative">
              <span className="font-serif text-3xl text-navy/70 relative z-10">Browse by Collection</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-taupe/30 to-transparent"></div>
            </div>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Discover our carefully curated collections, each telling a unique story of Moroccan craftsmanship and elegance. 
              From wedding ceremonies to daily wear, find the perfect piece for every occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <button
                key={collection.id}
                onClick={() => {
                  setActiveCollection(collection.id);
                  document.getElementById('preview-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-taupe/10 ${
                  activeCollection === collection.id
                    ? 'ring-4 ring-navy/20 scale-[1.02]'
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] relative">
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-transparent z-10 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-cream/30 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-cream/30 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                  
                  {/* Decorative side line */}
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#E6C200]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>

                  {/* Background fill for empty space */}
                  <div className="absolute inset-0 bg-[#f0ede5]"></div>

                  {collection.image && (
                    <div className="relative h-full w-full">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        quality={95}
                        priority={index < 3}
                      />
                      {/* Subtle radial gradient overlay */}
                      <div className="absolute inset-0 bg-radial-subtle opacity-30 mix-blend-overlay pointer-events-none"></div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end z-20 p-8">
                    <div className="text-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                      {/* Decorative element */}
                      <div className="w-20 h-px bg-gradient-to-r from-transparent via-cream to-transparent mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                      
                      {/* Decorative Moroccan symbol */}
                      <div className="w-12 h-12 mx-auto mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-[#E6C200]/70">
                          <path d="M12,2 L22,12 L12,22 L2,12 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
                          <path d="M12,5 L19,12 L12,19 L5,12 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <path d="M12,8 L16,12 L12,16 L8,12 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                          <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="0.3" />
                        </svg>
                      </div>

                      <h3 className="font-serif text-3xl text-cream mb-4">{collection.name}</h3>
                      <p className="text-cream/90 max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 text-sm tracking-wider uppercase">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Sorting - Enhanced */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            {/* Filter Button */}
            <div className="relative filter-dropdown z-50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFilters(!showFilters);
                  setShowSortOptions(false);
                }}
                className="flex items-center space-x-2 text-navy/70 hover:text-navy transition-colors"
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Filters</span>
                {isAnyFilterActive() && (
                  <span className="ml-2 bg-navy/10 text-navy text-xs px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* Filter Panel */}
              {showFilters && (
                <div className="absolute left-0 mt-2 w-[90vw] max-w-3xl bg-cream shadow-lg rounded-md border border-taupe/10">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-navy">Filters</h3>
                      <button 
                        onClick={() => setShowFilters(false)}
                        className="text-navy/50 hover:text-navy"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Categories */}
                      <div>
                      <h4 className="text-sm font-medium text-navy mb-3">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                        {filterOptions.categories.map(category => (
                          <button
                            key={category.id}
                            onClick={() => handleFilterChange('category', category.id)}
                              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                              filters.category === category.id
                                ? 'bg-navy/5 text-navy'
                                : 'text-navy/70 hover:bg-navy/5'
                            }`}
                          >
                            {category.icon && (
                              <Image
                                src={category.icon}
                                alt={category.name}
                                width={20}
                                height={20}
                                className="mr-3"
                              />
                            )}
                              <span className="text-sm whitespace-nowrap">{category.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Ranges */}
                      <div>
                      <h4 className="text-sm font-medium text-navy mb-3">Price Range</h4>
                        <div className="flex flex-wrap gap-2">
                        {filterOptions.priceRanges.map(range => (
                          <button
                            key={range.id}
                            onClick={() => handleFilterChange('priceRange', range.id)}
                              className={`px-4 py-2 rounded-lg transition-colors ${
                              filters.priceRange === range.id
                                ? 'bg-navy/5 text-navy'
                                : 'text-navy/70 hover:bg-navy/5'
                            }`}
                          >
                              <div className="flex flex-col items-start">
                                <span className="text-sm whitespace-nowrap">{range.name}</span>
                            {range.label && (
                                  <span className="text-xs text-navy/50">{range.label}</span>
                            )}
                              </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                      <div>
                      <h4 className="text-sm font-medium text-navy mb-3">Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.sizes.map(size => (
                          <button
                            key={size.id}
                            onClick={() => handleSizeToggle(size.id)}
                              className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                              filters.sizes.includes(size.id)
                                ? 'bg-navy text-cream border-navy'
                                : 'bg-cream text-navy border-taupe/30 hover:border-navy'
                            }`}
                          >
                            {size.name}
                          </button>
                        ))}
                        </div>
                      </div>
                    </div>

                    {/* Reset Filters */}
                    {isAnyFilterActive() && (
                      <div className="mt-6 flex justify-end">
                      <button
                        onClick={resetFilters}
                          className="px-6 py-2 text-sm text-navy/70 hover:text-navy border border-taupe/30 rounded-lg transition-colors"
                      >
                        Reset All Filters
                      </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative sort-dropdown z-50">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSortOptions(!showSortOptions);
                  setShowFilters(false);
                }}
                className="flex items-center space-x-2 text-navy/70 hover:text-navy transition-colors"
              >
                <span className="text-sm font-medium">Sort By</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${showSortOptions ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Sort Options Dropdown */}
              {showSortOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-cream shadow-lg rounded-md border border-taupe/10">
                  <div className="py-2">
                    {[
                      { value: 'featured', label: 'Featured' },
                      { value: 'newest', label: 'Newest' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Top Rated' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortOption(option.value);
                          setShowSortOptions(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          sortOption === option.value 
                            ? 'text-navy bg-navy/5 font-medium' 
                            : 'text-navy/70 hover:bg-navy/5'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {isAnyFilterActive() && (
            <div className="flex flex-wrap gap-2">
              {activeCollection !== 'all' && (
                <button
                  onClick={() => setActiveCollection('all')}
                  className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
                >
                  <span>Collection: {collections.find(c => c.id === activeCollection)?.name}</span>
                  <XMarkIcon className="h-3 w-3 ml-1" />
                </button>
              )}
              
              {filters.category !== 'all' && (
                <button
                  onClick={() => handleFilterChange('category', 'all')}
                  className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
                >
                  <span>Category: {filterOptions.categories.find(c => c.id === filters.category)?.name}</span>
                  <XMarkIcon className="h-3 w-3 ml-1" />
                </button>
              )}

              {filters.priceRange !== 'all' && (
                <button
                  onClick={() => handleFilterChange('priceRange', 'all')}
                  className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
                >
                  <span>Price: {filterOptions.priceRanges.find(r => r.id === filters.priceRange)?.name}</span>
                  <XMarkIcon className="h-3 w-3 ml-1" />
                </button>
              )}

              {filters.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
                >
                  <span>Size: {size}</span>
                  <XMarkIcon className="h-3 w-3 ml-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid - Enhanced */}
        <div id="preview-section" className="mb-12 scroll-mt-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif text-navy">
              {activeCollectionData.name}
              <span className="ml-3 text-lg text-navy/50">
                {mounted ? `${sortedProducts.length} items` : null}
              </span>
            </h2>
          </div>

          {mounted ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <ProductCardComponent 
                  key={product.id} 
                  product={product}
                />
              ))}
            </div>
          ) : null}

          {mounted && sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-serif text-navy mb-4">No Products Found</h3>
              <p className="text-navy/70 mb-8">Try adjusting your filters to find what you're looking for.</p>
              <button
                onClick={() => {
                  setFilters({
                    category: 'all',
                    priceRange: 'all',
                    sizes: [],
                  });
                  setActiveCollection('all');
                }}
                className="px-6 py-3 bg-navy text-cream rounded-full hover:bg-navy/90 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced Product Card Component
function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link 
      href={`/product/${product.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-navy text-cream text-xs font-medium rounded-full">
            New
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
            Sale
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg text-navy mb-2 group-hover:text-navy/70 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-medium text-navy">
            €{product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-navy/50 line-through">
              €{product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// Add this component at the end of the file
function ClientProductCount({ count }: { count: number }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{count} items</>;
}
