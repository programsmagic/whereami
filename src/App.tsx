import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import LocationDisplay from './components/LocationDisplay'
import LocationMap from './components/LocationMap'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import { IPInfo, GPSLocation, LocationPermission } from './types'

function App() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null)
  const [gpsLocation, setGpsLocation] = useState<GPSLocation | null>(null)
  const [locationPermission, setLocationPermission] = useState<LocationPermission>('prompt')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchIPInfo()
    checkLocationPermission()
  }, [])

  const fetchIPInfo = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Get primary IP info from ipapi.co
      const response = await fetch('https://ipapi.co/json/')
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP information')
      }
      
      const data = await response.json()
      const primaryIp = data.ip
      
      // Determine IP type and try to fetch both versions
      let ipv4 = null
      let ipv6 = null
      
      // Check if primary IP is IPv4 or IPv6
      const isIPv4Primary = primaryIp.includes('.')
      const isIPv6Primary = primaryIp.includes(':')
      
      if (isIPv4Primary) {
        ipv4 = primaryIp
        // Try to get IPv6 if available
        try {
          const ipv6Response = await fetch('https://api6.ipify.org?format=json')
          if (ipv6Response.ok) {
            const ipv6Data = await ipv6Response.json()
            if (ipv6Data.ip && ipv6Data.ip.includes(':')) {
              ipv6 = ipv6Data.ip
            }
          }
        } catch (e) {
          console.log('IPv6 not available')
        }
      } else if (isIPv6Primary) {
        ipv6 = primaryIp
        // Try to get IPv4 if available
        try {
          const ipv4Response = await fetch('https://api64.ipify.org?format=json')
          if (ipv4Response.ok) {
            const ipv4Data = await ipv4Response.json()
            if (ipv4Data.ip && ipv4Data.ip.includes('.')) {
              ipv4 = ipv4Data.ip
            }
          }
        } catch (e) {
          console.log('IPv4 not available')
        }
      }
      
      setIpInfo({
        ip: primaryIp,
        ipv4: ipv4,
        ipv6: ipv6,
        city: data.city,
        region: data.region,
        country: data.country_name,
        countryCode: data.country_code,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        isp: data.org,
        postalCode: data.postal,
        continentCode: data.continent_code,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const checkLocationPermission = async () => {
    if ('permissions' in navigator) {
      try {
        const result = await navigator.permissions.query({ name: 'geolocation' })
        setLocationPermission(result.state as LocationPermission)
        
        result.addEventListener('change', () => {
          setLocationPermission(result.state as LocationPermission)
        })
      } catch (err) {
        console.log('Permission API not supported')
      }
    }
  }

  const requestGPSLocation = () => {
    if ('geolocation' in navigator) {
      setLocationPermission('checking')
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGpsLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            speed: position.coords.speed,
            timestamp: position.timestamp,
          })
          setLocationPermission('granted')
        },
        (err) => {
          console.error('GPS location error:', err)
          setLocationPermission('denied')
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      )
    } else {
      alert('Geolocation is not supported by your browser')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Hero />
      <LocationDisplay 
        ipInfo={ipInfo} 
        gpsLocation={gpsLocation}
        locationPermission={locationPermission}
        loading={loading} 
        error={error} 
        onRefresh={fetchIPInfo}
        onRequestGPS={requestGPSLocation}
      />
      <LocationMap 
        ipLocation={ipInfo ? { lat: ipInfo.latitude, lng: ipInfo.longitude } : null}
        gpsLocation={gpsLocation ? { lat: gpsLocation.latitude, lng: gpsLocation.longitude } : null}
      />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  )
}

export default App

