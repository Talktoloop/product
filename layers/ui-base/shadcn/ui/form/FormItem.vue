<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { useId } from 'radix-vue'
import { type HTMLAttributes, provide } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)

const itemClasses = tw`
  space-y-2
`
</script>

<template>
  <div :class="cn(itemClasses, props.class)">
    <slot />
  </div>
</template>
