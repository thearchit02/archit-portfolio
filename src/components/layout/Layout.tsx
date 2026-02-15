import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e5e7eb]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
