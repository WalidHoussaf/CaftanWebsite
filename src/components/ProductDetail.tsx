import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ProductType } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';

// Available colors and sizes for products
const availableColors = [
  { name: 'Royal Blue', value: 'royal-blue', hex: '#1e40af' },
  { name: 'Emerald Green', value: 'emerald-green', hex: '#047857' },
  { name: 'Ruby Red', value: 'ruby-red', hex: '#b91c1c' },
  { name: 'Gold', value: 'gold', hex: '#d97706' },
  { name: 'Silver', value: 'silver', hex: '#94a3b8' },
  { name: 'Black', value: 'black', hex: '#171717' },
  { name: 'Ivory', value: 'ivory', hex: '#fef3c7' },
];

const availableSizes = [
  { name: 'XS', value: 'xs' },
  { name: 'S', value: 's' },
  { name: 'M', value: 'm' },
  { name: 'L', value: 'l' },
  { name: 'XL', value: 'xl' },
  { name: 'Custom', value: 'custom' },
];

interface ProductDetailProps {
  product: ProductType;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const addItem = useCartStore(state => state.addItem);
  
  // State for product options
  const [selectedColor, setSelectedColor] = useState(availableColors[0].value);
  const [selectedSize, setSelectedSize] = useState(availableSizes[2].value); // Default to M
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCustomSizeModalOpen, setIsCustomSizeModalOpen] = useState(false);
  
  // Handle adding to cart
  const handleAddToCart = () => {
    console.log('Adding to cart:', product.name, selectedColor, selectedSize, quantity);
    
    // Add to cart store (localStorage saving is handled automatically now)
    addItem(product, selectedColor, selectedSize, quantity);
    
    toast.success(`${product.name} added to your cart!`, {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
  };
  
  // Handle buy now
  const handleBuyNow = () => {
    console.log('Buy now:', product.name, selectedColor, selectedSize, quantity);
    
    // Add to cart store (localStorage saving is handled automatically now)
    addItem(product, selectedColor, selectedSize, quantity);
    
    // Navigate to cart page
    router.push('/cart');
  };
  
  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites', {
      icon: '❤️',
    });
  };
  
  // Increment quantity
  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10)); // Max 10 items
  };
  
  // Decrement quantity
  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); // Min 1 item
  };
  
  // Handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    if (size === 'custom') {
      setIsCustomSizeModalOpen(true);
    }
  };
  
  return (
    <div className="bg-cream/10 p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-gold/20">
            <Image
              src={product.images[currentImageIndex] || '/images/placeholder.jpg'}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <button 
              onClick={toggleFavorite}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors duration-300"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? (
                <HeartIconSolid className="h-6 w-6 text-red-500" />
              ) : (
                <HeartIcon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif text-navy">{product.name}</h1>
            <p className="text-2xl font-medium text-gold mt-2">${product.price.toFixed(2)}</p>
          </div>
          
          <div className="prose prose-sm text-gray-600 max-w-none">
            <p>{product.description}</p>
          </div>
          
          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {availableColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`relative w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === color.value ? 'ring-2 ring-gold ring-offset-2' : 'ring-0'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-700">Size</h3>
              <button 
                className="text-xs text-gold underline"
                onClick={() => window.open('/size-guide', '_blank')}
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size.value}
                  onClick={() => handleSizeSelect(size.value)}
                  className={`py-2 px-4 border rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedSize === size.value
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded-md w-32">
              <button
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="px-3 py-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={incrementQuantity}
                disabled={quantity >= 10}
                className="px-3 py-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gold hover:bg-gold/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
            >
              Buy Now
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-4 mt-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free shipping on orders over $200
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              30-day return policy
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Authenticity guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
