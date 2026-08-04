'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Mail, Sparkles } from 'lucide-react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_32%),radial-gradient(circle_at_90%_80%,color-mix(in_oklab,var(--brand)_12%,transparent),transparent_35%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full border border-brand/15" />
      <div className="pointer-events-none absolute -right-8 top-40 h-56 w-56 rounded-full border border-brand/10" />

      <header className="relative z-10 flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a href="#top" className="flex items-center gap-3" aria-label="Audvetax home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-lg shadow-brand/20">
            <Sparkles className="size-4" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="font-sans text-lg font-semibold tracking-tight text-foreground">Audvetax</span>
        </a>
        <span className="rounded-full border border-border bg-card/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          Launching soon
        </span>
      </header>

      <section id="top" className="relative z-10 flex flex-1 items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              A new perspective is arriving
            </div>
            <h1 className="max-w-xl text-balance font-sans text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-[5.5rem]">
              See what&apos;s next.
            </h1>
            <p className="mt-7 max-w-lg text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Audvetax is building a sharper, simpler way to move forward. Something thoughtful is almost ready for you.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 max-w-md">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email address"
                    className="h-12 w-full rounded-xl border border-border bg-card/80 pl-11 pr-4 text-sm text-foreground outline-none backdrop-blur transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <button type="submit" className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
                  {submitted ? 'You’re on the list' : 'Keep me posted'}
                  {submitted ? <Check className="size-4" aria-hidden="true" /> : <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">No noise. Just a note when Audvetax is ready.</p>
            </form>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-brand p-7 shadow-2xl shadow-brand/20 sm:p-10">
              <div className="flex h-full flex-col justify-between rounded-[1.35rem] border border-brand-foreground/20 bg-brand/10 p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-foreground/70">AV / 001</span>
                  <span className="size-2 rounded-full bg-brand-foreground" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-foreground/70">The future is</p>
                  <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-brand-foreground sm:text-5xl">almost here.</p>
                </div>
                <div className="flex items-end justify-between border-t border-brand-foreground/20 pt-5 text-brand-foreground/70">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Audvetax</span>
                  <span className="font-mono text-[10px]">2026</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground"><span className="size-2 rounded-full bg-brand" aria-hidden="true" />Building in public</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 flex items-center justify-between border-t border-border/70 px-6 py-5 text-xs text-muted-foreground sm:px-10 lg:px-16">
        <span>© 2026 Audvetax</span>
        <span>Made for what&apos;s next.</span>
      </footer>
    </main>
  )
}
