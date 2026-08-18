
'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useCart } from '@/components/cart-provider'

export default function DocumentPage() {
  const router = useRouter()
  const { slug } = useParams<{ slug: string }>()
  const { addItem } = useCart()

  const currentSlug = typeof slug === 'string' ? slug : ''

  const requirementMap: Record<string, { title: string; subtitle: string; fields: Array<{ label: string; type: 'text' | 'email' | 'number' | 'file' | 'select'; name: string; options?: string[] }> }> = {
    'ltd-company-formation': {
      title: 'LTD Company Formation',
      subtitle: 'Please complete the details below to start your company formation.',
      fields: [
        { label: 'Business name', type: 'text', name: 'business-name' },
        { label: 'Company type', type: 'select', name: 'company-type', options: ['Single member LLC', 'Multi member LLC', 'Incorporation'] },
        { label: 'State selection', type: 'select', name: 'state-selection', options: ['Delaware', 'Texas', 'Florida', 'California', 'New York', 'Nevada'] },
        { label: 'Legal full name of single owner', type: 'text', name: 'legal-full-name' },
        { label: 'Business information', type: 'text', name: 'business-information' },
        { label: 'Location', type: 'text', name: 'location' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone number', type: 'number', name: 'phone-number' },
        { label: 'WhatsApp number', type: 'number', name: 'whatsapp-number' },
        { label: 'Passport or CNIC of all members', type: 'file', name: 'passport-or-cnic' },
        { label: 'Bank statement or utility bill for address proof of all members', type: 'file', name: 'address-proof' },
      ],
    },
    'llc-company-formation': {
      title: 'LLC Company Formation',
      subtitle: 'Please complete the details below to start your LLC formation.',
      fields: [
        { label: 'Business name', type: 'text', name: 'business-name' },
        { label: 'Company type', type: 'select', name: 'company-type', options: ['Single member LLC', 'Multi member LLC', 'Incorporation'] },
        { label: 'State selection', type: 'select', name: 'state-selection', options: ['Delaware', 'Texas', 'Florida', 'California', 'New York', 'Nevada'] },
        { label: 'Legal full name of single owner', type: 'text', name: 'legal-full-name' },
        { label: 'Business information', type: 'text', name: 'business-information' },
        { label: 'Location', type: 'text', name: 'location' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone number', type: 'number', name: 'phone-number' },
        { label: 'WhatsApp number', type: 'number', name: 'whatsapp-number' },
        { label: 'Passport or CNIC of all members', type: 'file', name: 'passport-or-cnic' },
        { label: 'Bank statement or utility bill for address proof of all members', type: 'file', name: 'address-proof' },
      ],
    },
    'company-registration': {
      title: 'Company Registration',
      subtitle: 'Please complete the details below to start your company formation.',
      fields: [
        { label: 'Business name', type: 'text', name: 'business-name' },
        { label: 'Company type', type: 'select', name: 'company-type', options: ['Single member LLC', 'Multi member LLC', 'Incorporation'] },
        { label: 'State selection', type: 'select', name: 'state-selection', options: ['Delaware', 'Texas', 'Florida', 'California', 'New York', 'Nevada'] },
        { label: 'Legal full name of single owner', type: 'text', name: 'legal-full-name' },
        { label: 'Business information', type: 'text', name: 'business-information' },
        { label: 'Location', type: 'text', name: 'location' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone number', type: 'number', name: 'phone-number' },
        { label: 'WhatsApp number', type: 'number', name: 'whatsapp-number' },
        { label: 'Passport or CNIC of all members', type: 'file', name: 'passport-or-cnic' },
        { label: 'Bank statement or utility bill for address proof of all members', type: 'file', name: 'address-proof' },
      ],
    },
    itin: {
      title: 'ITIN',
      subtitle: 'Provide the information required for your ITIN application.',
      fields: [
        { label: 'Legal full name', type: 'text', name: 'legal-full-name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone number', type: 'number', name: 'phone-number' },
        { label: 'WhatsApp number', type: 'number', name: 'whatsapp-number' },
        { label: 'Scanned copy of passport', type: 'file', name: 'passport' },
        { label: 'Article of organization (if available)', type: 'file', name: 'article-of-organization' },
        { label: 'EIN form (if available)', type: 'file', name: 'ein-form' },
      ],
    },
    'international-ein-resident': {
      title: 'International EIN (Resident)',
      subtitle: 'Please complete the details below for your EIN request.',
      fields: [
        { label: 'Legal full name of single member or responsible party', type: 'text', name: 'legal-full-name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone number', type: 'number', name: 'phone-number' },
        { label: 'WhatsApp number', type: 'number', name: 'whatsapp-number' },
        { label: 'Article of organization or SS4 form', type: 'file', name: 'company-document' },
      ],
    },
    'international-ein-non-resident': {
      title: 'International EIN (Non-Resident)',
      subtitle: 'Please complete the details below for your EIN request.',
      fields: [
        { label: 'Legal full name of single member or responsible party', type: 'text', name: 'legal-full-name' },
        { label: 'Email', type: 'email', name: 'email' },
        { label: 'Phone number', type: 'number', name: 'phone-number' },
        { label: 'WhatsApp number', type: 'number', name: 'whatsapp-number' },
        { label: 'Article of organization or SS4 form', type: 'file', name: 'company-document' },
      ],
    },
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const allFieldsFilled = Array.from(formData.values()).every((value) => {
      if (typeof value === 'string') return value.trim().length > 0
      return value instanceof File ? value.size > 0 : true
    })

    if (!allFieldsFilled) {
      alert('Please fill in all required fields before proceeding to checkout.')
      return
    }

    if (currentSlug) {
      addItem(currentSlug)
    }

    router.push('/checkout')
  }

  const config = requirementMap[currentSlug] ?? {
    title: currentSlug || 'Document form',
    subtitle: 'Provide information for LTD creation',
    fields: [
      { label: 'full legal name', type: 'text', name: 'full-legal-name' },
      { label: 'LTD name', type: 'text', name: 'ltd-name' },
      { label: 'email', type: 'email', name: 'email' },
      { label: 'contact no', type: 'number', name: 'contact-no' },
      { label: 'residential address', type: 'text', name: 'residential-address' },
      { label: 'business details', type: 'text', name: 'business-details' },
      { label: 'passport', type: 'file', name: 'passport' },
      { label: 'bank statement', type: 'file', name: 'bank-statement' },
      { label: 'estimated time', type: 'number', name: 'estimated-time' },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-t-4 border-cyan-400 bg-slate-950 px-4 py-5 text-white sm:px-6">
        <div className="mx-auto max-w-6xl flex justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white"><ArrowLeft size={16} />Back to home</Link>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white">All services<ArrowRight size={16} /></Link>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{config.title}</h1>
              <p className="text-gray-600">{config.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {config.fields.map((field, key) => (
                <div key={key} className='space-y-6'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      required
                      className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name} 
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-cyan-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                submit
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Need help?{' '}
                <a href="tel:+441234567890" className="text-cyan-600 hover:text-yellow-700 font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-cyan-600 hover:text-yellow-700 font-bold">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

