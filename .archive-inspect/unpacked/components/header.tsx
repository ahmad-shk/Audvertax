'use client'

import { Menu, X, Mail, MessageCircle, Phone, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/language-context'
import { Language } from '@/lib/translations'
import CountryDropdown from './country-dropdown'
import CartLink from './cart-link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [activeCountry, setActiveCountry] = useState<'uk' | 'usa' | 'canada' | null>(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Dutch' },
    { code: 'zh', name: '中文' },
    { code: 'de', name: 'Deutsch' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > 100) {
        setIsHeaderVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`sticky top-0 z-50 border-t-4 border-cyan-400 bg-white/95 shadow-sm backdrop-blur-md transition-transform duration-300 ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Contact Bar */}
      <div className="overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-1.5 text-gray-900 sm:px-6 lg:px-8">
        <div className="header-marquee-track mx-auto flex w-max items-center gap-8 whitespace-nowrap text-xs font-medium sm:text-sm">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-5 sm:gap-6" aria-hidden={copy === 1}>
              <a href="mailto:info@audvetax.com" className="flex items-center gap-1.5 hover:text-gray-700">
                <Mail size={14} />
                <span>{t('email')}</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-gray-700">
                <MessageCircle size={14} />
                <span>{t('liveChat')}</span>
              </a>
              <a href="https://wa.me/447911123456" className="flex items-center gap-1.5 hover:text-gray-700">
                <Phone size={14} />
                <span>{t('whatsapp')}</span>
              </a>
              <a href="tel:+441234567890" className="flex items-center gap-1.5 hover:text-gray-700">
                <Phone size={14} />
                <span>{t('call')}</span>
              </a>
              <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="flex items-center gap-1.5 hover:text-gray-700 transition" tabIndex={copy === 1 ? -1 : 0}>
                <Globe size={14} />
                <span className="font-bold">{language.toUpperCase()}</span>
              </button>
            </div>
          ))}
        </div>
        {isLanguageOpen && (
          <div className="absolute right-4 mt-2 z-10 rounded border-2 border-gray-300 bg-white shadow-lg">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsLanguageOpen(false) }} className={`block w-full px-4 py-2 text-left hover:bg-blue-100 transition ${language === lang.code ? 'bg-blue-200 font-bold' : ''}`}>
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex min-w-0 shrink items-center gap-2 hover:opacity-80 transition sm:gap-3">
              <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-lg font-black text-white sm:h-10 sm:w-10 sm:text-2xl">A</span>
              <div className="min-w-0">
                <div className="truncate text-lg font-bold text-gray-900 sm:text-xl">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">AUDVETAX</span>
                  <span className="ml-1 text-gray-900"></span>
                </div>
                <p className="mt-0.5 text-[10px] leading-tight text-gray-600 sm:text-xs">Global Business Support Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-900 font-medium hover:text-cyan-400 transition border-b-2 border-blue-500 pb-2">
                {t('home')}
              </a>
              <CountryDropdown country="uk" label="UK" isOpen={activeCountry === 'uk'} onOpen={() => setActiveCountry('uk')} onClose={() => setActiveCountry(null)} />
              <CountryDropdown country="usa" label="USA" isOpen={activeCountry === 'usa'} onOpen={() => setActiveCountry('usa')} onClose={() => setActiveCountry(null)} />
              <CountryDropdown country="canada" label="Canada" isOpen={activeCountry === 'canada'} onOpen={() => setActiveCountry('canada')} onClose={() => setActiveCountry(null)} />
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <CartLink />
              <Link href="/login" className="px-4 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition font-medium text-sm block">
                {t('clientLogin')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-lg border-2 border-blue-600 bg-blue-600 p-0 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95 sm:size-11 sm:rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-2">
              <a href="#" className="block py-2 text-gray-900 font-medium hover:text-blue-600">
                {t('home')}
              </a>
              <button className="block w-full text-left py-2 text-gray-900 font-medium hover:text-blue-600">
                UK
              </button>
              <button className="block w-full text-left py-2 text-gray-900 font-medium hover:text-blue-600">
                USA
              </button>
              <button className="block w-full text-left py-2 text-gray-900 font-medium hover:text-blue-600">
                Canada
              </button>
              <CartLink />
              <Link href="/login" className="block w-full mt-4 px-4 py-2 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition font-medium text-sm text-center">
                {t('clientLogin')}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="overflow-hidden px-0 py-2.5 sm:px-6 md:py-6 lg:px-8">
          <div className="stats-marquee-track mx-auto flex w-max items-center gap-8 whitespace-nowrap md:grid md:w-full md:grid-cols-5 md:gap-6">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8 md:contents" aria-hidden={copy === 1}>
                <div className="flex min-w-[145px] flex-none items-center gap-2 md:min-w-0">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent md:text-2xl">4.6</div>
                  <div><div className="text-[11px] font-medium text-gray-900 md:text-xs">Google Reviews</div><div className="text-[11px] text-gray-600 md:text-xs">1000+ reviews</div></div>
                </div>
                <div className="min-w-[150px] flex-none md:min-w-0"><div className="text-xl font-bold text-gray-900 md:text-2xl">9+</div><div className="whitespace-normal text-[11px] text-gray-600 md:text-xs">Number of global offices from which we operate</div></div>
                <div className="min-w-[145px] flex-none md:min-w-0"><div className="text-xl font-bold text-gray-900 md:text-2xl">82637+</div><div className="text-[11px] text-gray-600 md:text-xs">Clients Served To Date</div></div>
                <div className="min-w-[155px] flex-none md:min-w-0"><div className="text-xl font-bold text-gray-900 md:text-2xl">38+</div><div className="whitespace-normal text-[11px] text-gray-600 md:text-xs">Countries From Which Our Clients Originate</div></div>
                <div className="min-w-[155px] flex-none md:min-w-0"><div className="text-xl font-bold text-gray-900 md:text-2xl">1 Day</div><div className="whitespace-normal text-[11px] text-gray-600 md:text-xs">Average Application Processing Time</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </header>
  )
}
