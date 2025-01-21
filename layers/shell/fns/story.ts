import { Client } from '@ourloop/product-core-model'
import type { StoryCommand, StoryQuery, StoryListResponse } from '@ourloop/product-core-model'
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

export const query = async (query: StoryQuery): Promise<StoryListResponse> => {
  const api = createApiClient()
  return api.story.query(query)
}

export const command = async (cmd: StoryCommand): Promise<void> => {
  const api = createApiClient()
  return api.story.do(cmd)
}
