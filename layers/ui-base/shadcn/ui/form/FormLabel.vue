<script lang="ts" setup>
import type { LabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Label } from '../label'
import { cn } from '@/lib/utils'
import { useFormField } from './useFormField'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()

const labelClasses = tw`
  text-foreground
  dark:text-dark-foreground
  ${error && 'text-destructive dark:text-dark-destructive'}
`
</script>

<template>
  <Label :class="cn(labelClasses, props.class)" :for="formItemId">
    <slot />
  </Label>
</template>
