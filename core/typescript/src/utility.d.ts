/**
 * Extracts the type of the elements of an array
 * @param T - The array type
 * @returns The type of the elements of the array
 * @example
 * ```ts
 * type FirstItem = ItemOf<[1, 2, 3]> // => 1 | 2 | 3
 * ```
 */
export type ItemOf<T> = T extends (infer U)[] ? U : never
