import { Client } from '@ourloop/product-core-model'
import type { StoryQueryContract, StoryCommandContract } from '@ourloop/product-core-model'
import type { MessageOf, ResultOf } from '@ourloop/product-core-types'
import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import { useRuntimeConfig } from '#imports'

export function createApiClient() {
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

export const query = (
  query: MessageOf<StoryQueryContract>
): Promise<ResultOf<StoryQueryContract>> => {
  const api = createApiClient()
  return api.story.query(query)
}

export const command = (
  command: MessageOf<StoryCommandContract>
): Promise<ResultOf<StoryCommandContract>> => {
  const api = createApiClient()
  return api.story.do(command)
}
