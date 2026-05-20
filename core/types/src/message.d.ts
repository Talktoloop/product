import type { TypedObject, ResultObject } from './object'

export interface Resultable<R extends ResultObject<any>> {
  __result?: R
}

export type MessageContract<T extends TypedObject, R extends ResultObject<any>> = T & Resultable<R>

export type MessageOf<T extends MessageContract<any, any>> = Omit<T, '__result'>
export type ResultOf<T extends MessageContract<any, any>> = NonNullable<T['__result']>

export type QueryContract = MessageContract<QueryObject, ResultObject<any>>
export type CommandContract = MessageContract<CommandObject, ResultObject<any>>
