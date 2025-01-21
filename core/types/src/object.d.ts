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
}

export type ResultEnvelope<T extends ResultObject<any>> = {
  data: T['data']
  meta?: {
    totalItems?: number
    page?: number
    limit?: number
  }
}
