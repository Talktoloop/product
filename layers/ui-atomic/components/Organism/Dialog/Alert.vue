<script lang="ts" setup>
import type { AlertDialog } from '@ui/shadcn/alert-dialog'
import type { ComponentProps } from 'vue-component-type-helpers'

type ShadcnAlertDialogProps = ComponentProps<typeof AlertDialog>

interface Props extends ShadcnAlertDialogProps {
  title?: string
  description?: string
  action?: string
  cancel?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, [
  'title',
  'description',
  'action',
  'cancel'
])
</script>

<template>
  <shadcn-alert-dialog v-bind="forward">
    <shadcn-alert-dialog-trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </shadcn-alert-dialog-trigger>
    <shadcn-alert-dialog-content>
      <shadcn-alert-dialog-header>
        <shadcn-alert-dialog-title v-if="$slots.title || title">
          <slot name="title">
            {{ title }}
          </slot>
        </shadcn-alert-dialog-title>
        <shadcn-alert-dialog-description v-if="$slots.description || description">
          <slot name="description">
            {{ description }}
          </slot>
        </shadcn-alert-dialog-description>
      </shadcn-alert-dialog-header>
      <shadcn-alert-dialog-footer>
        <shadcn-alert-dialog-cancel v-if="$slots.cancel || cancel">
          <slot name="cancel">
            {{ cancel }}
          </slot>
        </shadcn-alert-dialog-cancel>
        <shadcn-alert-dialog-action v-if="$slots.action || action">
          <slot name="action">
            {{ action }}
          </slot>
        </shadcn-alert-dialog-action>
      </shadcn-alert-dialog-footer>
    </shadcn-alert-dialog-content>
  </shadcn-alert-dialog>
</template>