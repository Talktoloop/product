import type { Guard } from '@ourloop/product-core-types'

export interface Variant {
  name: string
  when: Guard
}
