<script lang="ts" setup>
import type { CarouselProps } from '@ui/shadcn/carousel/interface';

interface CarouselItem {
  value: string
  content: string | string[]
  name?: string
}

interface Props extends CarouselProps {
  items: CarouselItem[]
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-carousel v-bind="forward">
    <shadcn-carousel-content>
      <shadcn-carousel-item v-for="item in items" :key="item.value">
        <slot v-if="item.name" :name="item.name">
          <template v-if="Array.isArray(item.content)">
            <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </slot>
        <template v-else>
          <template v-if="Array.isArray(item.content)">
            <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </template>
      </shadcn-carousel-item>
    </shadcn-carousel-content>
  </shadcn-carousel>
</template>