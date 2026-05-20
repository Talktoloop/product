import { TalkToLoopClient } from '@ourloop/product-core-api/talk-to-loop'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from './types'
import type {
  QueryContract,
  CommandContract,
  ResultOf,
  MessageOf,
  SelectType,
} from '@ourloop/product-core-types'

export abstract class ModelClient<Query extends QueryContract, Command extends CommandContract> {
  protected readonly client: TalkToLoopClient

  constructor(
    config: Partial<OpenAPIConfig>,
    protected readonly queryDispatcher: QueryDispatcher<Query>,
    protected readonly commandDispatcher: CommandDispatcher<Command>
  ) {
    this.client = new TalkToLoopClient(config)
  }

  async query<Q extends Query, K extends Q['__type'] = Q['__type']>(
    query: SelectType<Q, K> extends never ? never : MessageOf<SelectType<Q, K>>
  ): Promise<ResultOf<SelectType<Q, K>>> {
    const handler = this.queryDispatcher[query.__type as K]
    return handler(this.client, query)
  }

  async do<C extends Command, K extends C['__type'] = C['__type']>(
    command: SelectType<C, K> extends never ? never : MessageOf<SelectType<C, K>>
  ): Promise<ResultOf<SelectType<C, K>>> {
    const handler = this.commandDispatcher[command.__type as K]
    return handler(this.client, command)
  }
}
