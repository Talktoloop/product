<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <h2 class="text-lg font-semibold mb-4">Filters</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <MoleculeFilterGroup label="Basic Info">
        <AtomSelect v-model="localFilters.country" label="Country" :options="countryOptions"
          @update:model-value="emitUpdate" />
        <AtomSelect v-model="localFilters.type" label="Type" :options="typeOptions" @update:model-value="emitUpdate" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup label="Demographics">
        <AtomSelect v-model="localFilters.age" label="Age" :options="ageOptions" @update:model-value="emitUpdate" />
        <AtomSelect v-model="localFilters.gender" label="Gender" :options="genderOptions"
          @update:model-value="emitUpdate" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup label="Content">
        <AtomSelect v-model="localFilters.difficulty" label="Difficulty" :options="difficultyOptions"
          @update:model-value="emitUpdate" />
        <AtomSelect v-model="localFilters.organization" label="Organization" :options="organizationOptions"
          @update:model-value="emitUpdate" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup label="Categories">
        <AtomSelect v-model="localFilters.thematic" label="Thematic" :options="thematicOptions"
          @update:model-value="emitUpdate" />
        <AtomSelect v-model="localFilters.channel" label="Channel" :options="channelOptions"
          @update:model-value="emitUpdate" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup label="Date Range">
        <AtomDatePicker v-model="localFilters.dateFrom" label="From" @update:model-value="emitUpdate" />
        <AtomDatePicker v-model="localFilters.dateTo" label="To" @update:model-value="emitUpdate" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup label="Additional">
        <AtomSelect v-model="localFilters.region" label="Region" :options="regionOptions"
          @update:model-value="emitUpdate" />
        <AtomSelect v-model="localFilters.language" label="Language" :options="languageOptions"
          @update:model-value="emitUpdate" />
      </MoleculeFilterGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StoryFilters } from '@ourloop/product-core-types'
import { ref, watch } from 'vue'

const props = defineProps<{
  filters: StoryFilters
}>()

const emit = defineEmits<{
  update: [filters: StoryFilters]
}>()

const localFilters = ref<StoryFilters>({ ...props.filters })

watch(() => props.filters, (newFilters) => {
  localFilters.value = { ...newFilters }
}, { deep: true })

const emitUpdate = () => {
  emit('update', { ...localFilters.value })
}

// These would typically come from an API or configuration
const countryOptions = [
  { label: 'Any', value: '' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
  // Add more options
]

const typeOptions = [
  { label: 'Any', value: '' },
  { label: 'Story', value: 'story' },
  { label: 'Article', value: 'article' },
  // Add more options
]

const ageOptions = [
  { label: 'Any', value: '' },
  { label: 'Children', value: 'children' },
  { label: 'Teen', value: 'teen' },
  { label: 'Adult', value: 'adult' },
]

const genderOptions = [
  { label: 'Any', value: '' },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
]

const difficultyOptions = [
  { label: 'Any', value: '' },
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
]

const organizationOptions = [
  { label: 'Any', value: '' },
  // Add organization options
]

const thematicOptions = [
  { label: 'Any', value: '' },
  // Add thematic options
]

const channelOptions = [
  { label: 'Any', value: '' },
  // Add channel options
]

const regionOptions = [
  { label: 'Any', value: '' },
  // Add region options
]

const languageOptions = [
  { label: 'Any', value: '' },
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  // Add more options
]
</script>