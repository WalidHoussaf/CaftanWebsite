"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Caftans', href: '/categories/caftans' },
  { name: 'Jellabas', href: '/categories/jellabas' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isClient, setIsClient] = useState(false);
  
  // Get cart and wishlist items count
  const cartItems = useCartStore(state => state.items);
  const wishlistItems = useWishlistStore(state => state.items);

  // Handle scroll effect for navbar and update active link
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Update active link when route changes
    const updateActiveLink = () => {
      setActiveLink(window.location.pathname);
    };

    // Set initial states
    setIsClient(true);
    updateActiveLink();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', updateActiveLink);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', updateActiveLink);
    };
  }, []);

  // Update active link when navigation occurs
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cream/95 backdrop-blur-md shadow-sm py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-none pl-4">
            <Link href="/" className="relative group block" onClick={() => setActiveLink('/')}>
              <div className="flex items-center">
                {/* Logo Image */}
                <div className="relative w-16 h-16 mr-2">
                  <Image 
                    src="/images/logocaftan.jpg.png"
                    alt="Konoz Khadija Logo"
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    priority
                  />
                </div>
                {/* Logo Text */}
                <div className="font-amiri text-2xl tracking-wide relative">
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent group-hover:from-[#D4AF37]/90 group-hover:via-[#FFD700]/90 group-hover:to-[#B8860B]/90 transition-all duration-300 uppercase">KONOZ KHADIJA</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] group-hover:w-full transition-all duration-500"></span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation - Center */}
          <nav className="hidden lg:flex flex-1 justify-center ml-8">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = activeLink === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm uppercase tracking-widest transition-all duration-300 group ${
                      isActive 
                        ? 'text-[#D4AF37]' 
                        : 'text-noir hover:text-[#D4AF37]'
                    }`}
                    onClick={() => setActiveLink(item.href)}
                  >
                    <span className="relative z-10 py-2">
                      {item.name}
                      {/* Decorative line */}
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] scale-x-100' 
                          : 'bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Desktop user actions - Right */}
          <div className="flex justify-end items-center gap-x-3 md:gap-x-4 pr-4">
            {/* Search with animated circle */}
            <Link 
              href="/search" 
              className="relative p-2 text-noir hover:text-[#D4AF37] transition-all duration-300 group"
              aria-label="Search"
            >
              <span className="absolute inset-0 rounded-full bg-cream/0 group-hover:bg-cream/80 transition-all duration-300"></span>
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 relative z-10 transform group-hover:scale-110 transition-all duration-300" />
                <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 group-hover:scale-150 transition-all duration-500"></span>
              </div>
            </Link>
            
            {/* Login Button with simple elegant design */}
            <Link 
              href="/account/login" 
              className="relative hidden md:flex items-center px-4 py-1.5 group"
              aria-label="Account"
            >
              <span className="absolute inset-0 border-b border-[#D4AF37]/30 transform origin-bottom scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <UserIcon className="h-5 w-5 text-noir group-hover:text-[#D4AF37] transition-colors duration-300 mr-2" />
              <span className="text-xs uppercase tracking-widest text-noir group-hover:text-[#D4AF37] transition-colors duration-300">Login</span>
            </Link>
            
            <Link 
              href="/wishlist" 
              className="relative p-2 text-noir hover:text-[#D4AF37] transition-colors duration-200 hidden md:inline-flex items-center group"
              aria-label="Wishlist"
            >
              <span className="absolute inset-0 rounded-full bg-cream/0 group-hover:bg-cream/80 transition-all duration-300"></span>
              <HeartIcon className="h-5 w-5 relative z-10" />
              {isClient && wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-cream text-[10px] rounded-full flex items-center justify-center z-20">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            <Link 
              href="/cart" 
              className="relative p-2 text-noir hover:text-[#D4AF37] transition-colors duration-200 hidden md:inline-flex items-center group"
              aria-label="Cart"
            >
              <span className="absolute inset-0 rounded-full bg-cream/0 group-hover:bg-cream/80 transition-all duration-300"></span>
              <ShoppingBagIcon className="h-5 w-5 relative z-10" />
              {isClient && cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-cream text-[10px] rounded-full flex items-center justify-center z-20">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden relative p-2 text-noir hover:text-navy transition-colors duration-200 group"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="absolute inset-0 rounded-full bg-cream/0 group-hover:bg-cream/80 transition-all duration-300"></span>
              <Bars3Icon className="h-6 w-6 relative z-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-navy/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-cream to-cream/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-taupe/10 shadow-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative group block" onClick={() => setMobileMenuOpen(false)}>
              <div className="flex items-center">
                {/* Logo Image - Mobile */}
                <div className="relative w-12 h-12 mr-2">
                  <Image 
                    src="/images/logocaftan.jpg.png"
                    alt="Konoz Khadija Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                {/* Logo Text - Mobile */}
                <div className="font-amiri text-xl tracking-wide">
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent uppercase">KONOZ</span>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="relative p-2 text-noir hover:text-navy transition-colors duration-200 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="space-y-2 py-6">
              {navigation.map((item) => {
                const isActive = activeLink === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 text-sm uppercase tracking-widest rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-gradient-to-r from-navy/10 to-taupe/10 text-navy font-medium border-l-2 border-navy' 
                        : 'text-noir hover:bg-cream/80 hover:text-navy'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-8 mt-8 border-t border-taupe/30">
                <div className="grid grid-cols-3 gap-4">
                  <Link 
                    href="/account/login" 
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <UserIcon className="h-5 w-5 mr-2" />
                    Login
                  </Link>
                  <Link 
                    href="/wishlist"
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <HeartIcon className="h-5 w-5 mr-2" />
                    Wishlist
                    {isClient && wishlistItems.length > 0 && (
                      <span className="ml-1 w-4 h-4 bg-[#E6C200] text-cream text-[10px] rounded-full flex items-center justify-center font-medium">
                        {wishlistItems.length}
                      </span>
                    )}
                  </Link>
                  <Link 
                    href="/cart" 
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBagIcon className="h-5 w-5 mr-2" />
                    Cart
                  </Link>
                </div>
                <Link 
                  href="/search" 
                  className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200 mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}