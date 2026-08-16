'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import PartnersSection from '@/components/partners-section'
import FeaturedServices from '@/components/featured-services'
import BlogCarousel from '@/components/blog-carousel'
import GlobalCoverageSection from '@/components/global-coverage'
import EarnMoneySection from '@/components/earn-money'
import VideoSection from '@/components/video-section'
import TestimonialsSection from '@/components/testimonials-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <div className="site-content">
        <HeroSection />
        <PartnersSection />
        <FeaturedServices />
        <BlogCarousel />
        <GlobalCoverageSection />
        {/* <EarnMoneySection /> */}
        <VideoSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  )
}
