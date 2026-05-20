<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const inputClasses = tw`
  flex h-10 w-full 
  rounded-md border border-input 
  bg-background px-3 py-2 
  text-sm text-foreground
  ring-offset-background 
  
  file:border-0 
  file:bg-transparent 
  file:text-sm 
  file:font-medium 
  
  placeholder:text-muted-foreground 
  
  focus-visible:outline-none 
  focus-visible:ring-2 
  focus-visible:ring-ring 
  focus-visible:ring-offset-2 
  
  disabled:cursor-not-allowed 
  disabled:opacity-50

  dark:bg-dark-background
  dark:text-dark-foreground
  dark:border-dark-border
  dark:placeholder:text-dark-muted-foreground
  dark:focus-visible:ring-dark-ring
  dark:focus-visible:ring-offset-dark-background
`
</script>

<template>
  <input v-model="modelValue" :class="cn(inputClasses, props.class)">
</template>
