import React from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Skills() {
  const config = getPortfolioConfig();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e5e7eb]">
          <span className="text-[#60a5fa] font-mono">//</span> Core Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.coreCompetencies.map((category, index) => (
            <div
              key={index}
              className="bg-[#151b2e] border border-[#374151] rounded-xl p-6 hover:border-[#3b82f6] transition-all group"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#60a5fa] group-hover:text-[#3b82f6] transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-[#1e2738] text-[#9ca3af] text-sm rounded-md border border-[#2d3748] hover:border-[#60a5fa] hover:text-[#e5e7eb] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
