'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OpportunityCard from '@/components/OpportunityCard'
import { Filter } from 'lucide-react'

const opportunities = [
  {
    id: 1,
    title: 'Ural River Cleanup',
    description: 'Help remove plastic and debris from the Ural River',
    location: 'North Bank',
    urgency: 'High',
    skillLevel: 'Beginner',
    credits: 5,
    date: 'May 15, 2026',
    participants: 45,
  },
  {
    id: 2,
    title: 'Green Neighborhood Initiative',
    description: 'Plant native trees in residential areas',
    location: 'Central District',
    urgency: 'Medium',
    skillLevel: 'Intermediate',
    credits: 8,
    date: 'May 20, 2026',
    participants: 28,
  },
  {
    id: 3,
    title: 'Soil Salinity Study',
    description: 'Assist in collecting and analyzing soil samples',
    location: 'Agricultural Zone',
    urgency: 'High',
    skillLevel: 'Advanced',
    credits: 12,
    date: 'May 18, 2026',
    participants: 15,
  },
  {
    id: 4,
    title: 'Air Quality Monitoring',
    description: 'Deploy and maintain air quality sensors',
    location: 'Multiple Locations',
    urgency: 'Medium',
    skillLevel: 'Intermediate',
    credits: 10,
    date: 'May 22, 2026',
    participants: 22,
  },
  {
    id: 5,
    title: 'Water Conservation Workshop',
    description: 'Lead community education on water saving',
    location: 'Community Centers',
    urgency: 'Low',
    skillLevel: 'Beginner',
    credits: 6,
    date: 'May 25, 2026',
    participants: 30,
  },
  {
    id: 6,
    title: 'Sturgeon Habitat Restoration',
    description: 'Protect sturgeon spawning grounds in the Ural',
    location: 'River Protection Zone',
    urgency: 'High',
    skillLevel: 'Advanced',
    credits: 15,
    date: 'May 28, 2026',
    participants: 12,
  },
]

export default function OpportunitiesPage() {
  const [filters, setFilters] = useState({
    urgency: 'All',
    location: 'All',
    skillLevel: 'All',
  })

  const filteredOps = opportunities.filter((op) => {
    if (filters.urgency !== 'All' && op.urgency !== filters.urgency) return false
    if (filters.location !== 'All' && op.location !== filters.location) return false
    if (filters.skillLevel !== 'All' && op.skillLevel !== filters.skillLevel) return false
    return true
  })

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-eco text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer Opportunities</h1>
            <p className="text-lg opacity-90">Find projects that match your passion and schedule</p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-eco-light dark:bg-gray-800 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={20} />
              <span className="font-semibold">Filter By:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                value={filters.urgency}
                onChange={(e) => setFilters({ ...filters, urgency: e.target.value })}
              >
                <option>All Urgencies</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <select
                className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option>All Locations</option>
                <option>North Bank</option>
                <option>Central District</option>
                <option>Agricultural Zone</option>
                <option>Multiple Locations</option>
                <option>Community Centers</option>
                <option>River Protection Zone</option>
              </select>
              <select
                className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                value={filters.skillLevel}
                onChange={(e) => setFilters({ ...filters, skillLevel: e.target.value })}
              >
                <option>All Skill Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300">
                Showing {filteredOps.length} of {opportunities.length} opportunities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOps.map((op) => (
                <OpportunityCard key={op.id} opportunity={op} />
              ))}
            </div>
            {filteredOps.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  No opportunities match your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
