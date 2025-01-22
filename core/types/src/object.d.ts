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

export interface ResultObject<T> extends TypedObject {
  __type: `${string}Result`
  data: T
  meta: UnitResponseMeta | ListResponseMeta | VoidMeta
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

export interface VoidMeta {
  cardinality: 'void'
}

export interface EmptyResult extends ResultObject<Record<string, never>> {
  __type: 'EmptyResult'
  data: Record<string, never>
  meta: VoidMeta
}

export type SelectType<T extends TypedObject, K extends T['__type']> = Extract<T, { __type: K }>
