import { servicesData } from './services-data'

export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  currency: 'gbp'
}

const pricesInPence: Record<string, number> = {
  'virtual-offices': 6000,
  'ltd-company-formation': 9900,
  'uk-bank-accounts': 0,
  'company-annual-accounts': 15000,
  'company-closure': 19900,
  'shared-offices': 6000,
  'private-offices': 50000,
  'custom-website': 150000,
  'shopify-setup': 200000,
  'international-bank': 29900,
}

export const PRODUCTS: Product[] = servicesData.map((service) => ({
  id: service.slug,
  name: service.name,
  description: service.description,
  priceInCents: pricesInPence[service.slug] ?? 0,
  currency: 'gbp',
}))

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
