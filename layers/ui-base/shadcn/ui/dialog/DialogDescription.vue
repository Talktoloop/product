<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DialogDescription, type DialogDescriptionProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const descriptionClasses = tw`
  text-sm 
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <DialogDescription v-bind="forwardedProps" :class="cn(descriptionClasses, props.class)">
    <slot />
  </DialogDescription>
</template>
