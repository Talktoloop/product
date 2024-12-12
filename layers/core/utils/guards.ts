import type { TypedObject } from '@ourloop/product-core-types'

export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null
}

export function isTypedObject<T extends TypedObject>(value: unknown | T): value is T {
  return isObject(value) && '__type' in value && typeof value.__type === 'string'
}

export function isTypeOf<T extends TypedObject>(value: unknown | T, type: string): value is T {
  return isTypedObject(value) && value.__type === type
}
