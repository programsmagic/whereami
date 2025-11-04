import { MapPin, Wifi, Clock, Map, RefreshCw, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { IPInfo } from '../types'

interface IPDisplayProps {
  ipInfo: IPInfo | null
  loading: boolean
  error: string | null
  onRefresh: () => void
}

const IPDisplay = ({ ipInfo, loading, error, onRefresh }: IPDisplayProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (ipInfo) {
      navigator.clipboard.writeText(ipInfo.ip)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-effect rounded-3xl shadow-2xl p-8 animate-pulse">
          <div className="h-32 bg-gray-200 rounded-lg mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-effect rounded-3xl shadow-2xl p-8 text-center">
          <div className="text-red-500 mb-4">
            <p className="text-lg font-semibold">Error loading IP information</p>
            <p className="text-sm text-gray-600 mt-2">{error}</p>
          </div>
          <button
            onClick={onRefresh}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!ipInfo) return null

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="glass-effect rounded-3xl shadow-2xl p-8 animate-fade-in">
        {/* Main IP Display */}
        <div className="text-center mb-8 pb-8 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-500 mb-2">Your IP Address</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-5xl font-bold text-gradient">{ipInfo.ip}</h2>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-primary-50 rounded-lg transition-colors group"
              title="Copy IP address"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
              )}
            </button>
          </div>
          <button
            onClick={onRefresh}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <MapPin className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Location</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {ipInfo.city}, {ipInfo.region}
            </p>
            <p className="text-sm text-gray-600">
              {ipInfo.country} ({ipInfo.countryCode})
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Postal Code: {ipInfo.postalCode || 'N/A'}
            </p>
          </div>

          {/* Coordinates */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Map className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Coordinates</h3>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-1">
              Latitude: {ipInfo.latitude.toFixed(4)}
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Longitude: {ipInfo.longitude.toFixed(4)}
            </p>
            <a
              href={`https://www.google.com/maps?q=${ipInfo.latitude},${ipInfo.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View on Map →
            </a>
          </div>

          {/* Timezone */}
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Timezone</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{ipInfo.timezone}</p>
            <p className="text-sm text-gray-600">
              Current time in your location
            </p>
          </div>

          {/* ISP */}
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Wifi className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">ISP</h3>
            </div>
            <p className="text-lg font-semibold text-gray-900 break-words">
              {ipInfo.isp}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Internet Service Provider
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IPDisplay

