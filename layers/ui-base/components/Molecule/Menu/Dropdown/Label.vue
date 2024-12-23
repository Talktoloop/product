<script lang="ts" setup>
import type { DropdownMenuLabelProps } from 'radix-vue'

interface Props extends DropdownMenuLabelProps {
  inset?: boolean
}

defineProps<Props>()
</script>

<template>
  <shadcn-dropdown-menu-label v-bind="$attrs">
    <span :class="{ 'ml-6': inset }">
      <slot />
    </span>
  </shadcn-dropdown-menu-label>
</template>