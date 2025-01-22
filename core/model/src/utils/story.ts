import type {
  StoryCommand,
  StoryQuery,
  StoryPendingQuery,
  StoryPublishCommand,
  StoryRejectCommand,
  StoryPendingResult,
  Story,
} from '../types/story'
import { result } from './result'

/**
 * Query builders for stories
 */
export function pending(
  page: number,
  limit: number,
  options: Partial<Omit<StoryPendingQuery, 'page' | 'limit'>> = {}
): StoryPendingQuery {
  return {
    __type: 'StoryPendingQuery',
    page,
    limit,
    ...options,
  }
}

/**
 * Command builders for stories
 */
export function publish(id: string): StoryPublishCommand {
  return {
    __type: 'StoryPublishCommand',
    id,
  }
}

export function reject(
  id: string,
  reasonIds: number[],
  reasonTexts: string[],
  options: Partial<Omit<StoryRejectCommand, 'id' | 'reasonIds' | 'reasonTexts'>> = {}
): StoryRejectCommand {
  return {
    __type: 'StoryRejectCommand',
    id,
    reasonIds,
    reasonTexts,
    ...options,
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
