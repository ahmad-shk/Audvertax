import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Clock3, Headphones } from 'lucide-react'
import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/add-to-cart-button'
import { getServiceBySlug } from '@/lib/services-data'
import { formatProductPrice, getProduct } from '@/lib/products'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const product = service ? getProduct(service.slug) : undefined
  if (!service || !product) notFound()

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-t-4 border-cyan-400 bg-slate-950 px-4 py-5 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white"><ArrowLeft size={16} /> All services</Link>
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{service.category.replace('-', ' ')}</p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{service.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{service.details}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => <div key={feature} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-500" size={19} /><span className="text-sm font-medium text-slate-700">{feature}</span></div>)}
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-slate-950 p-6 text-white shadow-2xl sm:p-8">
          <p className="text-sm text-slate-300">Starting price</p>
          <p className="mt-2 text-4xl font-bold text-cyan-300">{formatProductPrice(product)}</p>
          <div className="my-6 space-y-3 border-y border-white/10 py-5 text-sm text-slate-200"><p className="flex gap-3"><Clock3 size={18} className="text-cyan-300" /> {service.leadTime ?? 'Fast setup'}</p><p className="flex gap-3"><Headphones size={18} className="text-cyan-300" /> {service.support ?? 'Expert support'}</p></div>
          {product.priceInCents > 0 ? <AddToCartButton productId={product.id} /> : <Link href="/contact" className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950">Request a quote</Link>}
          <p className="mt-4 text-xs leading-5 text-slate-400">Secure checkout powered by Stripe. Your final total is calculated in your cart.</p>
        </aside>
      </section>
    </main>
  )
}
