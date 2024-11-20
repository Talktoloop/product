<template>
  <shadcn-accordion v-bind="$attrs">
    <slot />
  </shadcn-accordion>
</template>

<script setup lang="ts">
import { Accordion as ShadcnAccordion } from "../shadcn/ui/accordion"
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'

type AccordionRootProps = ComponentProps<typeof ShadcnAccordion>
type AccordionRootSlots = ComponentSlots<typeof ShadcnAccordion>

interface Props extends AccordionRootProps {
  type?: "single" | "multiple"
}

defineProps<Props>()

defineSlots<AccordionRootSlots>()

defineComponent({
  name: "MoleculeAccordion",
})
</script>