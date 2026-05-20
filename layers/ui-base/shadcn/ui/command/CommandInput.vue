<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Search } from 'lucide-vue-next'
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const wrapperClasses = tw`
  flex items-center 
  border-b px-3
  dark:border-dark-border
`

const iconClasses = tw`
  mr-2 h-4 w-4 
  shrink-0 opacity-50
  text-muted-foreground
  dark:text-dark-muted-foreground
`

const inputClasses = tw`
  flex h-11 w-full 
  rounded-md bg-transparent py-3 
  text-sm outline-none 
  placeholder:text-muted-foreground
  dark:placeholder:text-dark-muted-foreground
  disabled:cursor-not-allowed disabled:opacity-50
`
</script>

<template>
  <div :class="wrapperClasses" cmdk-input-wrapper>
    <Search :class="iconClasses" />
    <ComboboxInput v-bind="{ ...forwardedProps, ...$attrs }" auto-focus :class="cn(inputClasses, props.class)" />
  </div>
</template>
