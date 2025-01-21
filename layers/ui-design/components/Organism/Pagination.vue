<template>
  <nav class="flex items-center justify-between">
    <AtomButton :disabled="props.currentPage === 1" @click="$emit('update:page', props.currentPage - 1)">
      Previous
    </AtomButton>
    <div class="flex space-x-2">
      <template v-for="page in pages" :key="page">
        <AtomButton :variant="page === props.currentPage ? 'default' : 'outline'" @click="$emit('update:page', page)">
          {{ page }}
        </AtomButton>
      </template>
    </div>
    <AtomButton :disabled="props.currentPage === props.totalPages" @click="$emit('update:page', props.currentPage + 1)">
      Next
    </AtomButton>
  </nav>
</template>

<script setup lang="ts">
import type { PaginationEmits } from '@ui/design/types'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const props = defineProps<PaginationProps>()
defineEmits<PaginationEmits>()

const pages = computed(() => {
  const result = []
  for (let i = 1; i <= props.totalPages; i++) {
    result.push(i)
  }
  return result
})
</script>