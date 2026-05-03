'use client'

import { useState } from 'react'
import { CheckCircle, Lock } from 'lucide-react'

interface CreditsTrackerProps {
  totalHours: number
  level: string
  progressToNext: number
}

export default function CreditsTracker({ totalHours, level, progressToNext }: CreditsTrackerProps) {
  const [showDetails, setShowDetails] = useState(false)

  const tiers = [
    { name: 'Eco-Novice', hours: 10, unlocked: totalHours >= 10 },
    { name: 'Eco-Advocate', hours: 50, unlocked: totalHours >= 50 },
    { name: 'Eco-Leader', hours: 100, unlocked: totalHours >= 100 },
  ]

  return (
    <div className="card bg-gradient-to-r from-eco-green/10 to-eco-accent/10 dark:from-eco-green/5 dark:to-eco-accent/5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Professional Credits Tracker</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Current Level: <span className="font-bold text-eco-green">{level}</span>
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold text-eco-green">{totalHours}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Total Hours</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold">Progress to Next Level</span>
          <span className="text-sm font-semibold text-eco-green">{progressToNext}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-eco h-full transition-all duration-500"
            style={{ width: `${progressToNext}%` }}
          ></div>
        </div>
      </div>

      {/* Tier Display */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <p className="font-semibold mb-3">Your Achievement Path</p>
        <div className="grid grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl mb-2 ${tier.unlocked ? 'text-eco-green' : 'text-gray-400'}`}>
                {tier.unlocked ? <CheckCircle size={32} /> : <Lock size={32} />}
              </div>
              <p className="text-xs font-semibold mb-1">{tier.name}</p>
              <p className="text-xs text-gray-500">{tier.hours}h</p>
            </div>
          ))}
        </div>
      </button>

      {showDetails && (
        <div className="mt-4 p-4 bg-eco-light dark:bg-gray-800 rounded-lg">
          <h3 className="font-bold mb-3">Tier Benefits</h3>
          <ul className="space-y-2 text-sm">
            <li>✓ <strong>Eco-Novice:</strong> Certificate of Appreciation</li>
            <li>✓ <strong>Eco-Advocate:</strong> University Social Credit / Course Waiver</li>
            <li>✓ <strong>Eco-Leader:</strong> Internship Referrals & Partner Discounts</li>
          </ul>
        </div>
      )}
    </div>
  )
}
