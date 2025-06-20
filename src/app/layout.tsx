import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Montserrat, Playfair_Display, Amiri } from 'next/font/google';
import CartProvider from '../components/CartProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
});

const amiri = Amiri({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-amiri',
});

export const metadata: Metadata = {
  title: 'Tisdire | Moroccan Caftan & Jellaba',
  description: 'Discover our exclusive collection of traditional Moroccan caftans and jellabas, meticulously crafted with authentic techniques and premium materials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${amiri.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Raleway:wght@300;400;500;600;700&family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-cream">
        <CartProvider>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
} 