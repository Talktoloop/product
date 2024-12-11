<script lang="ts" setup>
import type { Select as ShadcnSelect } from '@ui/shadcn/select'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type ShadcnSelectProps = ComponentProps<typeof ShadcnSelect>
type _ShadcnSelectEmits = ComponentEmit<typeof ShadcnSelect>

interface Props extends ShadcnSelectProps {
  modelValue?: string
  placeholder?: string
  options?: Array<{
    label: string
    value: string
    disabled?: boolean
  }>
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [unknown]
}>()

const forward = useForwardPropsEmits(props, emit)
</script>

<template>
  <shadcn-select v-bind="forward" :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)">
    <shadcn-select-trigger>
      <shadcn-select-value :placeholder="placeholder" />
    </shadcn-select-trigger>
    <shadcn-select-content>
      <template v-if="options">
        <shadcn-select-item
v-for="option in options" :key="option.value" :value="option.value"
          :disabled="option.disabled">
          {{ option.label }}
        </shadcn-select-item>
      </template>
      <slot />
    </shadcn-select-content>
  </shadcn-select>
</template>