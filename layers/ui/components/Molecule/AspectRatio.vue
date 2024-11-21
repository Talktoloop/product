<template>
  <shadcn-aspect-ratio v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-aspect-ratio>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { AspectRatio as ShadcnAspectRatio } from "../shadcn/ui/aspect-ratio"

type AspectRatioProps = ComponentProps<typeof ShadcnAspectRatio>
type AspectRatioSlots = ComponentSlots<typeof ShadcnAspectRatio>

interface Props {
  ratio?: AspectRatioProps['ratio']
  class?: AspectRatioProps['class']
}

defineProps<Props>()

defineSlots<AspectRatioSlots>()

defineComponent({
  name: "MoleculeAspectRatio",
})
</script>