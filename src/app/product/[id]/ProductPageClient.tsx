'use client';

import ProductDetail from '@/components/ProductDetail';
import RelatedProducts from '../../../components/RelatedProducts';
import { Toaster } from 'react-hot-toast';
import { ProductType } from '@/types/product';

interface ProductPageClientProps {
  product: ProductType;
  relatedProducts: ProductType[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
  return (
    <main className="container mx-auto px-4 py-12">
      <Toaster position="top-right" />
      
      <ProductDetail product={product} />
      
      {/* Product Details Tabs */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['Description', 'Details', 'Care Instructions', 'Reviews'].map((tab, index) => (
              <button
                key={tab}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${index === 0 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="py-8 prose prose-gold max-w-none">
          <h3 className="text-lg font-medium text-gray-900">Product Description</h3>
          <p className="mt-4 text-gray-600">
            {product.description}
          </p>
          
          <p className="mt-4 text-gray-600">
            This exquisite {product.category} embodies the rich heritage of Moroccan craftsmanship. 
            Handcrafted by skilled artisans using traditional techniques passed down through generations, 
            each piece is a unique work of art that tells a story of cultural legacy.
          </p>
          
          <p className="mt-4 text-gray-600">
            The intricate embroidery features patterns inspired by Moroccan architecture and nature, 
            with each stitch meticulously placed to create stunning geometric designs. The fabric is 
            sourced from the finest materials, ensuring both comfort and durability.
          </p>
          
          <h3 className="text-lg font-medium text-gray-900 mt-8">Details</h3>
          <ul className="mt-4 text-gray-600 list-disc pl-5">
            <li>Handcrafted in Morocco</li>
            <li>Premium quality fabric</li>
            <li>Traditional embroidery techniques</li>
            <li>Customizable sizing available</li>
            <li>Includes certificate of authenticity</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-900 mt-8">Care Instructions</h3>
          <ul className="mt-4 text-gray-600 list-disc pl-5">
            <li>Dry clean only</li>
            <li>Store in a cool, dry place</li>
            <li>Avoid direct sunlight for extended periods</li>
            <li>Handle embroidery with care</li>
            <li>Steam to remove wrinkles (do not iron directly on embroidery)</li>
          </ul>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-navy mb-8">You May Also Like</h2>
          <RelatedProducts products={relatedProducts} />
        </div>
      )}
    </main>
  );
}
