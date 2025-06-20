'use client';

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

export default function CartProvider({ children }: { children: React.ReactNode }) {
  // No need to hydrate cart anymore as it's handled automatically
  return (
    <>
      <Toaster position="top-right" />
      {children}
    </>
  );
}
