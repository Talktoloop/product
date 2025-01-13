<script lang="ts" setup>
import type { RadioGroup as ShadcnRadioGroup } from '@ui/shadcn/radio-group'
import type { RadioGroupRootProps } from 'radix-vue';

defineOptions({
  name: 'MoleculeRadioGroup',
})

interface Props extends RadioGroupRootProps {
  modelValue?: string
  options?: Array<{
    label: string
    value: string
    description?: string
  }>
}

const props = defineProps<Props>()
const model = defineModel<string>()

const forward = useForwardPropsEmits(props)
</script>

<template>
  <shadcn-radio-group v-bind="forward" v-model="model">
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