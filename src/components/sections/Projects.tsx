import React from 'react';
import { getPortfolioConfig } from '../../lib/config-loader';

export default function Projects() {
  const config = getPortfolioConfig();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#e5e7eb]">
          <span className="text-[#60a5fa] font-mono">//</span> Technical Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#151b2e] border border-[#374151] rounded-xl p-8 hover:border-[#3b82f6] transition-all group"
            >
              <h3 className="text-2xl font-bold text-[#e5e7eb] mb-4 group-hover:text-[#60a5fa] transition-colors">
                {project.title}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#1e2738] text-[#60a5fa] text-xs font-mono rounded border border-[#2d3748]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#9ca3af] leading-relaxed mb-6">{project.description}</p>

              {/* Details */}
              {project.details && project.details.length > 0 && (
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-[#9ca3af] text-sm flex items-start">
                      <span className="text-[#60a5fa] mr-2 mt-1 flex-shrink-0">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
