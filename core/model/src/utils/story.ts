import type { StoryCommand, StoryQuery, StoryModerationAction, StoryFilters } from '../types/story'

/**
 * Query builders for stories
 */
export const pending = (params: {
  page: number
  limit: number
  filters?: StoryFilters
}): StoryQuery => ({
  type: 'pending',
  page: params.page,
  limit: params.limit,
  filters: params.filters,
})

/**
 * Command builders for stories
 */
export const publish = (storyId: string): StoryCommand => ({
  type: 'publish',
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
    type: 'reject',
    storyId: params.storyId,
    action,
  }
}
