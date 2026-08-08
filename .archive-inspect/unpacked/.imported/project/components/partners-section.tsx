const partners = [
  { name: 'Barclays', mark: 'B', accent: 'bg-[#1682ff]' },
  { name: 'Tide', mark: 'T', accent: 'bg-[#7457ff]' },
  { name: 'Transwap', mark: '↗', accent: 'bg-[#0c172b]' },
  { name: 'ANNA', mark: 'A', accent: 'bg-[#f04444]' },
  { name: 'Monzo', mark: 'M', accent: 'bg-[#f34d61]' },
  { name: 'World First', mark: 'W', accent: 'bg-[#e83d87]' },
  { name: 'Revolut', mark: 'R', accent: 'bg-[#111827]' },
  { name: 'Templer Bank', mark: 'T', accent: 'bg-[#3b91f5]' },
]

function PartnerTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...partners, ...partners]

  return (
    <div className="partner-marquee-viewport" tabIndex={0} aria-label="Banking partners">
      <div className={`partner-marquee-track ${reverse ? 'partner-marquee-track-reverse' : ''}`}>
        {items.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex min-w-[205px] items-center gap-4 rounded-2xl border border-white/20 bg-white/[0.11] px-5 py-4 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-md transition-colors hover:bg-white/[0.2] sm:min-w-[235px]"
          >
            <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${partner.accent} text-lg font-black text-white shadow-lg`} aria-hidden="true">
              {partner.mark}
            </span>
            <span className="font-semibold tracking-tight">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PartnersSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#08152d] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <video
        className="absolute inset-0 -z-20 size-full object-cover opacity-35"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NmMcxwoRM5rj1JdM8nPTI5tQVTWyw1.png"
        aria-hidden="true"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202026-08-07%20161838-UWfqlL6Lw2mgspACMe6mhVZVTEwp24.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(8,21,45,.98),rgba(10,42,76,.84),rgba(7,22,45,.94))]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Built on trusted connections</p>
            <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We only <span className="text-cyan-300">partner</span> with the best.
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-6 text-slate-300 sm:text-right">Trusted names that help ambitious businesses move money, launch faster, and grow globally.</p>
        </div>

        <div className="space-y-4">
          <PartnerTrack />
          <PartnerTrack reverse />
        </div>

        <div className="mt-8 flex items-center gap-3 text-xs font-medium text-slate-300">
          <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" aria-hidden="true" />
          Hover or focus to pause the partner wall
        </div>
      </div>
    </section>
  )
}
