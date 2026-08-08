'use client'

import { ArrowRight, Calendar } from 'lucide-react'

export default function BlogSection() {
  const blogs = [
    {
      date: 'May 18, 2026',
      title: 'How to Find Your Companies House Personal Code After Verifying Your Identity?',
      excerpt: 'A complete guide for UK company directors and people with significant control...',
      category: 'UK Blogs, USA Blogs',
    },
    {
      date: 'May 12, 2026',
      title: 'Can You Have Multiple Businesses Under One LLC in the UK?',
      excerpt: 'If you\'re an entrepreneur in the UK juggling multiple business ideas, you...',
      category: 'UK Blogs',
    },
    {
      date: 'May 7, 2026',
      title: 'Audvetax Promo Code: Save 10% on Your Virtual Office',
      excerpt: 'Audvetax Discount Code – What You Need to Know. Why Choose Audvetax?...',
      category: 'UK Blogs',
    },
    {
      date: 'Mar 17, 2026',
      title: 'Can You Close a Company with Debts at Companies House?',
      excerpt: 'Don\'t know how to close a UK company? Let us handle it for you...',
      category: 'UK Blogs',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Blog
          </h2>
          <p className="text-gray-600 text-lg">
            Read Our Recent Stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-sm rounded-full mb-3">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <button className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
