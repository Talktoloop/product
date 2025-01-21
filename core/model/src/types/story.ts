import type {
  StoryListModeratorRO,
  StoryListModeratorPaginationRO,
  RejectStoriesDto,
} from '@ourloop/product-core-api/talk-to-loop'

export interface Story extends StoryListModeratorRO {}
export interface StoryListResponse extends StoryListModeratorPaginationRO {}

export interface StoryFilters {
  country?: string
  type?: string
  age?: string
  gender?: string
  difficulty?: string
  language?:
    | 'en'
    | 'fr'
    | 'es'
    | 'ar'
    | 'ny'
    | 'ceb'
    | 'so'
    | 'tl'
    | 'bem'
    | 'maa'
    | 'id'
    | 'tog'
    | 'uk'
    | 'pl'
    | 'loz'
    | 'ru'
  isSensitive?: boolean
}

export interface StoryModerationAction {
  storyId: string
  reasonIds: number[]
  reasonTexts: string[]
  rationale?: string
  notificationLanguage?: string
}

export type StoryQuery = {
  type: 'pending'
  page: number
  limit: number
  filters?: StoryFilters
}

export type StoryCommand =
  | { type: 'publish'; storyId: string }
  | { type: 'reject'; storyId: string; action: StoryModerationAction }
