'use client';

import React from 'react';
import Footer from '../../components/home/Footer';

interface CollectionsLayoutProps {
  children: React.ReactNode;
}

const CollectionsLayout: React.FC<CollectionsLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default CollectionsLayout; 