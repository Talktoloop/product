export interface TypedObject {
  __type: string
}

export interface ValuedObject<T> {
  value: T
}

export interface TypedValuedObject<T> extends TypedObject, ValuedObject<T> {}

export interface CommandObject extends TypedObject {
  __type: `${string}Command`
}

export interface QueryObject extends TypedObject {
  __type: `${string}Query`
}

export interface UnitResponseMeta {
  cardinality: 'one'
}

export interface ListResponseMeta {
  cardinality: 'many'
  totalItems: number
  page: number
  limit: number
}

export interface ResultObject<T> extends TypedObject {
  __type: `${string}Result`
  data: T
  meta: UnitResponseMeta | ListResponseMeta
}

export type ResultEnvelope<T extends ResultObject<any>> = {
  data: T['data']
  meta?: {
    totalItems?: number
    page?: number
    limit?: number
  }
}

export type QueryResultMap<Q extends QueryObject, R extends ResultObject<any>> = {
  [K in Q['__type']]: Extract<R, { __type: `${K extends `${string}Query` ? string : never}Result` }>
}

export type CommandResultMap<C extends CommandObject> = {
  [K in C['__type']]: void
}
