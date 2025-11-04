import { Github, Twitter, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary-400" />
              <span className="text-xl font-bold text-white">LiveTrack Pro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Enterprise-grade website visitor location tracking. Hybrid IP-based and GPS geolocation with real-time analytics.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Integration Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy & GDPR
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Built with React, TypeScript, Tailwind CSS & Leaflet.js
            </p>
            <p className="text-xs text-gray-500">
              🔒 Privacy-compliant • Enterprise-ready • Easy integration
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {currentYear} LiveTrack Pro. All rights reserved.</p>
          <p className="text-gray-500 mt-2">
            Geolocation powered by{' '}
            <a
              href="https://ipapi.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              ipapi.co
            </a>
            {' • '}
            Maps by{' '}
            <a
              href="https://leafletjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              Leaflet.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

