import React, { useState, useRef, useEffect } from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function DownloadDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const config = getPortfolioConfig();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper to handle base path if deployed to GitHub Pages subdirectory
  const getAssetPath = (path: string) => {
    // Use environment variable if set, otherwise empty string for local dev
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    // Ensure path starts with / and basePath doesn't end with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    return `${cleanBasePath}${cleanPath}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-lg transition-all font-medium text-sm flex items-center gap-2"
      >
        Download Resume
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#151b2e] border border-[#374151] rounded-lg shadow-xl overflow-hidden z-50">
          <a
            href={getAssetPath(config.resumeUrls.onePage)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-left text-[#e5e7eb] hover:bg-[#1e2738] transition-colors border-b border-[#2d3748] text-sm"
            download
          >
            <div className="font-medium">1-Page Resume</div>
            <div className="text-xs text-[#9ca3af] mt-1">Compact, ATS-optimized</div>
          </a>
          <a
            href={getAssetPath(config.resumeUrls.detailed)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-left text-[#e5e7eb] hover:bg-[#1e2738] transition-colors text-sm"
            download
          >
            <div className="font-medium">Detailed Resume</div>
            <div className="text-xs text-[#9ca3af] mt-1">Full experience</div>
          </a>
        </div>
      )}
    </div>
  );
}
