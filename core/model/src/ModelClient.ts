import { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from './types/dispatcher'

export abstract class ModelClient<
  QueryType extends { type: string },
  CommandType extends { type: string },
  ResultType,
> {
  protected readonly client: TalkToLoopClient

  constructor(
    config: Partial<OpenAPIConfig>,
    protected readonly queryDispatcher: QueryDispatcher<QueryType, ResultType>,
    protected readonly commandDispatcher: CommandDispatcher<CommandType>
  ) {
    this.client = new TalkToLoopClient(config)
  }

  async query(query: QueryType): Promise<ResultType> {
    const handler = this.queryDispatcher[query.type as keyof QueryDispatcher<QueryType, ResultType>]
    return handler(this.client, query as Extract<QueryType, { type: QueryType['type'] }>)
  }

  async do(command: CommandType): Promise<void> {
    const handler = this.commandDispatcher[command.type as keyof CommandDispatcher<CommandType>]
    await handler(this.client, command as Extract<CommandType, { type: CommandType['type'] }>)
  }
}
