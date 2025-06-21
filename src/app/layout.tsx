import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import { Cinzel_Decorative } from 'next/font/google';
import CartProvider from '../components/CartProvider';

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'KONOZ KHADIJA | Moroccan Caftan & Jellaba',
  description: 'Discover our exclusive collection of traditional Moroccan caftans and jellabas, meticulously crafted with authentic techniques and premium materials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cinzel.variable}>
      <head />
      <body className="font-sans bg-cream">
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow relative">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
} 