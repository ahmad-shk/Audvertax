'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Palmer',
    text: "One of the best companies I've ever used to set up my business and hold my virtual business address. Easy to use, quick and cheap. The value they provide is exceptional.",
    rating: 5,
  },
  {
    name: 'Aaron Smiles',
    text: 'Efficient, all-in-one service with lots of perks and bonuses at an amazingly competitive price! Especially like that you get your own office number.',
    rating: 5,
  },
  {
    name: 'Roberto Camacho',
    text: 'Without words, simple excellent people and customer support. From Italy with love! Thanks a Lot. One year later and you still on duty!',
    rating: 5,
  },
  {
    name: 'Ljubisha Trajkov',
    text: 'So far the best company ever. Amazing Support, Excellent and Fastest Services. My UK company was registered in 1 day.',
    rating: 5,
  },
  {
    name: 'Clair Roe',
    text: 'I used Audvetax to incorporate my company, they did a great job, it was done quickly and their communication was excellent. They delivered on all the bonuses too.',
    rating: 5,
  },
  {
    name: 'Mark Chapman',
    text: "I recently opted for Audvetax Offices' Virtual Office and Company Formation services, and couldn't be more pleased with the experience. Their team was incredibly responsive.",
    rating: 5,
  },
]

function ReviewCard({ name, text, rating }: (typeof testimonials)[number]) {
  return (
    <article className="review-card w-[min(84vw,420px)] shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:w-[390px] sm:p-6">
      <div className="mb-4 flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" className="text-cyan-400" aria-hidden="true" />
        ))}
      </div>
      <p className="mb-2 text-xs font-semibold text-cyan-600">Google Verified Reviews</p>
      <p className="min-h-[108px] text-[15px] leading-6 text-slate-600">{text}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-sm font-bold text-white" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <p className="font-semibold text-slate-900">{name}</p>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-sm font-medium text-slate-500">OUR REVIEWS</p>
          <h2 id="reviews-heading" className="text-balance text-3xl font-bold text-slate-900 sm:text-4xl">
            See What Our <span className="bg-cyan-400 px-2.5">Customers</span> Are Saying
          </h2>
        </div>

        <div className="review-viewport -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" aria-label="Customer reviews">
          <div className="review-track flex w-max gap-4 py-2 sm:gap-5">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <ReviewCard key={`${testimonial.name}-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
        <p className="mt-5 text-center text-xs text-slate-400">Reviews scroll automatically</p>
      </div>
    </section>
  )
}
