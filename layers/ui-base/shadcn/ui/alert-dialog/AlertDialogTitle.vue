<script setup lang="ts">
import { cn } from '@/lib/utils'
import { AlertDialogTitle, type AlertDialogTitleProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AlertDialogTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const titleClasses = tw`
  text-lg font-semibold
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <AlertDialogTitle v-bind="delegatedProps" :class="cn(titleClasses, props.class)">
    <slot />
  </AlertDialogTitle>
</template>
