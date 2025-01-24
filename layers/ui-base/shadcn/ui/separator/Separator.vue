<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Separator, type SeparatorProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'], label?: string }
>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const baseClass = tw`
  shrink-0
  bg-border dark:bg-border
  relative
`

const orientationClass = computed(() => props.orientation === 'vertical'
  ? tw`w-px h-full`
  : tw`h-px w-full`
)

const labelClass = tw`
  text-xs
  text-muted-foreground dark:text-muted-foreground
  bg-background dark:bg-background
  absolute top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  flex justify-center items-center
`

const labelOrientationClass = computed(() => props.orientation === 'vertical'
  ? tw`w-[1px] px-1 py-2`
  : tw`h-[1px] py-1 px-2`
)
</script>

<template>
  <Separator v-bind="delegatedProps" :class="cn(
    baseClass,
    orientationClass,
    props.class,
  )">
    <span v-if="props.label" :class="cn(
      labelClass,
      labelOrientationClass
    )">{{ props.label }}</span>
  </Separator>
</template>
