export default function EarnMoneySection() {
  return (
    <section className="relative bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Earn money by <br />
          promoting Audvetax
        </h2>
        <p className="text-white text-lg mb-8">
          Sign up for our Reseller, Affiliate or Refer a Friend Programmes to start earning money and to be a part of our success.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-full hover:shadow-lg transition font-bold text-lg">
          REGISTER NOW →
        </button>
      </div>
    </section>
  )
}
