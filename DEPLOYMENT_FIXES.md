# Deployment Fixes Applied

This document lists all the fixes applied to resolve GitHub Pages deployment issues.

---

## ✅ Issues Fixed

### 1. **Added Missing npm Script**
**File**: `package.json`
**Change**: Added `"export": "next build"` script
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "export": "next build",  // ← ADDED
  "deploy": "next build && touch out/.nojekyll"
}
```

**Why**: Documentation referenced `npm run export` but the script didn't exist.

---

### 2. **Created Environment Configuration Files**

#### **File**: `.env.production`
**Created**: New file for production environment
```env
NEXT_PUBLIC_BASE_PATH=/archit-portfolio
```

**Why**: The DownloadDropdown component uses `process.env.NEXT_PUBLIC_BASE_PATH` which was undefined, causing resume downloads to fail.

#### **File**: `.env.local`
**Created**: New file for local development
```env
NEXT_PUBLIC_BASE_PATH=
```

**Why**: Ensures local development works without basePath (localhost:3000 instead of localhost:3000/archit-portfolio).

**Note**: `.env.local` is already in `.gitignore` (as `.env*.local`), so it won't be committed to GitHub.

---

### 3. **Improved DownloadDropdown Path Handling**
**File**: `src/components/ui/DownloadDropdown.tsx`
**Change**: Enhanced the `getAssetPath` function with better path normalization
```typescript
const getAssetPath = (path: string) => {
  // Use environment variable if set, otherwise empty string for local dev
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Ensure path starts with / and basePath doesn't end with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  return `${cleanBasePath}${cleanPath}`;
};
```

**Why**: Prevents edge cases with trailing/leading slashes and makes the path construction more robust.

---

## 🚀 How to Deploy

### **IMPORTANT: Verify Repository Name First!**

Before deploying, check that your GitHub repository name matches the configuration:

1. **Check your GitHub repository name**
   - Go to your GitHub repository
   - The name appears at the top: `username/REPO-NAME`

2. **If your repository name is NOT `archit-portfolio`:**
   - Update `next.config.js` line 2:
   ```javascript
   const repoName = 'YOUR-ACTUAL-REPO-NAME';
   ```
   - Update `.env.production`:
   ```
   NEXT_PUBLIC_BASE_PATH=/YOUR-ACTUAL-REPO-NAME
   ```

### Standard Deployment Steps:

```bash
# 1. Install dependencies (if not done)
npm install

# 2. Test the build locally
npm run build

# 3. Verify the output
# Check that out/ directory has:
# - index.html
# - _next/ folder
# - resume/ folder with PDFs
# - .nojekyll file

# 4. Push to GitHub
git add .
git commit -m "Fix deployment issues and add environment config"
git push origin main

# 5. Configure GitHub Pages
# Go to: Repository → Settings → Pages
# Set Source to: "GitHub Actions"

# 6. Wait for deployment (2-3 minutes)
# Check: Repository → Actions tab for workflow status

# 7. Access your site
# URL: https://YOUR-USERNAME.github.io/archit-portfolio/
```

---

## 🧪 Local Testing

Test everything locally before deploying:

```bash
# Development mode (no basePath)
npm run dev
# Open: http://localhost:3000

# Production build (with basePath)
rm -rf .next out
NODE_ENV=production npm run build

# Test the production build locally using a static server
npx serve out -p 3000
# Open: http://localhost:3000/archit-portfolio/
# Note: You need to include /archit-portfolio/ in the URL
```

---

## ✅ Post-Deployment Verification

After deployment, verify these items:

### 1. **Homepage Loads**
```
https://YOUR-USERNAME.github.io/archit-portfolio/
```
- [ ] Page loads without errors
- [ ] All sections visible
- [ ] Styling correct

### 2. **Resume Downloads Work**
- [ ] Click "Download Resume" button
- [ ] Both options appear in dropdown
- [ ] 1-Page Resume downloads
- [ ] Detailed Resume downloads
- [ ] PDFs open correctly

### 3. **Navigation Works**
- [ ] All nav links work (#about, #experience, etc.)
- [ ] Smooth scrolling functions
- [ ] Mobile menu works (on mobile)

### 4. **No Console Errors**
- [ ] Open browser DevTools (F12)
- [ ] Check Console tab
- [ ] Should be no red errors

---

## 🐛 Troubleshooting

### Issue: Site shows 404

**Solution**:
1. Verify GitHub Pages source is "GitHub Actions" (Settings → Pages)
2. Check that repository name matches `repoName` in `next.config.js`
3. Wait 5 minutes and hard refresh (Ctrl+Shift+R)

### Issue: Resume downloads return 404

**Check**:
1. `.env.production` exists with correct basePath
2. PDFs exist in `out/resume/` after build
3. Test direct URL: `https://USERNAME.github.io/archit-portfolio/resume/1PageResume/ArchitVerma_Resume.pdf`

**If still failing**:
1. Rebuild: `rm -rf .next out && npm run build`
2. Check `out/resume/` directory has PDFs
3. Verify workflow completed successfully in Actions tab

### Issue: Styles broken

**Solution**:
1. Clear browser cache
2. Hard refresh page (Ctrl+Shift+R)
3. Try incognito/private mode
4. Check HTML source - CSS links should include `/archit-portfolio/_next/...`

---

## 📝 Configuration Files Summary

### Files You Should Commit:
- ✅ `.env.production` - Production environment config
- ✅ `package.json` - Updated scripts
- ✅ `src/components/ui/DownloadDropdown.tsx` - Improved path handling

### Files Git Will Ignore:
- ❌ `.env.local` - Local development config (in .gitignore)
- ❌ `node_modules/` - Dependencies
- ❌ `.next/` - Build cache
- ❌ `out/` - Build output (not committed, generated in GitHub Actions)

---

## 🎯 Key Changes Summary

| Issue | Fix | Impact |
|-------|-----|--------|
| Missing `npm run export` | Added script to package.json | Documentation now works |
| Undefined basePath variable | Created `.env.production` | Resume downloads work |
| Local dev with basePath | Created `.env.local` | Clean local URLs |
| Path handling edge cases | Improved path normalization | More robust deployment |

---

## 📞 Need Help?

If you encounter issues:

1. **Check GitHub Actions Log**
   - Go to: Repository → Actions
   - Click on the failed workflow
   - Read error messages carefully

2. **Verify Configuration**
   - Repository name matches next.config.js
   - .env.production has correct basePath
   - GitHub Pages source is "GitHub Actions"

3. **Test Locally First**
   ```bash
   rm -rf .next out
   NODE_ENV=production npm run build
   ```
   If this fails, fix it before pushing to GitHub

4. **Common Fixes**
   - Clear cache: `rm -rf .next out`
   - Reinstall: `rm -rf node_modules && npm install`
   - Check Node version: `node --version` (should be 18+)

---

**All fixes have been applied and the project is ready for deployment!**

Last Updated: February 2026
