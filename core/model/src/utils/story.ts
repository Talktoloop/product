import type { RejectStoriesDto } from '@ourloop/product-core-api/talk-to-loop'
import type { StoryModerationAction } from '../types/story'

export function toRejectStoriesDto(action: StoryModerationAction): RejectStoriesDto {
  return {
    storiesToReject: [
      {
        ...action,
      },
    ],
  }
}

export function toModerationAction(request: {
  storyId: string
  action: 'publish' | 'reject'
  reason?: string
  moderatorNotes?: string
}): StoryModerationAction {
  if (request.action === 'reject') {
    return {
      storyId: request.storyId,
      reasonIds: [],
      reasonTexts: request.reason ? [request.reason] : [],
      rationale: request.moderatorNotes,
    }
  }
  throw new Error('Invalid moderation action')
}
