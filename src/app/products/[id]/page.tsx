import React from 'react';
import ProductDetails from '../../../components/ProductDetails';
import { productsData } from '../../../data/products';
import { notFound } from 'next/navigation';

// Types for page parameters
interface ProductPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  // Verify product ID exists
  const product = productsData.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetails productId={params.id} />;
} 