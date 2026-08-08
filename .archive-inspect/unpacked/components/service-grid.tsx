'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceGridProps {
  country: string
}

const serviceSlugs = ['virtual-offices', 'ltd-company-formation', 'shared-offices', 'private-offices', 'uk-bank-accounts', 'company-closure', 'company-annual-accounts', 'international-bank']

const services = {
  uk: [
    {
      title: 'Virtual Offices',
      description: 'Rent a Virtual Office in London, Essex, Glasgow or Belfast from only £0.99 per week',
      price: '£0.99/week',
    },
    {
      title: 'UK LTD Company Formation',
      description: 'Incorporate a Ltd company in the UK from only £43.99 including Companies House fees',
      price: 'From £43.99',
    },
    {
      title: 'Shared Offices / Coworking Space',
      description: 'Rent shared office / coworking space from only £60 per person per month',
      price: 'From £60/month',
    },
    {
      title: 'Private Offices',
      description: 'Rent a private office from only £500 per month with free internet, parking and utility bills',
      price: 'From £500/month',
    },
    {
      title: 'UK VoIP Phone Lines',
      description: 'VoIP - UK Landline Numbers for any city of your choice with mobile app from only £0.99 per week',
      price: '£0.99/week',
    },
    {
      title: '24/7 Call Answering Services',
      description: 'Call Answering Service only £2.50 per week inc VAT',
      price: '£2.50/week',
    },
    {
      title: 'UK Trademark Registration',
      description: 'Protect your brand with our UK Trademark Registration service from only £50.00',
      price: 'From £50.00',
    },
    {
      title: 'Company Closure / Dissolution',
      description: 'We provide services to close or dissolve your company smoothly in accordance with UK law',
      price: '£85.00',
    },
  ],
  usa: [
    {
      title: 'USA - Delaware LLC Incorporation',
      description: 'Delaware company incorporation from only US$4.99 or free with our Bronze package',
      price: 'From $4.99',
    },
    {
      title: 'USA - Delaware Virtual Office & Registered Agent Service',
      description: 'Need a Registered Agent for your existing company, or just need a virtual office with mail handling',
      price: 'From $59.99/year',
    },
    {
      title: 'USA Virtual Numbers',
      description: 'Voip phone number with mobile app for any city of your choice in the USA from only US$0.99 per week',
      price: '$0.99/week',
    },
    {
      title: '24/7 Call Answering Services',
      description: 'Call Answering Service / Virtual Receptionist Service',
      price: 'From $1.49',
    },
  ],
  canada: [
    {
      title: 'Canada - Toronto Virtual Office',
      description: 'Virtual Office Rental from only CA$0.99 per week',
      price: 'CA$0.99/week',
    },
    {
      title: 'Federal LLC Company Incorporation',
      description: 'LLC Federal Company Incorporation from only CA$39.99',
      price: 'From CA$39.99',
    },
    {
      title: 'Provincial LLC Company Incorporation',
      description: 'Free Provincial Company Incorporation in Ontario when you rent an address from us',
      price: 'Free with address',
    },
    {
      title: 'Canadian Virtual Numbers',
      description: 'Voip number with mobile app for any Canadian city of your choice from only CA$0.98 per week',
      price: 'CA$0.98/week',
    },
  ],
  ireland: [
    {
      title: 'Ireland VOIP Landline Numbers',
      description: 'Ireland VOIP Landline Numbers from only £0.98 per week',
      price: '£0.98/week',
    },
    {
      title: 'Irish Company Incorporation',
      description: 'Irish LTD Company Incorporation From Only €15',
      price: 'From €15',
    },
    {
      title: 'Virtual Office Address in Dublin',
      description: 'Virtual Office Address in Dublin From Only €0.99',
      price: 'From €0.99',
    },
    {
      title: 'Company Logo Creation',
      description: 'Company logo Creation only £60 inc VAT',
      price: '£60',
    },
  ],
}

export default function ServiceGrid({ country }: ServiceGridProps) {
  const countryServices = services[country as keyof typeof services] || services.uk

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Choose the service that you&apos;re looking for
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countryServices.map((service, index) => {
            const href = `/services/${serviceSlugs[index] ?? 'virtual-offices'}`
            return (
            <Link
              href={href}
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{service.price}</span>
                <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
