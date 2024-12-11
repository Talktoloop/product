<script lang="ts" setup>
import type { RadioGroup as ShadcnRadioGroup } from '@ui/shadcn/radio-group'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type ShadcnRadioGroupProps = ComponentProps<typeof ShadcnRadioGroup>
type _ShadcnRadioGroupEmits = ComponentEmit<typeof ShadcnRadioGroup>

interface Props extends ShadcnRadioGroupProps {
  modelValue?: string
  options?: Array<{
    label: string
    value: string
    description?: string
  }>
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [unknown]
}>()

const forward = useForwardPropsEmits(props, emit)
</script>

<template>
  <shadcn-radio-group
v-bind="forward" :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)">
    <template v-if="options">
      <div v-for="option in options" :key="option.value" class="flex items-center space-x-2">
        <shadcn-radio-group-item :value="option.value">
          <shadcn-radio-group-item-text>
            {{ option.label }}
          </shadcn-radio-group-item-text>
          <shadcn-radio-group-item-description v-if="option.description">
            {{ option.description }}
          </shadcn-radio-group-item-description>
        </shadcn-radio-group-item>
      </div>
    </template>
    <slot />
  </shadcn-radio-group>
</template>