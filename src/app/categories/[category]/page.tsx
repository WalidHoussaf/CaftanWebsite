import React from 'react';
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
      headerBg: 'bg-[#8B4513]',
      mainBg: 'from-[#FFF8E7] to-[#FFF1DC]',
      features: [
        { title: 'Handcrafted Excellence', description: 'Each piece is meticulously crafted by skilled artisans' },
        { title: 'Premium Materials', description: 'Finest silks, velvets, and premium fabrics' },
        { title: 'Traditional Design', description: 'Authentic Moroccan patterns and motifs' },
        { title: 'Modern Elegance', description: 'Contemporary styles with traditional touches' }
      ]
    },
    jellaba: {
      title: 'Jellabas',
      subtitle: 'Timeless Tradition',
      description: 'Explore our selection of authentic Moroccan jellabas, combining comfort and elegance. Ideal for everyday wear or special occasions such as Ramadan, our jellabas are made with quality fabrics and traditional craftsmanship.',
      headerBg: 'bg-[#2D4F2B]',
      mainBg: 'from-[#FFF8E7] to-[#FFF1DC]',
      features: [
        { title: 'Comfort First', description: 'Designed for everyday comfort and style' },
        { title: 'Quality Fabrics', description: 'Breathable materials for all seasons' },
        { title: 'Versatile Design', description: 'Perfect for both casual and formal occasions' },
        { title: 'Traditional Touch', description: 'Authentic Moroccan craftsmanship' }
      ]
    },
  };

  const { title, subtitle, description, headerBg, mainBg, features } = categoryInfo[categoryParam];

  return (
    <div className={`bg-gradient-to-b ${mainBg}`}>
      {/* Category Header - Clean Design */}
      <section className={`relative w-full ${headerBg} pt-40 pb-20 overflow-hidden`}>
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
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto px-6">
            <span className="uppercase tracking-widest text-xl text-[#FFF1CA] mb-6 block font-light opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
              Our Collection
            </span>
            <div className="inline-block mb-6 relative">
              <h1 className="font-serif text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#FFF1CA] to-[#FFB823] bg-clip-text text-transparent mb-6 relative z-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] transform translate-y-4">
                {title}
              </h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#FFB823] to-transparent animate-[expandWidth_0.8s_ease-out_0.6s_forwards]"></div>
            </div>
            <h2 className="font-serif text-lg md:text-xl text-[#FFF1CA] mb-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] transform translate-y-4">
              {subtitle}
            </h2>
            
            {/* Decorative Elements */}
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#E6C200]/30 to-transparent mt-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]"></div>
          </div>
        </div>
        
        {/* Subtle Decorative Circles */}
        <div className="absolute top-48 right-8 w-32 h-32 border border-navy/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-8 left-8 w-48 h-48 border border-[#E6C200]/10 rounded-full opacity-20"></div>
      </section>

      {/* Collection Description */}
      <section className="py-20 relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-block mb-6 relative">
              <span className="font-serif text-3xl text-navy/70 relative z-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                About the Collection
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-taupe/30 to-transparent animate-[expandWidth_0.8s_ease-out_0.4s_forwards]"></div>
            </div>
            <p className="text-navy/80 text-lg leading-relaxed text-center mx-auto opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-taupe/10 hover:border-[#E6C200]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#E6C200]/5 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E6C200]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <h3 className="font-serif text-xl text-navy mb-3 text-center transform group-hover:scale-105 transition-transform duration-500">{feature.title}</h3>
                  <p className="text-navy/70 text-center group-hover:text-navy/90 transition-colors duration-500">{feature.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#E6C200]/0 group-hover:border-[#E6C200]/5 rounded-lg transition-all duration-500 scale-90 group-hover:scale-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Products Section */}
      <section className="py-12 relative">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div className="inline-block mb-6 relative">
              <span className="font-serif text-2xl font-light text-navy/70 relative z-10">Browse Collection</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-taupe/30 to-transparent"></div>
            </div>
          </div>

          {/* Products Grid */}
          <CategoryProducts category={categoryParam} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-navy/10 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 border border-taupe/20 rounded-full opacity-30"></div>
      </section>
    </div>
  );
} 