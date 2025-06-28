'use client';

import { useState } from 'react';
import ProductDetail from '@/components/ProductDetail';
import RelatedProducts from '../../../components/RelatedProducts';
import { Toaster } from 'react-hot-toast';
import { ProductType } from '@/types/product';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductPageClientProps {
  product: ProductType;
  relatedProducts: ProductType[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
  const [activeTab, setActiveTab] = useState('Description');
  
  const tabContent = {
    Description: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-gold/5 to-amber-50 p-6 rounded-xl border-l-4 border-gold">
          <h3 className="text-xl font-serif text-navy mb-3">Craftsmanship & Heritage</h3>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-navy">Artisan Tradition</h4>
            <p className="text-gray-600 leading-relaxed text-justify">
              This exquisite {product.category} embodies the rich heritage of Moroccan craftsmanship. 
              Handcrafted by skilled artisans using traditional techniques passed down through generations, 
              each piece is a unique work of art that tells a story of cultural legacy.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-navy">Design Excellence</h4>
            <p className="text-gray-600 leading-relaxed text-justify">
              The intricate embroidery features patterns inspired by Moroccan architecture and nature, 
              with each stitch meticulously placed to create stunning geometric designs. The fabric is 
              sourced from the finest materials, ensuring both comfort and durability.
            </p>
          </div>
        </div>
      </div>
    ),
    Details: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-navy/5 to-blue-50 p-6 rounded-xl border-l-4 border-navy">
          <h3 className="text-xl font-serif text-navy mb-4">Product Specifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Handcrafted in Morocco
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Premium quality fabric
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Traditional embroidery techniques
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Customizable sizing available
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Includes certificate of authenticity
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                Limited edition piece
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    'Care Instructions': (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald/5 to-green-50 p-6 rounded-xl border-l-4 border-emerald-500">
          <h3 className="text-xl font-serif text-navy mb-4">Care & Maintenance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-navy">Cleaning</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Dry clean only for best results</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Store in a cool, dry place</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Avoid direct sunlight for extended periods</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-navy">Handling</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Handle embroidery with care</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Steam to remove wrinkles (do not iron directly on embroidery)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Use padded hangers for storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    Reviews: (
      <div className="text-center py-12">
        <div className="bg-gradient-to-r from-purple/5 to-purple-50 p-8 rounded-xl border border-purple-200">
          <div className="w-16 h-16 bg-gradient-to-r from-gold to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h3 className="text-xl font-serif text-navy mb-2">Customer Reviews</h3>
          <p className="text-gray-600">Be the first to share your experience with this beautiful piece.</p>
          <button className="mt-4 bg-navy text-white px-6 py-2 rounded-full hover:bg-navy/90 transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    ),
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F5F1EA]"
    >
      <div className="container mx-auto px-4 pt-32 pb-12">
        <Toaster position="top-right" />
        
        <ProductDetail product={product} />
        
        {/* Product Details Tabs */}
        <div className="mt-12 max-w-7xl mx-auto bg-gradient-to-br from-[#F9F6F1] to-[#F5F1EA] rounded-3xl p-8 shadow-lg border border-gold/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-navy mb-2">Product Details</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-amber-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="border-b border-gold/20 mb-8">
            <nav className="flex justify-center space-x-1 overflow-x-auto">
              {['Description', 'Details', 'Care Instructions', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative px-6 py-4 text-sm font-medium rounded-t-xl transition-all duration-300 ease-in-out
                    ${tab === activeTab
                      ? 'bg-white text-navy shadow-lg border-t-2 border-l-2 border-r-2 border-gold/30' 
                      : 'text-navy/60 hover:text-navy hover:bg-white/50'}
                  `}
                >
                  {tab}
                  {tab === activeTab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-amber-400"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-inner border border-gold/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="prose prose-lg max-w-none"
              >
                {tabContent[activeTab as keyof typeof tabContent]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F9F6F1] rounded-3xl p-8 shadow-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-navy">You May Also Like</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent ml-8"></div>
            </div>
            <RelatedProducts products={relatedProducts} />
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}
