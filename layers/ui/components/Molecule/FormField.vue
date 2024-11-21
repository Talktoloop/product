<template>
  <shadcn-form-field v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #label>
      <slot name="label" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
    <template #error>
      <slot name="error" />
    </template>
  </shadcn-form-field>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { FormField as ShadcnFormField } from "../shadcn/ui/form"

type FormFieldProps = ComponentProps<typeof ShadcnFormField>
type FormFieldSlots = ComponentSlots<typeof ShadcnFormField>

interface Props {
  name: FormFieldProps['name']
  class?: FormFieldProps['class']
}

defineProps<Props>()

defineSlots<FormFieldSlots>()

defineComponent({
  name: "MoleculeFormField",
})
</script>