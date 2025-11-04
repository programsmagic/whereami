# ⚡ Quick Start Guide

Get your **Website Visitor Location Tracking** demo running in under 2 minutes!

## 🏃 Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

That's it! Your landing page is now running locally. 🎉

## 📦 What Just Happened?

- ✅ Installed React, TypeScript, Tailwind CSS, Leaflet.js and dependencies
- ✅ Started a hot-reload development server
- ✅ Your IP and location info displays automatically
- ✅ GPS tracking button is ready for you to test

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server at localhost:5173

# Production Build
npm run build        # Build for production
npm run preview      # Preview production build locally

# Deployment
npm run deploy       # Deploy to GitHub Pages
```

## 🚀 Deploy to GitHub Pages

### Quick Deploy (3 steps)

1. **Update `vite.config.ts`** - Set your repo name:
```typescript
base: '/your-repo-name/', // e.g., '/tools/'
```

2. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Done! Your site will be live in 2-5 minutes

**Your site URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO/`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🎨 Customize Your Site

### Change Colors
Edit `tailwind.config.js` - Update the `primary` color palette:
```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Main brand color
    600: '#0284c7', // Hover states
    // ... etc
  }
}
```

### Modify Content
- **Hero section:** `src/components/Hero.tsx`
- **Location Display:** `src/components/LocationDisplay.tsx`
- **Map Component:** `src/components/LocationMap.tsx`
- **How It Works:** `src/components/HowItWorks.tsx`
- **Features:** `src/components/Features.tsx`
- **Footer:** `src/components/Footer.tsx`

### Test GPS Tracking
1. Click the **"Enable GPS Tracking"** button
2. Allow location access when your browser asks
3. See precise coordinates appear (right panel)
4. Watch both locations appear on the map

### Change API Provider
Edit `src/App.tsx` - Update the `fetchIPInfo` function:
```typescript
const response = await fetch('YOUR_API_URL')
// Update the data mapping as needed
```

## 📱 Test on Mobile

Your local dev server is accessible on your network:

1. Start dev server: `npm run dev`
2. Find your local IP (e.g., 192.168.1.5)
3. On mobile browser: `http://192.168.1.5:5173`

## ✅ Verification Checklist

- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] Dev server runs without errors
- [ ] Page loads and displays your IP automatically
- [ ] IP-based location shows in left panel
- [ ] "Enable GPS Tracking" button appears
- [ ] Clicking GPS button triggers browser permission
- [ ] GPS location appears in right panel when allowed
- [ ] Map displays with markers
- [ ] All sections render correctly
- [ ] Responsive on mobile (test with browser dev tools)
- [ ] No console errors

## ❓ Troubleshooting

### Port 5173 already in use?
```bash
# Vite will automatically try the next available port
# Or kill the process using port 5173
```

### API not loading?
- Check your internet connection
- The app uses `ipapi.co` which has a free tier limit of 1000/day
- Try refreshing the page

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🎯 Next Steps

1. ✅ Get it running locally (you're here!)
2. 📝 Customize the content and colors
3. 🧪 Test thoroughly
4. 🚀 Deploy to GitHub Pages
5. 📢 Share your site!

## 💡 Pro Tips

- **Hot reload** - Save any file and see changes instantly
- **TypeScript** - Get autocomplete and type checking
- **Tailwind** - Use utility classes for rapid styling
- **Icons** - Browse more at [lucide.dev](https://lucide.dev)

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

---

Need help? Check [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md)

