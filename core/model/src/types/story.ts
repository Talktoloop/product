import type {
  TypedObject,
  CommandObject,
  QueryObject,
  ResultObject,
  ListResponseMeta,
} from '@ourloop/product-core-types'
import type {
  StoryListModeratorRO,
  StoryListModeratorPaginationRO,
  RejectStoriesDto,
} from '@ourloop/product-core-api/talk-to-loop'

export interface Story extends StoryListModeratorRO {}
export interface StoryListResponse extends StoryListModeratorPaginationRO {}

export interface StoryPendingResult extends ResultObject<Story[]> {
  __type: 'StoryPendingResult'
  data: Story[]
  meta: ListResponseMeta
}

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

export interface StoryPendingQuery extends QueryObject {
  __type: 'StoryPendingQuery'
  page: number
  limit: number
  filters?: StoryFilters
}

export interface StoryPublishCommand extends CommandObject {
  __type: 'StoryPublishCommand'
  storyId: string
}

export interface StoryRejectCommand extends CommandObject {
  __type: 'StoryRejectCommand'
  storyId: string
  action: StoryModerationAction
}

export type StoryQuery = StoryPendingQuery
export type StoryCommand = StoryPublishCommand | StoryRejectCommand
export type StoryResult = StoryPendingResult
