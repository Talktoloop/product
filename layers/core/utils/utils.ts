import type { Comparator, Guard, ValuedObject } from '@ourloop/product-core-types'

import { nanoid } from 'nanoid'
import * as lodash from 'lodash-es'

export { lodash }

export function randomId(prefix?: string): string {
  const id = nanoid()
  return prefix ? `${prefix}-${id}` : id
}

export function identity<T>(value: T): T {
  return value
}

export function is<T>(value: T): value is T {
  return true
}

export function valueOf<T extends ValuedObject<unknown>>(obj: T): T['value'] {
  return obj.value
}

export function cond<T, R>(
  test: T | [value: T, pred: Comparator<T>],
  ...conditions: [condition: T, result: R][]
) {
  const [value, predicate] = Array.isArray(test) ? test : [test, lodash.eq]
  for (const [condition, result] of conditions) {
    if (predicate(condition, value)) return result
  }
  return undefined
}

export function condP<T>(value: T, ...conditions: [guard: Guard<unknown>, result: unknown][]) {
  for (const [guard, result] of conditions) {
    if (guard(value)) return result
  }
  return undefined
}
