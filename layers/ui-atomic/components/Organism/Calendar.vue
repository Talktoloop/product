<script lang="ts" setup>
import type { DatePickerRootProps } from 'radix-vue'

const props = defineProps<DatePickerRootProps>()

const forward = useForwardPropsEmits(props)

// The Bar Chart component from Shadcn UI is read-only,
// can't change the name, hence the forwarded implementation
defineOptions({
  name: 'OrganismCalendar',
})
</script>

<template>
  <shadcn-calendar v-bind="forward">
    <slot />
  </shadcn-calendar>
</template>
