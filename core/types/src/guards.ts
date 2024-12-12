export type Predicate = (...args: any[]) => boolean

export type TypeGuard<T> = (value: unknown) => value is T

export type Test = Predicate | TypeGuard<unknown>
