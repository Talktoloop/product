import { Client } from '@ourloop/product-core-model'
import type { StoryModerationAction } from '@ourloop/product-core-model'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import { useRuntimeConfig } from '#imports'

function createApiClient() {
  const config = useRuntimeConfig()
  const openApiConfig: Partial<OpenAPIConfig> = {}

  if (config.api.baseUrl) {
    openApiConfig.BASE = config.api.baseUrl
  }

  if (config.api.token) {
    openApiConfig.TOKEN = config.api.token
  }

  return new Client(openApiConfig)
}

export const getStories = async (page: number, limit: number) => {
  const api = createApiClient()
  return api.story.query({
    type: 'pending',
    page,
    limit,
  })
}

export const publishStory = async (storyId: string) => {
  const api = createApiClient()
  return api.story.do({
    type: 'publish',
    storyId,
  })
}

export const rejectStory = async (storyId: string, action: StoryModerationAction) => {
  const api = createApiClient()
  return api.story.do({
    type: 'reject',
    storyId,
    action,
  })
}
