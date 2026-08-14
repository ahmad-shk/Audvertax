'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BlogCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const blogs = [
    {
      id: 1,
      title: 'How to Find Your Companies House Personal Code After Verifying Your Identity?',
      category: 'UK Blogs, USA Blogs',
      date: 'May 18, 2026',
      excerpt: 'A complete guide for UK company directors and people with significant control [...]',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Setting Up Virtual Office for Your Business',
      category: 'Business Tips',
      date: 'May 15, 2026',
      excerpt: 'Learn how to establish a professional virtual office presence for your company.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % blogs.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + blogs.length) % blogs.length)
  const blog = blogs[currentSlide]

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-sm font-medium text-blue-600">OUR BLOGS</p>
          <h2 id="blog-heading" className="text-balance text-3xl font-bold text-slate-900 sm:text-4xl">
            Read Our <span className="bg-gradient-to-r from-blue-600 to-cyan-400 px-2.5 py-1">Recent</span> Stories
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous blog story"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg transition hover:scale-105 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={24} />
          </button>

          <article className="grid overflow-hidden rounded-2xl border border-amber-100 bg-amber-50 shadow-sm md:grid-cols-2">
            <div className="flex flex-col p-7 sm:p-10">
              <span className="mb-4 w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-600 shadow-sm">{blog.category}</span>
              <h3 className="text-balance text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{blog.title}</h3>
              <p className="mt-4 text-sm font-medium text-slate-500">{blog.date}</p>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">{blog.excerpt}</p>
              <button type="button" className="mt-7 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                READ MORE <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="hidden min-h-64 md:block">
              <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
            </div>
          </article>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next blog story"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg transition hover:scale-105 sm:h-12 sm:w-12"
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-6 flex justify-center gap-2" aria-label="Blog story navigation">
            {blogs.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show blog story ${index + 1}`}
                aria-current={index === currentSlide}
                className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-cyan-500' : 'w-2.5 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
