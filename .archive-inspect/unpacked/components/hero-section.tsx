'use client'

import { ArrowRight, CheckCircle2, Search, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-1 text-white py-12 sm:py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
          alt="Professionals collaborating in a bright office"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            <Sparkles size={14} />
            Built for ambitious businesses
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            GLOBAL OFFICE RENTAL <span className="text-cyan-300">&</span>{' '}
            BUSINESS SUPPORT
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            A trusted launchpad for your next chapter. Find the right workspace, company services, and local support in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-200">
            {['Flexible plans', 'Global coverage', 'Expert support'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-200 hover:shadow-xl hover:shadow-cyan-300/20">
              Start Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-white/40 px-6 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/10">
              Explore services
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
          <div className="rounded-2xl bg-white p-5 text-slate-900 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Find your best fit</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">What can we help you launch?</h2>
            <div className="relative mt-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {['Office space', 'Virtual office', 'Company setup', 'Call answering'].map((item) => (
                <span key={item} className="rounded-lg bg-slate-50 px-3 py-2.5 font-medium text-slate-600">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
