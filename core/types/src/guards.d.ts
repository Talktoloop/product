export type Predicate = (...args: any[]) => boolean

export type TypeGuard<T> = (value: unknown | T) => value is T

export type Guard<T = unknown> = Predicate | TypeGuard<T>

export type TypeOfGuard<G> = G extends TypeGuard<infer U> ? U : never
