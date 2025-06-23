'use client';

import React from 'react';
import Footer from '../../components/home/Footer';

export default function ProductLayout({
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