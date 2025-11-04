import { Globe, Lock, Zap, BarChart3, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Accurate Geolocation',
    description: 'Get precise location data including city, region, country, and coordinates.',
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant results with sub-second response times. No waiting, no hassle.',
    color: 'yellow',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'We don\'t store your data. All lookups are anonymous and secure.',
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Detailed Information',
    description: 'ISP details, timezone, postal code, and more comprehensive data points.',
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'Enterprise Grade',
    description: 'Built on reliable infrastructure with 99.9% uptime guarantee.',
    color: 'blue',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile.',
    color: 'pink',
  },
]

const colorClasses = {
  primary: 'from-primary-50 to-primary-100 border-primary-200 text-primary-600',
  yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600',
  green: 'from-green-50 to-green-100 border-green-200 text-green-600',
  purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600',
  blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
  pink: 'from-pink-50 to-pink-100 border-pink-200 text-pink-600',
}

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to understand your network presence and location information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses].split('text-')[0]} border mb-4`}>
                <Icon className={`w-6 h-6 ${colorClasses[feature.color as keyof typeof colorClasses].split('border-')[1]}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="glass-effect rounded-3xl p-12 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Your IP information is displayed above. Bookmark this page for quick access anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#top"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My IP
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-gray-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

