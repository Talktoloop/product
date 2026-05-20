<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  AlertDialogDescription,
  type AlertDialogDescriptionProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const descriptionClasses = tw`
  text-sm
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <AlertDialogDescription v-bind="delegatedProps" :class="cn(descriptionClasses, props.class)">
    <slot />
  </AlertDialogDescription>
</template>
