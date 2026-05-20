import type { OpenAPIConfig } from '@ourloop/product-core-api/talk-to-loop'
import { StoryClient } from './clients'

export class Client {
  private readonly config: Partial<OpenAPIConfig>
  private storyClient?: StoryClient

  constructor(config: Partial<OpenAPIConfig>) {
    this.config = config
  }

  get story(): StoryClient {
    if (!this.storyClient) {
      this.storyClient = new StoryClient(this.config)
    }
    return this.storyClient
  }
}
