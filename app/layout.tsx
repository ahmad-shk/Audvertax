import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from './language-context'
import WhatsAppButton from '@/components/whatsapp-button'
import { CartProvider } from '@/components/cart-provider'
import { UserProvider } from '@/app/user-context'

export const metadata: Metadata = {
  title: 'Audvetax - Global Business Support Solutions',
  description: 'Affordable office rental, company formation, and business support solutions. Virtual offices, shared spaces, and business services in UK, USA, and Canada.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className="antialiased">
        <LanguageProvider>
          <UserProvider>
            <CartProvider>
              {children}
              <WhatsAppButton />
            </CartProvider>
          </UserProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
