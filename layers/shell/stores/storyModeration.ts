import type { Story, StoryFilters } from '@ourloop/product-core-model'
import { toModerationAction } from '@ourloop/product-core-model'
import { defineStore } from 'pinia'
import { getStories, publishStory, rejectStory } from '@shell/fns/story'

export const useStoryModerationStore = defineStore('storyModeration', () => {
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
      const response = await getStories(currentPage.value, pageSize.value)

      stories.value = response.items
      total.value = response.meta.totalItems
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  const moderateStory = async (
    storyId: string,
    action: 'publish' | 'reject',
    reason?: string,
    moderatorNotes?: string
  ) => {
    loading.value = true
    error.value = null

    try {
      if (action === 'publish') {
        await publishStory(storyId)
      } else if (action === 'reject') {
        const moderationAction = toModerationAction({
          storyId,
          action,
          reason,
          moderatorNotes,
        })
        await rejectStory(storyId, moderationAction)
      }

      await fetchStories()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  const updateFilters = (newFilters: Partial<StoryFilters>) => {
    filters.value = { ...filters.value, ...newFilters }
    currentPage.value = 1
    fetchStories()
  }

  const goToPage = (page: number) => {
    currentPage.value = page
    fetchStories()
  }

  return {
    stories,
    total,
    currentPage,
    pageSize,
    filters,
    loading,
    error,
    totalPages,
    fetchStories,
    moderateStory,
    updateFilters,
    goToPage,
  }
})
