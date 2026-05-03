'use client'

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false })

export default function MapPage() {
  const [mapType, setMapType] = useState('all')

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-eco text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Environmental Map</h1>
            <p className="opacity-90">Real-time view of Atyrau's environmental hotspots and green zones</p>
          </div>
        </section>

        {/* Map Controls */}
        <section className="bg-eco-light dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-2 flex-wrap">
              {[
                { value: 'all', label: 'All' },
                { value: 'hotspots', label: '🔥 Hotspots' },
                { value: 'greenZones', label: '🌱 Green Zones' },
                { value: 'projects', label: '🛠️ Active Projects' },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setMapType(btn.value)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    mapType === btn.value
                      ? 'bg-eco-green text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-96 md:h-screen rounded-lg overflow-hidden shadow-lg border-4 border-gray-200 dark:border-gray-700">
              <MapComponent mapType={mapType} />
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-8 md:py-12 bg-eco-light dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Map Legend</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { color: 'red', label: 'Hotspots - Areas needing immediate attention' },
                { color: 'green', label: 'Green Zones - Completed projects' },
                { color: 'blue', label: 'Active Projects - Ongoing initiatives' },
                { color: 'yellow', label: 'Educational Sites - Learning opportunities' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full bg-${item.color}-500`}
                    style={{
                      backgroundColor:
                        item.color === 'red'
                          ? '#ef4444'
                          : item.color === 'green'
                          ? '#10b981'
                          : item.color === 'blue'
                          ? '#3b82f6'
                          : '#eab308',
                    }}
                  ></div>
                  <p className="font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
