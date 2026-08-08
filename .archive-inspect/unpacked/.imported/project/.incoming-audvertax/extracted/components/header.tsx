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
      <div className="overflow-x-auto bg-gradient-to-r from-blue-600 to-cyan-400 text-gray-900 py-2 px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="max-w-7xl mx-auto flex min-w-max items-center justify-between gap-4 text-sm font-medium">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:info@audvetax.com" className="flex items-center gap-2 hover:text-gray-700">
              <Mail size={16} />
              <span>{t('email')}</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-700">
              <MessageCircle size={16} />
              <span>{t('liveChat')}</span>
            </a>
            <a href="https://wa.me/447911123456" className="flex items-center gap-2 hover:text-gray-700">
              <Phone size={16} />
              <span>{t('whatsapp')}</span>
            </a>
            <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-gray-700">
              <Phone size={16} />
              <span>{t('call')}</span>
            </a>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 hover:text-gray-700 transition"
            >
              <Globe size={16} />
              <span className="font-bold">{language.toUpperCase()}</span>
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 bg-white border-2 border-gray-300 rounded shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsLanguageOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-blue-100 transition ${
                      language === lang.code ? 'bg-blue-200 font-bold' : ''
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition">
              <img src="/synapto-logo.png" alt="Audvetax" className="h-10 w-auto" />
              <div>
                <div className="text-xl font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">AUDVETAX</span>
                  <span className="ml-1 text-gray-900"></span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">Global Business Support Solutions</p>
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
              className="md:hidden inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-blue-600 px-3 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={25} strokeWidth={2.5} /> : <Menu size={25} strokeWidth={2.5} />}
              <span className="text-xs font-bold uppercase tracking-wide">{isMenuOpen ? 'Close' : 'Menu'}</span>
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
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex md:grid md:grid-cols-5 gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Google Reviews */}
            <div className="flex min-w-[210px] flex-none snap-start items-start gap-3 md:min-w-0 md:flex-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">4.6</div>
              <div>
                <div className="text-xs font-medium text-gray-900">Google Reviews</div>
                <div className="text-xs text-gray-600">1000+ reviews</div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="min-w-[210px] flex-none snap-start md:min-w-0 md:flex-1">
              <div className="text-2xl font-bold text-gray-900">9+</div>
              <div className="text-xs text-gray-600">Number of global offices from which we operate</div>
            </div>

            {/* Clients Served */}
            <div className="min-w-[210px] flex-none snap-start md:min-w-0 md:flex-1">
              <div className="text-2xl font-bold text-gray-900">82637+</div>
              <div className="text-xs text-gray-600">Clients Served To Date</div>
            </div>

            {/* Countries */}
            <div className="min-w-[210px] flex-none snap-start md:min-w-0 md:flex-1">
              <div className="text-2xl font-bold text-gray-900">38+</div>
              <div className="text-xs text-gray-600">Countries From Which Our Clients Originate</div>
            </div>

            {/* Processing Time */}
            <div className="min-w-[210px] flex-none snap-start md:min-w-0 md:flex-1">
              <div className="text-2xl font-bold text-gray-900">1 Day</div>
              <div className="text-xs text-gray-600">Average Application Processing Time</div>
            </div>
          </div>
        </div>
      </div>


    </header>
  )
}
