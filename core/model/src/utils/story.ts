import type {
  StoryCommand,
  StoryQuery,
  StoryModerationAction,
  StoryFilters,
  Story,
  StoryPendingResult,
} from '../types/story'
import { result } from './result'

/**
 * Query builders for stories
 */
export const pending = (params: {
  page: number
  limit: number
  filters?: StoryFilters
}): StoryQuery => ({
  __type: 'StoryPendingQuery',
  page: params.page,
  limit: params.limit,
  filters: params.filters,
})

/**
 * Command builders for stories
 */
export const publish = (storyId: string): StoryCommand => ({
  __type: 'StoryPublishCommand',
  storyId,
})

export const reject = (params: {
  storyId: string
  reason?: string
  moderatorNotes?: string
}): StoryCommand => {
  const action: StoryModerationAction = {
    storyId: params.storyId,
    reasonIds: [],
    reasonTexts: params.reason ? [params.reason] : [],
    rationale: params.moderatorNotes,
  }

  return {
    __type: 'StoryRejectCommand',
    storyId: params.storyId,
    action,
  }
}

interface PendingStoriesInfo {
  items: Story[]
  totalItems: number
  page: number
  limit: number
}

/**
 * Response builders for stories
 */
export const response = {
  pending: (info: PendingStoriesInfo) =>
    result<Story[], StoryPendingResult>()
      .withMeta.many({
        totalItems: info.totalItems,
        page: info.page,
        limit: info.limit,
      })
      .build({
        __type: 'StoryPendingResult',
        data: info.items,
      }),
}
