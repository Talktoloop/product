<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const checkboxClasses = tw`
  peer h-4 w-4 shrink-0 rounded-sm 
  border border-primary 
  ring-offset-background
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
  disabled:cursor-not-allowed disabled:opacity-50 
  data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
  dark:border-dark-primary dark:ring-offset-dark-background
  dark:data-[state=checked]:bg-dark-primary dark:data-[state=checked]:text-dark-primary-foreground
`

const indicatorClasses = tw`
  flex h-full w-full items-center justify-center text-current
`

const iconClasses = tw`
  h-4 w-4
`
</script>

<template>
  <CheckboxRoot v-bind="forwarded" :class="cn(checkboxClasses, props.class)">
    <CheckboxIndicator :class="indicatorClasses">
      <slot>
        <Check :class="iconClasses" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
