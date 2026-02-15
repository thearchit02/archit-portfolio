# 🏗️ Architecture & Data Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  SINGLE SOURCE OF TRUTH                      │
│              config/portfolio.config.ts                      │
│                                                              │
│  - Personal Information                                      │
│  - Professional Summary                                      │
│  - Core Competencies                                         │
│  - Work Experience                                           │
│  - Projects                                                  │
│  - Education                                                 │
│  - Resume Rules                                              │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Imported by
                   │
       ┌───────────┴───────────┐
       │                       │
       ▼                       ▼
┌─────────────┐         ┌─────────────┐
│  UI Layer   │         │ Resume PDFs │
└─────────────┘         └─────────────┘
       │                       │
       ├─ Hero Section         ├─ ResumeOnePage
       ├─ About Section        │   - maxBullets: 2
       ├─ Skills Section       │   - Compact layout
       ├─ Experience          │
       ├─ Projects            └─ ResumeDetailed
       └─ Education               - maxBullets: -1 (all)
                                  - Full layout
                   │
                   ▼
            User's Browser
```

## Data Flow Diagram

```
User edits config/portfolio.config.ts
              ↓
    Changes personal info
    Changes experience
    Changes skills
              ↓
    Commits to git
    Pushes to GitHub
              ↓
    GitHub Actions triggered
              ↓
    npm run build
    npm run export
              ↓
    Static site generated
              ↓
    Deployed to GitHub Pages
              ↓
    User visits website
              ↓
    ┌─────────┴─────────┐
    ↓                   ↓
Views Portfolio    Clicks Download
    ↓                   ↓
Sees all data    Opens dropdown
from config         ↓
                Selects variant
                    ↓
            PDF generated in browser
                    ↓
            Uses SAME config data
                    ↓
            Downloads to device
```

## Resume Generation Flow

```
User clicks "Download Resume"
         ↓
  Dropdown opens
         ↓
  User selects variant
         ↓
┌─────────┴─────────┐
│                   │
▼                   ▼
1-Page          Detailed
         ↓
   Load config
         ↓
   Apply rules
         ↓
Filter bullets based on:
resumeRules.onePage or
resumeRules.detailed
         ↓
React PDF component
         ↓
Generate PDF blob
         ↓
Download to device
```

## Component Hierarchy

```
Layout
├── Header
│   ├── Logo
│   ├── Navigation
│   └── DownloadDropdown
│       ├── 1-Page Resume Button
│       └── Detailed Resume Button
│
├── Main Content
│   ├── Hero
│   │   ├── Name (from config.personal.name)
│   │   ├── Title
│   │   ├── Summary (from config.professionalSummary)
│   │   └── DownloadDropdown
│   │
│   ├── About
│   │   └── Summary (from config.professionalSummary)
│   │
│   ├── Skills
│   │   └── Categories (from config.coreCompetencies[])
│   │       └── Skills (from category.skills[])
│   │
│   ├── Experience
│   │   └── Jobs (from config.experience[])
│   │       ├── Job Header
│   │       ├── Sections (from job.sections[])
│   │       │   └── Bullets
│   │       └── Achievements (from job.achievements[])
│   │
│   ├── Projects
│   │   └── Project Cards (from config.projects[])
│   │       ├── Title
│   │       ├── Technologies
│   │       ├── Description
│   │       └── Details
│   │
│   └── Education
│       └── Degrees (from config.education[])
│
└── Footer
    ├── Contact Info (from config.personal)
    └── Social Links
```

## Type Safety Flow

```
portfolio.config.ts
         ↓
 Type: PortfolioConfig
         ↓
    Validated by TypeScript
         ↓
    Imported by components
         ↓
    Components use typed data
         ↓
    No runtime type errors
         ↓
    Compile-time safety
```

## File Organization Logic

```
config/
└── Central data store (edit here)

src/types/
└── Type definitions (data structure)

src/lib/
└── Data loading & validation

src/components/
├── layout/ (structural components)
├── sections/ (UI sections)
├── resume/ (PDF components)
└── ui/ (reusable components)

src/pages/
└── Next.js routing (homepage)

src/styles/
└── Global CSS (Tailwind + custom)

src/utils/
└── Helper functions
```

## Configuration Cascade

```
portfolio.config.ts
         ↓
  Contains all data
         ↓
    Imported by:
         ├─ config-loader.ts (validation)
         ├─ section-renderer.ts (filtering)
         ├─ All UI components (display)
         └─ Resume components (PDF)
         ↓
    No data duplication
    No hardcoded content
    Single source of truth
```

## Resume Variant Rules

```
resumeRules: {
  onePage: {
    maxExperienceBulletsPerSection: 2
                ↓
    Takes first 2 bullets per section
                ↓
    Compact, ATS-optimized
  },
  detailed: {
    maxExperienceBulletsPerSection: -1
                ↓
    Takes all bullets (-1 = unlimited)
                ↓
    Full experience
  }
}
```

## Build & Deploy Process

```
Local Development:
  npm run dev
       ↓
  Next.js dev server
       ↓
  Live reload on changes
       ↓
  Test at localhost:3000

Production Build:
  npm run build
       ↓
  TypeScript compilation
       ↓
  Tailwind CSS processing
       ↓
  Next.js optimization
       ↓
  Static HTML generation
       ↓
  npm run export
       ↓
  Pure static files in /out

GitHub Actions:
  git push
       ↓
  Trigger workflow
       ↓
  Install dependencies
       ↓
  Build & export
       ↓
  Deploy to gh-pages
       ↓
  Live on GitHub Pages
```

## Data Validation

```
Config Update
      ↓
TypeScript checks types
      ↓
config-loader validates structure
      ↓
Required fields present?
      ├─ Yes → Continue
      └─ No → Build error
      ↓
Data flows to components
      ↓
Components render
```

## State Management

```
No Redux or Context needed!

Why?
  - All data is static (from config)
  - No user authentication
  - No complex state changes
  - No API calls (except PDF generation)

Result:
  - Simpler architecture
  - Faster performance
  - Easier to understand
```

## Performance Optimization

```
Static Site Generation (SSG)
         ↓
  Pre-rendered HTML
         ↓
  Instant page loads
         ↓
  No server processing
         ↓
  CDN delivery
         ↓
  Global distribution
         ↓
  Fast everywhere
```

## Security Model

```
No Backend Server
       ↓
No database
       ↓
No API endpoints
       ↓
No authentication
       ↓
All processing client-side
       ↓
PDF generation in browser
       ↓
No data leaves user's device
       ↓
Inherently secure
```

## Maintenance Model

```
Need to update resume?
         ↓
  Edit config/portfolio.config.ts
         ↓
  git commit & push
         ↓
  GitHub Actions auto-deploys
         ↓
  Live in 2-3 minutes
         ↓
  No manual deployment needed
```

## Error Prevention

```
TypeScript
  ↓ Prevents type errors

Config validation
  ↓ Ensures required data

Conditional rendering
  ↓ Handles missing data

Component isolation
  ↓ Prevents cascading failures

Build-time checks
  ↓ Catches errors before deploy
```

## Scalability

```
Want to add a new section?

1. Add data to config
2. Create component
3. Import config
4. Render conditionally
5. Done!

No complex state management
No API changes needed
No database migrations
Just add, commit, push
```

This architecture ensures:
- ✅ Data accuracy
- ✅ Easy maintenance
- ✅ Type safety
- ✅ Fast performance
- ✅ Simple deployment
- ✅ Zero cost hosting
