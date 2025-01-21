import type { StoryCommand, StoryQuery, StoryModerationAction, StoryFilters } from '../types/story'

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
