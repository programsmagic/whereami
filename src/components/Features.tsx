import { MapPin, Lock, Zap, BarChart3, Shield, Users, Database, Globe } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Hybrid Geolocation',
    description: 'IP-based tracking works instantly for all visitors. GPS tracking provides meter-level precision with consent.',
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Track visitor movements live as they happen. Perfect for delivery tracking and fleet management.',
    color: 'yellow',
  },
  {
    icon: Shield,
    title: 'Privacy Compliant',
    description: 'GDPR and privacy-law compliant. GPS tracking requires explicit user consent.',
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Visualize visitor data on interactive maps. Filter, export, and analyze location patterns.',
    color: 'purple',
  },
  {
    icon: Database,
    title: 'Secure Storage',
    description: 'Store visitor data securely in MongoDB, PostgreSQL, or your preferred database.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Lead Intelligence',
    description: 'Identify visitor locations for targeted marketing, lead scoring, and audience insights.',
    color: 'pink',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, role-based access control, and audit logs for compliance.',
    color: 'red',
  },
  {
    icon: Globe,
    title: 'Easy Integration',
    description: 'Works with React, Vue, Angular, vanilla JS. Simple API, comprehensive documentation.',
    color: 'indigo',
  },
]

const colorClasses = {
  primary: 'from-primary-50 to-primary-100 border-primary-200 text-primary-600',
  yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600',
  green: 'from-green-50 to-green-100 border-green-200 text-green-600',
  purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600',
  blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
  pink: 'from-pink-50 to-pink-100 border-pink-200 text-pink-600',
  red: 'from-red-50 to-red-100 border-red-200 text-red-600',
  indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600',
}

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Enterprise Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to track, analyze, and act on visitor location data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Use Cases Section */}
      <div className="mt-20">
        <div className="glass-effect rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perfect For These Use Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">🚚 Delivery & Logistics</h4>
              <p className="text-sm text-gray-600">
                Track delivery drivers in real-time, optimize routes, and provide customers with live ETAs.
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">📊 Marketing Analytics</h4>
              <p className="text-sm text-gray-600">
                Understand where your visitors come from. Target ads by location and measure campaign performance.
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">🏪 Retail & E-commerce</h4>
              <p className="text-sm text-gray-600">
                Show location-based content, calculate shipping costs, and prevent fraud with geolocation verification.
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">🎯 Lead Generation</h4>
              <p className="text-sm text-gray-600">
                Score leads based on location, route to local sales teams, and personalize outreach strategies.
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">🔒 Security & Fraud</h4>
              <p className="text-sm text-gray-600">
                Detect suspicious logins from unusual locations, prevent account takeovers, and enforce geo-restrictions.
              </p>
            </div>
            <div className="bg-white/60 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">📱 Field Services</h4>
              <p className="text-sm text-gray-600">
                Monitor field technicians, dispatch closest workers, and verify on-site attendance automatically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="glass-effect rounded-3xl p-12 max-w-3xl mx-auto border-2 border-primary-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Track Your Visitors?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            This is a working demo! See how IP and GPS tracking work together in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#top"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Try Live Demo
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-gray-200"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

