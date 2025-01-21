import type { QueryObject, CommandObject, ResultObject } from '@ourloop/product-core-types'
import type { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'

export type QueryResultMap<Q extends QueryObject, R extends ResultObject<any>> = {
  [K in Q['__type']]: Extract<R, { __type: `${K extends `${string}Query` ? string : never}Result` }>
}

export type CommandResultMap<C extends CommandObject> = {
  [K in C['__type']]: void
}

export type QueryDispatcher<QueryType extends QueryObject, ResultType extends ResultObject<any>> = {
  [K in QueryType['__type']]: (
    client: TalkToLoopClient,
    query: Extract<QueryType, { __type: K }>
  ) => Promise<QueryResultMap<QueryType, ResultType>[K]>
}

export type CommandDispatcher<CommandType extends CommandObject> = {
  [K in CommandType['__type']]: (
    client: TalkToLoopClient,
    command: Extract<CommandType, { __type: K }>
  ) => Promise<void>
}
