import type { ValuedObject } from '@ourloop/product-core-types'

export { nanoid } from 'nanoid'

export function identity<T>(value: T): T {
  return value
}

export function is<T>(value: T): value is T {
  return true
}

export function valueOf<T extends ValuedObject<unknown>>(obj: T): T['value'] {
  return obj.value
}
