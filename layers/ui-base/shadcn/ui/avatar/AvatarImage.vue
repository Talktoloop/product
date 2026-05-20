<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'radix-vue'

const props = defineProps<AvatarImageProps>()

const imageClasses = tw`
  h-full w-full
  object-cover
`
</script>

<template>
  <AvatarImage v-bind="props" :class="imageClasses" />
</template>
