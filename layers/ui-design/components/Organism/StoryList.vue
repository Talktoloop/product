<template>
  <div class="space-y-4">
    <div v-if="loading" class="flex justify-center items-center p-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>

    <div v-else-if="error" class="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
      {{ error }}
    </div>

    <div v-else-if="stories.length === 0" class="text-center p-8 text-gray-500">
      No stories found matching the current filters.
    </div>

    <div v-else class="grid gap-4">
      <EntityStoryItemCard v-for="story in stories" :key="story.id" :story="story"
        @moderate="$emit('moderate', $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Story, StoryModerationAction } from '@ourloop/product-core-types'

defineProps<{
  stories: Story[]
  loading: boolean
  error: string | null
}>()

defineEmits<{
  moderate: [action: StoryModerationAction]
}>()</script>