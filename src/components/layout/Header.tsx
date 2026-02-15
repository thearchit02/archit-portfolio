import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DownloadDropdown from '../ui/DownloadDropdown';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const config = getPortfolioConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-[#2d3748]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-mono text-[#60a5fa] hover:text-[#3b82f6] transition-colors">
          {config.personal.name.split(' ')[0]}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors text-sm">
            About
          </a>
          <a href="#experience" className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors text-sm">
            Experience
          </a>
          <a href="#projects" className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors text-sm">
            Projects
          </a>
          <a href="#contact" className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors text-sm">
            Contact
          </a>
          <DownloadDropdown />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <DownloadDropdown />
        </div>
      </div>
    </header>
  );
}
