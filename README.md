# Backend & Data Platform Engineer Portfolio

A production-grade, config-driven portfolio website with built-in resume generation system. Designed specifically for Backend, Data Platform, and Systems Engineers.

## 🎯 Key Features

- **Single Source of Truth**: All data managed through `config/portfolio.config.ts`
- **Dual Resume System**: Generate both 1-page and detailed resumes from the same configuration
- **ATS-Friendly**: Optimized resume formats for Applicant Tracking Systems
- **Production-Ready**: Built with Next.js, TypeScript, and Tailwind CSS
- **GitHub Pages**: Free hosting with automated deployments
- **Type-Safe**: Full TypeScript support prevents data inconsistencies
- **PDF Download**: Direct download of pre-uploaded resume PDFs

## 🏗️ Architecture

```
config/portfolio.config.ts    ← SINGLE SOURCE OF TRUTH
         ↓
   [UI Components]  +  [Resume PDFs]
         ↓
    Portfolio Website + Downloadable Resumes
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio-backend-engineer.git
   cd portfolio-backend-engineer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update your information**
   - Edit `config/portfolio.config.ts`
   - Replace placeholder data with your actual information
   - DO NOT modify component files unless changing layout

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

5. **Test resume generation**
   - Click "Download Resume" button
   - Try both 1-Page and Detailed variants
   - Verify all data is correct

## 📦 Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy

3. **Update next.config.js**
   - Change `basePath` and `assetPrefix` to match your repository name
   ```javascript
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

4. **Access your site**
   - URL: `https://YOUR-USERNAME.github.io/your-repo-name/`

### Option 2: Manual Deployment

```bash
npm run build
npm run export
# Deploy the 'out' folder to any static hosting
```

## 🎨 Customization Guide

### Updating Resume Content

**Only edit** `config/portfolio.config.ts`:

```typescript
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'YOUR NAME',
    email: 'your-email@example.com',
    // ... update all fields
  },
  professionalSummary: 'Your summary here...',
  coreCompetencies: [
    {
      category: 'Backend Engineering',
      skills: ['Java', 'Python', /* your skills */],
    },
  ],
  // ... update all sections
};
```

### Resume Rules Configuration

Control resume variants in the same config file:

```typescript
resumeRules: {
  onePage: {
    maxExperienceBulletsPerSection: 2,  // Limit bullets per section
    maxProjectDetails: 1,                // Limit project details
    includeAchievements: false,          // Hide achievements
    includeAdditionalInfo: false,        // Hide additional info
  },
  detailed: {
    maxExperienceBulletsPerSection: -1,  // Unlimited (-1)
    maxProjectDetails: -1,               // Unlimited
    includeAchievements: true,           // Show all
    includeAdditionalInfo: true,         // Show all
  },
}
```

### Theme Customization

Edit `config/theme.config.ts` for colors and typography:

```typescript
export const themeConfig = {
  colors: {
    background: {
      primary: '#0a0e1a',  // Change color scheme
      // ...
    },
  },
  typography: {
    fonts: {
      mono: "'Your Font', monospace",  // Change fonts
      // ...
    },
  },
};
```

## 📋 Project Structure

```
portfolio-backend-engineer/
├── config/
│   ├── portfolio.config.ts    ← YOUR RESUME DATA (edit this)
│   └── theme.config.ts         ← Design system
├── src/
│   ├── components/
│   │   ├── layout/            ← Header, Footer, Layout
│   │   ├── sections/          ← Hero, About, Skills, etc.
│   │   ├── resume/            ← PDF resume components
│   │   └── ui/                ← Reusable UI components
│   ├── lib/                   ← Config loader, utilities
│   ├── pages/                 ← Next.js pages
│   ├── styles/                ← Global CSS
│   └── types/                 ← TypeScript types
├── .github/workflows/         ← Automated deployment
└── package.json
```

## ✅ Data Integrity Rules

**CRITICAL**: The system enforces strict resume accuracy:

- ✅ All data comes from `config/portfolio.config.ts`
- ✅ No hardcoded content in components
- ✅ Resume PDFs use the same data as the UI
- ✅ TypeScript types prevent data mismatches
- ❌ Never modify component files to add content
- ❌ Never add skills/experience not in config

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run export    # Export static site
npm run deploy    # Build + export + prepare for GitHub Pages
```

## 🐛 Troubleshooting

### Resume not downloading?
- Check browser console for errors
- Ensure @react-pdf/renderer is installed: `npm install @react-pdf/renderer`

### GitHub Pages showing 404?
- Verify `basePath` in `next.config.js` matches your repository name
- Check GitHub Pages settings: Settings → Pages → Source: "GitHub Actions"

### Styles not loading?
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder and rebuild: `rm -rf .next && npm run dev`

### TypeScript errors?
- Run `npm install` to install type definitions
- Check `tsconfig.json` includes your files

## 📄 Resume Generation Details

### Resume Downloads
1. User clicks "Download Resume" dropdown
2. Selects variant (1-Page or Detailed)
3. Browser downloads the pre-uploaded PDF file from the `public/` directory

## 🔒 Privacy & Security

- No tracking or analytics
- No external API calls (except PDF generation in browser)
- All processing happens client-side
- Safe to include real contact information

## 📈 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Static site = instant loading
- Optimized for mobile devices

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork for your own use
- Report bugs via Issues
- Suggest improvements

## 📝 License

MIT License - Free to use for personal and commercial projects

## 🙋 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the configuration guide
3. Open a GitHub Issue with details

---

## 📊 Configuration Reference

### Personal Info
```typescript
personal: {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
}
```

### Skills
```typescript
coreCompetencies: Array<{
  category: string;
  skills: string[];
}>
```

### Experience
```typescript
experience: Array<{
  title: string;
  company: string;
  duration: string;
  location: string;
  sections: Array<{
    heading: string;
    bullets: string[];
  }>;
  achievements?: string[];
}>
```

### Projects
```typescript
projects: Array<{
  title: string;
  technologies: string[];
  description: string;
  details: string[];
}>
```

## 🎓 Best Practices

1. **Keep config data factual**: Only include real experience
2. **Update regularly**: Keep skills and experience current
3. **Test resume PDFs**: Download and review before sharing
4. **Maintain consistency**: Use similar formatting across sections
5. **Mobile-first**: Test on different screen sizes

---

Built with ❤️ for Backend & Data Platform Engineers
