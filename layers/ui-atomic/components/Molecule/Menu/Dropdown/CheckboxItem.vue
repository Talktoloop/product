<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from 'radix-vue'
import type { MenuItemCheckbox } from '@ui/atomic/types'

interface Props extends DropdownMenuCheckboxItemProps {
  item: MenuItemCheckbox
}

defineProps<Props>()

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()
</script>

<template>
  <shadcn-dropdown-menu-checkbox-item
v-bind="$attrs" :checked="item.checked" :disabled="item.disabled"
    @update:checked="emit('update:checked', $event)">
    <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
    <span :class="{ 'ml-6': item.inset }">{{ item.label }}</span>
    <span v-if="item.shortcut" class="ml-auto text-xs tracking-widest opacity-60">
      {{ item.shortcut }}
    </span>
  </shadcn-dropdown-menu-checkbox-item>
</template>