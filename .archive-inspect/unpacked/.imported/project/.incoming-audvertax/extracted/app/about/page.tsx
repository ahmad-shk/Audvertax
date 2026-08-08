import { CheckCircle, Users, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Years in Business', value: '15+' },
  { label: 'Global Offices', value: '9+' },
  { label: 'Clients Served', value: '82,637+' },
  { label: 'Countries', value: '38+' }
]

const values = [
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'We prioritize our clients\' success and provide personalized solutions for each business.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Operating internationally with local expertise in every market we serve.'
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Average 1-day application processing with seamless onboarding experience.'
  },
  {
    icon: CheckCircle,
    title: 'Reliable',
    description: '4.6-star rating with 1000+ positive reviews from satisfied clients.'
  }
]

const milestones = [
  { year: '2010', event: 'Audvetax Founded' },
  { year: '2013', event: 'Expanded to USA Operations' },
  { year: '2016', event: 'Added Virtual Number Services' },
  { year: '2019', event: 'Launched Company Formation Services' },
  { year: '2021', event: 'Reached 50,000+ Active Clients' },
  { year: '2024', event: 'Expanded to 38+ Countries Worldwide' }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-t-4 border-cyan-400 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-400 hover:text-yellow-300 font-medium text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Audvetax</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your trusted partner for global office rental and comprehensive business support solutions since 2010.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To empower businesses of all sizes by providing affordable, reliable, and professional office solutions combined with comprehensive business support services. We make it easy for entrepreneurs and established companies to establish and grow their presence globally.
              </p>
              <ul className="space-y-3">
                {['Fast & Simple Setup', 'Affordable Solutions', 'Professional Support', '24/7 Availability'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                To become the world&apos;s most trusted and accessible provider of virtual office and business support services, enabling entrepreneurs and enterprises to operate globally with confidence and ease.
              </p>
              <div className="bg-cyan-100 border-l-4 border-cyan-400 p-6 rounded">
                <p className="text-gray-900 font-semibold">
                  "We believe in breaking down barriers to global business expansion and making professional office solutions accessible to everyone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg transition">
                <Icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-gray-900">
                    {idx + 1}
                  </div>
                  {idx < milestones.length - 1 && <div className="w-1 h-16 bg-yellow-200 mt-2"></div>}
                </div>
                <div className="pt-2 pb-8">
                  <div className="text-2xl font-bold text-cyan-600">{milestone.year}</div>
                  <div className="text-lg text-gray-900 font-semibold">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-cyan-50 rounded-2xl p-12 border-2 border-yellow-200 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Thousands of Happy Clients</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start your journey with Audvetax today and experience the difference professional business support can make.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-8 py-3 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-blue-500 transition">
              Get Started
            </Link>
            <Link href="/faq" className="px-8 py-3 border-2 border-cyan-400 text-cyan-600 font-bold rounded-lg hover:bg-cyan-100 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
