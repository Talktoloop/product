<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'radix-vue'
import { Dialog, DialogContent } from '../dialog'
import { useForwardPropsEmits } from 'radix-vue'
import Command from './Command.vue'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const contentClasses = tw`
  overflow-hidden p-0 shadow-lg
`

const commandClasses = tw`
  [&_[cmdk-group-heading]]:px-2 
  [&_[cmdk-group-heading]]:font-medium 
  [&_[cmdk-group-heading]]:text-muted-foreground 
  dark:[&_[cmdk-group-heading]]:text-dark-muted-foreground
  [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 
  [&_[cmdk-group]]:px-2 
  [&_[cmdk-input-wrapper]_svg]:h-5 
  [&_[cmdk-input-wrapper]_svg]:w-5 
  [&_[cmdk-input]]:h-12 
  [&_[cmdk-item]]:px-2 
  [&_[cmdk-item]]:py-3 
  [&_[cmdk-item]_svg]:h-5 
  [&_[cmdk-item]_svg]:w-5
`
</script>

<template>
  <Dialog v-bind="forwarded">
    <DialogContent :class="contentClasses">
      <Command :class="commandClasses">
        <slot />
      </Command>
    </DialogContent>
  </Dialog>
</template>
