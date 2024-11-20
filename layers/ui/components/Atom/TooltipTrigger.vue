<template>
  <shadcn-tooltip-trigger v-bind="$attrs">
    <slot />
  </shadcn-tooltip-trigger>
</template>

<script setup lang="ts">
import type { TooltipTrigger as ShadcnTooltipTrigger } from "../shadcn/ui/tooltip"
import type { ComponentProps } from 'vue-component-type-helpers'

type TooltipTriggerProps = ComponentProps<typeof ShadcnTooltipTrigger>

interface Props {
  asChild: TooltipTriggerProps['asChild']
}

defineProps<Props>()

defineComponent({
  name: "AtomTooltipTrigger",
})
</script>