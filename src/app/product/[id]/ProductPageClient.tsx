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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.18,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };
  
  const tabContent = {
    Description: (
      <motion.div variants={tabContentVariants} className="space-y-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-yellow-50/80 p-8 rounded-2xl border border-amber-200/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 21H9.154a3.374 3.374 0 00-2.869-1.51l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-slate-800 font-semibold">Craftsmanship And Heritage</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg font-light text-justify">{product.description}</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.15 }}
            className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-2xl border border-slate-200/60 hover:border-blue-300/50 transition-all duration-150 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-800">Artisan Tradition</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-justify font-light">
                This exquisite {product.category} embodies the rich heritage of Moroccan craftsmanship. 
                Handcrafted by skilled artisans using traditional techniques passed down through generations, 
                each piece is a unique work of art that tells a story of cultural legacy and timeless beauty.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.15 }}
            className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50/30 p-8 rounded-2xl border border-slate-200/60 hover:border-emerald-300/50 transition-all duration-150 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-yellow-400 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.926,6.264c1.43-1.432,1.43-3.759,0-5.188-1.43-1.432-3.76-1.432-5.189,0L6.8,12.011c-1.509-.083-3.045.451-4.196,1.601C1.103,15.114.255,19.353.017,21.383c-.084.713.158,1.412.664,1.918.439.44,1.025.681,1.64.681.093,0,.186-.006.278-.017.241-.028,5.938-.718,7.789-2.569,1.15-1.15,1.683-2.686,1.6-4.195l10.938-10.937ZM6.806,12.011h0s.001-.001,0,0Zm2.167,7.97c-.854.854-4.095,1.701-6.609,1.997-.135.021-.228-.05-.27-.092-.041-.041-.108-.131-.092-.271.294-2.502,1.174-5.747,2.016-6.59.684-.683,1.58-1.024,2.478-1.024s1.794.342,2.478,1.024c1.366,1.366,1.366,3.589,0,4.955Zm1.414-6.369c-.411-.411-.872-.744-1.363-.997L19.15,2.489c.65-.65,1.711-.65,2.361,0s.65,1.709,0,2.36l-10.127,10.126c-.254-.491-.586-.952-.997-1.363Z"/>
                    <path d="M4.722,9.91c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-3.646-3.646c-.651-.651-.651-1.71,0-2.361.651-.65,1.711-.65,2.36,0l3.646,3.647c.391.391,1.023.391,1.414,0s.391-1.023,0-1.414l-3.646-3.647C4.832-.355,2.505-.355,1.075,1.074s-1.431,3.759,0,5.189l3.646,3.646Z"/>
                    <path d="M22.242,17.054l-2.955-2.956c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l2.955,2.956c.745.744,1.172,1.774,1.172,2.828v.704h-.703c-1.069,0-2.074-.416-2.829-1.172l-2.956-2.955c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l2.956,2.955c1.132,1.134,2.64,1.758,4.243,1.758h1.703c.553,0,1-.447,1-1v-1.704c0-1.58-.641-3.127-1.758-4.242Z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-800">Design Excellence</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-justify font-light">
                The intricate embroidery features patterns inspired by Moroccan architecture and nature, 
                with each stitch meticulously placed to create stunning geometric designs. The fabric is 
                sourced from the finest materials, ensuring both comfort and exceptional durability.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    ),
    Details: (
      <motion.div variants={tabContentVariants} className="space-y-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50/80 via-blue-50/60 to-slate-50/80 p-8 rounded-2xl border border-indigo-200/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-slate-500"></div>
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-slate-800 font-semibold">Product Specifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { icon: "🇲🇦", text: "Handcrafted in Morocco" },
                  { icon: "✨", text: "Premium quality fabric" },
                  { icon: "🧵", text: "Traditional embroidery techniques" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-4 bg-white/60 rounded-xl border border-slate-200/50 hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="text-2xl mr-4">{item.icon}</div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: "📏", text: "Customizable sizing available" },
                  { icon: "🏆", text: "Includes certificate of authenticity" },
                  { icon: "💎", text: "Limited edition piece" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center p-4 bg-white/60 rounded-xl border border-slate-200/50 hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="text-2xl mr-4">{item.icon}</div>
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
    'Care Instructions': (
      <motion.div variants={tabContentVariants} className="space-y-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-teal-50/80 p-8 rounded-2xl border border-emerald-200/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-slate-800 font-semibold">Care & Maintenance</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800">Cleaning</h4>
                </div>
                <div className="space-y-4">
                  {[
                    "Dry clean only for best results",
                    "Store in a cool, dry place",
                    "Avoid direct sunlight for extended periods"
                  ].map((instruction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start p-4 bg-white/60 rounded-xl border border-slate-200/50 hover:bg-white/80 transition-colors duration-200"
                    >
                      <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{instruction}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800">Handling</h4>
                </div>
                <div className="space-y-4">
                  {[
                    "Handle embroidery with care",
                    "Steam to remove wrinkles (do not iron directly on embroidery)",
                    "Use padded hangers for storage"
                  ].map((instruction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start p-4 bg-white/60 rounded-xl border border-slate-200/50 hover:bg-white/80 transition-colors duration-200"
                    >
                      <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{instruction}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
    Reviews: (
      <motion.div variants={tabContentVariants} className="text-center py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-pink-50/60 to-rose-50/80 p-12 rounded-2xl border border-purple-200/50 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-20 h-20 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-serif text-slate-800 mb-4 font-semibold">Customer Reviews</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-md mx-auto">
              Be the first to share your experience with this beautiful piece and help others discover its magic.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-full hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
            >
              Write a Review
            </motion.button>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-amber-50"
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4f46e5 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              color: '#fff',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '12px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }
          }}
        />
        
        <motion.div variants={itemVariants}>
          <ProductDetail product={product} />
        </motion.div>
        
        {/* Enhanced Product Details Tabs */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 max-w-7xl mx-auto"
        >
          <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50">
            {/* Header */}
            <div className="relative text-center pt-12 pb-8 px-8">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 via-transparent to-slate-900/5"></div>
              <div className="relative">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-5xl font-serif text-slate-800 mb-4 font-light"
                >
                  Product Details
                </motion.h2>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '6rem' }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 mx-auto rounded-full shadow-sm"
                ></motion.div>
              </div>
            </div>
            
            {/* Tab Navigation */}
            <div className="px-8 pb-8">
              <div className="relative bg-slate-100/50 rounded-2xl p-2 backdrop-blur-sm">
                <nav className="flex flex-wrap justify-center gap-2">
                  {['Description', 'Details', 'Care Instructions', 'Reviews'].map((tab, index) => (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`
                        relative px-6 py-4 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 ease-out whitespace-nowrap
                        ${tab === activeTab
                          ? 'bg-white text-slate-800 shadow-lg shadow-slate-200/50 border border-white/50' 
                          : 'text-slate-600 hover:text-slate-800 hover:bg-white/30'}
                      `}
                    >
                      {tab}
                      {tab === activeTab && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                          layoutId="activeTabIndicator"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="px-8 pb-12">
              <div className="bg-gradient-to-br from-white/60 to-slate-50/60 rounded-2xl p-8 lg:p-12 border border-white/50 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="prose prose-lg max-w-none"
                  >
                    {tabContent[activeTab as keyof typeof tabContent]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="relative overflow-hidden bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 lg:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-stone-50/50"></div>
              <div className="relative">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl lg:text-4xl font-serif text-slate-800 font-light"
                  >
                    You May Also Like
                  </motion.h2>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="hidden sm:block h-px flex-1 bg-gradient-to-r from-slate-300/50 via-slate-200/30 to-transparent ml-8"
                  ></motion.div>
                </div>
                <RelatedProducts products={relatedProducts} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}