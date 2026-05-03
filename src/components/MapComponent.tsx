'use client'

import { useEffect, useRef } from 'react'

interface MapComponentProps {
  mapType: string
}

export default function MapComponent({ mapType }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Placeholder map - in production would use Leaflet or similar
    if (mapContainer.current) {
      mapContainer.current.innerHTML = `
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif;">
          <div style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 16px;">🗺️</div>
            <h2 style="font-size: 24px; margin-bottom: 8px;">Atyrau Environmental Map</h2>
            <p>Interactive map showing:</p>
            <ul style="list-style: none; margin-top: 16px;">
              <li>🔴 High-priority cleanup areas (Ural River, Industrial zones)</li>
              <li>🟢 Completed green projects (Tree zones, cleaned areas)</li>
              <li>🔵 Active volunteer projects</li>
              <li>📍 Educational sites and workshops</li>
            </ul>
            <p style="margin-top: 24px; font-size: 14px; opacity: 0.9;">
              Filter by: ${mapType === 'all' ? 'All Areas' : mapType === 'hotspots' ? 'Priority Hotspots' : mapType === 'greenZones' ? 'Green Zones' : 'Active Projects'}
            </p>
          </div>
        </div>
      `
    }
  }, [mapType])

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
}
