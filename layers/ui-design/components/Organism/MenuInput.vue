<script setup lang="ts">
import type { InputMenuItem } from '@ui/design/types'

interface Props {
  triggerLabel?: string
  placeholder?: string
  menu: InputMenuItem[]
}

const model = defineModel<string[]>()
const props = withDefaults(defineProps<Props>(), {
  triggerLabel: 'Edit Options',
  placeholder: 'Select an option',
})

const dropdownMenu = computed(() => props.menu.map((item) => toMenuItem(item)))
</script>
<template>
  <div
    class="flex flex-row gap-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
    <MoleculeMenuDropdown :menu="dropdownMenu" class="flex-shrink-0">
      <template #trigger>
        <AtomBadge size="lg" variant="secondary">
          {{ triggerLabel }} ({{ model?.length ?? 0 }} Selected)
        </AtomBadge>
      </template>
    </MoleculeMenuDropdown>
    <div class="flex-1">
      <template v-if="model && model.length > 0">
        <AtomBadge v-for="item in model" :key="item" size="lg">
          {{ item }}
        </AtomBadge>
      </template>
      <template v-else>
        <input type="text" class="placeholder:text-muted-foreground border-none bg-transparent"
          :placeholder="placeholder">
      </template>
    </div>
  </div>
</template>
