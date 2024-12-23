/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForwardPropsEmits as useForwardPropsEmitsRadix } from 'radix-vue'
import _ from 'lodash'

export type Emits<Name extends string, Args extends any[]> = (name: Name, ...args: Args) => void
export type EmitRecord<Emit extends Emits<Name, Args>, Name extends string, Args extends any[]> =
  Emit extends Emits<infer Name, infer Args>
    ? Record<`on${Capitalize<Name>}`, (...args: Args) => void>
    : never

export function useForwardPropsEmits<
  T extends object,
  Name extends string,
  Args extends any[] = any[],
  Emit extends Emits<Name, Args> = Emits<Name, Args>,
>(
  props: MaybeRefOrGetter<T>,
  emit?: Emit,
  omitProps: (keyof T)[] = []
): ComputedRef<T & EmitRecord<Emit, Name, Args>> {
  return useForwardPropsEmitsRadix(_.omit(props, omitProps), emit as Emit) as ComputedRef<
    T & EmitRecord<Emit, Name, Args>
  >
}
