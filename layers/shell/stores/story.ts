import type { Story, StoryFilters } from '@ourloop/product-core-model'
import { story } from '@ourloop/product-core-model'
import { defineStore } from 'pinia'
import * as storyClient from '@shell/fns/story'

export const useStoryStore = defineStore('story', () => {
  const list = ref<Story[]>([])
  const total = ref(0)
  const page = ref(1)
  const limit = ref(10)
  const filters = ref<StoryFilters>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  const pages = computed(() => Math.ceil(total.value / limit.value))

  const fetch = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await storyClient.query(
        story.pending(page.value, limit.value, filters.value)
      )
      list.value = response.data
      total.value = response.meta.totalItems
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  const publish = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      await storyClient.command(story.publish(id))
      await fetch()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  const reject = async (
    id: string,
    reasonIds: number[],
    reasonTexts: string[],
    options?: {
      rationale?: string
      notificationLanguage?: string
    }
  ) => {
    loading.value = true
    error.value = null
    try {
      await storyClient.command(story.reject(id, reasonIds, reasonTexts, options))
      await fetch()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  const updateFilters = (newFilters: Partial<StoryFilters>) => {
    filters.value = { ...filters.value, ...newFilters }
    page.value = 1
    fetch()
  }

  const goToPage = (newPage: number) => {
    page.value = newPage
    fetch()
  }

  return {
    list,
    total,
    page,
    limit,
    filters,
    loading,
    error,
    pages,
    fetch,
    publish,
    reject,
    updateFilters,
    goToPage,
  }
})
