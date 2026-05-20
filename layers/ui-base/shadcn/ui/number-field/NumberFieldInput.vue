<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { NumberFieldInput } from 'radix-vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NumberFieldInput data-slot="input" :class="cn(
    tw`
        flex h-10 w-full rounded-md
        border border-input bg-background
        dark:border-input dark:bg-background
        
        py-2 text-sm text-center
        text-foreground dark:text-foreground
        
        ring-offset-background
        dark:ring-offset-background
        
        placeholder:text-muted-foreground
        dark:placeholder:text-muted-foreground
        
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2
        dark:focus-visible:ring-ring
        
        disabled:cursor-not-allowed disabled:opacity-50
      `,
    props.class
  )" />
</template>
