<template>
  <div class="flex" :class="[direction === 'right' ? 'flex-row-reverse' : 'flex-row']">
    <div class="flex flex-col gap-1 max-w-[75%]" :class="[
      direction === 'right' ? 'items-end' : 'items-start'
    ]">
      <div class="px-3 text-xs text-muted-foreground flex flex-row gap-2 items-center">
        <template v-if="showHeader">
          <slot name="header" />
        </template>
        <div v-if="$slots.actions">
          <slot name="actions" />
        </div>
      </div>

      <div class="flex flex-col gap-0.5">
        <div class="group px-4 py-2.5" :class="[
          colorClasses,
          cornerClasses
        ]">
          <div class="text-sm">
            <slot />
          </div>
        </div>
        <div v-if="$slots.error" class="px-3 text-xs text-destructive-700">
          <slot name="error" />
        </div>
      </div>

      <div v-if="showFooter" class="px-3 text-xs text-muted-foreground">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SequencePosition } from '@ui/design/types'

defineNuxtComponent({
  name: 'MoleculeChatMessageBase'
})

const props = defineProps<{
  direction: 'left' | 'right'
  variant: 'primary' | 'primary-story' | 'muted' | 'destructive'
  sequencePosition: SequencePosition
}>()

const colorClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-100 text-primary-foreground-700 border border-1 border-primary-200'
    case 'primary-story':
      return 'bg-primary-200 text-primary-foreground-700 border border-1 border-primary-300'
    case 'muted':
      return 'bg-muted-50 text-muted-foreground border border-1 border-muted-100'
    case 'destructive':
      return 'bg-destructive-50 text-destructive-700 border border-1 border-destructive-700'
    default:
      return ''
  }
})

const cornerClasses = computed(() => {
  const isLeft = props.direction === 'left'
  const corners = {
    standalone: isLeft ? 'rounded-2xl rounded-bl-none' : 'rounded-2xl rounded-br-none',
    first: isLeft ? 'rounded-2xl rounded-bl-none' : 'rounded-2xl rounded-br-none',
    middle: isLeft ? 'rounded-2xl rounded-bl-none' : 'rounded-2xl rounded-br-none',
    last: isLeft ? 'rounded-2xl rounded-bl-none' : 'rounded-2xl rounded-br-none'
  }
  return corners[props.sequencePosition]
})

const showHeader = computed(() => {
  return props.sequencePosition === 'first' || props.sequencePosition === 'standalone'
})

const showFooter = computed(() => {
  return props.sequencePosition === 'last' || props.sequencePosition === 'standalone'
})
</script>
