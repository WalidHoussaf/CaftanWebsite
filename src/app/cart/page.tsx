"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCartStore, hydrateCartFromStorage, CartItemType } from '@/store/cartStore';
import { Toaster, toast } from 'react-hot-toast';

export default function CartPage() {
  // Cart state
  const { items, totalPrice, removeItem, updateItemQuantity, clearCart } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  
  // Set client-side rendering flag
  useEffect(() => {
    console.log('Cart page mounted');
    setIsClient(true);
    
    // Debug: Log cart state once
    const cartState = useCartStore.getState();
    console.log('Current cart state:', cartState);
  }, []);
  
  // Calculate totals
  const subtotal = totalPrice;
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  
  // Handle quantity change
  const handleQuantityChange = (item: CartItemType, newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateItemQuantity(item.id, newQuantity);
    }
  };
  
  // Handle remove item
  const handleRemoveItem = (item: CartItemType) => {
    removeItem(item.id);
    toast.success(`${item.name} removed from cart`);
  };
  
  // Handle clear cart
  const handleClearCart = () => {
    if (items.length > 0) {
      clearCart();
      toast.success('Cart cleared');
    }
  };

  // Show loading state while hydrating from localStorage
  if (!isClient) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif text-navy mb-8">Your Shopping Cart</h1>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-navy">Your Shopping Cart</h1>
        {items.length > 0 && (
          <button 
            onClick={handleClearCart}
            className="text-sm text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            Clear Cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-cream/10 rounded-lg shadow-sm">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-xl text-gray-600 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link 
            href="/collections"
            className="inline-block bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
          >
            Browse Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="sm:ml-6 flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 sm:mt-0">
                      <div>
                        <Link href={`/product/${item.productId}`} className="hover:text-gold transition-colors">
                          <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">
                          Color: {item.color.replace(/-/g, ' ')} | Size: {item.size.toUpperCase()}
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end mt-4 sm:mt-0">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                            className="p-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="px-2 text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                            disabled={item.quantity >= 10}
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item)}
                          className="ml-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
                          aria-label="Remove item"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="p-6 border-t border-gray-200">
                <Link 
                  href="/collections"
                  className="text-navy hover:text-navy/80 font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Subtotal ({items.length} item{items.length !== 1 ? 's' : ''})</p>
                  <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Shipping</p>
                  <p className="text-sm font-medium text-gray-900">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    {shipping === 0 && <span className="text-xs text-green-600 block">Free shipping on orders over $200</span>}
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Tax (5%)</p>
                  <p className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <p className="text-base font-medium text-gray-900">Total</p>
                  <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                </div>
              </div>
              
              <button
                className="mt-6 w-full bg-gold hover:bg-gold/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
                onClick={() => toast.success('Checkout feature coming soon!')}
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-gray-600">Secure checkout</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-gray-600">Free returns within 30 days</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-gray-600">International shipping available</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">We accept</p>
                <div className="flex items-center space-x-4">
                  <svg className="h-8 w-auto" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="24" rx="4" fill="#F3F4F6"/>
                    <path d="M10.5 16.5H14.5L15.5 10.5H11.5L10.5 16.5Z" fill="#2563EB"/>
                    <path d="M21.5 10.5H17.5L16.5 16.5H20.5L21.5 10.5Z" fill="#2563EB"/>
                    <path d="M24.5 10.5H22.5L21.5 16.5H23.5L24.5 10.5Z" fill="#2563EB"/>
                    <path d="M9.5 10.5H11.5L10.5 16.5H8.5L9.5 10.5Z" fill="#2563EB"/>
                  </svg>
                  <svg className="h-8 w-auto" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="24" rx="4" fill="#F3F4F6"/>
                    <circle cx="13.5" cy="12" r="4.5" fill="#EF4444"/>
                    <circle cx="19.5" cy="12" r="4.5" fill="#F59E0B" fillOpacity="0.8"/>
                  </svg>
                  <svg className="h-8 w-auto" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="24" rx="4" fill="#F3F4F6"/>
                    <path d="M14.5 7.5H18.5C20.7091 7.5 22.5 9.29086 22.5 11.5V11.5C22.5 13.7091 20.7091 15.5 18.5 15.5H14.5V7.5Z" fill="#0445AF"/>
                    <path d="M14.5 15.5H17.5C19.7091 15.5 21.5 17.2909 21.5 19.5V19.5C21.5 21.7091 19.7091 23.5 17.5 23.5H14.5V15.5Z" fill="#0445AF"/>
                    <path d="M6.5 7.5H10.5C12.7091 7.5 14.5 9.29086 14.5 11.5V19.5C14.5 21.7091 12.7091 23.5 10.5 23.5H6.5V7.5Z" fill="#0445AF"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}