<template>
  <TemplateViewStoryModeration :stories="stories" :loading="loading" :error="error" :filters="filters"
    :current-page="currentPage" :total-pages="totalPages" @update:filters="$emit('update:filters', $event)"
    @story:publish="$emit('story:publish', $event)" @story:reject="$emit('story:reject', $event)"
    @update:page="$emit('update:page', $event)" />
</template>

<script setup lang="ts">
import type { Story, StoryFilters } from '@ourloop/product-core-model'

defineOptions({
  name: 'PageModeratorStory'
})

interface ModeratorStoryProps {
  stories: Story[]
  loading: boolean
  error: string | null
  filters: StoryFilters
  currentPage: number
  totalPages: number
}

defineProps<ModeratorStoryProps>()
defineEmits<{
  'update:filters': [filters: StoryFilters]
  'story:publish': [storyId: string]
  'story:reject': [storyId: string]
  'update:page': [page: number]
}>()
</script>