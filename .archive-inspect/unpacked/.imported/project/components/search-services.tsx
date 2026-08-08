'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { useLanguage } from '@/app/language-context'

const allServices = [
  'virtualOffices',
  'ltdCompanyFormation',
  'sharedOffices',
  'ukBankAccounts',
  'virtualMobileNumbers',
  'voipLandline',
  'verifyIdentity',
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
]

export default function SearchServices() {
  const [searchQuery, setSearchQuery] = useState('')
  const { t } = useLanguage()

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    return allServices.filter(service => {
      const serviceText = t(service as any).toLowerCase()
      return serviceText.includes(query)
    })
  }, [searchQuery, t])

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
            {t('whatLookingFor')}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {t('searchDescription')}
          </p>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 text-gray-900"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchQuery.trim() && (
          <div className="mt-8">
            {filteredServices.length > 0 ? (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t('foundServices')}: {filteredServices.length}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredServices.map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-cyan-400 hover:bg-cyan-50 transition"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-cyan-400 text-xl">●</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {t(service as any)}
                          </h4>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  {t('noServicesFound')}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
