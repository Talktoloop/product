import { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from './types/dispatcher'
import type {
  CommandObject,
  QueryObject,
  ResultObject,
  ResultEnvelope,
} from '@ourloop/product-core-types'

export abstract class ModelClient<
  QueryType extends QueryObject,
  CommandType extends CommandObject,
  ResultType extends ResultObject<any>,
> {
  protected readonly client: TalkToLoopClient

  constructor(
    config: Partial<OpenAPIConfig>,
    protected readonly queryDispatcher: QueryDispatcher<QueryType, ResultType>,
    protected readonly commandDispatcher: CommandDispatcher<CommandType>
  ) {
    this.client = new TalkToLoopClient(config)
  }

  async query(query: QueryType): Promise<ResultEnvelope<ResultType>> {
    const handler =
      this.queryDispatcher[query.__type as keyof QueryDispatcher<QueryType, ResultType>]
    return handler(this.client, query as Extract<QueryType, { __type: QueryType['__type'] }>)
  }

  async do(command: CommandType): Promise<void> {
    const handler = this.commandDispatcher[command.__type as keyof CommandDispatcher<CommandType>]
    await handler(this.client, command as Extract<CommandType, { __type: CommandType['__type'] }>)
  }
}
