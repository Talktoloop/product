<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ToastAction, type ToastActionProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction v-bind="delegatedProps" :class="cn(tw`
    inline-flex h-8 shrink-0 items-center justify-center rounded-md border 
    bg-transparent px-3 text-sm font-medium 
    ring-offset-background 
    dark:ring-offset-dark-background
    transition-colors 
    hover:bg-secondary
    dark:hover:bg-dark-secondary
    focus:outline-none focus:ring-2 
    focus:ring-ring 
    dark:focus:ring-dark-ring
    focus:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50 
    group-[.destructive]:border-muted/40 
    dark:group-[.destructive]:border-dark-muted/40
    group-[.destructive]:hover:border-destructive/30 
    dark:group-[.destructive]:hover:border-dark-destructive/30
    group-[.destructive]:hover:bg-destructive 
    dark:group-[.destructive]:hover:bg-dark-destructive
    group-[.destructive]:hover:text-destructive-foreground
    dark:group-[.destructive]:hover:text-dark-destructive-foreground
    group-[.destructive]:focus:ring-destructive
    dark:group-[.destructive]:focus:ring-dark-destructive
  `, props.class)">
    <slot />
  </ToastAction>
</template>
