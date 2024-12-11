<script lang="ts" setup>
import type { Toast as ShadcnToast } from '@ui/shadcn/toast'
import type { ToastRootEmits } from 'radix-vue';

interface Props extends ToastRootEmits {
  title?: string
  description?: string
  action?: string
  altText?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'dismiss': [unknown]
}>()

const model = defineModel<boolean>()

const forward = useForwardPropsEmits<Props, 'dismiss'>(props, emit, ['title', 'description', 'action', 'altText'])
</script>

<template>
  <shadcn-toast v-bind="forward" v-model="model">
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