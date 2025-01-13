<script setup lang="ts">
import { Circle } from 'lucide-vue-next'
import { RadioGroupItem, type RadioGroupItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadioGroupItem v-bind="delegatedProps" :class="cn(
    'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    props.class,
  )">
    <Circle class="h-2.5 w-2.5 fill-current text-current" />
  </RadioGroupItem>
</template>
