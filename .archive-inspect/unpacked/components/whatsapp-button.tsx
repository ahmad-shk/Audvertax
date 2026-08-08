'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '447911123456'
  const message = 'Hello, I would like to know more about your services.'

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 sm:bottom-8 sm:right-8 sm:p-4"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} className="sm:h-7 sm:w-7" />
    </a>
  )
}
