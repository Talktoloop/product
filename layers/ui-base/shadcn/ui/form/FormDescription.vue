<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useFormField } from './useFormField'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()

const descriptionClasses = tw`
  text-sm 
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <p :id="formDescriptionId" :class="cn(descriptionClasses, props.class)">
    <slot />
  </p>
</template>
