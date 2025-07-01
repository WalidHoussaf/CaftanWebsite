"use client";

import React from 'react';
import ProductCard from './ProductCard';
import { ProductType } from '../types/product';

interface ProductListProps {
  products: ProductType[];
  category?: string;
}

const ProductList = ({ products, category }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
      {products.map((product) => (
        <div className="h-full"><ProductCard key={product.id} product={product} /></div>
      ))}
    </div>
  );
};

export default ProductList; 