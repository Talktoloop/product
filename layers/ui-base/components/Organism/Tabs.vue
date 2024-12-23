<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { TabsRootProps } from 'radix-vue'

defineOptions({
  name: 'OrganismTabs',
})

interface TabItem {
  value: string
  label?: string
  stepper?: number | boolean
  tag?: string
  counter?: number
  content?: string | string[]
}

type TabsVariant = 'default' | 'primary'

interface Props extends TabsRootProps {
  items: TabItem[]
  variant?: TabsVariant
  size?: 'small' | 'medium'
}

const model = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium'
})

const sizeClasses = computed(() => {
  if (props.size === 'small') {
    return tw`text-base`
  }
  return tw`text-xl`
})
const baseClasses = tw`rounded-none border-b-0 data-[state=active]:border-b-2 hover:border-b-2 data-[state=active]:bg-inherit bg-inherit`
const variants = {
  default: tw`text-secondary border-b-secondary data-[state=active]:text-secondary`,
  primary: tw`text-primary border-b-primary data-[state=active]:text-primary`
} satisfies Record<TabsVariant, string>

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-tabs v-bind="forward" v-model="model">
    <shadcn-tabs-list class="bg-inherit">
      <shadcn-tabs-trigger v-for="item in items" :key="item.value" :value="item.value"
        :class="cn(baseClasses, variants[props.variant])">
        <slot :name="`${item.value}-trigger`" :label="item.label">
          <div class="flex items-center gap-2">
            <template v-if="item.stepper">
              <AtomCounter v-if="typeof item.stepper === 'number'" :count="item.stepper" />
              <AtomCounter v-else-if="typeof item.stepper === 'boolean'" :checked="item.stepper" />
            </template>
            <h5 class="font-medium" :class="sizeClasses">{{ item.label }}</h5>
            <template v-if="item.tag">
              <AtomBadge :label="item.tag" />
            </template>
            <template v-if="item.counter">
              <AtomCounter :count="item.counter" />
            </template>
          </div>
        </slot>
      </shadcn-tabs-trigger>
    </shadcn-tabs-list>
    <shadcn-tabs-content v-for="item in items" :key="item.value" :value="item.value">
      <slot :name="`${item.value}-content`">
        <template v-if="Array.isArray(item.content)">
          <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
        </template>
        <template v-else>
          {{ item.content }}
        </template>
      </slot>
    </shadcn-tabs-content>
  </shadcn-tabs>
</template>