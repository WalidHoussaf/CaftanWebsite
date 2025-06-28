import { ProductType } from '@/types/product';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  products: ProductType[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}