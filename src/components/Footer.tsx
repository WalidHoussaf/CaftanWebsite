"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy/95 text-cream relative overflow-hidden">
      {/* Moroccan-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#E6C200]/5 to-transparent"></div>
      
      {/* Moroccan pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
      
      {/* Decorative arch - keeping this as it's not an animation */}
      <div className="absolute bottom-0 right-[5%] opacity-5 hidden md:block">
        <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 160V70C10 30 90 0 170 70V160" stroke="#E6C200" strokeWidth="2"/>
          <path d="M40 160V90" stroke="#E6C200" strokeWidth="1"/>
          <path d="M70 160V80" stroke="#E6C200" strokeWidth="1"/>
          <path d="M100 160V70" stroke="#E6C200" strokeWidth="1"/>
          <path d="M130 160V80" stroke="#E6C200" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container-custom pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand and About - Updated name */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <span className="font-serif text-3xl tracking-wide text-cream">Konoz</span>
                <span className="w-1.5 h-1.5 bg-[#DAA520] rounded-full mx-2"></span>
                <span className="font-serif text-3xl tracking-wide text-cream/80">Khadija</span>
              </div>
            </Link>
            <p className="text-cream/70 leading-relaxed max-w-md text-sm">
              Discover our exquisite collection of traditional Moroccan garments, where timeless elegance meets contemporary style. Each piece is a treasure crafted with authentic materials and exceptional artisanal expertise.
            </p>
            <div className="flex space-x-6">
              {/* Reordered social icons: Facebook, Instagram, Twitter, Pinterest */}
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-colors duration-300 transform hover:scale-110" aria-label="Pinterest">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links - Bigger titles */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-base font-medium relative inline-block">
              Shop
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#E6C200] to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/categories/caftans" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Caftans
                </Link>
              </li>
              <li>
                <Link href="/categories/jellabas" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Jellabas
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info - Bigger titles */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-base font-medium relative inline-block">
              Company
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#E6C200] to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/artisans" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Artisans
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Help - Bigger titles */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-base font-medium relative inline-block">
              Help
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#E6C200] to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/shipping" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/account/login" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-cream/70 hover:text-[#E6C200] transition-colors duration-300 flex items-center group text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-[#E6C200]/50 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter - Moved as requested and improved */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-base font-medium relative inline-block">
              Newsletter
              <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#E6C200] to-transparent"></div>
            </h3>
            <p className="text-cream/70 leading-relaxed text-xs">
              Join our mailing list for updates on new collections and special offers.
            </p>
            <div className="bg-cream/5 rounded-lg p-4 border border-cream/10">
              <form className="relative">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-cream/30 px-2 py-2 text-cream placeholder-cream/40 focus:outline-none focus:border-[#E6C200] transition-colors duration-300 text-xs"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#E6C200] group-focus-within:w-full transition-all duration-300"></div>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-transparent hover:bg-[#E6C200]/10 text-cream border border-[#E6C200]/30 rounded-sm py-1.5 transition-all duration-300 text-xs font-medium flex items-center justify-center group"
                >
                  <span>Subscribe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer with copyright only - removed payment methods */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex justify-center md:justify-start">
            <p className="text-cream/50 text-xs">
              &copy; {new Date().getFullYear()} Konoz Khadija. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}