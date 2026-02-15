# 🚀 Quick Start Deployment Guide

Follow these steps to deploy your portfolio to GitHub Pages.

---

## ⚡ 5-Minute Deployment

### Step 1: Verify Repository Name (30 seconds)

Your repository name MUST match the configuration.

**Current configuration**: `archit-portfolio`

**Check your GitHub repository name**:
1. Go to your GitHub repository
2. Look at the top: `username/REPO-NAME`
3. If it's different from `archit-portfolio`, update these 2 files:

**File 1**: `next.config.js` (line 2)
```javascript
const repoName = 'YOUR-ACTUAL-REPO-NAME';
```

**File 2**: `.env.production`
```
NEXT_PUBLIC_BASE_PATH=/YOUR-ACTUAL-REPO-NAME
```

---

### Step 2: Install & Test (2 minutes)

```bash
# Install dependencies
npm install

# Test build locally
npm run build

# ✅ Success = you'll see "Route (pages)" messages
# ❌ Error = fix TypeScript/build errors before continuing
```

---

### Step 3: Push to GitHub (1 minute)

```bash
git add .
git commit -m "Deploy portfolio with fixes"
git push origin main
```

---

### Step 4: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **"GitHub Actions"**
5. Click **Save**

Done! The site will deploy automatically.

---

### Step 5: Wait & Verify (2-3 minutes)

1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for green checkmark ✅
4. Visit your site:
   ```
   https://YOUR-USERNAME.github.io/archit-portfolio/
   ```

---

## ✅ Quick Verification Checklist

After deployment, verify:

- [ ] Homepage loads
- [ ] Click "Download Resume" → Both PDFs download
- [ ] All navigation links work
- [ ] No errors in browser console (F12)

---

## 🐛 Quick Fixes

### Site shows 404?
- Wait 5 minutes, GitHub Pages needs time
- Check Settings → Pages shows "Your site is live at..."
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Resume downloads fail?
- Check: Repository name matches `next.config.js`
- Rebuild: `npm run build` and push again

### Styles broken?
- Clear browser cache
- Try incognito mode

---

## 📱 Test on Mobile

After deployment, test on your phone:
```
https://YOUR-USERNAME.github.io/archit-portfolio/
```

Should work perfectly on mobile devices!

---

## 🎯 Your Deployment URL

Replace with your actual username:
```
https://YOUR-USERNAME.github.io/archit-portfolio/
```

**Example**:
If your GitHub username is `john-doe`:
```
https://john-doe.github.io/archit-portfolio/
```

---

## 💡 Pro Tips

1. **Bookmark your deployed site** for quick access
2. **Share the link** on LinkedIn, resume, etc.
3. **Update regularly** - just push changes and they auto-deploy
4. **Check Actions tab** if something seems wrong

---

## 🆘 Need Help?

1. Read `DEPLOYMENT_FIXES.md` for detailed troubleshooting
2. Check GitHub Actions logs for error messages
3. Verify all steps in `DEPLOYMENT_CHECKLIST.md`

---

**That's it! Your portfolio should be live in ~5 minutes! 🎉**
