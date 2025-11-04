# 🚀 Deployment Guide for GitHub Pages

This guide will help you deploy your IP Geolocation landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js 16+ installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "tools", "ip-lookup", etc.)
4. Make it Public (required for free GitHub Pages)
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

### 2. Update Vite Configuration

Open `vite.config.ts` and update the `base` property to match your repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
```

**Example:** If your repo is named "ip-lookup", use:
```typescript
base: '/ip-lookup/',
```

### 3. Initialize Git and Push to GitHub

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: IP Geolocation landing page"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 4. Configure GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that will automatically deploy when you push to main.

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Click on "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically run on the next push

#### Option B: Manual Deployment with gh-pages

If you prefer manual deployment:

1. Install dependencies (if not already done):
```bash
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project
- Push the built files to the `gh-pages` branch
- GitHub will automatically serve from this branch

3. Configure GitHub Pages settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`, folder: `/ (root)`
   - Click Save

### 5. Access Your Live Site

After deployment (usually 2-5 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:** 
- Username: `johndoe`
- Repo: `ip-lookup`
- URL: `https://johndoe.github.io/ip-lookup/`

## 🔄 Updating Your Site

After making changes:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main

# If using manual deployment
npm run deploy
```

If using GitHub Actions, the site will automatically rebuild and deploy when you push to main.

## ⚠️ Common Issues and Solutions

### Issue: Site shows 404 or blank page

**Solution:** Check that the `base` in `vite.config.ts` matches your repository name exactly:
```typescript
base: '/your-repo-name/', // Must include leading and trailing slashes
```

### Issue: CSS/JS files not loading

**Solution:** This is usually due to incorrect `base` path. Verify:
1. Repository name matches the `base` value
2. Both leading and trailing slashes are present

### Issue: GitHub Actions workflow failing

**Solution:** 
1. Ensure GitHub Pages is enabled in repository settings
2. Check that Pages deployment source is set to "GitHub Actions"
3. Verify workflow file is at `.github/workflows/deploy.yml`

### Issue: API rate limit reached

**Solution:** The free tier of ipapi.co allows 1000 requests/day. For higher traffic:
- Consider using a different API provider
- Implement caching strategies
- Upgrade to a paid plan

## 🎯 Best Practices

1. **Always test locally** before deploying:
```bash
npm run dev      # Development server
npm run build    # Test production build
npm run preview  # Preview production build
```

2. **Keep dependencies updated**:
```bash
npm update
```

3. **Monitor your API usage** - ipapi.co free tier has limits

4. **Use environment variables** for sensitive data (though not needed for this project)

## 🔒 Security Notes

- This site only makes client-side API calls
- No sensitive data is stored or transmitted
- The IP geolocation API is called directly from the user's browser
- No backend or database required

## 📊 Performance Tips

1. The built site is already optimized by Vite
2. Images are SVG for minimal size
3. Tailwind CSS is purged of unused styles
4. Code splitting is handled automatically

## 🆘 Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Open an issue in the repository

---

Happy deploying! 🎉

