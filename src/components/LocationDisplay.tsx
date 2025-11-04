import { MapPin, Wifi, Clock, Map, RefreshCw, Copy, Check, Satellite, Target, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { IPInfo, GPSLocation, LocationPermission } from '../types'

interface LocationDisplayProps {
  ipInfo: IPInfo | null
  gpsLocation: GPSLocation | null
  locationPermission: LocationPermission
  loading: boolean
  error: string | null
  onRefresh: () => void
  onRequestGPS: () => void
}

const LocationDisplay = ({ ipInfo, gpsLocation, locationPermission, loading, error, onRefresh, onRequestGPS }: LocationDisplayProps) => {
  const [copiedPrimary, setCopiedPrimary] = useState(false)
  const [copiedIPv4, setCopiedIPv4] = useState(false)
  const [copiedIPv6, setCopiedIPv6] = useState(false)

  const handleCopy = (text: string, type: 'primary' | 'ipv4' | 'ipv6') => {
    navigator.clipboard.writeText(text)
    if (type === 'primary') {
      setCopiedPrimary(true)
      setTimeout(() => setCopiedPrimary(false), 2000)
    } else if (type === 'ipv4') {
      setCopiedIPv4(true)
      setTimeout(() => setCopiedIPv4(false), 2000)
    } else {
      setCopiedIPv6(true)
      setTimeout(() => setCopiedIPv6(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-effect rounded-3xl shadow-2xl p-8 text-center">
          <div className="text-red-500 mb-4">
            <p className="text-lg font-semibold">Error loading location information</p>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="glass-effect rounded-3xl shadow-2xl p-8 animate-fade-in">
        {/* Demo Banner */}
        <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-900">🎯 Live Tracking Demo</p>
              <p className="text-xs text-gray-600 mt-1">
                This shows how your product tracks visitors. IP-based location is automatic, GPS requires permission.
              </p>
            </div>
          </div>
        </div>

        {/* Main IP Display */}
        <div className="text-center mb-8 pb-8 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-500 mb-2">Primary IP Address</p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-5xl font-bold text-gradient">{ipInfo.ip}</h2>
            <button
              onClick={() => handleCopy(ipInfo.ip, 'primary')}
              className="p-2 hover:bg-primary-50 rounded-lg transition-colors group"
              title="Copy IP address"
            >
              {copiedPrimary ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
              )}
            </button>
          </div>

          {/* IPv4 and IPv6 Display */}
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {/* IPv4 Display */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl border-2 ${
              ipInfo.ipv4 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-gray-50 border-gray-200 opacity-60'
            }`}>
              <div>
                <p className={`text-xs font-semibold mb-1 ${
                  ipInfo.ipv4 ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  IPv4 Address
                </p>
                {ipInfo.ipv4 ? (
                  <p className="text-lg font-mono font-bold text-blue-900">{ipInfo.ipv4}</p>
                ) : (
                  <p className="text-sm text-gray-500 italic">Not available</p>
                )}
              </div>
              {ipInfo.ipv4 && (
                <button
                  onClick={() => handleCopy(ipInfo.ipv4!, 'ipv4')}
                  className="p-2 hover:bg-blue-100 rounded-lg transition-colors group"
                  title="Copy IPv4"
                >
                  {copiedIPv4 ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-blue-400 group-hover:text-blue-600" />
                  )}
                </button>
              )}
            </div>
            
            {/* IPv6 Display */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl border-2 ${
              ipInfo.ipv6 
                ? 'bg-purple-50 border-purple-200' 
                : 'bg-gray-50 border-gray-200 opacity-60'
            }`}>
              <div>
                <p className={`text-xs font-semibold mb-1 ${
                  ipInfo.ipv6 ? 'text-purple-600' : 'text-gray-500'
                }`}>
                  IPv6 Address
                </p>
                {ipInfo.ipv6 ? (
                  <p className="text-sm font-mono font-bold text-purple-900 break-all max-w-md">{ipInfo.ipv6}</p>
                ) : (
                  <p className="text-sm text-gray-500 italic">Not available</p>
                )}
              </div>
              {ipInfo.ipv6 && (
                <button
                  onClick={() => handleCopy(ipInfo.ipv6!, 'ipv6')}
                  className="p-2 hover:bg-purple-100 rounded-lg transition-colors group"
                  title="Copy IPv6"
                >
                  {copiedIPv6 ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-purple-400 group-hover:text-purple-600" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Info Message */}
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500">
              {ipInfo.ipv4 && ipInfo.ipv6 && '✓ Both IPv4 and IPv6 detected'}
              {ipInfo.ipv4 && !ipInfo.ipv6 && 'ℹ️ Using IPv4 connection (IPv6 not available from your ISP)'}
              {!ipInfo.ipv4 && ipInfo.ipv6 && 'ℹ️ Using IPv6 connection (IPv4 not available from your ISP)'}
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={onRefresh}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh IP Data
            </button>
          </div>
        </div>

        {/* Two Column Layout: IP-Based vs GPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* IP-Based Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-5 h-5 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">IP-Based Location</h3>
              <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                Active
              </span>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">City Location</h4>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {ipInfo.city}, {ipInfo.region}
              </p>
              <p className="text-sm text-gray-600">
                {ipInfo.country} ({ipInfo.countryCode})
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Postal: {ipInfo.postalCode || 'N/A'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Map className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Approximate Coordinates</h4>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Lat: {ipInfo.latitude.toFixed(4)}
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Lng: {ipInfo.longitude.toFixed(4)}
              </p>
              <p className="text-xs text-gray-500">Accuracy: ~5-10 km</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Timezone & ISP</h4>
              </div>
              <p className="text-lg font-bold text-gray-900 mb-1">{ipInfo.timezone}</p>
              <p className="text-sm text-gray-600 break-words">{ipInfo.isp}</p>
            </div>
          </div>

          {/* GPS-Based Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">GPS-Based Location</h3>
              {gpsLocation ? (
                <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Active
                </span>
              ) : (
                <span className="ml-auto px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                  Not Enabled
                </span>
              )}
            </div>

            {!gpsLocation && locationPermission === 'prompt' && (
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-dashed border-green-200 text-center">
                <Satellite className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Enable Precise Location
                </h4>
                <p className="text-sm text-gray-600 mb-6">
                  Get your exact GPS coordinates with 5-20 meter accuracy. Your browser will ask for permission.
                </p>
                <button
                  onClick={onRequestGPS}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                  <Target className="w-5 h-5" />
                  Enable GPS Tracking
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  🔒 Privacy-compliant • User consent required
                </p>
              </div>
            )}

            {locationPermission === 'checking' && (
              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl border border-yellow-200 text-center">
                <div className="animate-pulse">
                  <Satellite className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <p className="text-sm font-semibold text-gray-900">Requesting Permission...</p>
                  <p className="text-xs text-gray-600 mt-2">Please allow location access in your browser</p>
                </div>
              </div>
            )}

            {locationPermission === 'denied' && (
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-200 text-center">
                <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Permission Denied
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  GPS tracking requires location permission. You can enable it in your browser settings.
                </p>
                <p className="text-xs text-gray-500">
                  Don't worry - IP-based location still works!
                </p>
              </div>
            )}

            {gpsLocation && (
              <>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Precise Coordinates</h4>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Lat: {gpsLocation.latitude.toFixed(6)}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Lng: {gpsLocation.longitude.toFixed(6)}
                  </p>
                  <p className="text-xs text-green-700 font-medium">
                    ✓ Accuracy: ±{gpsLocation.accuracy.toFixed(0)} meters
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${gpsLocation.latitude},${gpsLocation.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    View Exact Location on Map →
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Satellite className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">GPS Details</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Altitude:</span>
                      <span className="font-semibold text-gray-900">
                        {gpsLocation.altitude ? `${gpsLocation.altitude.toFixed(0)}m` : 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Speed:</span>
                      <span className="font-semibold text-gray-900">
                        {gpsLocation.speed ? `${gpsLocation.speed.toFixed(1)} m/s` : 'Stationary'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Heading:</span>
                      <span className="font-semibold text-gray-900">
                        {gpsLocation.heading ? `${gpsLocation.heading.toFixed(0)}°` : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                  <p className="text-xs text-green-800 font-medium text-center">
                    ✓ GPS tracking active • Real-time updates enabled
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Comparison Callout */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
            🎯 Hybrid Tracking Advantage
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/70 p-4 rounded-lg">
              <p className="font-semibold text-primary-600 mb-2">📍 IP-Based</p>
              <ul className="space-y-1 text-gray-700 text-xs">
                <li>✓ Instant, no permission needed</li>
                <li>✓ Works for all visitors</li>
                <li>✓ City-level accuracy</li>
                <li>✓ ISP and network info</li>
              </ul>
            </div>
            <div className="bg-white/70 p-4 rounded-lg">
              <p className="font-semibold text-green-600 mb-2">🎯 GPS-Based</p>
              <ul className="space-y-1 text-gray-700 text-xs">
                <li>✓ Meter-level precision</li>
                <li>✓ Real-time movement tracking</li>
                <li>✓ Altitude & speed data</li>
                <li>✓ Perfect for delivery/logistics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationDisplay

