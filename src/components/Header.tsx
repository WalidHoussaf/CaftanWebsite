"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
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
                    sizes="4rem"
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
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5 relative z-10 transform group-hover:scale-110 transition-all duration-300">
                  <path fill="currentColor" d="M22.853,22.131l-4.958-4.941c1.363-1.573,2.075-3.811,2.129-6.707-.105-6.067-3.482-9.43-9.515-9.469C4.398,1.053,1,4.553,1,10.483c0,6.049,3.313,9.45,9.515,9.487,2.871-.017,5.098-.711,6.674-2.074l4.959,4.943c.306,.275,.609,.097,.707,0,.194-.196,.194-.512-.002-.707Zm-12.338-3.161c-5.622-.033-8.407-2.807-8.515-8.478,.104-5.669,2.89-8.442,8.509-8.478,5.553,.036,8.418,2.891,8.515,8.468-.104,5.678-2.89,8.454-8.509,8.487Z"/>
                </svg>
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
              <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="h-5 w-5 text-noir group-hover:text-[#D4AF37] transition-colors duration-300 mr-2">
                <path fill="currentColor" d="m23.854 23.146-4.703-4.708 3.203-3.203c.121-.121.172-.295.135-.462s-.157-.303-.317-.361l-9.131-3.321c-.562-.2-1.173-.063-1.591.354-.42.42-.555 1.029-.352 1.589l3.321 9.131c.059.161.194.28.361.317.165.037.341-.013.462-.135l3.202-3.202 4.703 4.708c.195.195.512.195.707 0s.195-.512 0-.707zm-8.765-2.061-3.052-8.393c-.072-.199-.03-.392.119-.541.15-.15.351-.192.544-.121l8.392 3.052-3.001 3.001s0 0 0 0l-3 3zm-8.089-14.085c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm5 0c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-.503 12.396c.029.274-.17.521-.445.549-.346.037-.697.055-1.052.055-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10c0 .176-.004.352-.014.526-.015.276-.254.489-.525.473-.276-.015-.487-.25-.473-.526.008-.157.012-.315.012-.474 0-4.961-4.037-8.999-9-8.999s-9 4.038-9 9c0 2.721 1.219 5.159 3.133 6.81.443-2.171 2.068-3.972 4.23-4.584.264-.077.542.079.617.345s-.079.542-.345.617c-1.962.555-3.404 2.283-3.607 4.308 1.426.949 3.134 1.504 4.971 1.504.32 0 .636-.017.948-.049.27-.033.521.17.549.445z"/>
              </svg>
              <span className="text-xs uppercase tracking-widest text-noir group-hover:text-[#D4AF37] transition-colors duration-300">Login</span>
            </Link>
            
            <Link 
              href="/wishlist" 
              className="relative p-2 text-noir hover:text-[#D4AF37] transition-colors duration-200 hidden md:inline-flex items-center group"
              aria-label="Wishlist"
            >
              <span className="absolute inset-0 rounded-full bg-cream/0 group-hover:bg-cream/80 transition-all duration-300"></span>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5 relative z-10">
                <path fill="currentColor" d="M17.75,1c-2.504,0-4.777,1.851-5.75,4.354-.973-2.504-3.246-4.354-5.75-4.354C2.804,1,0,3.804,0,7.25c0,6.76,9.754,14.07,11.709,15.466l.291,.208,.291-.208c1.956-1.396,11.709-8.707,11.709-15.466,0-3.446-2.804-6.25-6.25-6.25Zm-5.75,20.693C6.859,17.958,1,12.022,1,7.25,1,4.355,3.355,2,6.25,2c2.748,0,5.25,2.86,5.25,6h1c0-3.14,2.502-6,5.25-6,2.895,0,5.25,2.355,5.25,5.25,0,4.772-5.859,10.708-11,14.443Z"/>
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="h-5 w-5 relative z-10">
                <path fill="currentColor" d="m23.433,4.915c-.477-.582-1.182-.915-1.934-.915H4.49l-.256-1.843c-.17-1.229-1.234-2.157-2.476-2.157H.5C.224,0,0,.224,0,.5s.224.5.5.5h1.259c.745,0,1.383.556,1.485,1.294l1.781,12.825c.308,2.212,2.225,3.881,4.457,3.881h10.018c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-10.018c-1.73,0-3.214-1.289-3.462-3h12.64c2.138,0,3.993-1.521,4.412-3.617l.879-4.393c.147-.738-.042-1.494-.519-2.075Zm-.462,1.879l-.879,4.393c-.326,1.63-1.77,2.813-3.432,2.813H5.879l-1.25-9h16.87c.451,0,.874.2,1.16.549.286.349.399.803.312,1.245Zm-15.971,13.206c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Zm10-3c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"/>
              </svg>
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
                    sizes="3rem"
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
                    <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="h-5 w-5 mr-2">
                      <path fill="currentColor" d="m23.854 23.146-4.703-4.708 3.203-3.203c.121-.121.172-.295.135-.462s-.157-.303-.317-.361l-9.131-3.321c-.562-.2-1.173-.063-1.591.354-.42.42-.555 1.029-.352 1.589l3.321 9.131c.059.161.194.28.361.317.165.037.341-.013.462-.135l3.202-3.202 4.703 4.708c.195.195.512.195.707 0s.195-.512 0-.707zm-8.765-2.061-3.052-8.393c-.072-.199-.03-.392.119-.541.15-.15.351-.192.544-.121l8.392 3.052-3.001 3.001s0 0 0 0l-3 3zm-8.089-14.085c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm5 0c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-.503 12.396c.029.274-.17.521-.445.549-.346.037-.697.055-1.052.055-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10c0 .176-.004.352-.014.526-.015.276-.254.489-.525.473-.276-.015-.487-.25-.473-.526.008-.157.012-.315.012-.474 0-4.961-4.037-8.999-9-8.999s-9 4.038-9 9c0 2.721 1.219 5.159 3.133 6.81.443-2.171 2.068-3.972 4.23-4.584.264-.077.542.079.617.345s-.079.542-.345.617c-1.962.555-3.404 2.283-3.607 4.308 1.426.949 3.134 1.504 4.971 1.504.32 0 .636-.017.948-.049.27-.033.521.17.549.445z"/>
                    </svg>
                    Login
                  </Link>
                  <Link 
                    href="/wishlist"
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                      <path fill="currentColor" d="M17.75,1c-2.504,0-4.777,1.851-5.75,4.354-.973-2.504-3.246-4.354-5.75-4.354C2.804,1,0,3.804,0,7.25c0,6.76,9.754,14.07,11.709,15.466l.291,.208,.291-.208c1.956-1.396,11.709-8.707,11.709-15.466,0-3.446-2.804-6.25-6.25-6.25Zm-5.75,20.693C6.859,17.958,1,12.022,1,7.25,1,4.355,3.355,2,6.25,2c2.748,0,5.25,2.86,5.25,6h1c0-3.14,2.502-6,5.25-6,2.895,0,5.25,2.355,5.25,5.25,0,4.772-5.859,10.708-11,14.443Z"/>
                    </svg>
                    Wishlist
                  </Link>
                  <Link 
                    href="/cart" 
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                      <path fill="currentColor" d="m23.433,4.915c-.477-.582-1.182-.915-1.934-.915H4.49l-.256-1.843c-.17-1.229-1.234-2.157-2.476-2.157H.5C.224,0,0,.224,0,.5s.224.5.5.5h1.259c.745,0,1.383.556,1.485,1.294l1.781,12.825c.308,2.212,2.225,3.881,4.457,3.881h10.018c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-10.018c-1.73,0-3.214-1.289-3.462-3h12.64c2.138,0,3.993-1.521,4.412-3.617l.879-4.393c.147-.738-.042-1.494-.519-2.075Zm-.462,1.879l-.879,4.393c-.326,1.63-1.77,2.813-3.432,2.813H5.879l-1.25-9h16.87c.451,0,.874.2,1.16.549.286.349.399.803.312,1.245Zm-15.971,13.206c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Zm10-3c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"/>
                    </svg>
                    Cart
                  </Link>
                </div>
                <Link 
                  href="/search" 
                  className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200 mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                    <path fill="currentColor" d="M22.853,22.131l-4.958-4.941c1.363-1.573,2.075-3.811,2.129-6.707-.105-6.067-3.482-9.43-9.515-9.469C4.398,1.053,1,4.553,1,10.483c0,6.049,3.313,9.45,9.515,9.487,2.871-.017,5.098-.711,6.674-2.074l4.959,4.943c.306,.275,.609,.097,.707,0,.194-.196,.194-.512-.002-.707Zm-12.338-3.161c-5.622-.033-8.407-2.807-8.515-8.478,.104-5.669,2.89-8.442,8.509-8.478,5.553,.036,8.418,2.891,8.515,8.468-.104,5.678-2.89,8.454-8.509,8.487Z"/>
                  </svg>
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