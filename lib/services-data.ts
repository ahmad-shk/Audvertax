export type Country = 'uk' | 'usa' | 'canada'

export interface ServicePackage {
  type: 'basic' | 'standard' | 'premium'
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
  category: 'best-sellers' | 'company-services' | 'company-registration' | 'taxation' | 'office-rental' | 'custom-website' | 'shopify-setup' | 'bank-creation'
  countries: Country[]
  packages?: ServicePackage[]
  leadTime?: string
  support?: string
  image?: string
}

export const servicesData: Service[] = [
  // UK-only services from the UK website requirements
  {
    id: 'director-id-verification',
    name: 'Director ID Verification',
    slug: 'director-id-verification',
    description: 'Secure director identity verification for UK company registration and compliance.',
    details: 'Fast-track your UK company setup with secure ID verification, document checks, and compliance guidance for directors.',
    features: [
      'Director ID verification',
      'Passport review',
      'Bank statement check',
      'Compliance support',
      'Fast onboarding',
    ],
    pricing: '£25',
    category: 'company-registration',
    countries: ['uk'],
    packages: [
      {
        type: 'standard',
        price: '£25',
        features: [
          'Director ID verification',
          'Document review',
          'Compliance check',
        ],
        documents: [
          'Passport',
          'Bank statement',
          'Residential address proof',
        ],
      },
    ],
    leadTime: '2-3 business days',
    support: 'Compliance support team',
  },
  {
    id: 'uk-registered-address',
    name: 'UK Registered Address',
    slug: 'uk-registered-address',
    description: 'A compliant UK business address for your LTD registration and ongoing mail handling.',
    details: 'Use a trusted UK registered office address for company formation, correspondence, and business setup.',
    features: [
      'UK registered address',
      'Mail handling',
      'Address verification',
      'Business correspondence support',
    ],
    pricing: '£40/year',
    category: 'company-registration',
    countries: ['uk'],
    packages: [
      {
        type: 'standard',
        price: '£40/year',
        features: [
          'UK registered address',
          'Mail forwarding support',
          'Proof of address support',
        ],
        documents: [
          'Passport',
          'Utility bill',
          'Business correspondence details',
        ],
      },
    ],
    leadTime: '3-5 business days',
    support: 'Address support team',
  },
  {
    id: 'corporate-tax-filing',
    name: 'Corporate Tax Filing',
    slug: 'corporate-tax-filing',
    description: 'UK corporate tax filing services including CT600 and company house submissions.',
    details: 'Support for CT600 filings, company house submissions, and compliance for UK businesses.',
    features: [
      'Corporate tax filing (CT600)',
      'Company house filing',
      'Compliance review',
      'Accounts support',
      'Tax advice',
    ],
    pricing: 'From £125',
    category: 'taxation',
    countries: ['uk'],
    packages: [
      {
        type: 'basic',
        price: '£125',
        features: [
          'Corporate tax filing (CT600)',
          'Company house filing',
          'Business document review',
        ],
        documents: [
          'LTD registration number',
          'UTR number',
          'Authentication code',
          'HMRC login details',
          'Company bank statement',
        ],
      },
      {
        type: 'premium',
        price: '£175',
        features: [
          'Corporate tax filing (CT600)',
          'Company house filing',
          'Accounts review',
          'Custom compliance support',
        ],
        documents: [
          'LTD registration number',
          'UTR number',
          'Authentication code',
          'HMRC login details',
          'Company bank statement',
          'Accounts and reports',
        ],
      },
    ],
    leadTime: '3-5 business days',
    support: 'Tax support team',
  },
  {
    id: 'confirmation-statement',
    name: 'Confirmation Statement',
    slug: 'confirmation-statement',
    description: 'Annual confirmation statement filing for UK companies.',
    details: 'File your annual company confirmation statement with full support for login, company details, and filing review.',
    features: [
      'Confirmation statement filing',
      'Company house login support',
      'Director code assistance',
      'Address confirmation',
    ],
    pricing: '£75',
    category: 'taxation',
    countries: ['uk'],
    packages: [
      {
        type: 'standard',
        price: '£75',
        features: [
          'Confirmation statement filing',
          'Company house login support',
          'Director code guidance',
        ],
        documents: [
          'Company house login email',
          'Company house login password',
          'Director personal code',
          'LTD address',
        ],
      },
    ],
    leadTime: '3-5 business days',
    support: 'Company secretarial support',
  },
  {
    id: 'vat-registration',
    name: 'VAT Registration',
    slug: 'vat-registration',
    description: 'Complete UK VAT registration support for new and growing businesses.',
    details: 'Register your business for VAT with full onboarding support, documentation review, and account setup guidance.',
    features: [
      'VAT registration',
      'Client gateway setup',
      'Business and personal contact review',
      'UK bank details review',
      'Compliance onboarding',
    ],
    pricing: 'From £1',
    category: 'taxation',
    countries: ['uk'],
    leadTime: '3-5 business days',
    support: 'VAT registration specialist',
  },
  {
    id: 'vat-return-filing',
    name: 'VAT Return Filing',
    slug: 'vat-return-filing',
    description: 'Regular VAT return filing and compliance support for UK businesses.',
    details: 'Keep your VAT returns filed accurately and on time with review support for login credentials, accounting records, and HMRC submissions.',
    features: [
      'VAT return filing',
      'HMRC login support',
      'Submission review',
      'Bank statement review',
      'Compliance guidance',
    ],
    pricing: 'From £70',
    category: 'taxation',
    countries: ['uk'],
    packages: [
      {
        type: 'basic',
        price: '£70',
        features: [
          'VAT return filing',
          'HMRC login support',
          'Submission review',
        ],
        documents: [
          'LTD registration number',
          'UTR number',
          'VRN number',
          'Authentication code',
          'HMRC login email',
          'HMRC login password',
        ],
      },
    ],
    leadTime: '3-5 business days',
    support: 'VAT filing support team',
  },
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
         price: "£165",
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
         price: "£225",
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
    pricing: 'From £165',
    category: 'best-sellers',
    countries: ['uk', 'usa', 'canada'],
    leadTime: '1-2 days',
    support: 'Dedicated account manager',
  },
  {
    id: 'llc-company-formation',
    name: 'LLC Company Formation',
    slug: 'llc-company-formation',
    description: 'Fast and simple LLC formation for US clients',
    details: 'Set up your US entity with our streamlined LLC formation support, including filing guidance and business setup assistance.',
    features: [
      'LLC filing support',
      'Registered agent guidance',
      'Business setup documentation',
      'State filing assistance',
      'Compliance support',
      'Entity formation checklist',
    ],
    packages: [
      {
        type: 'standard',
        price: '$199 + state fees',
        features: [
          'LLC registration',
          'Registered agent for 1 year',
          'Business mailing address',
          'US phone number',
          'EIN no.',
          'Business Payoneer account',
          'Business Stripe account',
        ],
        documents: [
          'Business name',
          'Company type',
          'State selection',
          'Owner details',
          'Passport or CNIC',
          'Bank statement or utility bill',
        ],
      },
      {
        type: 'premium',
        price: '$299 + state fees',
        features: [
          'LLC registration',
          'Registered agent for 1 year',
          'Business mailing address',
          'US phone number',
          'EIN no.',
          'Business Payoneer account',
          'Business Stripe account',
          'Unique business address',
          'ITIN',
          'PayPal account setup',
        ],
        documents: [
          'Business name',
          'Company type',
          'State selection',
          'Owner details',
          'Passport or CNIC',
          'Bank statement or utility bill',
        ],
      },
    ],
    pricing: 'From $199 + state fees',
    category: 'best-sellers',
    countries: ['usa'],
    leadTime: '3-5 days',
    support: 'Dedicated US formation advisor',
  },
  {
    id: 'company-registration',
    name: 'Company Registration',
    slug: 'company-registration',
    description: 'USA company registration service with state-specific filing support and compliance setup.',
    details: 'Register your US company with guidance for entity type, state selection, member details, and required filing documents.',
    features: [
      'LLC or corporation registration',
      'State selection guidance',
      'Member and owner details support',
      'Business mailing and phone setup',
      'Compliance-ready onboarding',
      'Setup for EIN and banking support',
    ],
    packages: [
      {
        type: 'basic',
        price: '$125 + state fees',
        features: [
          'LLC registration',
          'Registered agent for 1 year',
          'Business mailing address',
          'US phone number',
          'EIN no.',
          'Business Payoneer account',
          'Business Stripe account',
        ],
        documents: [
          'Business name',
          'Company type',
          'State selection',
          'Owner details',
          'Passport or CNIC',
          'Bank statement or utility bill',
        ],
      },
      {
        type: 'standard',
        price: '$174 + state fees',
        features: [
          'LLC registration',
          'Registered agent for 1 year',
          'Business mailing address',
          'US phone number',
          'EIN no.',
          'Business Payoneer account',
          'Business Stripe account',
          'Unique business address',
        ],
        documents: [
          'Business name',
          'Company type',
          'State selection',
          'Owner details',
          'Passport or CNIC',
          'Bank statement or utility bill',
        ],
      },
      {
        type: 'premium',
        price: '$280 + state fees',
        features: [
          'LLC registration',
          'Registered agent for 1 year',
          'Business mailing address',
          'US phone number',
          'EIN no.',
          'Business Payoneer account',
          'Business Stripe account',
          'Unique business address',
          'ITIN',
          'PayPal account setup',
        ],
        documents: [
          'Business name',
          'Company type',
          'State selection',
          'Owner details',
          'Passport or CNIC',
          'Bank statement or utility bill',
        ],
      },
    ],
    pricing: 'From $125 + state fees',
    category: 'company-registration',
    countries: ['usa'],
    leadTime: '3-7 days',
    support: 'US incorporation specialist',
  },
  {
    id: 'us-taxation',
    name: 'US Taxation',
    slug: 'us-taxation',
    description: 'Tax compliance services for US business operations, including ITIN and EIN applications.',
    details: 'Support for ITIN applications and international EIN applications for resident and non-resident business owners.',
    features: [
      'ITIN application support',
      'International EIN for resident owners',
      'International EIN for non-resident owners',
      'Compliance guidance',
      'Filing document support',
      'Business tax setup assistance',
    ],
    pricing: 'From $10',
    category: 'taxation',
    countries: ['usa'],
    leadTime: '3-10 days',
    support: 'Tax support team',
  },
  {
    id: 'itin',
    name: 'ITIN',
    slug: 'itin',
    description: 'Apply for an ITIN with document support and tax application guidance.',
    details: 'Complete ITIN support for individuals who need an Individual Taxpayer Identification Number.',
    features: [
      'Personal ITIN application',
      'Passport document support',
      'Email and phone support',
      'Payment setup',
      'Client portal sign-up',
    ],
    pricing: '$150',
    category: 'taxation',
    countries: ['usa'],
    leadTime: '5-10 days',
    support: 'Tax filing specialist',
  },
  {
    id: 'international-ein-resident',
    name: 'International EIN (Resident)',
    slug: 'international-ein-resident',
    description: 'Resident EIN support for international business owners and responsible parties.',
    details: 'Apply for a U.S. EIN for resident individuals with an entity or responsible party structure.',
    features: [
      'Resident EIN application support',
      'Entity document review',
      'Phone and WhatsApp support',
      'Simple onboarding and payment',
    ],
    pricing: '$10',
    category: 'taxation',
    countries: ['usa'],
    leadTime: '3-7 days',
    support: 'EIN support team',
  },
  {
    id: 'international-ein-non-resident',
    name: 'International EIN (Non-Resident)',
    slug: 'international-ein-non-resident',
    description: 'Non-resident EIN support for international business owners and responsible parties.',
    details: 'Support for non-resident individuals who need a U.S. EIN for business or tax purposes.',
    features: [
      'Non-resident EIN application support',
      'Entity document review',
      'Phone and WhatsApp support',
      'Simple onboarding and payment',
    ],
    pricing: '$25',
    category: 'taxation',
    countries: ['usa'],
    leadTime: '3-7 days',
    support: 'EIN support team',
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
