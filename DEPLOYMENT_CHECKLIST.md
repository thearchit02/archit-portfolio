# Deployment Checklist

## Pre-Deployment

### Data Verification
- [ ] All personal information is accurate in `config/portfolio.config.ts`
- [ ] Email address is correct
- [ ] Phone number is correct
- [ ] LinkedIn URL is valid
- [ ] Portfolio/GitHub URL is correct
- [ ] All experience dates are accurate
- [ ] All skills listed are current
- [ ] All projects are up to date

### Configuration
- [ ] Updated `basePath` in `next.config.js` to match repository name
- [ ] Updated `assetPrefix` in `next.config.js` to match repository name
- [ ] Verified repository name matches GitHub repo

### Testing
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` without errors
- [ ] Portfolio displays correctly at http://localhost:3000
- [ ] All sections render properly
- [ ] Resume download button works
- [ ] 1-Page resume downloads correctly
- [ ] Detailed resume downloads correctly
- [ ] All links work (LinkedIn, email, phone)
- [ ] Tested on mobile viewport
- [ ] Tested on different browsers (Chrome, Firefox, Safari)

### Build Verification
- [ ] Ran `npm run build` without errors
- [ ] Ran `npm run export` successfully
- [ ] Checked `out` directory exists with HTML files

## GitHub Setup

### Repository
- [ ] Created GitHub repository
- [ ] Repository is public (required for free GitHub Pages)
- [ ] Repository name matches `basePath` in next.config.js
- [ ] Pushed code to `main` branch

### GitHub Pages Configuration
- [ ] Navigated to Settings → Pages
- [ ] Source set to "GitHub Actions"
- [ ] No custom domain configured (unless intentional)

### GitHub Actions
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] First workflow run triggered automatically
- [ ] Workflow completed successfully (green checkmark)
- [ ] No errors in workflow logs

## Post-Deployment

### Verification
- [ ] Accessed site at `https://USERNAME.github.io/repo-name/`
- [ ] Home page loads correctly
- [ ] All sections display properly
- [ ] Navigation works
- [ ] Resume download works on live site
- [ ] All styling renders correctly
- [ ] No console errors in browser DevTools
- [ ] Mobile view works properly

### Performance
- [ ] Page loads in under 3 seconds
- [ ] Images (if any) load properly
- [ ] No broken links
- [ ] Smooth scrolling works

### Content Review
- [ ] Professional summary reads well
- [ ] No typos or grammatical errors
- [ ] All dates are formatted consistently
- [ ] Skills are grouped logically
- [ ] Experience descriptions are clear
- [ ] Contact information is clickable

## Maintenance

### Regular Updates
- [ ] Review and update resume content quarterly
- [ ] Add new skills as you learn them
- [ ] Update experience with new projects
- [ ] Keep technologies list current
- [ ] Verify all links still work

### Version Control
- [ ] Commit changes with clear messages
- [ ] Push to GitHub regularly
- [ ] Keep local and remote in sync

## Troubleshooting

If site doesn't load:
1. Check GitHub Actions workflow status
2. Verify GitHub Pages is enabled
3. Confirm basePath matches repository name
4. Wait 5 minutes and refresh
5. Check browser console for errors

If resume doesn't download:
1. Open browser console
2. Check for JavaScript errors
3. Verify @react-pdf/renderer is installed
4. Test in different browser

If styles are broken:
1. Clear browser cache
2. Check if CSS files are in `out/_next/static/`
3. Verify Tailwind is configured correctly
4. Rebuild: `rm -rf .next out && npm run build && npm run export`

## Security

- [ ] No sensitive data in repository
- [ ] API keys (if any) are in environment variables
- [ ] Personal email/phone are ones you want public

## Sharing

- [ ] Added portfolio URL to LinkedIn profile
- [ ] Added to resume (if desired)
- [ ] Shared with professional network
- [ ] Consider custom domain (optional)

---

Date Completed: _______________
Next Review Date: _______________
