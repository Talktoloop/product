import type { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'
import type {
  CommandObject,
  QueryObject,
  ResultObject,
  ResultEnvelope,
} from '@ourloop/product-core-types'

export type QueryDispatcher<QueryType extends QueryObject, ResultType extends ResultObject<any>> = {
  [K in QueryType['__type']]: (
    client: TalkToLoopClient,
    query: Extract<QueryType, { __type: K }>
  ) => Promise<ResultEnvelope<ResultType>>
}

export type CommandDispatcher<CommandType extends CommandObject> = {
  [K in CommandType['__type']]: (
    client: TalkToLoopClient,
    command: Extract<CommandType, { __type: K }>
  ) => Promise<void>
}
