<template>
  <shadcn-pagination v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #prev>
      <slot name="prev" />
    </template>
    <template #next>
      <slot name="next" />
    </template>
  </shadcn-pagination>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Pagination as ShadcnPagination } from "../shadcn/ui/pagination"

type PaginationProps = ComponentProps<typeof ShadcnPagination>
type PaginationSlots = ComponentSlots<typeof ShadcnPagination>

interface Props {
  total: PaginationProps['total']
  value?: PaginationProps['value']
  siblingsCount?: PaginationProps['siblingsCount']
  class?: PaginationProps['class']
}

defineProps<Props>()

defineSlots<PaginationSlots>()

defineComponent({
  name: "MoleculePagination",
})
</script>