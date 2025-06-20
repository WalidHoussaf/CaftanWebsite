import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryProducts from '../../../components/CategoryProducts';
import { notFound } from 'next/navigation';
import { CategoryType } from '../../../types/product';

// Types for page parameters
interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Convert URL parameter to valid category type
  const categoryParam = params.category.endsWith('s') 
    ? params.category.slice(0, -1) as CategoryType 
    : params.category as CategoryType;

  // Check if it's a valid category
  if (categoryParam !== 'caftan' && categoryParam !== 'jellaba') {
    notFound();
  }

  // Category information
  const categoryInfo = {
    caftan: {
      title: 'Caftans',
      subtitle: 'A Legacy of Luxury',
      description: 'Discover our exclusive collection of traditional Moroccan caftans, perfect for special occasions, weddings and ceremonies. Each piece is meticulously crafted with high-quality materials and exquisite handmade embroidery.',
      banner: '/images/banners/caftan-banner.jpg',
    },
    jellaba: {
      title: 'Jellabas',
      subtitle: 'Timeless Tradition',
      description: 'Explore our selection of authentic Moroccan jellabas, combining comfort and elegance. Ideal for everyday wear or special occasions such as Ramadan, our jellabas are made with quality fabrics and traditional craftsmanship.',
      banner: '/images/banners/jellaba-banner.jpg',
    },
  };

  const { title, subtitle, description, banner } = categoryInfo[categoryParam];

  return (
    <div className="bg-cream">
      {/* Category Banner - Full Height */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-noir/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <span className="uppercase tracking-widest text-xs text-cream/90 mb-6 block">Our Collection</span>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-cream mb-6">{title}</h1>
            <h2 className="font-serif text-xl md:text-2xl text-cream/90 italic mb-8">{subtitle}</h2>
          </div>
        </div>
      </section>

      {/* Collection Description */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-navy/80 text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Filters & Products Section */}
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between mb-12 border-b border-taupe/20 pb-6">
            <h3 className="font-serif text-2xl font-light text-navy mb-4 md:mb-0">Browse Collection</h3>
          </div>

          {/* Products Grid */}
          <CategoryProducts category={categoryParam} />
        </div>
      </section>
    </div>
  );
} 