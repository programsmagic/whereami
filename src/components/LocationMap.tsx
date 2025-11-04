import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Satellite } from 'lucide-react'

interface LocationMapProps {
  ipLocation: { lat: number; lng: number } | null
  gpsLocation: { lat: number; lng: number } | null
}

// Fix for default marker icons in React-Leaflet
const createCustomIcon = (color: string) => {
  const svgIcon = `
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path fill="${color}" d="M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.5 12.5 28.5S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z"/>
      <circle fill="white" cx="12.5" cy="12.5" r="5"/>
    </svg>
  `
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })
}

const ipIcon = createCustomIcon('#0ea5e9') // Primary blue
const gpsIcon = createCustomIcon('#10b981') // Green

const LocationMap = ({ ipLocation, gpsLocation }: LocationMapProps) => {
  // Determine map center and zoom
  const center = gpsLocation || ipLocation || { lat: 40.7128, lng: -74.0060 } // Default to NYC
  const zoom = gpsLocation ? 15 : ipLocation ? 10 : 4

  if (!ipLocation && !gpsLocation) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-effect rounded-3xl shadow-2xl p-8">
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Loading map...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="glass-effect rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-white/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Live Location Map</h2>
              <p className="text-sm text-gray-600">
                Visual representation of tracked locations
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              {ipLocation && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">IP-Based</span>
                </div>
              )}
              {gpsLocation && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">GPS-Based</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[500px] w-full relative">
          <MapContainer
            center={[center.lat, center.lng]}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* IP-Based Location Marker */}
            {ipLocation && (
              <>
                <Marker position={[ipLocation.lat, ipLocation.lng]} icon={ipIcon}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-primary-600 mb-1 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        IP-Based Location
                      </h3>
                      <p className="text-xs text-gray-600">
                        Lat: {ipLocation.lat.toFixed(4)}<br />
                        Lng: {ipLocation.lng.toFixed(4)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Accuracy: ~5-10 km radius
                      </p>
                    </div>
                  </Popup>
                </Marker>
                {/* Accuracy circle for IP location */}
                <Circle
                  center={[ipLocation.lat, ipLocation.lng]}
                  radius={7000}
                  pathOptions={{
                    color: '#0ea5e9',
                    fillColor: '#0ea5e9',
                    fillOpacity: 0.1,
                    weight: 2,
                  }}
                />
              </>
            )}

            {/* GPS-Based Location Marker */}
            {gpsLocation && (
              <>
                <Marker position={[gpsLocation.lat, gpsLocation.lng]} icon={gpsIcon}>
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-green-600 mb-1 flex items-center gap-2">
                        <Satellite className="w-4 h-4" />
                        GPS-Based Location
                      </h3>
                      <p className="text-xs text-gray-600">
                        Lat: {gpsLocation.lat.toFixed(6)}<br />
                        Lng: {gpsLocation.lng.toFixed(6)}
                      </p>
                      <p className="text-xs font-semibold text-green-700 mt-1">
                        ✓ Precise GPS coordinates
                      </p>
                    </div>
                  </Popup>
                </Marker>
                {/* Small accuracy circle for GPS location */}
                <Circle
                  center={[gpsLocation.lat, gpsLocation.lng]}
                  radius={50}
                  pathOptions={{
                    color: '#10b981',
                    fillColor: '#10b981',
                    fillOpacity: 0.2,
                    weight: 2,
                  }}
                />
              </>
            )}
          </MapContainer>
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-white/50 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center">
            {gpsLocation && ipLocation
              ? '🎯 Showing both IP-based (blue) and GPS-based (green) locations on the map'
              : ipLocation
              ? '📍 Showing IP-based location with approximate accuracy radius'
              : '🎯 Showing GPS-based precise location'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LocationMap

