import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import IPDisplay from './components/IPDisplay'
import Footer from './components/Footer'
import { IPInfo } from './types'

function App() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchIPInfo()
  }, [])

  const fetchIPInfo = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Using ipapi.co - free tier allows 1000 requests per day
      const response = await fetch('https://ipapi.co/json/')
      
      if (!response.ok) {
        throw new Error('Failed to fetch IP information')
      }
      
      const data = await response.json()
      
      setIpInfo({
        ip: data.ip,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Hero />
      <IPDisplay ipInfo={ipInfo} loading={loading} error={error} onRefresh={fetchIPInfo} />
      <Features />
      <Footer />
    </div>
  )
}

export default App

