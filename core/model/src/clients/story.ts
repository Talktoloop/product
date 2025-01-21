import { ModelClient } from '../ModelClient'
import type { StoryCommand, StoryQuery, StoryResult, Story } from '../types/story'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from '../types/dispatcher'

const storyQueryDispatcher: QueryDispatcher<StoryQuery, StoryResult> = {
  StoryPendingQuery: async (client, query) => {
    const response = await client.storyModerator.storyModeratorControllerGetListOfPending({
      page: query.page,
      limit: query.limit,
      ...query.filters,
    })

    return {
      data: response.items,
      meta: {
        totalItems: response.meta.totalItems,
        page: query.page,
        limit: query.limit,
      },
    }
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
