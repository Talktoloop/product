<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <div class="flex items-start justify-between">
      <div class="flex items-start space-x-4">
        <div>
          <h3 class="font-semibold">Story #{{ story.id }}</h3>
          <p class="text-sm text-gray-500">
            Created at {{ formatDate(story.createdAt) }}
          </p>
          <div class="mt-2 flex flex-wrap gap-2">
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {{ story.channel }}
            </span>
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {{ story.language }}
            </span>
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {{ story.status }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex space-x-2">
        <AtomButton variant="default" size="sm" @click="$emit('publish', story.id)">
          Publish
        </AtomButton>
        <AtomButton variant="destructive" size="sm" @click="$emit('reject', story.id)">
          Reject
        </AtomButton>
      </div>
    </div>
    <div v-if="story.content" class="mt-4 text-gray-600">
      {{ truncateContent(story.content) }}
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
      <div>
        <span class="font-medium">Country:</span> {{ story.country }}
      </div>
      <div>
        <span class="font-medium">Words:</span> {{ story.numberOfWords }}
      </div>
      <div v-if="story.recordingDuration">
        <span class="font-medium">Duration:</span> {{ story.recordingDuration }}s
      </div>
      <div v-if="story.isSensitive">
        <span class="font-medium text-red-500">Sensitive Content</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Story } from '@ourloop/product-core-model/story'

interface StoryItemCardProps {
  story: Story
}

interface StoryItemCardEmits {
  'publish': [storyId: string]
  'reject': [storyId: string]
}

defineProps<StoryItemCardProps>()
defineEmits<StoryItemCardEmits>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}

function truncateContent(content: string) {
  return content.length > 200 ? content.slice(0, 200) + '...' : content
}
</script>