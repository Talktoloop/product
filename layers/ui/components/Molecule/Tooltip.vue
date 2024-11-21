<template>
  <shadcn-tooltip v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-tooltip>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Tooltip as ShadcnTooltip } from "../shadcn/ui/tooltip"

type TooltipProps = ComponentProps<typeof ShadcnTooltip>
type TooltipSlots = ComponentSlots<typeof ShadcnTooltip>

interface Props {
  defaultOpen?: TooltipProps['defaultOpen']
  open?: TooltipProps['open']
  delayDuration?: TooltipProps['delayDuration']
  disableHoverableContent?: TooltipProps['disableHoverableContent']
  class?: TooltipProps['class']
}

defineProps<Props>()

defineSlots<TooltipSlots>()

defineComponent({
  name: "MoleculeTooltip",
})
</script>