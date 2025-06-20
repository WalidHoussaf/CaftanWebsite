"use client";

import React, { useState, useEffect } from 'react';
import { productsData } from '../data/products';
import ProductList from './ProductList';
import { CategoryType, ProductType, OccasionType, SizeType } from '../types/product';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface CategoryProductsProps {
  category: CategoryType;
}

const CategoryProducts = ({ category }: CategoryProductsProps) => {
  // State for filters and sorting
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedOccasions, setSelectedOccasions] = useState<OccasionType[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<SizeType[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  
  // Get all products of this category
  const categoryProducts = productsData.filter((product: ProductType) => product.category === category);
  
  // Get unique occasions, colors, and sizes for this category
  const allOccasions = Array.from(new Set(categoryProducts.flatMap(p => p.occasions || [])));
  const allColors = Array.from(new Set(categoryProducts.flatMap(p => p.colors || [])));
  const allSizes = Array.from(new Set(categoryProducts.flatMap(p => p.sizes || [])));
  
  // Get min and max prices for this category
  const prices = categoryProducts.map(p => p.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));
  
  // Initialize price range based on category products
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [category, minPrice, maxPrice]);
  
  // Apply filters
  const filteredProducts = categoryProducts.filter((product) => {
    // Price filter
    const priceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Occasions filter
    const matchesOccasions = selectedOccasions.length === 0 || 
      selectedOccasions.some(occasion => product.occasions?.includes(occasion));
    
    // Colors filter
    const matchesColors = selectedColors.length === 0 || 
      selectedColors.some(color => product.colors?.includes(color));
    
    // Sizes filter
    const matchesSizes = selectedSizes.length === 0 || 
      selectedSizes.some(size => product.sizes?.includes(size));
    
    return priceInRange && matchesOccasions && matchesColors && matchesSizes;
  });
  
  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'newest':
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      case 'rating':
        return (b.averageRating || 0) - (a.averageRating || 0);
      case 'featured':
      default:
        return a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1;
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
  
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
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
    setPriceRange([minPrice, maxPrice]);
    setSelectedOccasions([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSortOption('featured');
  };
  
  // Check if any filters are active
  const hasActiveFilters = 
    selectedOccasions.length > 0 || 
    selectedColors.length > 0 || 
    selectedSizes.length > 0 || 
    priceRange[0] > minPrice || 
    priceRange[1] < maxPrice;
  
  return (
    <div>
      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="text-navy/80">
          <span className="uppercase tracking-widest text-xs">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'} found
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Filter Button */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowFilters(!showFilters);
                setShowSortOptions(false);
              }}
              className="flex items-center space-x-2 text-navy/70 hover:text-navy transition-colors"
            >
              <span className="uppercase tracking-widest text-xs">Filter</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Filter Dropdown */}
            {showFilters && (
              <div className="absolute right-0 mt-2 w-72 bg-cream shadow-lg rounded-md border border-taupe/10 z-30">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-navy">Filters</h3>
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="text-navy/50 hover:text-navy"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Price Range */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-navy mb-3">Price Range</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-navy/70">${priceRange[0]}</span>
                      <span className="text-xs text-navy/70">${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full accent-navy mb-2"
                    />
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-navy"
                    />
                  </div>
                  
                  {/* Occasions */}
                  {allOccasions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-navy mb-3">Occasions</h4>
                      <div className="space-y-2">
                        {allOccasions.map((occasion) => (
                          <label key={occasion} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedOccasions.includes(occasion)}
                              onChange={() => toggleOccasion(occasion)}
                              className="mr-2 accent-navy"
                            />
                            <span className="text-sm capitalize">{occasion}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Colors */}
                  {allColors.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-navy mb-3">Colors</h4>
                      <div className="flex flex-wrap gap-2">
                        {allColors.map((color) => (
                          <button
                            key={color}
                            onClick={() => toggleColor(color)}
                            className={`w-6 h-6 rounded-full border ${selectedColors.includes(color) ? 'ring-2 ring-navy ring-offset-2' : 'border-gray-300'}`}
                            style={{ backgroundColor: color }}
                            aria-label={`Filter by color ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Sizes */}
                  {allSizes.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-navy mb-3">Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {allSizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`px-3 py-1 text-xs border rounded-md transition-colors ${selectedSizes.includes(size) ? 'bg-navy text-cream border-navy' : 'bg-cream text-navy border-taupe/30 hover:border-navy'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Reset Button */}
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="w-full py-2 text-sm text-navy/70 hover:text-navy border border-taupe/30 rounded-md transition-colors mt-2"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Sort Button */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowSortOptions(!showSortOptions);
                setShowFilters(false);
              }}
              className="flex items-center space-x-2 text-navy/70 hover:text-navy transition-colors"
            >
              <span className="uppercase tracking-widest text-xs">Sort</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${showSortOptions ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Sort Dropdown */}
            {showSortOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-cream shadow-lg rounded-md border border-taupe/10 z-30">
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
                      className={`w-full text-left px-4 py-2 text-sm ${sortOption === option.value ? 'text-navy bg-navy/5 font-medium' : 'text-navy/70 hover:bg-navy/5'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedOccasions.map(occasion => (
            <button
              key={occasion}
              onClick={() => toggleOccasion(occasion)}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span className="capitalize">{occasion}</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          ))}
          
          {selectedColors.map(color => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: color }}></span>
              <span>Color</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          ))}
          
          {selectedSizes.map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span>Size {size}</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          ))}
          
          {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
            <button
              onClick={() => setPriceRange([minPrice, maxPrice])}
              className="flex items-center bg-navy/5 text-navy text-xs px-3 py-1 rounded-full"
            >
              <span>${priceRange[0]} - ${priceRange[1]}</span>
              <XMarkIcon className="h-3 w-3 ml-1" />
            </button>
          )}
          
          <button
            onClick={resetFilters}
            className="flex items-center text-navy/70 hover:text-navy text-xs underline"
          >
            Clear all
          </button>
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