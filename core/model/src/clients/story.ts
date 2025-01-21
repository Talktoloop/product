import { ModelClient } from '../ModelClient'
import type {
  StoryCommand,
  StoryQuery,
  StoryResult,
  Story,
  StoryPendingResult,
} from '../types/story'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from '../types/client'
import { response as storyResponse } from '../utils/story'

const storyQueryDispatcher: QueryDispatcher<StoryQuery, StoryResult> = {
  StoryPendingQuery: async (client, query) => {
    const apiResponse = await client.storyModerator.storyModeratorControllerGetListOfPending({
      page: query.page,
      limit: query.limit,
      ...query.filters,
    })

    return storyResponse.pending({
      items: apiResponse.items,
      totalItems: apiResponse.meta.totalItems,
      page: query.page,
      limit: query.limit,
    })
  },
}

const storyCommandDispatcher: CommandDispatcher<StoryCommand> = {
  StoryPublishCommand: async (client, command) => {
    await client.storyModerator.storyModeratorControllerPublishStory({
      id: command.storyId,
    })
  },
  StoryRejectCommand: async (client, command) => {
    await client.storyModerator.storyModeratorControllerRejectStory({
      id: command.storyId,
      requestBody: command.action,
    })
  },
}

export class StoryClient extends ModelClient<StoryQuery, StoryCommand, StoryResult> {
  constructor(config: Partial<OpenAPIConfig>) {
    super(config, storyQueryDispatcher, storyCommandDispatcher)
  }
}
