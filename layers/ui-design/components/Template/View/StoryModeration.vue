<template>
  <div>
    <h1 class="text-2xl font-bold mb-8">Story Moderation</h1>
    <AggregateStoryList v-bind="$props" @update:filters="(filters) => $emit('update:filters', filters)"
      @story:publish="(storyId) => $emit('story:publish', storyId)"
      @story:reject="(storyId) => $emit('story:reject', storyId)" @update:page="(page) => $emit('update:page', page)" />
  </div>
</template>

<script setup lang="ts">
import type { StoryListProps, StoryListEmits } from '@ui/design/types'

defineProps<StoryListProps>()
defineEmits<StoryListEmits>()
</script>