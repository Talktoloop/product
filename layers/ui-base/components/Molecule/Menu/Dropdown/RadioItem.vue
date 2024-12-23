<script lang="ts" setup>
import type { DropdownMenuRadioItemProps } from 'radix-vue'

interface Props extends DropdownMenuRadioItemProps {
  label: string
  value: string
  disabled?: boolean
  inset?: boolean
}

defineProps<Props>()
</script>

<template>
  <shadcn-dropdown-menu-radio-item v-bind="$attrs" :value="value" :disabled="disabled">
    <span :class="{ 'ml-6': inset }">{{ label }}</span>
  </shadcn-dropdown-menu-radio-item>
</template>