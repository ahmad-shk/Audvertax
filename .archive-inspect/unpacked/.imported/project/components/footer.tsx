'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Audvetax</span>
              <span className="text-white"> Systems</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced business intelligence and office solutions. Audvetax Systems delivers innovative technology and comprehensive business support services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Virtual Offices</a></li>
              <li><a href="#" className="hover:text-white transition">Company Formation</a></li>
              <li><a href="#" className="hover:text-white transition">Call Answering</a></li>
              <li><a href="#" className="hover:text-white transition">Phone Lines</a></li>
              <li><a href="#" className="hover:text-white transition">Private Offices</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@audvetax.com" className="hover:text-white transition">
                  support@audvetax.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+441234567890" className="hover:text-white transition">
                  +44 (0) 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Audvetax. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition">f</a>
              <a href="#" className="text-gray-300 hover:text-white transition">📷</a>
              <a href="#" className="text-gray-300 hover:text-white transition">▶</a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-center gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
          <a href="#" className="hover:text-white transition">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
