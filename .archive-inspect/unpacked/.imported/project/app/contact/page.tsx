'use client'

import { useState } from 'react'
import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@audvetax.com',
    description: 'Response within 2 hours',
    link: 'mailto:support@audvetax.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+44 (0) 1234 567890',
    description: 'Available 24/7',
    link: 'tel:+441234567890'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: '+44 7911 123456',
    description: 'Instant messaging',
    link: 'https://wa.me/447911123456'
  },
  {
    icon: MapPin,
    title: 'Office Address',
    value: 'London, UK',
    description: 'Multiple global locations',
    link: '#'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'uk',
    subject: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', country: 'uk', subject: 'general', message: '' })

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-t-4 border-cyan-400 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-400 hover:text-yellow-300 font-medium text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">We&apos;re here to help. Reach out to us with any questions or inquiries.</p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <a
                key={idx}
                href={method.link}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg transition text-center"
              >
                <Icon className="mx-auto text-cyan-400 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">{method.value}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            )
          })}
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
                  <p className="text-green-700 text-sm mt-1">We&apos;ll get back to you within 2 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 1234 567890"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                    required
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                  >
                    <option value="uk">United Kingdom</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="office">Virtual Office</option>
                    <option value="company">Company Services</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response Time</h3>
                  <p className="text-gray-700">We respond to all inquiries within 2 hours during business hours.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-700">Our support team is available round-the-clock to assist you anytime.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multilingual Team</h3>
                  <p className="text-gray-700">Support available in multiple languages to serve our global clients.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-700">Our specialists have years of experience in global business solutions.</p>
                </div>
              </div>

              {/* FAQ Link */}
              <Link href="/faq" className="mt-8 inline-block text-cyan-600 hover:text-yellow-700 font-bold">
                Visit our FAQ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
