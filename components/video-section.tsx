export default function VideoSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start, Grow And Get Support For Your Business With Ease With Synapto&apos;
          <span className="bg-cyan-400 px-3 py-1 ml-2">Proven Expertise</span>
          & Hassle Free Solutions. Watch Our Corporate Video To Learn More About Us And What We Can Offer.
        </h2>

        <div className="mt-12 relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop"
            alt="Audvetax Corporate Video"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center group">
            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>

        <p className="text-gray-600 mt-8 leading-relaxed">
          Synapto provides affordable office rental and business support solutions to help entrepreneurs and small businesses overcome common challenges. From company formation to office rental and virtual office / registered agent services, we can help you to streamline your operations and reduce your costs. We can also assist you with statutory filings and with opening bank accounts in various currencies around the world. We operate in the UK, Canada and USA a provide a vast array of business support solutions. With over 100,000 businesses assisted to date and thousands of 5-star reviews, we would love to become your next trusted business partner.
        </p>
      </div>
    </section>
  )
}
