"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '../data/products';
import { ProductType } from '../types/product';
import { HeartIcon, ShoppingCartIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

interface ProductDetailsProps {
  productId: string;
}

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find product by ID
    const foundProduct = productsData.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      // Set defaults if available
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
    }
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="w-8 h-8 border-2 border-navy/20 border-t-navy rounded-full animate-spin mx-auto"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="font-serif text-2xl text-navy mb-4">Product Not Found</h2>
        <p className="text-navy/70 mb-8">The product you are looking for is not available.</p>
        <Link href="/categories/caftans" className="inline-block bg-navy text-cream px-6 py-3 uppercase tracking-wider text-sm hover:bg-navy/90 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <nav className="container-custom py-4 text-navy/60">
        <ol className="flex flex-wrap items-center text-xs uppercase tracking-wider">
          <li className="flex items-center">
            <Link href="/" className="hover:text-navy">Home</Link>
            <ChevronRightIcon className="h-3 w-3 mx-2" />
          </li>
          <li className="flex items-center">
            <Link href={`/categories/${product.category}s`} className="hover:text-navy">
              {product.category === 'caftan' ? 'Caftans' : 'Jellabas'}
            </Link>
            <ChevronRightIcon className="h-3 w-3 mx-2" />
          </li>
          <li className="text-navy/90">{product.name}</li>
        </ol>
      </nav>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4 aspect-[3/4] relative bg-white">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              ) : (
                <div className="w-full h-full bg-taupe/10 flex items-center justify-center">
                  <span className="text-navy/50 uppercase tracking-wider text-sm">No image available</span>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square relative border ${
                      index === currentImageIndex ? 'border-navy' : 'border-taupe/30 hover:border-taupe/60'
                    } transition-colors`}
                    onClick={() => handleImageChange(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 20vw, 10vw"
                      quality={85}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div>
            <div className="mb-6">
              <h1 className="font-serif text-3xl lg:text-4xl text-navy mb-2">{product.name}</h1>
              
              {/* Rating */}
              {product.averageRating && (
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.round(product.averageRating || 0)
                            ? 'text-gold'
                            : 'text-navy/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-navy/70">{product.averageRating.toFixed(1)}</span>
                </div>
              )}
              
              {/* Price */}
              <div className="flex items-baseline mb-6">
                <span className="text-2xl text-navy mr-2">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="text-navy/50 line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-navy/80 leading-relaxed">{product.description}</p>
            </div>

            {/* Details & Specifications */}
            <div className="mb-8 pb-8 border-b border-taupe/20">
              <table className="w-full text-sm">
                <tbody>
                  {product.material && (
                    <tr>
                      <td className="py-2 pr-4 text-navy/60 uppercase tracking-wider">Material</td>
                      <td className="py-2 text-navy">{product.material}</td>
                    </tr>
                  )}
                  {product.occasions && product.occasions.length > 0 && (
                    <tr>
                      <td className="py-2 pr-4 text-navy/60 uppercase tracking-wider">Occasions</td>
                      <td className="py-2 text-navy">{product.occasions.join(', ')}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2 pr-4 text-navy/60 uppercase tracking-wider">Availability</td>
                    <td className="py-2">
                      {product.isAvailable ? (
                        <span className="text-emerald">In Stock ({product.stock})</span>
                      ) : (
                        <span className="text-ruby">Out of Stock</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider text-navy/60 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color 
                          ? 'ring-2 ring-offset-2 ring-navy' 
                          : 'ring-1 ring-taupe/30'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm uppercase tracking-wider text-navy/60">Size</h3>
                  <button className="text-navy underline text-xs">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`min-w-[3rem] h-10 px-3 border ${
                        selectedSize === size
                          ? 'bg-navy text-cream border-navy'
                          : 'bg-transparent text-navy border-taupe/30 hover:border-navy'
                      } transition-all`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
              {/* Quantity */}
              <div className="flex border border-taupe/30 h-12">
                <button
                  className="w-12 flex items-center justify-center text-navy/60 hover:text-navy disabled:opacity-50"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <span className="text-xl">−</span>
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-16 text-center border-x border-taupe/30 bg-transparent text-navy"
                />
                <button
                  className="w-12 flex items-center justify-center text-navy/60 hover:text-navy disabled:opacity-50"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                >
                  <span className="text-xl">+</span>
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                className="flex-1 bg-navy text-cream h-12 px-8 uppercase tracking-wider text-sm flex items-center justify-center hover:bg-navy/90 transition-colors"
                disabled={!product.isAvailable}
              >
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </button>

              {/* Wishlist button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-12 h-12 border border-taupe/30 flex items-center justify-center hover:border-navy text-navy/60 hover:text-navy transition-colors"
                aria-label="Add to wishlist"
              >
                {isFavorite ? (
                  <HeartIconSolid className="h-5 w-5 text-ruby" />
                ) : (
                  <HeartIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            
            {/* Free shipping notice */}
            <div className="text-navy/70 text-sm italic">
              Free shipping on orders over $200
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 