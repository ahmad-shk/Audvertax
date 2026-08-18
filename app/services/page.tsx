import { Building2, Briefcase, Phone, Globe, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { servicesData } from '@/lib/services-data'

const defaultIcons = {
  'best-sellers': Building2,
  'company-services': Briefcase,
  'company-registration': Briefcase,
  taxation: FileText,
  'office-rental': Globe,
  'custom-website': Globe,
  'shopify-setup': Globe,
  'bank-creation': Building2,
}

export default function ServicesPage() {
  const usaServices = servicesData.filter(
    (service) => service.countries.includes('usa') && service.slug !== 'ltd-company-formation' && service.slug !== 'llc-company-formation'
  )

  const ukServices = servicesData.filter(
    (service) => service.countries.includes('uk') || service.slug === 'ltd-company-formation'
  )

  const renderServiceCards = (services: typeof servicesData) =>
    services.map((service) => {
      const Icon = defaultIcons[service.category] ?? Building2
      const features = service.packages ? service.packages.map((pkg) => pkg.type) : service.features.slice(0, 3)

      return (
        <div
          key={service.slug}
          className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition hover:border-cyan-400 hover:shadow-xl"
        >
          <div className="flex h-full flex-col p-6">
            <div className="flex-1">
              <Icon className="mb-4 text-cyan-400" size={32} />
              <p className="mb-2 text-sm font-semibold text-cyan-600">{service.category.replace('-', ' ')}</p>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{service.name}</h3>
              <p className="mb-6 text-gray-700">{service.description}</p>

              <div className="mb-6 space-y-2">
                {features.map((feature, idx) => (
                  <div key={`${service.slug}-${idx}`} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto border-t-2 border-gray-200 pt-4">
              {service.packages ? (
                <div className="space-y-2">
                  {service.packages.map((pkg) => (
                    <div key={`${service.slug}-${pkg.type}`} className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                      <span className="text-sm font-medium capitalize text-slate-700">{pkg.type}</span>
                      <span className="text-sm font-bold text-cyan-600">{pkg.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mb-4 text-lg font-bold text-cyan-600">{service.pricing}</p>
              )}
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 font-bold text-gray-900 transition hover:bg-blue-500"
              >
                View details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )
    })

  return (
    <div className="bg-white">
      <div className="border-t-4 border-cyan-400 bg-linear-to-r from-gray-900 to-gray-800 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-cyan-400 hover:text-yellow-300 font-medium text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Company formation, taxation, and business support services tailored for UK and USA clients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">United States</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">USA Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderServiceCards(usaServices)}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">United Kingdom</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">UK Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderServiceCards(ukServices)}
          </div>
        </section>
      </div>
    </div>
  )
}
