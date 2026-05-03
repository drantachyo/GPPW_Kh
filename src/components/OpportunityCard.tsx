'use client'

import { Calendar, MapPin, Trophy, Users } from 'lucide-react'

interface Opportunity {
  id: number
  title: string
  description: string
  location: string
  urgency: string
  skillLevel: string
  credits: number
  date: string
  participants: number
}

interface OpportunityCardProps {
  opportunity: Opportunity
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const urgencyColor = {
    High: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
    Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200',
    Low: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
  }

  return (
    <div className="card hover:shadow-xl transition-all duration-300 border-l-4 border-eco-green">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
          <p className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${urgencyColor[opportunity.urgency as keyof typeof urgencyColor]}`}>
            {opportunity.urgency} Urgency
          </p>
        </div>
        <div className="text-2xl font-bold text-eco-green">{opportunity.credits} pts</div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>

      <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-eco-green" />
          <span>{opportunity.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-eco-green" />
          <span>{opportunity.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-eco-green" />
          <span>{opportunity.participants} volunteers</span>
        </div>
      </div>

      <div className="bg-eco-light dark:bg-gray-700 p-3 rounded-lg mb-4">
        <span className="text-sm font-semibold text-eco-dark dark:text-white">Skill Level: {opportunity.skillLevel}</span>
      </div>

      <button className="w-full btn-primary bg-eco-green hover:bg-green-700">
        Join This Project
      </button>
    </div>
  )
}
