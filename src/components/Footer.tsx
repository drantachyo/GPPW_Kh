'use client'

import Link from 'next/link'
import { Heart, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-eco-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center">
                🌍
              </div>
              <span className="text-lg font-bold">Atyrau Eco-Hub</span>
            </div>
            <p className="text-gray-300 text-sm">
              Building a culture of civic responsibility through environmental action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/opportunities" className="hover:text-eco-green transition-colors">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-eco-green transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-eco-green transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-eco-green transition-colors">
                  Map
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-eco-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-eco-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-eco-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-eco-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              Made with <Heart className="inline text-eco-green" size={16} /> for Atyrau
            </p>
            <p>&copy; 2026 Atyrau Eco-Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
