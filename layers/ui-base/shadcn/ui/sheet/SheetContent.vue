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
import { type SheetVariants, sheetVariants } from '.'
import { tw } from '@/lib/utils'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const overlayClass = tw`
  fixed inset-0 z-50
  bg-black/80 dark:bg-black/80
  data-[state=open]:animate-in data-[state=closed]:animate-out
  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
`

const closeButtonClass = tw`
  absolute right-4 top-4
  rounded-sm
  opacity-70
  ring-offset-background dark:ring-offset-background
  
  transition-opacity
  hover:opacity-100
  
  focus:outline-none
  focus:ring-2 focus:ring-ring focus:ring-offset-2
  dark:focus:ring-ring
  
  disabled:pointer-events-none
  
  data-[state=open]:bg-secondary dark:data-[state=open]:bg-secondary
`

const closeIconClass = tw`
  w-4 h-4
  text-muted-foreground dark:text-muted-foreground
`
</script>

<template>
  <DialogPortal>
    <DialogOverlay :class="overlayClass" />
    <DialogContent :class="cn(sheetVariants({ side }), props.class)" v-bind="{ ...forwarded, ...$attrs }">
      <slot />

      <DialogClose :class="closeButtonClass">
        <X :class="closeIconClass" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
