<template>
  <shadcn-skeleton v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-skeleton>
</template>

<script setup lang="ts">
import type { Skeleton as ShadcnSkeleton } from "../shadcn/ui/skeleton"
import type { ComponentProps } from 'vue-component-type-helpers'

type SkeletonProps = ComponentProps<typeof ShadcnSkeleton>

interface Props {
  class: SkeletonProps['class']
}

defineProps<Props>()

defineComponent({
  name: "AtomSkeleton",
})
</script>