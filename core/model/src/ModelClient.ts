import { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher, QueryResultMap } from './types/client'
import type { CommandObject, QueryObject, ResultObject } from '@ourloop/product-core-types'

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

  async query<K extends QueryType['__type']>(
    query: Extract<QueryType, { __type: K }>
  ): Promise<QueryResultMap<QueryType, ResultType>[K]> {
    const handler = this.queryDispatcher[query.__type as K]
    return handler(this.client, query)
  }

  async do(command: CommandType): Promise<void> {
    const handler = this.commandDispatcher[command.__type as keyof CommandDispatcher<CommandType>]
    await handler(this.client, command as Extract<CommandType, { __type: CommandType['__type'] }>)
  }
}
