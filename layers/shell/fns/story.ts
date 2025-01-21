import { Client } from '@ourloop/product-core-model'
import type { StoryModerationAction } from '@ourloop/product-core-model'

export function createApiClient(config: { baseUrl: string; token?: string }) {
  return new Client({
    BASE: config.baseUrl,
    TOKEN: config.token,
    WITH_CREDENTIALS: true,
  })
}

export const getStories = async (
  config: { baseUrl: string; token?: string },
  page: number,
  limit: number
) => {
  const api = createApiClient(config)
  return api.story.query({
    type: 'pending',
    page,
    limit,
  })
}

export const publishStory = async (
  config: { baseUrl: string; token?: string },
  storyId: string
) => {
  const api = createApiClient(config)
  return api.story.do({
    type: 'publish',
    storyId,
  })
}

export const rejectStory = async (
  config: { baseUrl: string; token?: string },
  storyId: string,
  action: StoryModerationAction
) => {
  const api = createApiClient(config)
  return api.story.do({
    type: 'reject',
    storyId,
    action,
  })
}
