import { Mail, MessageCircle, Phone } from 'lucide-react'

export default function SupportSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Excellent Customer Support</h2>
        <div className="flex justify-center mb-12">
          <div className="w-12 h-1 bg-cyan-400"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-cyan-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail size={32} className="text-gray-900" />
            </div>
            <h3 className="font-semibold">Email</h3>
          </div>
          <div className="text-center">
            <div className="bg-cyan-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} className="text-gray-900" />
            </div>
            <h3 className="font-semibold">Live Chat</h3>
          </div>
          <div className="text-center">
            <div className="bg-cyan-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-gray-900" />
            </div>
            <h3 className="font-semibold">WhatsApp</h3>
          </div>
          <div className="text-center">
            <div className="bg-cyan-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone size={32} className="text-gray-900" />
            </div>
            <h3 className="font-semibold">Call</h3>
          </div>
        </div>

        <div className="border-t border-cyan-400 pt-8 mb-8">
          <h3 className="text-center font-semibold mb-6">OUR OFFICE LOCATIONS</h3>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div>• London, UK</div>
            <div>• Belfast, Northern Ireland</div>
            <div>• Glasgow, Scotland</div>
            <div>• Toronto, Canada</div>
            <div>• Delaware, USA</div>
          </div>
        </div>

        <div className="border-t border-cyan-400 pt-8 mb-8">
          <h3 className="text-center font-semibold mb-6">USEFUL LINKS</h3>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <a href="#" className="hover:text-cyan-400">• About Us</a>
            <a href="#" className="hover:text-cyan-400">• Blog</a>
            <a href="#" className="hover:text-cyan-400">• Contact Us</a>
            <a href="#" className="hover:text-cyan-400">• ID - Docs</a>
            <a href="#" className="hover:text-cyan-400">• Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">• Terms & Conditions</a>
            <a href="#" className="hover:text-cyan-400">• Site Map</a>
          </div>
        </div>

        <div className="border-t border-cyan-400 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-cyan-400">4.6</div>
              <div>
                <div className="text-cyan-400 text-sm">★★★★★</div>
                <div className="text-xs text-gray-400">Our customers have rated us as excellent!</div>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-cyan-400 hover:text-white">f</a>
              <a href="#" className="text-cyan-400 hover:text-white">📷</a>
              <a href="#" className="text-cyan-400 hover:text-white">▶</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
