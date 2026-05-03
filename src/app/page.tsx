'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Users, Trophy, Leaf } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatCounter from '@/components/StatCounter'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-eco text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Your City. Your Future.
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Join the movement transforming Atyrau into a sustainable, thriving community. Every action counts.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/opportunities" className="btn-primary bg-white text-eco-green hover:bg-gray-100">
                    <span className="flex items-center gap-2">
                      Start Volunteering <ArrowRight size={20} />
                    </span>
                  </Link>
                  <Link href="/dashboard" className="btn-primary opacity-80 hover:opacity-100">
                    My Dashboard
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-20">
                  <Leaf size={120} className="mb-4" />
                  <p className="text-lg">Real-time environmental action in Atyrau</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stats */}
        <section className="py-16 bg-eco-light dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <StatCounter label="kg of Waste Collected" value={15420} />
              <StatCounter label="Active Volunteers" value={847} />
              <StatCounter label="Trees Planted" value={3250} />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Why Join?</h2>
            <p className="section-subtitle">Four ways to make a difference</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MapPin,
                  title: 'Real-Time Map',
                  desc: 'See hotspots needing help and celebrate green zones',
                },
                {
                  icon: Trophy,
                  title: 'Professional Credits',
                  desc: 'Earn verified hours for university credit or discounts',
                },
                {
                  icon: Users,
                  title: 'Community',
                  desc: 'Connect with 800+ youth passionate about Atyrau',
                },
                {
                  icon: Leaf,
                  title: 'Impact',
                  desc: 'Track your contribution to a cleaner Ural River',
                },
              ].map((feature, i) => (
                <div key={i} className="card">
                  <feature.icon className="text-eco-green mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Credits */}
        <section className="py-16 md:py-24 bg-eco-light dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Level Up Your Eco-Journey</h2>
            <p className="section-subtitle">Unlock rewards as you grow</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { level: 'Eco-Novice', hours: '10 Hours', benefit: 'Certificate of Appreciation' },
                { level: 'Eco-Advocate', hours: '50 Hours', benefit: 'University "Social Credit" / Course Waiver' },
                { level: 'Eco-Leader', hours: '100+ Hours', benefit: 'Internship Referrals & Partner Discounts' },
              ].map((tier, i) => (
                <div key={i} className="card border-2 border-eco-green">
                  <div className="text-3xl font-bold text-eco-green mb-2">{tier.level}</div>
                  <div className="text-5xl font-bold mb-4 text-eco-dark dark:text-white">{tier.hours}</div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{tier.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-eco-dark text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of Atyrau youth building a sustainable future.
            </p>
            <Link href="/opportunities" className="btn-primary bg-eco-green hover:bg-green-700">
              Explore Opportunities
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
