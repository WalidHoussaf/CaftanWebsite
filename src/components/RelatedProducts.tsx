import Link from 'next/link';
import Image from 'next/image';
import { ProductType } from '@/types/product';

interface RelatedProductsProps {
  products: ProductType[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link 
          href={`/product/${product.id}`} 
          key={product.id}
          className="group"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4 group-hover:opacity-90 transition-opacity duration-300">
            <Image
              src={product.images[0] || '/images/placeholder.jpg'}
              alt={product.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            
            {/* Quick view overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-2 bg-white text-navy text-sm font-medium rounded-md">
                Quick View
              </span>
            </div>
          </div>
          
          <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-gold">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
}