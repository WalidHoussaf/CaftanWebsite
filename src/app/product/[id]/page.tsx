import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { productsData } from '@/data/products';
import ProductPageClient from './ProductPageClient';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData.find(p => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  
  return {
    title: `${product.name} | Moroccan Elegance`,
    description: product.description,
    openGraph: {
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = productsData.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }
  
  // Find related products (same category or occasion)
  const relatedProducts = productsData
    .filter(p => 
      p.id !== product.id && 
      (p.category === product.category || 
       (p.occasions && product.occasions && 
        p.occasions.some(o => product.occasions?.includes(o))))
    )
    .slice(0, 4);
  
  return <ProductPageClient product={product} relatedProducts={relatedProducts} />;
}
