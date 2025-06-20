"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productsData } from '@/data/products';
import { ProductType } from '@/types/product';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Define collection categories
const collections = [
  { id: 'all', name: 'All Collections' },
  { id: 'wedding', name: 'Wedding Collection', occasions: ['mariage'] },
  { id: 'festive', name: 'Festive Collection', occasions: ['fête', 'cérémonie'] },
  { id: 'ramadan', name: 'Ramadan Collection', occasions: ['ramadan'] },
  { id: 'daily', name: 'Daily Wear', occasions: ['quotidien'] },
  { id: 'evening', name: 'Evening Collection', occasions: ['soirée'] },
];

// Define filter options
const filterOptions = {
  categories: [
    { id: 'all', name: 'All Categories' },
    { id: 'caftan', name: 'Caftans' },
    { id: 'jellaba', name: 'Jellabas' },
  ],
  priceRanges: [
    { id: 'all', name: 'All Prices' },
    { id: '0-150', name: 'Under €150' },
    { id: '150-250', name: '€150 - €250' },
    { id: '250-350', name: '€250 - €350' },
    { id: '350+', name: 'Over €350' },
  ],
  colors: [
    { id: 'all', name: 'All Colors' },
    { id: 'blue', name: 'Blue', hex: '#1e3a8a' },
    { id: 'green', name: 'Green', hex: '#047857' },
    { id: 'red', name: 'Red', hex: '#b91c1c' },
    { id: 'orange', name: 'Orange', hex: '#c2410c' },
    { id: 'pink', name: 'Pink', hex: '#fda4af' },
    { id: 'gray', name: 'Gray', hex: '#64748b' },
    { id: 'gold', name: 'Gold', hex: '#c8a951' },
  ],
};

export default function CollectionsPage() {
  const [activeCollection, setActiveCollection] = useState('all');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    color: 'all',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('featured');

  // Filter products based on selected collection and filters
  const filteredProducts = productsData.filter((product) => {
    // Collection filter
    if (activeCollection !== 'all') {
      const collection = collections.find(c => c.id === activeCollection);
      if (collection && collection.occasions) {
        if (!product.occasions.some(occasion => collection.occasions.includes(occasion))) {
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
        // For "350+" case
        if (product.price < min) return false;
      }
    }

    // Color filter
    if (filters.color !== 'all') {
      const colorOption = filterOptions.colors.find(c => c.id === filters.color);
      if (colorOption && colorOption.hex) {
        if (!product.colors.includes(colorOption.hex)) return false;
      }
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return a.isNew ? -1 : 1;
      case 'featured':
      default:
        return a.isFeatured ? -1 : 1;
    }
  });

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      {/* Hero section */}
      <div className="relative h-80 bg-navy/90 overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] bg-repeat opacity-10"></div>
        <div className="container-custom h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">Our Collections</h1>
          <p className="text-cream/80 max-w-2xl">
            Discover our exquisite collections of traditional Moroccan garments, 
            meticulously crafted with authentic techniques and premium materials.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-full h-12 bg-gradient-to-t from-cream to-transparent"></div>
      </div>

      <div className="container-custom">
        {/* Collection navigation */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setActiveCollection(collection.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCollection === collection.id
                  ? 'bg-navy text-cream shadow-md'
                  : 'bg-white text-navy hover:bg-navy/10'
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* Filters and sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:bg-navy/5 transition-colors"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5 text-navy" />
            <span className="text-navy text-sm font-medium">Filters</span>
          </button>

          <div className="flex items-center">
            <span className="text-navy/70 text-sm mr-2">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/30"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter panel - mobile friendly */}
        {showFilters && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 relative">
            <button
              onClick={() => setShowFilters(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-navy"
              aria-label="Close filters"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            
            <h3 className="text-lg font-medium text-navy mb-4">Refine Your Search</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category filter */}
              <div>
                <h4 className="font-medium text-navy/80 mb-2">Category</h4>
                <div className="space-y-2">
                  {filterOptions.categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={filters.category === category.id}
                        onChange={() => handleFilterChange('category', category.id)}
                        className="mr-2 text-navy focus:ring-navy"
                      />
                      <span className="text-sm text-navy/70">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price range filter */}
              <div>
                <h4 className="font-medium text-navy/80 mb-2">Price Range</h4>
                <div className="space-y-2">
                  {filterOptions.priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.id}
                        checked={filters.priceRange === range.id}
                        onChange={() => handleFilterChange('priceRange', range.id)}
                        className="mr-2 text-navy focus:ring-navy"
                      />
                      <span className="text-sm text-navy/70">{range.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color filter */}
              <div>
                <h4 className="font-medium text-navy/80 mb-2">Color</h4>
                <div className="space-y-2">
                  {filterOptions.colors.map((color) => (
                    <label key={color.id} className="flex items-center">
                      <input
                        type="radio"
                        name="color"
                        value={color.id}
                        checked={filters.color === color.id}
                        onChange={() => handleFilterChange('color', color.id)}
                        className="mr-2 text-navy focus:ring-navy"
                      />
                      {color.id !== 'all' && (
                        <span 
                          className="w-4 h-4 rounded-full mr-2" 
                          style={{ backgroundColor: color.hex }}
                        ></span>
                      )}
                      <span className="text-sm text-navy/70">{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setFilters({
                    category: 'all',
                    priceRange: 'all',
                    color: 'all',
                  });
                }}
                className="text-sm text-navy/70 hover:text-navy mr-4"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="px-4 py-2 bg-navy text-cream rounded-full text-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Products grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-medium text-navy mb-4">No products found</h2>
            <p className="text-navy/70 mb-8">Try adjusting your filters to find what you're looking for</p>
            <button
              onClick={() => {
                setFilters({
                  category: 'all',
                  priceRange: 'all',
                  color: 'all',
                });
                setActiveCollection('all');
              }}
              className="px-6 py-2 bg-navy text-cream rounded-full"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Product card component
function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Product image */}
        <div className="relative h-80 bg-sand/20 overflow-hidden">
          {product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-emerald text-white text-xs px-2 py-1 rounded">New</span>
            )}
            {product.oldPrice && (
              <span className="bg-navy text-cream text-xs px-2 py-1 rounded">
                Sale
              </span>
            )}
          </div>
        </div>
        
        {/* Product info */}
        <div className="p-4">
          <h3 className="text-navy font-medium mb-1 group-hover:text-emerald transition-colors">
            {product.name}
          </h3>
          <p className="text-navy/60 text-sm mb-2">{product.category === 'caftan' ? 'Caftan' : 'Jellaba'}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {product.oldPrice ? (
                <>
                  <span className="text-emerald font-medium">{product.price.toFixed(2)} €</span>
                  <span className="text-navy/50 text-sm line-through ml-2">{product.oldPrice.toFixed(2)} €</span>
                </>
              ) : (
                <span className="text-navy font-medium">{product.price.toFixed(2)} €</span>
              )}
            </div>
            
            {/* Color options preview */}
            <div className="flex -space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full border border-white"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
              {product.colors.length > 3 && (
                <span className="w-4 h-4 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] text-navy/70">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
