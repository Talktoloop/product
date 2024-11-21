<template>
  <shadcn-accordion v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-accordion>
</template>

<script setup lang="ts">
import { Accordion as ShadcnAccordion } from "../shadcn/ui/accordion"
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'

type AccordionRootProps = ComponentProps<typeof ShadcnAccordion>
type AccordionRootSlots = ComponentSlots<typeof ShadcnAccordion>

interface Props {
  collapsible?: AccordionRootProps['collapsible']
  disabled?: AccordionRootProps['disabled']
  dir?: AccordionRootProps['dir']
  orientation?: AccordionRootProps['orientation']
  type?: AccordionRootProps['type']
  class?: AccordionRootProps['class']
}

defineProps<Props>()

defineSlots<AccordionRootSlots>()

defineComponent({
  name: "MoleculeAccordion",
})
</script>