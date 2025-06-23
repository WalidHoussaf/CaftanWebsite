'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscriptionMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscriptionMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setSubscriptionMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy/95 text-cream mt-auto relative">
      <div className="container-custom py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="font-serif text-2xl text-[#E6C200] relative inline-block">
                KONOZ KHADIJA
                <div className="absolute -bottom-3 left-0 w-2/3 h-0.5 bg-gradient-to-r from-[#E6C200] to-transparent"></div>
              </h3>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Discover the timeless beauty of Moroccan fashion through our carefully curated collection of handcrafted caftans and jellabas. Each piece tells a story of tradition, elegance, and artisanal excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a href="#" className="text-cream/60 hover:text-[#E6C200] transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#E6C200]/20 via-[#E6C200]/10 to-transparent hidden lg:block"></div>
            <div className="space-y-8">
              <div className="relative">
                <h4 className="font-serif text-lg text-[#E6C200] relative inline-block">
                  Quick Links
                  <div className="absolute -bottom-3 left-0 w-2/3 h-0.5 bg-gradient-to-r from-[#E6C200] to-transparent"></div>
                </h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <Link href="/collections" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/categories/caftans" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Caftans
                  </Link>
                </li>
                <li>
                  <Link href="/categories/jellabas" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Jellabas
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Customer Service */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#E6C200]/20 via-[#E6C200]/10 to-transparent hidden lg:block"></div>
            <div className="space-y-8">
              <div className="relative">
                <h4 className="font-serif text-lg text-[#E6C200] relative inline-block">
                  Customer Service
                  <div className="absolute -bottom-3 left-0 w-2/3 h-0.5 bg-gradient-to-r from-[#E6C200] to-transparent"></div>
                </h4>
              </div>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-cream/70 hover:text-[#E6C200] transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#E6C200]/40 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <h4 className="font-serif text-lg text-[#E6C200] relative inline-block">
                Contact Us
                <div className="absolute -bottom-3 left-0 w-2/3 h-0.5 bg-gradient-to-r from-[#E6C200] to-transparent"></div>
              </h4>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-cream/70 group">
                <svg className="h-6 w-6 flex-shrink-0 text-[#E6C200]/60 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="transition-colors duration-300 group-hover:text-[#E6C200]">Résidence Alia, Quartier Azzouhour, n°27, Mohammédia</span>
              </li>
              <li className="flex items-center space-x-3 text-cream/70 group">
                <svg className="h-6 w-6 flex-shrink-0 text-[#E6C200]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@konozkhadija.com" className="transition-colors duration-300 group-hover:text-[#E6C200]">info@konozkhadija.com</a>
              </li>
              <li className="flex items-center space-x-3 text-cream/70 group">
                <svg className="h-6 w-6 flex-shrink-0 text-[#E6C200]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+212524400000" className="transition-colors duration-300 group-hover:text-[#E6C200]">+2125 24 40 00 00</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom with Subscribe */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6C200]/20 to-transparent"></div>
          <div className="pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright and Links */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-cream/60 text-sm">
                  © {new Date().getFullYear()} Konoz Khadija. All rights reserved.
                </p>
                <div className="flex space-x-8">
                  <Link href="/privacy-policy" className="text-cream/60 hover:text-[#E6C200] transition-colors text-sm relative group">
                    <span>Privacy Policy</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E6C200] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link href="/terms" className="text-cream/60 hover:text-[#E6C200] transition-colors text-sm relative group">
                    <span>Terms of Service</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E6C200] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>

              {/* Subscribe Form */}
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 min-w-[280px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-3 py-1.5 bg-cream/10 border border-[#E6C200]/20 rounded-full text-sm text-cream placeholder:text-cream/50 focus:outline-none focus:border-[#E6C200] transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-1.5 bg-[#E6C200] text-navy text-sm rounded-full hover:bg-[#E6C200]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '...' : 'Subscribe'}
                </button>
              </form>
              {subscriptionMessage && (
                <p className={`text-xs absolute -bottom-6 right-0 ${subscriptionMessage.includes('Thank you') ? 'text-[#E6C200]' : 'text-red-400'}`}>
                  {subscriptionMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}