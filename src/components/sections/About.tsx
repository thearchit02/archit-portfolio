import React from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function About() {
  const config = getPortfolioConfig();

  return (
    <section id="about" className="py-24 px-6 bg-[#151b2e]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e5e7eb]">
          <span className="text-[#60a5fa] font-mono">//</span> About Me
        </h2>

        <div className="bg-[#1e2738] border border-[#374151] rounded-xl p-8 md:p-12">
          <p className="text-lg text-[#9ca3af] leading-relaxed whitespace-pre-line">
            {config.professionalSummary}
          </p>

          {config.additionalInformation && config.additionalInformation.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#2d3748]">
              <h3 className="text-xl font-semibold mb-4 text-[#e5e7eb]">Additional Information</h3>
              <ul className="space-y-3">
                {config.additionalInformation.map((info, index) => (
                  <li key={index} className="text-[#9ca3af] flex items-start">
                    <span className="text-[#60a5fa] mr-3 mt-1">▹</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
