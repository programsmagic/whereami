import { Code, Database, Map, Workflow } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Code,
      title: 'Frontend Integration',
      description: 'Add our lightweight tracking script to your website. Works with React, Vue, vanilla JS, or any framework.',
      tech: 'React / JavaScript',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Workflow,
      title: 'Hybrid Detection',
      description: 'Automatically captures IP-based location. Optionally request GPS with user consent for precise tracking.',
      tech: 'IP API + Browser Geolocation',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Database,
      title: 'Data Storage',
      description: 'Securely store visitor data in your preferred database. Supports MongoDB, PostgreSQL, and more.',
      tech: 'MongoDB / PostgreSQL',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Map,
      title: 'Live Dashboard',
      description: 'Visualize all visitors on an interactive map in real-time. Analytics, filtering, and export capabilities.',
      tech: 'Leaflet.js / Google Maps',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-white to-gray-50 rounded-3xl my-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A complete solution for tracking website visitors with hybrid geolocation technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50 z-10">
                <span className="text-xl font-bold text-gradient">{index + 1}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                  {step.tech}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Architecture Diagram */}
      <div className="glass-effect rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Complete Architecture
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Code className="w-10 h-10 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Frontend</h4>
            <p className="text-sm text-gray-600">React / JavaScript</p>
            <p className="text-xs text-gray-500 mt-1">Visitor tracking</p>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 hidden md:block"></div>
            <div className="text-2xl text-gray-400 md:hidden">↓</div>
          </div>

          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Workflow className="w-10 h-10 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Backend API</h4>
            <p className="text-sm text-gray-600">FastAPI / Node.js</p>
            <p className="text-xs text-gray-500 mt-1">Data processing</p>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 hidden md:block"></div>
            <div className="text-2xl text-gray-400 md:hidden">↓</div>
          </div>

          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Database className="w-10 h-10 text-pink-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Database</h4>
            <p className="text-sm text-gray-600">MongoDB / PostgreSQL</p>
            <p className="text-xs text-gray-500 mt-1">Secure storage</p>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-green-400 hidden md:block"></div>
            <div className="text-2xl text-gray-400 md:hidden">↓</div>
          </div>

          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Map className="w-10 h-10 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Dashboard</h4>
            <p className="text-sm text-gray-600">Leaflet.js / Maps</p>
            <p className="text-xs text-gray-500 mt-1">Live visualization</p>
          </div>
        </div>
      </div>

      {/* Integration Code Example */}
      <div className="mt-12 glass-effect rounded-2xl p-8 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          🚀 Simple Integration
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Add this snippet to your website to start tracking visitors:
        </p>
        <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
          <code className="text-sm text-green-400 font-mono">
            <div className="text-gray-500">{'// React Example'}</div>
            <div className="text-purple-400">{'import'}</div>{' '}
            <div className="inline text-blue-300">{'{ useEffect }'}</div>{' '}
            <div className="inline text-purple-400">{'from'}</div>{' '}
            <div className="inline text-yellow-300">{"'react'"}</div>
            <br />
            <br />
            <div className="text-purple-400">{'function'}</div>{' '}
            <div className="inline text-blue-300">{'App'}</div>
            <div className="inline text-gray-300">{'() {'}</div>
            <br />
            {'  '}
            <div className="inline text-blue-300">{'useEffect'}</div>
            <div className="inline text-gray-300">{'(() => {'}</div>
            <br />
            {'    '}
            <div className="inline text-gray-500">{'// Automatic IP tracking'}</div>
            <br />
            {'    '}
            <div className="inline text-blue-300">{'trackVisitor'}</div>
            <div className="inline text-gray-300">{'()'}</div>
            <br />
            <br />
            {'    '}
            <div className="inline text-gray-500">{'// Optional: Request GPS'}</div>
            <br />
            {'    '}
            <div className="inline text-blue-300">{'requestGPS'}</div>
            <div className="inline text-gray-300">{'()'}</div>
            <br />
            {'  }, [])'}<br />
            <br />
            {'  '}
            <div className="inline text-purple-400">{'return'}</div>{' '}
            <div className="inline text-blue-300">{'<YourApp />'}</div>
            <br />
            {'}'}
          </code>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          ⚡ Less than 5KB • Works with any framework • GDPR compliant
        </p>
      </div>
    </div>
  )
}

export default HowItWorks

