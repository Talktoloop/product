import type {
  Story,
  StoryFilters,
  StoryListResponse,
  StoryModerationAction,
} from '@ourloop/product-core-types'

export const useStoryModerationStore = defineStore('storyModeration', () => {
  const stories = ref<Story[]>([])
  const total = ref(0)
  const currentPage = ref(1)
  const pageSize = ref(10)
  const filters = ref<StoryFilters>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  const totalPages = computed(() => Math.ceil(total.value / pageSize.value))

  async function fetchStories() {
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

  async function moderateStory(action: StoryModerationAction) {
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

  function updateFilters(newFilters: Partial<StoryFilters>) {
    filters.value = { ...filters.value, ...newFilters }
    currentPage.value = 1 // Reset to first page when filters change
    fetchStories()
  }

  function updatePage(page: number) {
    currentPage.value = page
    fetchStories()
  }

  return {
    // State
    stories,
    total,
    currentPage,
    pageSize,
    filters,
    loading,
    error,
    // Getters
    totalPages,
    // Actions
    fetchStories,
    moderateStory,
    updateFilters,
    updatePage,
  }
})
