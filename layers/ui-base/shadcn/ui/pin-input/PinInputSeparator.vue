<script setup lang="ts">
import { Dot } from 'lucide-vue-next'
import { Primitive, type PrimitiveProps, useForwardProps } from 'radix-vue'

const props = defineProps<PrimitiveProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <Dot :class="tw`
        h-4 w-4
        text-muted-foreground dark:text-muted-foreground
      `" />
    </slot>
  </primitive>
</template>
