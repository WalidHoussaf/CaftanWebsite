'use client';

import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-cream pt-8 pb-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navy/[0.03] to-taupe/[0.05] rounded-2xl p-8 md:p-16 shadow-sm relative overflow-hidden">
            {/* Decorative Moroccan border */}
            <div className="absolute inset-0 border-2 border-[#E6C200]/10 rounded-2xl pointer-events-none"></div>
            
            {/* Moroccan corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E6C200]/20 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#E6C200]/20 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#E6C200]/20 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E6C200]/20 rounded-br-lg"></div>
            
            <div className="text-center mb-12 relative">
              {/* Decorative element above title */}
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#E6C200]/30 to-transparent mx-auto mb-8"></div>
              
              <div className="inline-block mb-6 relative">
                <span className="uppercase tracking-widest text-2xl text-[#E6C200]/70 relative z-10">Stay Connected</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#E6C200]/30 to-transparent"></div>
              </div>
              
              {/* Enhanced title with Moroccan-inspired decorative elements */}
              <div className="relative">
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 uppercase tracking-wider bg-gradient-to-r from-navy to-taupe bg-clip-text text-transparent">Join Our Community</h2>
                
                {/* Decorative line under heading */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-[2px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E6C200] to-transparent"></div>
                </div>
                
                {/* Decorative diamond shape */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-[#E6C200]/30"></div>
              </div>
              
              <p className="text-navy/80 mx-auto max-w-lg leading-relaxed mt-10">
                Subscribe to our newsletter to receive exclusive offers, style tips, and updates on new collections.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 bg-cream/80 backdrop-blur-sm border border-[#E6C200]/20 rounded-full text-navy focus:outline-none focus:border-[#E6C200]/50 focus:ring-2 focus:ring-[#E6C200]/10 transition-all duration-300 shadow-sm"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-navy text-cream rounded-full hover:bg-navy/90 transition-all duration-300 shadow-sm flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                  {!isSubmitting && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>
              
              {message && (
                <div className={`mt-4 text-center text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}