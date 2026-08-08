'use client'

import { Building2, Users, Phone, FileText } from 'lucide-react'

export default function FeaturedServices() {
  const features = [
    {
      icon: Building2,
      title: 'Shared Offices / Coworking Space',
      description: 'Rent shared office / coworking space from only £60 per person per month.',
    },
    {
      icon: Building2,
      title: 'Self Contained Private Offices',
      description: 'Rent a private office from only £500 per month with free internet, parking and utility bills included.',
    },
    {
      icon: Phone,
      title: '24/7 Call Answering Services',
      description: 'Let us answer your business calls for you. Call Answering Service from only £0.69 per answered call.',
    },
    {
      icon: FileText,
      title: 'Confirmation Statement Filing',
      description: 'Our confirmation statement filing service ensures that your company remains compliant.',
    },
  ]

  return (
    <section className="bg-slate-50 py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Everything in one place</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Support that moves your business forward</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">From your first address to your next expansion, practical services designed around the way you work.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <article key={index} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-slate-950">{feature.title}</h3>
                    <p className="leading-6 text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
