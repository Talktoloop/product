import type {
  MessageOf,
  ResultOf,
  QueryContract,
  CommandContract,
  MessageContract,
  TypedObject,
  ResultObject,
  SelectType,
} from '@ourloop/product-core-types'
import type { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'

export type Dispatcher<T extends MessageContract<TypedObject, ResultObject<any>>> = {
  [K in T['__type']]: <M extends Extract<T, { __type: K }>>(
    client: TalkToLoopClient,
    message: MessageOf<M>
  ) => Promise<ResultOf<M>>
}

export type QueryDispatcher<Query extends QueryContract> = Dispatcher<Query>

export type CommandDispatcher<Command extends CommandContract> = Dispatcher<Command>

export type QueryFn<Q extends QueryContract> = <K extends Q['__type']>(
  query: MessageOf<SelectType<Q, K>>
) => Promise<ResultOf<SelectType<Q, K>>>

export type CommandFn<C extends CommandContract> = <K extends C['__type']>(
  command: MessageOf<SelectType<C, K>>
) => Promise<ResultOf<SelectType<C, K>>>
