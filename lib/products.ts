import { servicesData } from './services-data'

export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  currency: 'gbp'
}

const pricesInPence: Record<string, number> = {
  'virtual-offices': 100,
  'ltd-company-formation': 16500,
  'ltd-company-formation-standard': 16500,
  'ltd-company-formation-premium': 22500,
  'llc-company-formation': 19900,
  'llc-company-formation-standard': 19900,
  'llc-company-formation-premium': 29900,
  'company-registration': 12500,
  'company-registration-basic': 12500,
  'company-registration-standard': 17400,
  'company-registration-premium': 28000,
  'uk-bank-accounts': 0,
  'company-annual-accounts': 100,
  'company-closure': 100,
  'shared-offices': 100,
  'private-offices': 100,
  'custom-website': 100,
  'shopify-setup': 100,
  'international-bank': 100,
}

export const PRODUCTS: Product[] = servicesData.flatMap((service) => {
  const baseProduct: Product = {
    id: service.slug,
    name: service.name,
    description: service.description,
    priceInCents: pricesInPence[service.slug] ?? 0,
    currency: 'gbp',
  }

  if (!service.packages) return [baseProduct]

  return [
    baseProduct,
    ...service.packages.map((pkg) => ({
      id: `${service.slug}-${pkg.type}`,
      name: `${service.name} - ${pkg.type.charAt(0).toUpperCase()}${pkg.type.slice(1)}`,
      description: `${service.description} (${pkg.type})`,
      priceInCents: pricesInPence[`${service.slug}-${pkg.type}`] ?? pricesInPence[service.slug] ?? 0,
      currency: 'gbp' as const,
    })),
  ]
})

export function getProduct(productId: string) {
  return PRODUCTS.find((product) => product.id === productId)
}

export function formatProductPrice(product: Product) {
  return product.priceInCents === 0
    ? 'Contact us'
    : new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: product.currency,
      }).format(product.priceInCents / 100)
}
