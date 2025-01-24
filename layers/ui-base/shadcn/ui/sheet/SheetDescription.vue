<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DialogDescription, type DialogDescriptionProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const descriptionClass = tw`
  text-sm
  text-muted-foreground dark:text-muted-foreground
`
</script>

<template>
  <DialogDescription :class="cn(descriptionClass, props.class)" v-bind="delegatedProps">
    <slot />
  </DialogDescription>
</template>
