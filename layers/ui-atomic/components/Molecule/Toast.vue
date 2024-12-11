<script lang="ts" setup>
import type { Toast as ShadcnToast } from '@ui/shadcn/toast'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type ShadcnToastProps = ComponentProps<typeof ShadcnToast>
type _ShadcnToastEmits = ComponentEmit<typeof ShadcnToast>

interface Props extends ShadcnToastProps {
  title?: string
  description?: string
  action?: string
  altText?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [unknown]
  'dismiss': [unknown]
}>()

const forward = useForwardPropsEmits(props, emit)
</script>

<template>
  <shadcn-toast v-bind="forward">
    <shadcn-toast-title v-if="$slots.title || title">
      <slot name="title">
        {{ title }}
      </slot>
    </shadcn-toast-title>
    <shadcn-toast-description v-if="$slots.description || description">
      <slot name="description">
        {{ description }}
      </slot>
    </shadcn-toast-description>
    <shadcn-toast-action v-if="$slots.action || action" :alt-text="altText || 'toast action'" as-child>
      <slot name="action">
        {{ action }}
      </slot>
    </shadcn-toast-action>
    <slot />
  </shadcn-toast>
</template>