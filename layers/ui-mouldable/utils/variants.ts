import type { Guard } from '@ourloop/product-core-types'
import type { Variant } from '../types'

export function variant<T>(name: string, value: T, when: Guard<T> = is<T>): Variant<T> {
  return { name, when, value }
}
