<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <h2 class="text-lg font-semibold mb-4">Filters</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <MoleculeFilterGroup title="Basic Info">
        <AtomSelect v-model="localFilters.country" label="Country" :options="countryOptions" />
        <AtomSelect v-model="localFilters.type" label="Type" :options="typeOptions" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup title="Demographics">
        <AtomSelect v-model="localFilters.age" label="Age" :options="ageOptions" />
        <AtomSelect v-model="localFilters.gender" label="Gender" :options="genderOptions" />
      </MoleculeFilterGroup>

      <MoleculeFilterGroup title="Content">
        <AtomSelect v-model="localFilters.difficulty" label="Difficulty" :options="difficultyOptions" />
        <AtomSelect v-model="localFilters.language" label="Language" :options="languageOptions" />
        <AtomToggle v-model="localFilters.isSensitive" label="Sensitive Content" />
      </MoleculeFilterGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StoryFilters } from '@ourloop/product-core-model/story'
import type { StoryFilterEmits } from '@ui/design/types'
import { ref, watch } from 'vue'

interface FilterControlsProps {
  filters: StoryFilters
}

const props = defineProps<FilterControlsProps>()
const emit = defineEmits<StoryFilterEmits>()

const localFilters = ref<StoryFilters>({ ...props.filters })

watch(localFilters, (newFilters) => {
  emit('update:filters', newFilters)
}, { deep: true })

// Options for select inputs
const countryOptions = ['USA', 'UK', 'Canada', 'Australia']
const typeOptions = ['Story', 'Article', 'Blog']
const ageOptions = ['0-18', '19-30', '31-50', '50+']
const genderOptions = ['Male', 'Female', 'Other']
const difficultyOptions = ['Easy', 'Medium', 'Hard']
const languageOptions = ['English', 'Spanish', 'French']
</script>