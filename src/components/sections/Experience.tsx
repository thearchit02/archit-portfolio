import React from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Experience() {
  const config = getPortfolioConfig();

  return (
    <section id="experience" className="py-24 px-6 bg-[#151b2e]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e5e7eb]">
          <span className="text-[#60a5fa] font-mono">//</span> Professional Experience
        </h2>

        <div className="space-y-12">
          {config.experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[#3b82f6]">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#3b82f6] rounded-full border-4 border-[#151b2e]" />

              {/* Job header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#e5e7eb] mb-2">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-[#9ca3af]">
                  <span className="font-semibold text-[#60a5fa]">{job.company}</span>
                  <span>•</span>
                  <span>{job.duration}</span>
                  {job.location && (
                    <>
                      <span>•</span>
                      <span>{job.location}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Job sections */}
              {job.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-8">
                  <h4 className="text-lg font-semibold text-[#e5e7eb] mb-4 border-b border-[#2d3748] pb-2">
                    {section.heading}
                  </h4>
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-[#9ca3af] flex items-start">
                        <span className="text-[#60a5fa] mr-3 mt-1 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Achievements */}
              {job.achievements && job.achievements.length > 0 && (
                <div className="mt-8 bg-[#1e2738] border border-[#374151] rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-[#60a5fa] mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-[#9ca3af] flex items-start">
                        <span className="text-[#10b981] mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
