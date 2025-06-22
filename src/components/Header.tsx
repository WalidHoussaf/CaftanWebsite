"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  
  // Get cart and wishlist items count
  const cartItems = useCartStore(state => state.items);
  const wishlistItems = useWishlistStore(state => state.items);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set initial states
    setIsClient(true);

    // Add event listeners
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
            <Link href="/" className="relative group block">
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
                <div className="font-amiri text-2xl tracking-wide relative font-bold">
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
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm uppercase tracking-widest transition-all duration-300 group font-semibold ${
                      isActive 
                        ? 'text-[#D4AF37]' 
                        : 'text-noir hover:text-[#D4AF37]'
                    }`}
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
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5 relative z-10 transform group-hover:scale-110 transition-all duration-300 stroke-2">
                  <path fill="currentColor" d="M22.705,21.253l-4.399-4.374c1.181-1.561,1.81-3.679,1.859-6.329-.105-6.095-3.507-9.473-9.588-9.513C4.423,1.076,1,4.649,1,10.549c0,6.195,3.426,9.512,9.589,9.548,2.629-.016,4.739-.626,6.303-1.805l4.403,4.379c.518,.492,1.131,.291,1.414-.004,.383-.398,.388-1.025-.004-1.414ZM3,10.567c.097-5.035,2.579-7.499,7.576-7.53,4.949,.032,7.503,2.571,7.589,7.512-.094,5.12-2.505,7.518-7.576,7.548-5.077-.03-7.489-2.422-7.589-7.53Z" />
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
              <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="h-5 w-5 text-noir group-hover:text-[#D4AF37] transition-colors duration-300 mr-2 stroke-2">
                <path d="m23.707 22.276-3.687-3.689 2.687-2.687c.242-.242.344-.59.27-.924-.075-.334-.314-.606-.636-.723l-8.731-3.162c-.717-.245-1.495-.065-2.031.472-.535.536-.715 1.314-.47 2.031.001.005.003.011.005.016l3.156 8.714c.116.322.39.562.724.636.33.074.683-.027.924-.269l2.689-2.689 3.687 3.689c.391.391 1.023.39 1.414 0 .391-.391.391-1.024 0-1.415zm-8.092-2.112-2.593-7.16 7.158 2.593-4.565 4.566zm-4.615-1.165c0 .552-.448 1-1 1-5.443.007-10.004-4.448-10-9.999 0-5.514 4.486-10 10-10s10 4.486 10 10c0 .552-.447 1-1 1s-1-.448-1-1c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.254.941 4.29 2.446 5.745.581-1.43 1.699-2.61 3.154-3.246.505-.22 1.095.009 1.317.516.221.506-.01 1.096-.516 1.317-1.137.496-1.965 1.488-2.269 2.665 1.148.637 2.466 1.003 3.869 1.003.552 0 1 .448 1 1zm-4.5-11.499c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5zm5 0c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5z" fill="currentColor" />
              </svg>
              <span className="text-xs uppercase tracking-widest text-noir group-hover:text-[#D4AF37] transition-colors duration-300 font-semibold">Login</span>
            </Link>
            
            <Link 
              href="/wishlist" 
              className="relative p-2 text-noir hover:text-[#D4AF37] transition-colors duration-200 hidden md:inline-flex items-center group"
              aria-label="Wishlist"
            >
              <span className="absolute inset-0 rounded-full bg-cream/0 group-hover:bg-cream/80 transition-all duration-300"></span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 relative z-10 stroke-2">
                <g id="_01_align_center" data-name="01 align center">
                  <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z" fill="currentColor" />
                </g>
              </svg>
              {isClient && wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-cream text-[10px] rounded-full flex items-center justify-center z-20 font-semibold">
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
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="h-5 w-5 relative z-10 stroke-2">
                <circle cx="7" cy="22" r="2" fill="currentColor"/>
                <circle cx="17" cy="22" r="2" fill="currentColor"/>
                <path d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z" fill="currentColor"/>
                <path d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z" fill="currentColor"/>
              </svg>
              {isClient && cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-cream text-[10px] rounded-full flex items-center justify-center z-20 font-semibold">
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
              <Bars3Icon className="h-6 w-6 relative z-10 stroke-2" aria-hidden="true" />
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
                <div className="font-amiri text-xl tracking-wide font-bold">
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
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 text-sm uppercase tracking-widest rounded-lg transition-all duration-200 font-semibold ${
                      isActive 
                        ? 'bg-gradient-to-r from-navy/10 to-taupe/10 text-navy border-l-2 border-navy' 
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
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="h-5 w-5 mr-2 stroke-2">
                      <path d="m23.707 22.276-3.687-3.689 2.687-2.687c.242-.242.344-.59.27-.924-.075-.334-.314-.606-.636-.723l-8.731-3.162c-.717-.245-1.495-.065-2.031.472-.535.536-.715 1.314-.47 2.031.001.005.003.011.005.016l3.156 8.714c.116.322.39.562.724.636.33.074.683-.027.924-.269l2.689-2.689 3.687 3.689c.391.391 1.023.39 1.414 0 .391-.391.391-1.024 0-1.415zm-8.092-2.112-2.593-7.16 7.158 2.593-4.565 4.566zm-4.615-1.165c0 .552-.448 1-1 1-5.443.007-10.004-4.448-10-9.999 0-5.514 4.486-10 10-10s10 4.486 10 10c0 .552-.447 1-1 1s-1-.448-1-1c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.254.941 4.29 2.446 5.745.581-1.43 1.699-2.61 3.154-3.246.505-.22 1.095.009 1.317.516.221.506-.01 1.096-.516 1.317-1.137.496-1.965 1.488-2.269 2.665 1.148.637 2.466 1.003 3.869 1.003.552 0 1 .448 1 1zm-4.5-11.499c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5zm5 0c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5z" fill="currentColor" />
                    </svg>
                    Login
                  </Link>
                  <Link 
                    href="/wishlist"
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2 stroke-2">
                      <g id="_01_align_center" data-name="01 align center">
                        <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z" fill="currentColor" />
                      </g>
                    </svg>
                    Wishlist
                  </Link>
                  <Link 
                    href="/cart" 
                    className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="h-5 w-5 mr-2 stroke-2">
                      <circle cx="7" cy="22" r="2" fill="currentColor"/>
                      <circle cx="17" cy="22" r="2" fill="currentColor"/>
                      <path d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z" fill="currentColor"/>
                      <path d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z" fill="currentColor"/>
                    </svg>
                    Cart
                  </Link>
                </div>
                <Link 
                  href="/search" 
                  className="flex items-center justify-center py-3 px-4 text-sm uppercase tracking-widest text-noir hover:text-navy bg-cream/50 hover:bg-cream/80 rounded-lg transition-all duration-200 mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="h-5 w-5 mr-2 stroke-2">
                    <path fill="currentColor" d="M22.705,21.253l-4.399-4.374c1.181-1.561,1.81-3.679,1.859-6.329-.105-6.095-3.507-9.473-9.588-9.513C4.423,1.076,1,4.649,1,10.549c0,6.195,3.426,9.512,9.589,9.548,2.629-.016,4.739-.626,6.303-1.805l4.403,4.379c.518,.492,1.131,.291,1.414-.004,.383-.398,.388-1.025-.004-1.414ZM3,10.567c.097-5.035,2.579-7.499,7.576-7.53,4.949,.032,7.503,2.571,7.589,7.512-.094,5.12-2.505,7.518-7.576,7.548-5.077-.03-7.489-2.422-7.589-7.53Z" />
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