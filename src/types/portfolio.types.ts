/**
 * Type definitions for portfolio configuration
 * Enforces type safety and prevents data mismatches
 */

export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  hackerrank?: string;
  leetcode?: string;
  codechef?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceSection {
  heading: string;
  bullets: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  sections: ExperienceSection[];
  achievements?: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  professionalSummary: string;
  coreCompetencies: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  additionalInformation: string[];
  resumeUrls: {
    onePage: string;
    detailed: string;
  };
}

export type ResumeVariant = 'onePage' | 'detailed';
