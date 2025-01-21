import { ModelClient } from '../ModelClient'
import type { StoryCommand, StoryQuery, StoryListResponse } from '../types/story'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from '../types/dispatcher'
import { toRejectStoriesDto } from '../utils/story'

const storyQueryDispatcher: QueryDispatcher<StoryQuery, StoryListResponse> = {
  pending: async (client, query) => {
    return client.storyModerator.storyModeratorControllerGetListOfPending({
      page: query.page,
      limit: query.limit,
      ...query.filters,
    })
  },
}

const storyCommandDispatcher: CommandDispatcher<StoryCommand> = {
  publish: async (client, command) => {
    await client.storyModerator.storyModeratorControllerPublishStory({
      id: command.storyId,
    })
  },
  reject: async (client, command) => {
    await client.storyModerator.storyModeratorControllerRejectStory({
      id: command.storyId,
      requestBody: command.action,
    })
  },
}

export class StoryClient extends ModelClient<StoryQuery, StoryCommand, StoryListResponse> {
  constructor(config: Partial<OpenAPIConfig>) {
    super(config, storyQueryDispatcher, storyCommandDispatcher)
  }
}
