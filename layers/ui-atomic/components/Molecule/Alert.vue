<script lang="ts" setup>
import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import type { alertVariants } from '@ui/shadcn/alert'

defineOptions({
  name: 'MoleculeAlert',
})

type ShadcnAlertProps = {
  class?: HTMLAttributes['class']
  variant?: VariantProps<typeof alertVariants>['variant']
}

interface Props extends ShadcnAlertProps {
  title?: string
  description?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, [
  'title',
  'description'
])
</script>

<template>
  <shadcn-alert v-bind="forward">
    <shadcn-alert-title v-if="$slots.title || title">
      <slot name="title">
        {{ title }}
      </slot>
    </shadcn-alert-title>
    <shadcn-alert-description v-if="$slots.description || description">
      <slot name="description">
        {{ description }}
      </slot>
    </shadcn-alert-description>
    <slot />
  </shadcn-alert>
</template>