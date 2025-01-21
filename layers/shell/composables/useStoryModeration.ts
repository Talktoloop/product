import type {
  Story,
  StoryFilters,
  StoryListResponse,
  StoryModerationAction,
} from '@ourloop/product-core-types'
import { ref, computed } from '#imports'

export const useStoryModeration = () => {
  const stories = ref<Story[]>([])
  const total = ref(0)
  const currentPage = ref(1)
  const pageSize = ref(10)
  const filters = ref<StoryFilters>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  const totalPages = computed(() => Math.ceil(total.value / pageSize.value))

  const fetchStories = async () => {
    loading.value = true
    error.value = null
    try {
      const queryParams = new URLSearchParams()
      Object.entries(filters.value).forEach(([key, value]) => {
        if (value) queryParams.append(key, String(value))
      })
      queryParams.append('page', String(currentPage.value))
      queryParams.append('pageSize', String(pageSize.value))

      const response = await $fetch<StoryListResponse>('/api/v1/story/moderator/pending', {
        params: queryParams,
      })

      stories.value = response.stories
      total.value = response.total
    } catch (e) {
      error.value = 'Failed to fetch stories'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const moderateStory = async (action: StoryModerationAction) => {
    loading.value = true
    error.value = null
    try {
      await $fetch(`/api/v1/story/moderator/${action.storyId}/${action.action}`, {
        method: 'POST',
        body: {
          reason: action.reason,
          moderatorNotes: action.moderatorNotes,
        },
      })
      await fetchStories()
    } catch (e) {
      error.value = `Failed to ${action.action} story`
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const updateFilters = (newFilters: Partial<StoryFilters>) => {
    filters.value = { ...filters.value, ...newFilters }
    currentPage.value = 1 // Reset to first page when filters change
    fetchStories()
  }

  const updatePage = (page: number) => {
    currentPage.value = page
    fetchStories()
  }

  return {
    stories,
    total,
    currentPage,
    pageSize,
    totalPages,
    filters,
    loading,
    error,
    fetchStories,
    moderateStory,
    updateFilters,
    updatePage,
  }
}
