#!/bin/bash

# Pre-Deployment Verification Script
# Run this before deploying to GitHub Pages

echo "🔍 Checking deployment configuration..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Check 1: Node.js version
echo "1. Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
    echo -e "   ${GREEN}✓${NC} Node.js version: $(node -v)"
else
    echo -e "   ${RED}✗${NC} Node.js version too old: $(node -v)"
    echo "     Required: Node.js 18 or higher"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 2: package.json has export script
echo "2. Checking package.json scripts..."
if grep -q '"export"' package.json; then
    echo -e "   ${GREEN}✓${NC} Export script exists"
else
    echo -e "   ${RED}✗${NC} Export script missing"
    echo "     Run: Add '\"export\": \"next build\"' to scripts section"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 3: .env.production exists
echo "3. Checking environment files..."
if [ -f ".env.production" ]; then
    echo -e "   ${GREEN}✓${NC} .env.production exists"
    
    # Check if it contains NEXT_PUBLIC_BASE_PATH
    if grep -q "NEXT_PUBLIC_BASE_PATH" .env.production; then
        BASE_PATH=$(grep "NEXT_PUBLIC_BASE_PATH" .env.production | cut -d'=' -f2)
        echo -e "   ${GREEN}✓${NC} NEXT_PUBLIC_BASE_PATH set to: $BASE_PATH"
    else
        echo -e "   ${RED}✗${NC} NEXT_PUBLIC_BASE_PATH not found in .env.production"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "   ${RED}✗${NC} .env.production missing"
    echo "     Create file with: NEXT_PUBLIC_BASE_PATH=/archit-portfolio"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 4: next.config.js configuration
echo "4. Checking next.config.js..."
if [ -f "next.config.js" ]; then
    echo -e "   ${GREEN}✓${NC} next.config.js exists"
    
    # Check for static export
    if grep -q "output: 'export'" next.config.js; then
        echo -e "   ${GREEN}✓${NC} Static export configured"
    else
        echo -e "   ${RED}✗${NC} Static export not configured"
        ERRORS=$((ERRORS + 1))
    fi
    
    # Check for basePath
    if grep -q "basePath:" next.config.js; then
        echo -e "   ${GREEN}✓${NC} basePath configured"
    else
        echo -e "   ${YELLOW}⚠${NC} basePath not found (might be intentional)"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "   ${RED}✗${NC} next.config.js missing"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 5: GitHub Actions workflow
echo "5. Checking GitHub Actions workflow..."
if [ -f ".github/workflows/deploy.yml" ]; then
    echo -e "   ${GREEN}✓${NC} deploy.yml exists"
    
    if grep -q "actions/deploy-pages@v4" .github/workflows/deploy.yml; then
        echo -e "   ${GREEN}✓${NC} Using correct deploy action"
    else
        echo -e "   ${YELLOW}⚠${NC} Deploy action might be outdated"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "   ${RED}✗${NC} GitHub Actions workflow missing"
    echo "     Expected: .github/workflows/deploy.yml"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 6: Resume PDFs
echo "6. Checking resume files..."
if [ -f "public/resume/1PageResume/ArchitVerma_Resume.pdf" ]; then
    echo -e "   ${GREEN}✓${NC} 1-Page resume found"
else
    echo -e "   ${RED}✗${NC} 1-Page resume missing"
    ERRORS=$((ERRORS + 1))
fi

if [ -f "public/resume/DetailedResume/ArchitVerma_DetailedResume.pdf" ]; then
    echo -e "   ${GREEN}✓${NC} Detailed resume found"
else
    echo -e "   ${RED}✗${NC} Detailed resume missing"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 7: Dependencies installed
echo "7. Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "   ${GREEN}✓${NC} node_modules exists"
else
    echo -e "   ${YELLOW}⚠${NC} node_modules not found"
    echo "     Run: npm install"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check 8: TypeScript configuration
echo "8. Checking TypeScript..."
if [ -f "tsconfig.json" ]; then
    echo -e "   ${GREEN}✓${NC} tsconfig.json exists"
else
    echo -e "   ${RED}✗${NC} tsconfig.json missing"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 9: Repository name consistency
echo "9. Checking repository name consistency..."
REPO_NAME_CONFIG=$(grep "const repoName" next.config.js | sed "s/.*['\"]//;s/['\"].*//" | head -1)
BASE_PATH_ENV=$(grep "NEXT_PUBLIC_BASE_PATH" .env.production 2>/dev/null | cut -d'=' -f2 | sed 's/\///' | head -1)

if [ -z "$REPO_NAME_CONFIG" ]; then
    echo -e "   ${RED}✗${NC} Cannot find repoName in next.config.js"
    ERRORS=$((ERRORS + 1))
elif [ -z "$BASE_PATH_ENV" ]; then
    echo -e "   ${YELLOW}⚠${NC} Cannot find basePath in .env.production"
    WARNINGS=$((WARNINGS + 1))
elif [ "$REPO_NAME_CONFIG" = "$BASE_PATH_ENV" ]; then
    echo -e "   ${GREEN}✓${NC} Repository name consistent: $REPO_NAME_CONFIG"
else
    echo -e "   ${RED}✗${NC} Repository name mismatch!"
    echo "     next.config.js: $REPO_NAME_CONFIG"
    echo "     .env.production: $BASE_PATH_ENV"
    echo "     These must match!"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Summary
echo "═══════════════════════════════════════════════════════"
echo "                    SUMMARY"
echo "═══════════════════════════════════════════════════════"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "Your project is ready for deployment! 🚀"
    echo ""
    echo "Next steps:"
    echo "  1. Test build: npm run build"
    echo "  2. Push to GitHub: git push origin main"
    echo "  3. Enable GitHub Pages (Settings → Pages → GitHub Actions)"
    echo ""
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ $WARNINGS warning(s)${NC}"
    echo ""
    echo "You can proceed, but review warnings above."
    echo ""
    exit 0
else
    echo -e "${RED}✗ $ERRORS error(s)${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠ $WARNINGS warning(s)${NC}"
    fi
    echo ""
    echo "Please fix the errors above before deploying."
    echo ""
    echo "See DEPLOYMENT_FIXES.md for detailed instructions."
    echo ""
    exit 1
fi
