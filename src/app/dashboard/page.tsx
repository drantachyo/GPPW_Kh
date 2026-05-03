'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CreditsTracker from '@/components/CreditsTracker'
import { BarChart3, TrendingUp, Award } from 'lucide-react'

export default function DashboardPage() {
  // Mock user data
  const userData = {
    name: 'Ahmed',
    totalHours: 34,
    level: 'Eco-Advocate',
    progressToNext: 66,
    recentActivity: [
      { date: 'May 10', activity: 'Ural River Cleanup', hours: 3 },
      { date: 'May 8', activity: 'Tree Planting', hours: 4 },
      { date: 'May 5', activity: 'Air Quality Study', hours: 2 },
    ],
    achievements: [
      { title: '10-Hour Milestone', icon: '🌱' },
      { title: 'River Champion', icon: '💧' },
      { title: 'Team Player', icon: '👥' },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-eco-light dark:bg-gray-900">
        {/* Hero */}
        <section className="bg-gradient-eco text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, {userData.name}!</h1>
            <p className="opacity-90">Keep making a difference in Atyrau</p>
          </div>
        </section>

        {/* Main Grid */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            {/* Credits Tracker */}
            <div className="mb-8">
              <CreditsTracker
                totalHours={userData.totalHours}
                level={userData.level}
                progressToNext={userData.progressToNext}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Stats Cards */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Total Impact</h3>
                  <BarChart3 className="text-eco-green" size={24} />
                </div>
                <div className="text-3xl font-bold text-eco-green mb-2">{userData.totalHours}</div>
                <p className="text-gray-600 dark:text-gray-300">Volunteer Hours</p>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Current Level</h3>
                  <Award className="text-eco-accent" size={24} />
                </div>
                <div className="text-3xl font-bold text-eco-accent mb-2">{userData.level}</div>
                <p className="text-gray-600 dark:text-gray-300">Achievement Status</p>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">To Next Level</h3>
                  <TrendingUp className="text-yellow-500" size={24} />
                </div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">16 hrs</div>
                <p className="text-gray-600 dark:text-gray-300">Until Eco-Leader</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {userData.recentActivity.map((activity, i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <div>
                        <p className="font-semibold">{activity.activity}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</p>
                      </div>
                      <div className="text-eco-green font-bold">+{activity.hours}h</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Achievements</h2>
                <div className="space-y-3">
                  {userData.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-eco-light dark:bg-gray-700 rounded-lg">
                      <span className="text-2xl">{ach.icon}</span>
                      <span className="font-semibold">{ach.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
