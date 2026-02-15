# Quick Setup Guide

## 🚀 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Update Your Information
Edit `config/portfolio.config.ts`:
- Replace `your-email@gmail.com` with your actual email
- Replace `+91-XXXXXXXXXX` with your actual phone
- Replace LinkedIn URL with your profile
- Replace portfolio URL with your GitHub Pages URL

**IMPORTANT**: Only edit the config file, not the components!

### Step 3: Test Locally
```bash
npm run dev
```
Open http://localhost:3000

### Step 4: Deploy to GitHub

#### 4.1 Update Repository Name
Edit `next.config.js`:
```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

#### 4.2 Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR-USERNAME/your-repo-name.git
git push -u origin main
```

#### 4.3 Enable GitHub Pages
1. Go to: Repository → Settings → Pages
2. Source: Select "GitHub Actions"
3. Wait 2-3 minutes for deployment

#### 4.4 Access Your Site
Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/your-repo-name/
```

## ✅ Verification Checklist

- [ ] All personal information updated in config
- [ ] Resume downloads work (test both variants)
- [ ] All sections display correctly
- [ ] Links work (LinkedIn, email, phone)
- [ ] Mobile view looks good
- [ ] GitHub Pages deployment successful

## 📝 Making Changes

1. Edit `config/portfolio.config.ts` only
2. Run `npm run dev` to preview
3. Commit and push to GitHub
4. GitHub Actions will auto-deploy

## ⚠️ Common Mistakes

❌ Editing component files directly
✅ Only edit config/portfolio.config.ts

❌ Forgetting to update basePath in next.config.js
✅ Match repository name exactly

❌ Not enabling GitHub Pages
✅ Settings → Pages → Source: GitHub Actions

## 🆘 Need Help?

1. Check README.md for detailed documentation
2. Review troubleshooting section
3. Open GitHub Issue
