import { CtaType } from './cta-type'

export type PriceType = {
  featured?: boolean
	title?: string
  plausibleEvent?: string
  price?: number
  cta?: CtaType
  offer?: string
  perks?: string[]
}