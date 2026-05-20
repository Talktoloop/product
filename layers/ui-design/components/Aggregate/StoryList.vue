<template>
  <div class="space-y-8">
    <OrganismFilterControls :filters="filters" @update="(filters: StoryFilters) => $emit('update:filters', filters)" />
    <OrganismStoryList :stories="stories" :loading="loading" :error="error"
      @publish="(storyId: string) => $emit('story:publish', storyId)"
      @reject="(storyId: string) => $emit('story:reject', storyId)" />
    <OrganismPagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages"
      @page-change="(page: number) => $emit('update:page', page)" />
  </div>
</template>

<script setup lang="ts">
import type { StoryListProps, StoryListEmits } from '@ui/design/types'
import type { StoryFilters } from '@ourloop/product-core-model'

defineProps<StoryListProps>()
defineEmits<StoryListEmits>()
</script>