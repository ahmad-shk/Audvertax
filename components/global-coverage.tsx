export default function GlobalCoverageSection() {
  return (
    <section className="relative isolate overflow-hidden bg-amber-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover opacity-35 mix-blend-multiply"
      />
      <div className="absolute inset-0 -z-10 bg-amber-50/45" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,251,235,.22)_72%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-sm font-medium mb-2">TRULY GLOBAL COVERAGE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Clients Across the Globe
            </h2>
            <p className="text-gray-700 mb-6">
              We support clients from a wide range of countries worldwide - including regions many providers do not serve - making UK company formation accessible wherever you are.
            </p>
            {/* <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium">
              View Supported Countries →
            </button> */}
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">GLOBAL</div>
                <div className="text-sm">COVERAGE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
