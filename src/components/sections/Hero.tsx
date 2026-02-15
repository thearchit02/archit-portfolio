import React from 'react';
import DownloadDropdown from '../ui/DownloadDropdown';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Hero() {
  const config = getPortfolioConfig();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d374820_1px,transparent_1px),linear-gradient(to_bottom,#2d374820_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Name with gradient effect */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-[#e5e7eb] via-[#60a5fa] to-[#06b6d4] bg-clip-text text-transparent">
            {config.personal.name}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full" />
        </div>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl text-[#9ca3af] mb-8 font-mono">
          <span className="text-[#60a5fa]">&gt;</span> Backend & Data Platform Engineer
        </h2>

        {/* Summary */}
        <p className="text-lg text-[#9ca3af] leading-relaxed mb-12 max-w-3xl">
          {config.professionalSummary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <DownloadDropdown />
          <a
            href="#contact"
            className="px-6 py-2 border border-[#374151] text-[#9ca3af] hover:text-[#e5e7eb] hover:border-[#3b82f6] rounded-lg transition-all font-medium text-sm"
          >
            Get In Touch
          </a>
          <a
            href={config.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-[#9ca3af] hover:text-[#60a5fa] transition-colors font-medium text-sm flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
