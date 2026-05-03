'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EducationModule from '@/components/EducationModule'

const modules = [
  {
    id: 1,
    title: 'The Ural River Crisis',
    description: 'Understand why the Ural needs our help',
    icon: '💧',
    difficulty: 'Beginner',
    duration: '5 min',
    content: 'The Ural River, once a thriving ecosystem, faces severe pollution from industrial discharge and agricultural runoff. Learn about the urgency and what we can do.',
  },
  {
    id: 2,
    title: 'Soil Salinity & Agriculture',
    description: 'How salt affects Atyrau\'s farmland',
    icon: '🌾',
    difficulty: 'Intermediate',
    duration: '8 min',
    content: 'Soil salinity has reduced agricultural productivity by 40% in surrounding regions. Discover restoration techniques and your role in the solution.',
  },
  {
    id: 3,
    title: 'Air Quality & Your Health',
    description: 'Why clean air matters in Atyrau',
    icon: '🌬️',
    difficulty: 'Beginner',
    duration: '6 min',
    content: 'Air pollution affects every resident. Learn about sources, health impacts, and how community action improves air quality.',
  },
  {
    id: 4,
    title: 'Sturgeon Protection 101',
    description: 'Protecting endangered species',
    icon: '🐟',
    difficulty: 'Advanced',
    duration: '10 min',
    content: 'Sturgeons are critical to Atyrau\'s ecosystem. Understand conservation efforts and how volunteers protect their habitat.',
  },
  {
    id: 5,
    title: 'Renewable Energy in Atyrau',
    description: 'Solar & wind energy potential',
    icon: '⚡',
    difficulty: 'Intermediate',
    duration: '7 min',
    content: 'Explore Atyrau\'s untapped renewable energy resources and how they could transform the region\'s sustainability.',
  },
  {
    id: 6,
    title: 'Climate Action: Your Impact',
    description: 'How your volunteer work reduces carbon',
    icon: '🌍',
    difficulty: 'Beginner',
    duration: '5 min',
    content: 'Every cleaning project and tree planted reduces our carbon footprint. Calculate your climate impact.',
  },
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-eco text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Educational Corner</h1>
            <p className="text-lg opacity-90">Understand Atyrau's environmental challenges through gamified learning</p>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-12 md:py-16 bg-eco-light dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="section-title">Learning Modules</h2>
              <p className="section-subtitle">Master Atyrau's environmental issues</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <EducationModule key={module.id} module={module} />
              ))}
            </div>
          </div>
        </section>

        {/* Gamification Info */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="section-title">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '1',
                  title: 'Learn',
                  desc: 'Complete bite-sized modules on Atyrau\'s challenges',
                },
                {
                  num: '2',
                  title: 'Earn Badges',
                  desc: 'Unlock achievements as you complete modules',
                },
                {
                  num: '3',
                  title: 'Take Action',
                  desc: 'Use your knowledge to volunteer effectively',
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-eco-green mb-4">{step.num}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
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
