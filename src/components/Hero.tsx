import { MapPin, Zap, Shield, Radio } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        {/* Logo and Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-white/20">
            <MapPin className="w-8 h-8 text-primary-600 animate-pulse-slow" />
            <span className="text-2xl font-bold text-gradient">Where Am I</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
          Website Visitor
          <span className="block text-gradient mt-2">Live Location Tracking</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
          Track your website visitors in real-time with hybrid IP-based and GPS geolocation. 
          Get city-level data instantly + precise coordinates with user consent.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200">
            <Radio className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Real-Time Tracking</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200">
            <Zap className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Hybrid Approach</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-primary-200">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Privacy Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

