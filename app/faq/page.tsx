'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: 'General',
    items: [
      {
        question: 'What is Audvetax?',
        answer: 'Audvetax is a global office rental and business support solutions provider. We offer virtual offices, company incorporation services, and comprehensive business support across multiple countries.'
      },
      {
        question: 'Which countries do you operate in?',
        answer: 'We currently operate in the UK, USA, and Canada with offices in major cities. We serve clients from 38+ countries worldwide.'
      },
      {
        question: 'What are your operating hours?',
        answer: 'Our support team is available 24/7 through various channels including email, live chat, WhatsApp, and phone calls.'
      }
    ]
  },
  {
    category: 'Virtual Offices',
    items: [
      {
        question: 'What is included in a virtual office?',
        answer: 'Our virtual office packages include a prestigious business address, mail handling and forwarding, call answering services, meeting room access, and professional support.'
      },
      {
        question: 'Can I use the address for official documents?',
        answer: 'Yes, all our virtual office addresses are fully compliant with legal requirements and can be used for company registration and official documentation.'
      },
      {
        question: 'How quickly can I set up a virtual office?',
        answer: 'Most virtual office setups can be completed within 1 business day. We pride ourselves on fast application processing.'
      }
    ]
  },
  {
    category: 'Company Services',
    items: [
      {
        question: 'What company formation services do you offer?',
        answer: 'We offer full company incorporation services including company registration, registered agent services, tax identification, and ongoing compliance support.'
      },
      {
        question: 'How long does company formation take?',
        answer: 'The process typically takes 1-3 business days depending on the country and service selected.'
      },
      {
        question: 'Do you provide ongoing compliance services?',
        answer: 'Yes, we offer ongoing compliance support including annual accounts filing, statutory reporting, and business address updates.'
      }
    ]
  },
  {
    category: 'Billing & Accounts',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, bank transfers, and digital payment methods. Payment plans are also available for enterprise clients.'
      },
      {
        question: 'Can I upgrade or downgrade my plan?',
        answer: 'Yes, you can change your service plan anytime through your client account. Changes will be reflected in your next billing cycle.'
      },
      {
        question: 'Is there a cancellation fee?',
        answer: 'No hidden cancellation fees. You can cancel your service with 30 days notice.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-t-4 border-cyan-400 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-600 hover:text-yellow-700 font-medium text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl">Find answers to common questions about our services, pricing, and support.</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="h-1 w-12 bg-cyan-400 rounded"></div>
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.items.map((item, itemIdx) => {
                const itemId = `${sectionIdx}-${itemIdx}`
                const isOpen = openItems.includes(itemId)

                return (
                  <div key={itemIdx} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-cyan-400 transition">
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition flex items-center justify-between"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 text-left">{item.question}</h3>
                      <ChevronDown
                        size={24}
                        className={`text-cyan-400 flex-shrink-0 ml-4 transition ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-cyan-50 rounded-2xl p-12 text-center border-2 border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-700 mb-6">Our support team is here to help you 24/7</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:support@audvetax.com" className="px-6 py-3 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-blue-500 transition">
              Email Support
            </a>
            <a href="https://wa.me/447911123456" className="px-6 py-3 border-2 border-cyan-400 text-cyan-600 font-bold rounded-lg hover:bg-cyan-50 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
