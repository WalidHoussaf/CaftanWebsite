'use client';

import React from 'react';
import Footer from '../../components/home/Footer';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
} 