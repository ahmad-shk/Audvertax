export type Country = 'uk' | 'usa' | 'canada'

export interface ServicePackage {
  type: 'standard' | 'premium'
  price: string
  features: string[]
  documents: string[]
  banks?: string[]
}

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  details: string
  features: string[]
  pricing: string
  category: 'best-sellers' | 'company-services' | 'office-rental' | 'custom-website' | 'shopify-setup' | 'bank-creation'
  countries: Country[]
  packages?: ServicePackage[]
  leadTime?: string
  support?: string
  image?: string
}

export const servicesData: Service[] = [
  // Best Sellers & Company Services (All Countries)
  {
    id: 'virtual-offices',
    name: 'Virtual Offices',
    slug: 'virtual-offices',
    description: 'Professional virtual office addresses for your business',
    details: 'Get a prestigious business address without the overhead of physical office space. Perfect for entrepreneurs, remote teams, and growing businesses.',
    features: [
      'Professional business address',
      'Mail forwarding service',
      'Phone answering service',
      'Meeting room access (add-on)',
      'Business registration support',
    ],
    pricing: 'From £1/month',
    category: 'best-sellers',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '1 day setup',
    support: '24/7 customer support',
  },
  {
    id: 'ltd-company-formation',
    name: 'LTD Company Formation',
    slug: 'ltd-company-formation',
    description: 'Fast and easy company registration with all documentation',
    details: 'Start your business journey with our streamlined company formation service. We handle all paperwork and registrations for you.',
    features: [
      'Company registration with authorities',
      'Director and shareholder setup',
      'Registered office address',
      'Certificate of incorporation',
      'Business documentation',
      'Initial filing',
    ],
    packages: [
       {
         type: "standard",
         price: "165 gbp",
         features: [
          'Director id verification',
          'UK registered address',
          'Lease agreement as proof of address'
         ],
         documents: [
          'article of aasociation',
          'memorandum of association',
          'certificate of incorporation',
          'UTR no',
          'authentication code'
         ]
       },
       {
         type: "premium",
         price: "225 gbp",
         features: [
          'Director id verification',
          'UK registered address',
          'Lease agreement as proof of address',
          'bank creation'
         ],
         documents: [
          'article of aasociation',
          'memorandum of association',
          'certificate of incorporation',
          'UTR no',
          'authentication code'
         ],
         banks:[
          'wise',
          'tide',
          'taptap',
          'payoneer',
          'sunrate',
          'paypal'
         ]
       }
    ],
    pricing: 'From £1',
    category: 'best-sellers',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '1-2 days',
    support: 'Dedicated account manager',
  },
  {
    id: 'uk-bank-accounts',
    name: 'UK Bank Accounts',
    slug: 'uk-bank-accounts',
    description: 'Business bank accounts with verified UK addresses',
    details: 'Open a UK business bank account easily. We provide address verification and support for international clients.',
    features: [
      'UK bank account access',
      'Address verification',
      'Business documentation',
      'Account setup assistance',
      'Ongoing support',
    ],
    pricing: 'Free setup + bank fees',
    category: 'best-sellers',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '3-5 days',
    support: 'Bank liaison support',
  },
  {
    id: 'company-annual-accounts',
    name: 'Company Annual Accounts Filing',
    slug: 'company-annual-accounts',
    description: 'Professional annual accounts preparation and filing',
    details: 'Keep your company compliant with annual filing requirements. Our experts prepare and file your accounts on time.',
    features: [
      'Accounts preparation',
      'Tax compliance',
      'Filing with authorities',
      'Director reporting',
      'Financial statements',
    ],
    pricing: 'From £1/year',
    category: 'company-services',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '5-7 days',
    support: 'Tax advisor support',
  },
  {
    id: 'company-closure',
    name: 'Company Closure & Dissolution',
    slug: 'company-closure',
    description: 'Safe and legal company dissolution service',
    details: 'Wind down your business properly with our dissolution service. We handle all legal requirements and documentation.',
    features: [
      'Legal dissolution process',
      'Tax clearance',
      'Authority filings',
      'Documentation handling',
      'Final report generation',
    ],
    pricing: 'From £1',
    category: 'company-services',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '7-14 days',
    support: 'Legal advisor consultation',
  },

  // Office Rental Services
  {
    id: 'shared-offices',
    name: 'Shared Offices & Coworking',
    slug: 'shared-offices',
    description: 'Flexible coworking spaces at competitive rates',
    details: 'Collaborate in our modern, well-equipped coworking spaces with networking opportunities and business facilities.',
    features: [
      'Fully furnished workspace',
      'High-speed internet',
      'Meeting rooms',
      'Kitchen facilities',
      'Networking events',
      'Flexible contracts',
    ],
    pricing: 'From £1/person/month',
    category: 'office-rental',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '1 day',
    support: 'On-site support team',
  },
  {
    id: 'private-offices',
    name: 'Private Offices',
    slug: 'private-offices',
    description: 'Dedicated private office space for your team',
    details: 'Get your own dedicated office with all amenities included. Perfect for growing teams needing privacy and control.',
    features: [
      'Private workspace',
      'Furnished desk setup',
      'High-speed internet',
      'Parking included',
      'Utility bills included',
      'Meeting room access',
      ' 24/7 access',
    ],
    pricing: 'From £1/month',
    category: 'office-rental',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '2-3 days',
    support: 'Dedicated office manager',
  },

  // New Services - Custom Website
  {
    id: 'custom-website',
    name: 'Custom Website Development',
    slug: 'custom-website',
    description: 'Professional custom websites built for your business',
    details: 'Get a stunning, fully functional website designed and built specifically for your business needs. From concept to launch.',
    features: [
      'Custom design & development',
      'Responsive mobile design',
      'SEO optimization',
      'CMS integration',
      'Payment gateway setup',
      'SSL security',
      '6 months free maintenance',
      'Analytics & reporting',
    ],
    pricing: 'From £1',
    category: 'custom-website',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '2-4 weeks',
    support: 'Ongoing technical support',
  },

  // New Services - Shopify Complete Setup
  {
    id: 'shopify-setup',
    name: 'Shopify Complete Setup',
    slug: 'shopify-setup',
    description: 'Full Shopify store setup and optimization',
    details: 'Launch your e-commerce store with our comprehensive Shopify setup service. We handle design, products, and payment processing.',
    features: [
      'Store setup & configuration',
      'Custom theme design',
      'Product upload & optimization',
      'Payment gateway setup',
      'Shipping configuration',
      'Tax setup',
      'SEO optimization',
      'App integration',
      '30 days onboarding support',
    ],
    pricing: 'From £1',
    category: 'shopify-setup',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '1-2 weeks',
    support: 'Dedicated Shopify expert',
  },

  // New Services - International Bank Creation
  {
    id: 'international-bank',
    name: 'International Bank Account Creation',
    slug: 'international-bank',
    description: 'Open international bank accounts for your business',
    details: 'Expand globally with bank accounts in UK, USA, Canada and other countries. Multi-currency support included.',
    features: [
      'Multiple country options',
      'Multi-currency accounts',
      'IBAN/Swift codes',
      'Business documentation support',
      'Compliance assistance',
      'International wire transfers',
      'Card issuance',
      'Ongoing account management',
    ],
    pricing: 'From £1 per account',
    category: 'bank-creation',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '5-10 business days',
    support: 'International banking specialist',
  },
]

// Get services by country and category
export function getServicesByCountry(country: Country): Service[] {
  return servicesData.filter(service => service.countries.includes(country))
}

export function getServicesByCategory(
  category: Service['category'],
  country?: Country
): Service[] {
  return servicesData.filter(service => {
    const matchesCategory = service.category === category
    const matchesCountry = !country || service.countries.includes(country)
    return matchesCategory && matchesCountry
  })
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug)
}

export function getCountriesForService(slug: string): Country[] {
  const service = getServiceBySlug(slug)
  return service ? service.countries : []
}

export function getServicesByCountryAndCategory(
  country: Country,
  category: Service['category']
): Service[] {
  return servicesData.filter(
    service =>
      service.countries.includes(country) && service.category === category
  )
}
