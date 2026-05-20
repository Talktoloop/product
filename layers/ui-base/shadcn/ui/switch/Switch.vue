<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot v-bind="forwarded" :class="cn(tw`
      peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full 
      border-2 border-transparent transition-colors 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
      focus-visible:ring-offset-2 focus-visible:ring-offset-background 
      dark:focus-visible:ring-dark-ring
      dark:focus-visible:ring-offset-dark-background
      disabled:cursor-not-allowed disabled:opacity-50 
      data-[state=checked]:bg-primary 
      dark:data-[state=checked]:bg-dark-primary
      data-[state=unchecked]:bg-input
      dark:data-[state=unchecked]:bg-dark-input
    `, props.class)">
    <SwitchThumb :class="cn(tw`
        pointer-events-none block h-5 w-5 rounded-full 
        bg-background
        dark:bg-dark-background
        shadow-lg ring-0 transition-transform 
        data-[state=checked]:translate-x-5
      `)">
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
