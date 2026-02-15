import React from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Education() {
  const config = getPortfolioConfig();

  return (
    <section className="py-24 px-6 bg-[#151b2e]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e5e7eb]">
          <span className="text-[#60a5fa] font-mono">//</span> Education
        </h2>

        <div className="space-y-6">
          {config.education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1e2738] border border-[#374151] rounded-xl p-8 hover:border-[#3b82f6] transition-all"
            >
              <h3 className="text-2xl font-bold text-[#e5e7eb] mb-2">{edu.degree}</h3>
              <div className="flex flex-wrap items-center gap-3 text-[#9ca3af]">
                <span className="font-semibold text-[#60a5fa]">{edu.institution}</span>
                <span>•</span>
                <span>{edu.duration}</span>
                {edu.location && (
                  <>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
