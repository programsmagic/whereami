# IPLookup Pro - IP Geolocation Landing Page

A beautiful, modern landing page that displays your IP address along with comprehensive geolocation information. Built with React, TypeScript, Tailwind CSS, and Vite.

## ✨ Features

- 🌍 **Real-time IP Detection** - Automatically detects and displays visitor's IP address
- 📍 **Geolocation Data** - Shows city, region, country, coordinates, timezone
- 🔌 **ISP Information** - Displays Internet Service Provider details
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Sub-second response times
- 🔒 **Privacy Focused** - No data storage, all lookups are anonymous
- 🎯 **Production Ready** - TypeScript, ESLint, optimized build

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tools.git
cd tools
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🌐 Deploy to GitHub Pages

1. Update the `base` in `vite.config.ts` to match your GitHub repository name:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // e.g., '/tools/'
})
```

2. Deploy:
```bash
npm run deploy
```

This will build and deploy your site to GitHub Pages.

## 📁 Project Structure

```
tools/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with branding
│   │   ├── IPDisplay.tsx     # Main IP info display component
│   │   ├── Features.tsx      # Features section
│   │   └── Footer.tsx        # Footer component
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── App.tsx               # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ipapi.co API** - IP geolocation service (free tier: 1000 requests/day)

## 🔧 Configuration

### Change IP Geolocation API

The app uses [ipapi.co](https://ipapi.co/) by default. To use a different provider:

1. Open `src/App.tsx`
2. Update the `fetchIPInfo` function with your preferred API
3. Update the `IPInfo` interface in `src/types/index.ts` if needed

### Customize Styling

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Animations**: Modify animation settings in `tailwind.config.js`
- **Layout**: Edit individual components in `src/components/`

## 📝 Environment Variables

No environment variables required! The app uses a free public API.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- IP geolocation data provided by [ipapi.co](https://ipapi.co/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

