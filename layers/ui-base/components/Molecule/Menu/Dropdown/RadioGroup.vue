<script lang="ts" setup>
import type { DropdownMenuRadioGroupProps } from 'radix-vue'
import type { MenuItemRadioGroup } from '@ui/base/types'

interface Props extends DropdownMenuRadioGroupProps {
  item: MenuItemRadioGroup
}

defineProps<Props>()

const emit = defineEmits<{
  'update:value': [value: string]
}>()
</script>

<template>
  <shadcn-dropdown-menu-radio-group v-bind="$attrs" :value="item.value" @update:value="emit('update:value', $event)">
    <MoleculeMenuDropdownRadioItem v-for="radioItem in item.items" :key="radioItem.value" :value="radioItem.value"
      :label="radioItem.label" :disabled="item.disabled" :inset="item.inset" />
  </shadcn-dropdown-menu-radio-group>
</template>