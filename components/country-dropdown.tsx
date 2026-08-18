'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/app/language-context'

const serviceSlugByKey: Record<string, string> = {
  virtualOffices: 'virtual-offices',
  ltdCompanyFormation: 'ltd-company-formation',
  sharedOffices: 'shared-offices',
  ukBankAccounts: 'uk-bank-accounts',
  companyAnnualAccounts: 'company-annual-accounts',
  companyClosure: 'company-closure',
  customWebsite: 'custom-website',
  shopifySetup: 'shopify-setup',
  internationalBank: 'international-bank',
}

const countryData = {
  uk: {
    bestSellers: [
      'virtualOffices',
      'ltdCompanyFormation',
      'sharedOffices',
      'ukBankAccounts',
      'virtualMobileNumbers',
      'voipLandline',
      'verifyIdentity',
    ],
    companyServices: [
      'companyAnnualAccounts',
      'companyClosure',
      'companyNameChange',
      'companyStructuralChange',
      'confirmationStatementFiling',
      'eoriNumber',
      'govUkOne',
      'ukCompanyRestoration',
      'ukTrademarkRegistration',
      'vatNoApplication',
      'vatReturnFiling',
      'callAnswering',
      'companyLogoCreation',
    ],
    officeRental: [
      'chadwellHeath',
      'essexHeadOffice',
      'eastHam',
      'edinburgh',
      'glasgow',
      'belfast',
      'hainault',
      'dayOffices',
      'holborn',
      'meetingRoomHire',
      'oxford',
      'tottenham',
      'servicedOffices',
    ],
  },
  usa: {
    bestSellers: [
      'virtualOffices',
      'ltdCompanyFormation',
      'ukBankAccounts',
    ],
    companyServices: [
      'companyAnnualAccounts',
      'companyClosure',
      'companyNameChange',
      'callAnswering',
    ],
    officeRental: [
      'essexHeadOffice',
      'dayOffices',
      'meetingRoomHire',
    ],
  },
  canada: {
    bestSellers: [
      'virtualOffices',
      'ltdCompanyFormation',
    ],
    companyServices: [
      'companyAnnualAccounts',
      'callAnswering',
    ],
    officeRental: [
      'dayOffices',
      'meetingRoomHire',
    ],
  },
}

interface CountryDropdownProps {
  country: 'uk' | 'usa' | 'canada'
  label: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export default function CountryDropdown({ country, label, isOpen, onOpen, onClose }: CountryDropdownProps) {
  const { t } = useLanguage()
  const data = countryData[country] 

  return (
    <div
      className="relative group"
      // onMouseEnter={onOpen}
      // onMouseLeave={onClose}
      onClick={isOpen ? onClose : onOpen}
    >
      <button
        type="button" 
        aria-expanded={isOpen}
        className="flex items-center gap-1 rounded-lg px-3 py-2 font-medium text-gray-900 transition hover:bg-cyan-50 hover:text-blue-600"
        onClick={onOpen}
      >
        {label} <ChevronDown size={16} className={`transition duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Modern full-width dropdown panel - positioned directly below */}
      {isOpen && (
        <div className="absolute left-1/2 top-full z-40 mt-0 w-[min(94vw,1100px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 border-t-4 border-t-cyan-400 bg-white shadow-2xl shadow-slate-900/20">
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-cyan-50 px-5 py-5 sm:px-8 sm:py-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Explore our solutions</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">{label} Services</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Choose a service category to find the right support for your business.</p>
          </div>

          <div className="grid max-h-[min(70vh,620px)] grid-cols-1 gap-6 overflow-y-auto px-5 py-6 sm:px-8 md:grid-cols-3 md:gap-8">
              {/* Best Sellers */}
              <div> 
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded"></div>
                  <h3 className="font-bold text-blue-600 text-sm uppercase tracking-wider">Best Sellers</h3>
                </div>
                <div className="space-y-3">
                  {data.bestSellers.map((key) => (
                    <div key={key} className="group/item flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition">
                      <span className="text-blue-600 text-lg">●</span>
                      <Link
                        href={serviceSlugByKey[key] ? `/services/${serviceSlugByKey[key]}` : '/contact'}
                        className="text-gray-700 hover:text-blue-600 text-sm transition font-medium flex-1"
                      >
                        {t(key as any)}
                      </Link>
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-xs font-bold px-2 py-1 rounded opacity-0 group-hover/item:opacity-100 transition whitespace-nowrap">
                        {t('bestSeller')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Services */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded"></div>
                  <h3 className="font-bold text-blue-600 text-sm uppercase tracking-wider">Company</h3>
                </div>
                <div className="space-y-3">
                  {data.companyServices.map((key) => (
                    <div key={key} className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition">
                      <span className="text-blue-600 text-lg">●</span>
                      <Link
                        href={serviceSlugByKey[key] ? `/services/${serviceSlugByKey[key]}` : '/contact'}
                        className="text-gray-700 hover:text-blue-600 text-sm transition font-medium"
                      >
                        {t(key as any)}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Rental */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded"></div>
                  <h3 className="font-bold text-blue-600 text-sm uppercase tracking-wider">Offices</h3>
                </div>
                <div className="space-y-3">
                  {data.officeRental.map((key) => (
                    <div key={key} className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition">
                      <span className="text-blue-600 text-lg">●</span>
                      <Link
                        href={serviceSlugByKey[key] ? `/services/${serviceSlugByKey[key]}` : '/contact'}
                        className="text-gray-700 hover:text-blue-600 text-sm transition font-medium"
                      >
                        {t(key as any)}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  )
}
