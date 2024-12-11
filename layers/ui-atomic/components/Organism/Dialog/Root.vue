<script lang="ts" setup>
import type { Dialog } from '@ui/shadcn/dialog'
import type { ComponentProps } from 'vue-component-type-helpers'

type ShadcnDialogProps = ComponentProps<typeof Dialog>

interface Props extends ShadcnDialogProps {
  className?: string
  title?: string
  description?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, [
  'className',
  'title',
  'description'
])
</script>

<template>
  <shadcn-dialog v-bind="forward">
    <shadcn-dialog-trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </shadcn-dialog-trigger>
    <shadcn-dialog-content>
      <shadcn-dialog-header>
        <shadcn-dialog-title v-if="$slots.title || title">
          <slot name="title">
            {{ title }}
          </slot>
        </shadcn-dialog-title>
        <shadcn-dialog-description v-if="$slots.description || description">
          <slot name="description">
            {{ description }}
          </slot>
        </shadcn-dialog-description>
      </shadcn-dialog-header>
      <slot />
    </shadcn-dialog-content>
  </shadcn-dialog>
</template>