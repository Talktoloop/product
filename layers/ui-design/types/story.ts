import type { Story, StoryFilters } from '@ourloop/product-core-model/story'
import type { PaginationEmits } from './pagination'

export interface StoryListProps {
  stories: Story[]
  loading: boolean
  error: string | null
  filters: StoryFilters
  currentPage: number
  totalPages: number
}

export interface StoryFilterEmits {
  'update:filters': [filters: StoryFilters]
}

export interface StoryModerationEmits {
  'story:publish': [storyId: string]
  'story:reject': [storyId: string]
}

export type StoryListEmits = StoryFilterEmits & StoryModerationEmits & PaginationEmits

export interface StoryModerationEvent {
  id: string
  action: string
  reason: string
  notes?: string
}
