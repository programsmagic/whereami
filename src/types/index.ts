export interface IPInfo {
  ip: string
  ipv4: string | null
  ipv6: string | null
  city: string
  region: string
  country: string
  countryCode: string
  latitude: number
  longitude: number
  timezone: string
  isp: string
  postalCode: string
  continentCode: string
}

export interface GPSLocation {
  latitude: number
  longitude: number
  accuracy: number
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  speed: number | null
  timestamp: number
}

export type LocationPermission = 'prompt' | 'granted' | 'denied' | 'checking'

