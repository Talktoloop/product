<template>
  <shadcn-calendar v-model="model" v-bind="{ ...delegatedProps, ...$attrs }">
    <slot />
  </shadcn-calendar>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Calendar as ShadcnCalendar } from "../shadcn/ui/calendar"

type CalendarProps = ComponentProps<typeof ShadcnCalendar>
type CalendarSlots = ComponentSlots<typeof ShadcnCalendar>

interface Props {
  modelValue?: CalendarProps['modelValue']
  defaultValue?: CalendarProps['defaultValue']
  class?: CalendarProps['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { modelValue, ...delegated } = props
  return delegated
})

type OneOrMany<T> = T | T[]
type JustOne<T> = T extends OneOrMany<infer U> ? U : never

const model = computed(() => props.modelValue as JustOne<CalendarProps['modelValue']>)

defineSlots<CalendarSlots>()

defineComponent({
  name: "MoleculeCalendar",
})
</script>