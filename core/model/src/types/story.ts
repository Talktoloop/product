import type {
  TypedObject,
  CommandObject,
  QueryObject,
  ResultObject,
  ListResponseMeta,
  QueryContract,
  CommandContract,
  EmptyResult,
  MessageContract,
} from '@ourloop/product-core-types'
import type {
  StoryListModeratorRO,
  StoryListModeratorPaginationRO,
} from '@ourloop/product-core-api/talk-to-loop'

export interface Story extends StoryListModeratorRO {}

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
  country?: string
  type?: string
  age?: string
  gender?: string
  difficulty?: string
  organisation?: string
  thematic?: string
  channel?: any
  from?: string
  to?: string
  regionId?: string
  order?: 'desc' | 'asc' | 'not_started' | 'pending_publication'
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
  status?:
    | 'not_started'
    | 'pending_translation'
    | 'awaiting_replay'
    | 'issuer_replied'
    | 'issuer_did_not_replied'
    | 'sent_from_case_manager_to_loop'
    | 'pending_transcription'
    | 'transcription_in_progress'
    | 'transcription_failed'
    | 'pending_publication'
    | 'pending_edit'
  durationMin?: number
  durationMax?: number
  isSensitive?: boolean
  contentLanguage?:
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
}

export type StoryPendingContract = MessageContract<StoryPendingQuery, StoryPendingResult>

export interface StoryPublishCommand extends CommandObject {
  __type: 'StoryPublishCommand'
  id: string
}

export type StoryPublishContract = MessageContract<StoryPublishCommand, EmptyResult>

export interface StoryRejectCommand extends CommandObject {
  __type: 'StoryRejectCommand'
  id: string
  reasonIds: number[]
  reasonTexts: string[]
  rationale?: string
  notificationLanguage?: string
}

export type StoryRejectContract = MessageContract<StoryRejectCommand, EmptyResult>

export type StoryQuery = StoryPendingQuery

export type StoryCommand = StoryPublishCommand | StoryRejectCommand

export type StoryQueryContract = StoryPendingContract
export type StoryCommandContract = StoryPublishContract | StoryRejectContract

export const ModerationReasons = {
  publish: 'Content meets guidelines',
  reject: 'Content violates guidelines',
} as const

export type ModerationReason = (typeof ModerationReasons)[keyof typeof ModerationReasons]
