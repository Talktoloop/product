import type { Guard, TypeOfGuard } from '@ourloop/product-core-types'

export interface Variant<T> {
  name: string
  when: Guard<T>
  value: T
}

export interface GuardMap {
  [key: string]: Guard
}

export type VariantMap<G extends GuardMap> = {
  [K in keyof G]: Variant<TypeOfGuard<G[K]>>
}

export type VariantSlotProps<T> = {
  attrs: Record<string, unknown>
  variant: Variant<T>
}

export type VariantSlot<T> = (props: VariantSlotProps<T>) => VNode

export type VariantSlots<T, G extends GuardMap> = {
  [K in keyof G]: VariantSlot<TypeOfGuard<G[K]>>
} & {
  default: VariantSlot<T>
}
