<script setup lang="ts">
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const overlayClasses = tw`
  fixed inset-0 z-50 
  bg-black/80 
  data-[state=open]:animate-in 
  data-[state=closed]:animate-out 
  data-[state=closed]:fade-out-0 
  data-[state=open]:fade-in-0
`

const contentClasses = tw`
  fixed left-1/2 top-1/2 z-50 
  grid w-full max-w-lg 
  -translate-x-1/2 -translate-y-1/2 
  gap-4 
  border bg-background p-6 
  shadow-lg duration-200 
  dark:bg-dark-background
  dark:border-dark-border
  sm:rounded-lg
  data-[state=open]:animate-in 
  data-[state=closed]:animate-out 
  data-[state=closed]:fade-out-0 
  data-[state=open]:fade-in-0 
  data-[state=closed]:zoom-out-95 
  data-[state=open]:zoom-in-95 
  data-[state=closed]:slide-out-to-left-1/2 
  data-[state=closed]:slide-out-to-top-[48%] 
  data-[state=open]:slide-in-from-left-1/2 
  data-[state=open]:slide-in-from-top-[48%]
`

const closeButtonClasses = tw`
  absolute right-4 top-4 
  rounded-sm opacity-70 
  ring-offset-background 
  transition-opacity 
  hover:opacity-100 
  focus:outline-none focus:ring-2 
  focus:ring-ring focus:ring-offset-2 
  disabled:pointer-events-none 
  data-[state=open]:bg-accent 
  data-[state=open]:text-muted-foreground
  dark:ring-offset-dark-background
  dark:focus:ring-dark-ring
  dark:data-[state=open]:bg-dark-accent
  dark:data-[state=open]:text-dark-muted-foreground
`

const closeIconClasses = tw`
  w-4 h-4
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <DialogPortal>
    <DialogOverlay :class="overlayClasses" />
    <DialogContent v-bind="forwarded" :class="cn(contentClasses, props.class)">
      <slot />
      <DialogClose :class="closeButtonClasses">
        <X :class="closeIconClasses" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
