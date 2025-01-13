export interface TypedObject {
  __type: string
}

export interface ValuedObject<T> {
  value: T
}

export interface TypedValuedObject<T> extends TypedObject, ValuedObject<T> {}
