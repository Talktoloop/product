import type {
  ResultObject,
  UnitResponseMeta,
  ListResponseMeta,
  VoidMeta,
} from '@ourloop/product-core-types'

interface ResultBuilder<T, R extends ResultObject<T>> {
  withMeta: {
    one: () => UnitResultBuilder<T, R>
    many: (params: { totalItems: number; page: number; limit: number }) => ListResultBuilder<T, R>
    void: () => VoidResultBuilder<T, R>
  }
}

interface UnitResultBuilder<T, R extends ResultObject<T>> {
  build: (params: { __type: R['__type']; data: T }) => R
}

interface ListResultBuilder<T, R extends ResultObject<T>> {
  build: (params: { __type: R['__type']; data: T }) => R
}

interface VoidResultBuilder<T, R extends ResultObject<T>> {
  build: (params: { __type: R['__type']; data: T }) => R
}

export const result = <T, R extends ResultObject<T>>(): ResultBuilder<T, R> => ({
  withMeta: {
    one: () => ({
      build: ({ __type, data }) =>
        ({
          __type,
          data,
          meta: {
            cardinality: 'one',
          },
        }) as R,
    }),
    many: ({ totalItems, page, limit }) => ({
      build: ({ __type, data }) =>
        ({
          __type,
          data,
          meta: {
            cardinality: 'many',
            totalItems,
            page,
            limit,
          },
        }) as R,
    }),
    void: () => ({
      build: ({ __type, data }) =>
        ({
          __type,
          data,
          meta: {
            cardinality: 'void',
          },
        }) as R,
    }),
  },
})
