/**
 * SINGLE SOURCE OF TRUTH
 * All portfolio and resume data flows from this configuration.
 * DO NOT modify or add data not present in the original resume.
 */

import { PortfolioConfig } from '../src/types/portfolio.types';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'ARCHIT VERMA',
    location: 'Kolkata, West Bengal, India',
    email: 'reachoutarchit@gmail.com',
    phone: '+91-8770830112',
    linkedin: 'https://www.linkedin.com/in/archit-verma-02/',
    portfolio: 'https://github.com/thearchit02',
    hackerrank: '',
    leetcode: '',
    codechef: '',
  },

  professionalSummary: `Backend & Data Platform Engineer with 2+ years architecting production BI migration systems serving 500+ enterprise workbooks across Fortune 500 clients. Specialized in metadata-driven automation, multi-agent AI orchestration, and real-time data transformation pipelines. Currently leading development of LLM-powered migration platform (OpenAI/Gemini/Llama integration) while serving as POC for billable platform modules deployed via Docker + Jenkins. Reduced migration complexity analysis from 40 minutes to 30 minutes for 60MB workbooks containing 200+ worksheets through rule-based automation and AI-assisted optimization.`,

  coreCompetencies: [
    {
      category: 'Backend Engineering',
      skills: [
        'Java',
        'Python',
        'TypeScript',
        'SQL',
        'REST API Design',
        'Real-time Data Processing',
        'Production System Ownership',
      ],
    },
    {
      category: 'Data & Metadata Platform',
      skills: [
        'Metadata Extraction & Modeling',
        'Schema Replication',
        'Data Lineage Analysis',
        'Semantic Model Transformation',
        'BI Metadata (Tableau/Power BI/Qlik Sense)',
        'PostgreSQL',
        'MySQL',
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        'Multi-Agent LLM Orchestration (LangGraph)',
        'OpenAI/Gemini/Llama Integration',
        'AI-Trained Rule Engines',
        'Prompt Engineering',
        'Synthetic Data Generation',
      ],
    },
    {
      category: 'DevOps & Production',
      skills: [
        'Docker Containerization',
        'Jenkins CI/CD',
        'Git Version Control',
        'Tomcat Deployment',
        'On-Call Production Support',
        'Performance Optimization',
      ],
    },
  ],

  experience: [
    {
      title: 'Product Engineer',
      company: 'Cognizant Technology Solutions',
      duration: 'December 2023 – Present',
      location: 'Kolkata, India',
      sections: [
        {
          heading: 'Platform Architecture & Production Ownership',
          bullets: [
            'Own production-grade Tableau Reverse Engineering module (billable component) processing 500+ workbooks for 2 completed Fortune 500 migrations and 3 active enterprise clients—serving as primary POC with on-call production support',
            'Architected real-time metadata extraction pipeline processing 60MB Tableau workbooks (197 worksheets, 200+ tables) in under 30 minutes, generating Power BI artifacts (PBIP/PBIR/JSON) via direct API integration to Power BI Service—reduced manual migration time by 85% from legacy process',
            'Deployed production systems via Docker + Jenkins CI/CD pipeline to client VMs, establishing containerized deployment strategy adopted by 4 migration pattern teams within 30-person BI Migrator project',
            'Report directly to Associate Director for Tableau-to-Power BI pattern (highest-demand migration path), driving technical decisions for platform architecture, API integration strategies, and performance optimization initiatives',
          ],
        },
        {
          heading: 'AI Engineering & Multi-Agent Systems',
          bullets: [
            'Architecting multi-agent LLM orchestration system (30% of development capacity) using LangGraph with OpenAI/Gemini/Llama APIs to automate end-to-end BI report conversion—designing specialized agents for model transformation and report generation with sub-agents handling extraction, analysis, and optimal conversion strategies',
            'Created reusable AI orchestration framework (POJO mapping classes, AI wrapper utilities) adopted across 4 migration pattern teams, standardizing LLM integration and reducing duplicate AI infrastructure work by 60%—on track for production deployment serving pilot client in Q3 2025',
            'Built AI-trained complexity scoring engine analyzing 15+ dimensions (custom SQL queries, calculated fields, relationships, joins, hierarchies, parameters, table calculations, dashboard actions) across BI workbooks—achieved 92% accuracy in migration effort estimation by training rule weightages through AI model analysis, directly used for client bidding and resource planning',
          ],
        },
        {
          heading: 'Data Engineering & Metadata Intelligence',
          bullets: [
            'Engineered schema replication system generating type-aware synthetic data (numeric, string, datetime) in Excel/CSV formats by analyzing column metadata and datatypes—enables full BI migration validation in internal environments without accessing client production databases, critical for security compliance and GDPR requirements',
            'Developed multi-format data transformation layer converting Tableau metadata into canonical XML staging format, then generating Power BI semantic models with preserved data lineage, relationships, and business logic—supporting both direct API publishing to Power BI Service and file-based deployment (PBIP/PBIR)',
            'Implemented polyglot database strategy using PostgreSQL (primary metadata store), MySQL (client integration), and MongoDB (unstructured BI artifacts) based on data access patterns and query performance requirements',
            'Optimized migration pipeline performance from 40 minutes to 30 minutes for complex reports through profiling bottlenecks, implementing caching strategies for repeated metadata lookups, and parallelizing independent transformation operations',
          ],
        },
        {
          heading: 'Technical Leadership & Cross-Team Collaboration',
          bullets: [
            'Designed and implemented configurable rule engine with UI-based configuration allowing non-technical stakeholders to adjust complexity scoring parameters, migration effort multipliers, and risk thresholds without code changes—democratizing platform customization across consulting teams',
            'Contributed to POC initiatives including UI automation testing framework with Git integration, implementing automated validation pipelines that trigger Jenkins WAR builds upon successful test completion—reducing release cycle time by 35%',
            'Established logging and monitoring infrastructure tracking migration success rates, failure patterns, and processing time distributions—enabling data-driven optimization and providing visibility into production system health for stakeholder reporting',
          ],
        },
      ],
      achievements: [
        'Production Platform Ownership: Primary POC for 2 billable platform modules serving 500+ enterprise workbooks across Fortune 500 clients with 99.5% uptime',
        'Performance Optimization: Reduced migration processing time by 25% (40min → 30min) for complex 60MB workbooks through algorithmic improvements and caching',
        'AI Innovation: Architecting multi-agent LLM system projected to reduce manual engineering effort by 70% when production-deployed—currently in advanced development phase with successful proof-of-concept validation',
        'Team Impact: Created reusable infrastructure components (POJO classes, AI orchestration utilities) adopted by 4 migration pattern teams within 30-person project',
        'Client Success: Delivered 2 successful enterprise-scale BI migrations with 3 active projects, achieving 92% complexity estimation accuracy used for client bidding',
      ],
    },
  ],

  projects: [
    {
      title: 'Enterprise BI Migration Platform',
      technologies: ['Java', 'Python', 'Docker', 'Jenkins', 'PostgreSQL'],
      description:
        'Production platform automating Tableau-to-Power BI migrations through metadata-driven transformation, real-time API integration, and Docker-based deployment—serving Fortune 500 clients with 500+ workbooks migrated',
      details: [
        'Architecture: Metadata extraction engine → Canonical XML staging → Semantic model transformation → Power BI artifact generation (PBIP/PBIR/JSON) with preserved data lineage and business logic',
      ],
    },
    {
      title: 'Multi-Agent AI Migration System',
      technologies: ['Python', 'LangGraph', 'OpenAI/Gemini/Llama APIs'],
      description:
        'Advanced LLM orchestration platform using specialized agents (model agent, report agent) with sub-agents for extraction, analysis, and conversion—achieving end-to-end automated BI report transformation with validation and decision-making workflows',
      details: [
        'Innovation: Created reusable AI wrapper framework enabling standardized LLM integration across multiple migration patterns, reducing development time for AI features by 60%',
      ],
    },
    {
      title: 'Intelligent Complexity Analysis Engine',
      technologies: ['Java', 'AI-Trained Rules', 'UI Configuration'],
      description:
        'Configurable scoring system analyzing 15+ BI dimensions (datasources, custom SQL, calculated fields, relationships, joins, hierarchies, parameters, table calculations, worksheets, dashboards, chart types)—trained using AI model feedback to achieve 92% estimation accuracy for migration effort and risk assessment',
      details: [],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology',
      institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      duration: '2019 – 2023',
      location: '',
    },
  ],

  additionalInformation: [
    'Domain Expertise: 3 months specialized training in Tableau as BI Specialist, covering workbook architecture, calculated fields, data modeling, and dashboard optimization',
    'Technical Leadership: Direct reporting relationship to Associate Director for highest-demand migration pattern, driving architectural decisions and platform strategy',
    'Production Experience: On-call POC responsibilities for production issues affecting Fortune 500 client workloads',
    'Open to Relocation: Available for opportunities in Bengaluru, Hyderabad, Pune, NCR (India) or remote positions with global companies',
  ],

  // Resume download paths
  // Ensure these files exist in your 'public' folder
  resumeUrls: {
    onePage: '/resume/1PageResume/ArchitVerma_Resume.pdf',
    detailed: '/resume/DetailedResume/ArchitVerma_DetailedResume.pdf',
  },
};
