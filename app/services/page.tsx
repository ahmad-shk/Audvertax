import { CheckCircle, Building2, Briefcase, Phone, Globe, FileText } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Building2,
    title: 'Virtual Offices',
    category: 'Office Solutions',
    description: 'Establish a professional business presence with our prestigious virtual office addresses.',
    features: [
      'Prestigious business address',
      'Mail handling and forwarding',
      'Professional call answering',
      'Meeting room access',
      'Business support services',
      'Available in major cities'
    ],
    pricing: 'Starting from £1/month',
    countries: ['UK', 'USA']
  },
  {
    icon: Briefcase,
    title: 'Company Formation',
    category: 'Legal Services',
    description: 'Complete company incorporation services with professional guidance every step of the way.',
    features: [
      'Limited company registration',
      'Registered agent services',
      'Tax identification setup',
      'Statutory compliance',
      'Business documentation',
      'Ongoing support'
    ],
    pricing: 'Starting from £1',
    countries: ['UK', 'USA']
  },
  {
    icon: Phone,
    title: 'Virtual Numbers',
    category: 'Communications',
    description: 'Professional virtual phone numbers for business communication across borders.',
    features: [
      'Local phone numbers',
      'Call forwarding',
      'Voicemail transcription',
      'Call recording',
      'International access',
      'Mobile & desktop apps'
    ],
    pricing: 'Starting from £1/month',
    countries: ['UK', 'USA']
  },
  {
    icon: FileText,
    title: 'Company Compliance',
    category: 'Administration',
    description: 'Stay compliant with annual accounts filing and statutory company reporting.',
    features: [
      'Annual accounts filing',
      'Tax return preparation',
      'Statutory reporting',
      'Company updates',
      'Compliance reminders',
      'Expert guidance'
    ],
    pricing: 'Starting from £1/year',
    countries: ['UK', 'USA']
  },
  {
    icon: Globe,
    title: 'International Expansion',
    category: 'Business Solutions',
    description: 'Expand your business globally with our comprehensive international setup services.',
    features: [
      'Multi-country setup',
      'Local compliance support',
      'Cultural guidance',
      'Legal documentation',
      'Banking assistance',
      'Dedicated account manager'
    ],
    pricing: 'Custom pricing',
    countries: ['UK', 'USA']
  },
  {
    icon: Briefcase,
    title: 'Business Bank Accounts',
    category: 'Financial Services',
    description: 'Open business bank accounts with leading financial institutions globally.',
    features: [
      'Multi-currency accounts',
      'Online banking',
      'Payment processing',
      'Debit cards',
      'International transfers',
      'Business support'
    ],
    pricing: 'Starting from £0 (bank fees apply)',
    countries: ['UK', 'USA']
  }
]

const faqs = [
  {
    question: 'What is the minimum commitment period?',
    answer: 'Most of our services are available on flexible terms with no long-term commitment. You can upgrade or downgrade anytime with 30 days notice.'
  },
  {
    question: 'Do I need to have a physical presence?',
    answer: 'No, our virtual office solutions are specifically designed for businesses without a physical office location. You get all the benefits of a business address without the overhead.'
  },
  {
    question: 'How quickly can I set up a service?',
    answer: 'Most services can be set up within 1-2 business days. We pride ourselves on fast application processing and quick turnaround times.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and digital payment methods. Custom payment plans are also available for larger enterprises.'
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-t-4 border-cyan-400 bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-400 hover:text-yellow-300 font-medium text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive business solutions designed to help you establish and grow your company globally.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-xl transition">
                <div className="p-6">
                  <Icon className="text-cyan-400 mb-4" size={32} />
                  <p className="text-sm font-semibold text-cyan-600 mb-2">{service.category}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Countries & Pricing */}
                  <div className="border-t-2 border-gray-200 pt-4">
                    <p className="text-lg font-bold text-cyan-600">{service.pricing}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Available in:</span>
                      <div className="flex gap-2">
                      <Link 
                        // href={serviceSlugByKey[key] ? `/services/${serviceSlugByKey[key]}` : '/contact'}
                        href="#"
                        className="w-full mt-4 px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-blue-500 transition"
                        
                        >
                         {service.countries[0]}
                      </Link> 
                      <Link href="#" className="w-full mt-4 px-4 py-2 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-blue-500 transition">
                         {service.countries[1]}
                      </Link> 
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Audvetax</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-700">Our experienced team has helped thousands of businesses succeed globally with personalized support.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Solutions</h3>
              <p className="text-gray-700">Competitive pricing with flexible payment options. No hidden fees, just transparent and fair pricing.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-700">Round-the-clock customer support via email, phone, WhatsApp, and live chat. We&apos;re always here to help.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Simple Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: '1', title: 'Choose Your Service', desc: 'Select the service that best fits your needs' },
            { num: '2', title: 'Provide Details', desc: 'Fill in your business information' },
            { num: '3', title: 'Fast Processing', desc: 'We process your application quickly' },
            { num: '4', title: 'Get Started', desc: 'Enjoy your new business solution' }
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-cyan-400 text-gray-900 font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cyan-50 py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-cyan-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses worldwide who trust Audvetax for their office and business solutions.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-blue-500 transition">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  )
}
