<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>(), {
  as: 'a',
})

const linkClasses = tw`
  transition-colors
  hover:text-foreground
  dark:hover:text-dark-foreground
`
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(linkClasses, props.class)">
    <slot />
  </Primitive>
</template>
