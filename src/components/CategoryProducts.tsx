"use client";

import React, { useState, useEffect } from 'react';
import { productsData } from '../data/products';
import ProductList from './ProductList';
import { CategoryType, ProductType, OccasionType, SizeType } from '../types/product';
import { AdjustmentsHorizontalIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface CategoryProductsProps {
  category: CategoryType;
}

// Define filter options
const filterOptions = {
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

const CategoryProducts = ({ category }: CategoryProductsProps) => {
  // State for filters and sorting
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedOccasions, setSelectedOccasions] = useState<OccasionType[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<SizeType[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  
  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.filter-dropdown') && !target.closest('.sort-dropdown')) {
        setShowFilters(false);
        setShowSortOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  
  // Get all products of this category
  const categoryProducts = productsData.filter((product: ProductType) => product.category === category);
  
  // Get unique occasions for this category
  const allOccasions = Array.from(new Set(categoryProducts.flatMap(p => p.occasions || [])));
  
  // Apply filters
  const filteredProducts = categoryProducts.filter((product) => {
    // Price range filter
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (max) {
        if (product.price < min || product.price > max) return false;
      } else {
        // For '350+' case
        if (product.price < min) return false;
      }
    }
    
    // Occasions filter
    const matchesOccasions = selectedOccasions.length === 0 || 
      selectedOccasions.some(occasion => product.occasions?.includes(occasion));
    
    // Sizes filter
    const matchesSizes = selectedSizes.length === 0 || 
      selectedSizes.some(size => product.sizes?.includes(size));
    
    return matchesOccasions && matchesSizes;
  });
  
  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return (a.price || 0) - (b.price || 0);
      case 'price-high-low':
        return (b.price || 0) - (a.price || 0);
      case 'newest':
        if (!a.createdAt && !b.createdAt) {
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        }
        return new Date(b.createdAt || '2000-01-01').getTime() - new Date(a.createdAt || '2000-01-01').getTime();
      case 'rating':
        const ratingDiff = (b.averageRating || 0) - (a.averageRating || 0);
        if (ratingDiff !== 0) return ratingDiff;
        return (b.reviews?.length || 0) - (a.reviews?.length || 0);
      case 'featured':
      default:
        if (a.isFeatured !== b.isFeatured) {
          return a.isFeatured ? -1 : 1;
        }
        if (a.isNew !== b.isNew) {
          return a.isNew ? -1 : 1;
        }
        return (b.averageRating || 0) - (a.averageRating || 0);
    }
  });
  
  // Toggle filter selection
  const toggleOccasion = (occasion: OccasionType) => {
    setSelectedOccasions(prev => 
      prev.includes(occasion) 
        ? prev.filter(o => o !== occasion)
        : [...prev, occasion]
    );
  };
  
  const toggleSize = (size: SizeType) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedPriceRange('all');
    setSelectedOccasions([]);
    setSelectedSizes([]);
    setSortOption('featured');
  };
  
  // Check if any filters are active
  const hasActiveFilters = 
    selectedPriceRange !== 'all' ||
    selectedOccasions.length > 0 || 
    selectedSizes.length > 0;
  
  return (
    <div>
      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex items-center space-x-6">
          {/* Filter Button */}
          <div className="relative filter-dropdown z-50">
            <button
              onClick={() => {
                setShowFilters(!showFilters);
                setShowSortOptions(false);
              }}
              className="flex items-center space-x-2 text-navy/70 hover:text-navy transition-colors"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Filters</span>
              {hasActiveFilters && (
                <span className="ml-2 bg-navy/10 text-navy text-xs px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Filter Dropdown */}
            {showFilters && (
              <div className="fixed left-4 right-4 md:absolute md:left-0 md:right-auto mt-2 w-[calc(100vw-2rem)] md:w-[90vw] max-w-3xl bg-cream shadow-lg rounded-md border border-taupe/10 z-50">
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
                    {/* Price Ranges */}
                    <div>
                      <h4 className="text-sm font-medium text-navy mb-3">Price Range</h4>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.priceRanges.map(range => (
                          <button
                            key={range.id}
                            onClick={() => setSelectedPriceRange(range.id)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              selectedPriceRange === range.id
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

                    {/* Occasions */}
                    <div>
                      <h4 className="text-sm font-medium text-navy mb-3">Occasions</h4>
                      <div className="flex flex-col gap-2">
                        {allOccasions.map(occasion => (
                          <button
                            key={occasion}
                            onClick={() => toggleOccasion(occasion)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              selectedOccasions.includes(occasion)
                                ? 'bg-navy/5 text-navy'
                                : 'text-navy/70 hover:bg-navy/5'
                            }`}
                          >
                            <div className="flex flex-col items-start">
                              <span className="text-sm capitalize">{occasion}</span>
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
                            onClick={() => toggleSize(size.id)}
                            className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                              selectedSizes.includes(size.id)
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
                  {hasActiveFilters && (
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
              <div className="absolute left-0 mt-2 w-48 bg-cream shadow-lg rounded-md border border-taupe/10">
                <div className="py-2">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'newest', label: 'Newest' },
                    { value: 'price-low-high', label: 'Price: Low to High' },
                    { value: 'price-high-low', label: 'Price: High to Low' },
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
        <div className="ml-auto text-navy/80">
          <span className="uppercase tracking-widest text-xs">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'} found
          </span>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedPriceRange !== 'all' && (
            <button
              onClick={() => setSelectedPriceRange('all')}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span>Price: {filterOptions.priceRanges.find(r => r.id === selectedPriceRange)?.name}</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          )}
          
          {selectedOccasions.map(occasion => (
            <button
              key={occasion}
              onClick={() => toggleOccasion(occasion)}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span>Occasion: {occasion}</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          ))}

          {selectedSizes.map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span>Size: {size}</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          ))}
        </div>
      )}
      
      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <ProductList products={sortedProducts} category={category} />
      ) : (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium text-navy mb-2">No products found</h3>
          <p className="text-navy/60 mb-6">Try adjusting your filters or browse our other collections.</p>
          <button
            onClick={resetFilters}
            className="px-6 py-2 bg-navy text-cream rounded-md hover:bg-navy/90 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts; 