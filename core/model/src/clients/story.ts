import { ModelClient } from '../ModelClient'
import type { StoryQueryContract, StoryCommandContract, StoryRejectCommand } from '../types/story'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import type { QueryDispatcher, CommandDispatcher } from '../types/client'
import type { EmptyResult } from '@ourloop/product-core-types'
import { response as storyResponse } from '../utils/story'
import { result } from '../utils/result'

const storyQueryDispatcher: QueryDispatcher<StoryQueryContract> = {
  StoryPendingQuery: async (client, query) => {
    const { page, limit, __type, ...params } = query
    const apiResponse = await client.storyModerator.storyModeratorControllerGetListOfPending({
      page,
      limit,
      ...params,
    })

    return storyResponse.pending({
      items: apiResponse.items,
      totalItems: apiResponse.meta.totalItems,
      page,
      limit,
    })
  },
}

const storyCommandDispatcher: CommandDispatcher<StoryCommandContract> = {
  StoryPublishCommand: async (client, command) => {
    await client.storyModerator.storyModeratorControllerPublishStory({
      id: command.id,
    })
    return result<Record<string, never>, EmptyResult>()
      .withMeta.void()
      .build({ __type: 'EmptyResult', data: {} })
  },
  StoryRejectCommand: async (client, command: StoryRejectCommand) => {
    await client.storyModerator.storyModeratorControllerRejectStory({
      id: command.id,
      requestBody: {
        reasonIds: command.reasonIds,
        reasonTexts: command.reasonTexts,
        rationale: command.rationale,
        notificationLanguage: command.notificationLanguage,
      },
    })
    return result<Record<string, never>, EmptyResult>()
      .withMeta.void()
      .build({ __type: 'EmptyResult', data: {} })
  },
}

export class StoryClient extends ModelClient<StoryQueryContract, StoryCommandContract> {
  constructor(config: Partial<OpenAPIConfig>) {
    super(config, storyQueryDispatcher, storyCommandDispatcher)
  }
}
