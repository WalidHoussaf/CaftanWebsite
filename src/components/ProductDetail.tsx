import { useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ProductType } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

// Available sizes for products
const availableSizes = [
  { name: 'XS', value: 'xs' },
  { name: 'S', value: 's' },
  { name: 'M', value: 'm' },
  { name: 'L', value: 'l' },
  { name: 'XL', value: 'xl' },
  { name: 'CUSTOM', value: 'custom' },
];

interface ProductDetailProps {
  product: ProductType;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const { addItem } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const imageRef = useRef<HTMLDivElement>(null);
  
  // State for product options
  const [selectedSize, setSelectedSize] = useState<string>(availableSizes[0].value);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isCustomSizeModalOpen, setIsCustomSizeModalOpen] = useState(false);
  
  const isFavorite = isInWishlist(product.id);
  
  // Handle mouse move for zoom effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !isZoomed) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  // Toggle zoom
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    addItem(product, '', selectedSize, quantity);
    toast.success('Added to cart!');
  };
  
  // Handle buy now
  const handleBuyNow = () => {
    addItem(product, '', selectedSize, quantity);
    router.push('/cart');
  };
  
  // Toggle favorite status
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10));
  };
  
  // Decrement quantity
  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };
  
  // Handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    if (size === 'custom') {
      setIsCustomSizeModalOpen(true);
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto bg-[#F9F6F1] rounded-3xl p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4 md:ml-6">
          <motion.div
            ref={imageRef}
            className="relative w-full h-auto md:h-[600px] overflow-hidden group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={product.images[currentImageIndex] || '/images/placeholder.jpg'}
                  alt={product.name}
                  width={500}
                  height={700}
                  className={`w-full h-auto object-contain rounded-3xl transition-transform duration-300 cursor-${isZoomed ? 'zoom-out' : 'default'} ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : undefined
                  }
                  quality={90}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Zoom Button */}
            <motion.button
              onClick={toggleZoom}
              className={`absolute top-4 left-4 p-2 bg-white/80 rounded-full shadow-md transition-all duration-300 hover:bg-white ${
                isZoomed ? 'bg-navy/10' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              <MagnifyingGlassIcon className={`h-5 w-5 ${isZoomed ? 'text-navy' : 'text-gray-600'}`} />
            </motion.button>
            
            {/* Navigation Arrows - Only show when not zoomed */}
            {!isZoomed && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                </button>
              </>
            )}
            
            {/* Favorite Button */}
            <motion.button 
              onClick={toggleFavorite}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? (
                <HeartIconSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartIcon className="h-6 w-6 text-gray-600" />
              )}
            </motion.button>
          </motion.div>
          
          {/* Thumbnail Gallery - Only show when not zoomed */}
          {product.images.length > 1 && !isZoomed && (
            <div className="flex md:justify-start justify-center space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-16 w-16 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === index ? 'border-gold' : 'border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    sizes="64px"
                    quality={80}
                  />
                </motion.button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-serif text-navy"
            >
              {product.name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-between"
            >
              <span className="text-3xl font-medium text-[#C78A3B]">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.isAvailable ? 'bg-green-500' : 'bg-red-500'} shadow-sm`} />
                <span className={`text-sm font-medium ${product.isAvailable ? 'text-green-700' : 'text-red-700'}`}>
                  {product.isAvailable ? `In Stock (${product.stock})` : 'Out of Stock'}
                </span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-sm text-gray-600 max-w-none border-t border-b border-gray-200 py-6"
          >
            <p className="text-2xs text-justify">{product.description}</p>
          </motion.div>
          
          {/* Size Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-navy uppercase">Size</h3>
            <div className="flex flex-wrap gap-3">
              {availableSizes.map((size) => (
                <motion.button
                  key={size.value}
                  onClick={() => handleSizeSelect(size.value)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                    ${selectedSize === size.value
                      ? 'bg-navy text-white ring-2 ring-navy ring-offset-2'
                      : 'bg-white text-navy border border-navy/20 hover:border-navy'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {size.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quantity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-medium text-navy uppercase">Quantity</h3>
            <div className="inline-flex items-center border border-navy/20 rounded-full bg-white">
              <motion.button
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="px-4 py-2 text-navy hover:bg-navy/5 disabled:opacity-50 disabled:hover:bg-transparent rounded-l-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Decrease quantity"
              >
                -
              </motion.button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <motion.button
                onClick={incrementQuantity}
                disabled={quantity >= 10}
                className="px-4 py-2 text-navy hover:bg-navy/5 disabled:opacity-50 disabled:hover:bg-transparent rounded-r-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Increase quantity"
              >
                +
              </motion.button>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              onClick={handleAddToCart}
              className="flex-1 bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ADD TO CART
            </motion.button>
            <motion.button
              onClick={handleBuyNow}
              className="flex-1 bg-[#D9D9D9] hover:bg-[#D9D9D9]/90 text-navy py-3 px-6 rounded-full font-medium transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              BUY NOW
            </motion.button>
          </motion.div>

          {/* Free Shipping Notice */}
          <div className="pt-4 text-sm text-gray-600 flex items-center gap-2 bg-cream/30 p-4 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            FREE SHIPPING ON ORDERS OVER $200
          </div>
        </motion.div>
      </div>
    </div>
  );
}
