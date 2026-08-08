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
  'ltd-company-formation': 100,
  'uk-bank-accounts': 0,
  'company-annual-accounts': 100,
  'company-closure': 100,
  'shared-offices': 100,
  'private-offices': 100,
  'custom-website': 100,
  'shopify-setup': 100,
  'international-bank': 100,
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
