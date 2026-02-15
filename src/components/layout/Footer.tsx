import React from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Footer() {
  const config = getPortfolioConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-[#2d3748] bg-[#151b2e] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#e5e7eb]">Get In Touch</h3>
            <div className="space-y-2 text-[#9ca3af]">
              <p>
                <span className="text-[#6b7280]">Email:</span>{' '}
                <a
                  href={`mailto:${config.personal.email}`}
                  className="text-[#60a5fa] hover:text-[#3b82f6] transition-colors"
                >
                  {config.personal.email}
                </a>
              </p>
              <p>
                <span className="text-[#6b7280]">Phone:</span>{' '}
                <a
                  href={`tel:${config.personal.phone}`}
                  className="text-[#60a5fa] hover:text-[#3b82f6] transition-colors"
                >
                  {config.personal.phone}
                </a>
              </p>
              <p>
                <span className="text-[#6b7280]">Location:</span> {config.personal.location}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#e5e7eb]">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={config.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1e2738] hover:bg-[#2d3748] border border-[#374151] rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] transition-all text-sm"
              >
                LinkedIn
              </a>
              <a
                href={config.personal.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1e2738] hover:bg-[#2d3748] border border-[#374151] rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] transition-all text-sm"
              >
                GitHub
              </a>
              {config.personal.hackerrank && (
                <a
                  href={config.personal.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1e2738] hover:bg-[#2d3748] border border-[#374151] rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] transition-all text-sm"
                >
                  HackerRank
                </a>
              )}
              {config.personal.leetcode && (
                <a
                  href={config.personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1e2738] hover:bg-[#2d3748] border border-[#374151] rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] transition-all text-sm"
                >
                  LeetCode
                </a>
              )}
              {config.personal.codechef && (
                <a
                  href={config.personal.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1e2738] hover:bg-[#2d3748] border border-[#374151] rounded-lg text-[#9ca3af] hover:text-[#e5e7eb] transition-all text-sm"
                >
                  CodeChef
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2d3748] text-center text-[#6b7280] text-sm">
          <p>© {currentYear} {config.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
