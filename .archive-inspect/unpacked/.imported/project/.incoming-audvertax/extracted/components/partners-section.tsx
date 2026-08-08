export default function PartnersSection() {
  const partners = [
    { name: 'Barclays', color: 'from-blue-600 to-blue-700' },
    { name: 'Tide', color: 'from-purple-600 to-purple-700' },
    { name: 'Transwap', color: 'from-gray-800 to-gray-900' },
    { name: 'ANNA', color: 'from-red-600 to-red-700' },
    { name: 'Monzo', color: 'from-red-500 to-red-600' },
    { name: 'World First', color: 'from-pink-600 to-pink-700' },
    { name: 'Revolut', color: 'from-black to-gray-900' },
    { name: 'Templer Bank', color: 'from-blue-400 to-blue-500' },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            We only <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Partner</span> with the best
          </h2>
          <p className="text-gray-600 text-lg">Trusted by industry leaders worldwide</p>
        </div>
        
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
          {partners.map((partner) => (
            <div key={partner.name} className={`bg-gradient-to-br ${partner.color} min-w-[210px] snap-start rounded-xl p-8 flex items-center justify-center min-h-28 md:min-w-0 text-white font-bold text-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
