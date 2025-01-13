<script lang="ts" setup>
import type { CarouselProps } from '@ui/shadcn/carousel/interface';

defineOptions({
  name: 'OrganismCarousel',
})

interface CarouselItem {
  value: string
  content?: string | string[]
}

interface Props extends CarouselProps {
  items: CarouselItem[]
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-carousel v-slot="{ canScrollNext, canScrollPrev }" v-bind="forward">
    <shadcn-carousel-content>
      <shadcn-carousel-item v-for="item in items" :key="item.value">
        <slot v-if="item.value" :name="item.value">
          <div class="p-1">
            <MoleculeCard class="justify-center" content-class="flex aspect-square items-center justify-center p-3">
              <template v-if="Array.isArray(item.content)">
                <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
              </template>
              <template v-else>
                {{ item.content }}
              </template>
            </MoleculeCard>
          </div>
        </slot>
      </shadcn-carousel-item>
    </shadcn-carousel-content>
    <shadcn-carousel-previous v-if="canScrollPrev" />
    <shadcn-carousel-next v-if="canScrollNext" />
  </shadcn-carousel>
</template>
