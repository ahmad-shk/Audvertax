export default function SearchSection() {
  return (
    <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          BUSINESS SUPPORT <br />
          <span className="text-cyan-400">SOLUTIONS</span>
        </h1>

        <div className="bg-cyan-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            What are you looking for today?
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Enter the name of the service you are looking for and we will take you right there e.g. type, &quot;Virtual Office&quot; or &quot;Company Incorporation.&quot;
          </p>
          <div className="flex items-center bg-white rounded-lg border-2 border-gray-300">
            <span className="px-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-lg font-semibold mb-8">
            We Operate In 3 Countries.
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="text-cyan-400">Which</span> Country Do You Require Office Rental And Business Support Services In?
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
              🇨🇦 CANADA
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
              🇬🇧 UNITED KINGDOM
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
              🇺🇸 USA
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
