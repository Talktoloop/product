import type { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'

export type QueryDispatcher<QueryType extends { type: string }, ResultType> = {
  [K in QueryType['type']]: (
    client: TalkToLoopClient,
    query: Extract<QueryType, { type: K }>
  ) => Promise<ResultType>
}

export type CommandDispatcher<CommandType extends { type: string }> = {
  [K in CommandType['type']]: (
    client: TalkToLoopClient,
    command: Extract<CommandType, { type: K }>
  ) => Promise<void>
}
