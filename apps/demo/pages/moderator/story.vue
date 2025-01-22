<template>
  <PageModeratorStory :stories="list" :loading="loading" :error="error" :filters="filters" :current-page="page"
    :total-pages="pages" @update:filters="updateFilters" @story:publish="publishStory" @story:reject="rejectStory"
    @update:page="goToPage" />
</template>

<script setup lang="ts">
// Initialize store
const store = useStoryStore()
const { list, loading, error, filters, page, pages } = storeToRefs(store)
const { updateFilters, publish, reject, goToPage } = store

// Initialize data on mount
onMounted(() => {
  store.fetch()
})

// Event handlers
const publishStory = (id: string) => {
  publish(id)
}

const rejectStory = (id: string) => {
  reject(id, [1], ['Content violates guidelines'])
}

</script>