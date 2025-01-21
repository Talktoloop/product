<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <div class="flex items-start justify-between">
      <div class="flex items-start space-x-4">
        <EntityUserAvatar :src="story.author.avatar" :alt="story.author.name" />
        <div>
          <h3 class="font-semibold">{{ story.title }}</h3>
          <p class="text-sm text-gray-500">
            By {{ story.author.name }} • {{ formatDate(story.dateCreated) }}
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
            <span v-if="story.metadata.difficulty"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {{ story.metadata.difficulty }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex space-x-2">
        <AtomButton variant="default" size="sm" @click="moderate('publish')">
          Publish
        </AtomButton>
        <AtomButton variant="destructive" size="sm" @click="moderate('reject')">
          Reject
        </AtomButton>
      </div>
    </div>
    <div v-if="story.content" class="mt-4 text-gray-600">
      {{ truncateContent(story.content) }}
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
      <div v-if="story.metadata.country">
        <span class="font-medium">Country:</span> {{ story.metadata.country }}
      </div>
      <div v-if="story.metadata.region">
        <span class="font-medium">Region:</span> {{ story.metadata.region }}
      </div>
      <div v-if="story.metadata.age">
        <span class="font-medium">Age Group:</span> {{ story.metadata.age }}
      </div>
      <div v-if="story.metadata.duration">
        <span class="font-medium">Duration:</span> {{ story.metadata.duration }}min
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Story, StoryModerationAction } from '@ourloop/product-core-types'

const props = defineProps<{
  story: Story
}>()

const emit = defineEmits<{
  moderate: [action: StoryModerationAction]
}>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const truncateContent = (content: string, length = 200) => {
  if (content.length <= length) return content
  return content.slice(0, length) + '...'
}

const moderate = (action: 'publish' | 'reject') => {
  emit('moderate', {
    storyId: props.story.id,
    action,
  })
}
</script>