<template>
  <PageModeratorStory :stories="stories" :loading="loading" :error="error" :filters="filters"
    :current-page="currentPage" :total-pages="totalPages" @update:filters="updateFilters" @story:publish="publishStory"
    @story:reject="rejectStory" @update:page="updatePage" />
</template>

<script setup lang="ts">
import type { StoryFilters } from '@ourloop/product-core-model'

// Initialize store
const store = useStoryModerationStore()
const { stories, loading, error, filters, currentPage, totalPages } = storeToRefs(store)

// Initialize data on mount
onMounted(() => {
  store.fetchStories()
})

// Event handlers
const updateFilters = (newFilters: StoryFilters) => {
  store.updateFilters(newFilters)
}

const publishStory = (storyId: string) => {
  store.moderateStory(storyId, 'publish', 'Content meets guidelines')
}

const rejectStory = (storyId: string) => {
  store.moderateStory(storyId, 'reject', 'Content violates guidelines')
}

const updatePage = (page: number) => {
  store.goToPage(page)
}
</script>