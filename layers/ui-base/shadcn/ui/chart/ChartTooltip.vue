<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '../card'

defineProps<{
  title?: string
  data: {
    name: string
    color: string
    value: any
  }[]
}>()

const headerClasses = tw`
  p-3 border-b
  dark:border-dark-border
`

const contentClasses = tw`
  p-3 min-w-[180px]
  flex flex-col gap-1
  dark:bg-dark-background
  dark:text-dark-foreground
`

const itemClasses = tw`
  flex justify-between
  dark:text-dark-foreground
`

const iconWrapperClasses = tw`
  flex items-center
  dark:text-dark-foreground
`

const iconClasses = tw`
  w-2.5 h-2.5 mr-2
  dark:text-dark-foreground
`

const valueClasses = tw`
  font-semibold ml-4
  dark:text-dark-foreground
`
</script>

<template>
  <Card class="text-sm">
    <CardHeader v-if="title" :class="headerClasses">
      <CardTitle>
        {{ title }}
      </CardTitle>
    </CardHeader>
    <CardContent :class="contentClasses">
      <div v-for="(item, key) in data" :key="key" :class="itemClasses">
        <div :class="iconWrapperClasses">
          <span :class="iconClasses">
            <svg width="100%" height="100%" viewBox="0 0 30 30">
              <path d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0" :stroke="item.color" :fill="item.color"
                stroke-width="1" />
            </svg>
          </span>
          <span>{{ item.name }}</span>
        </div>
        <span :class="valueClasses">{{ item.value }}</span>
      </div>
    </CardContent>
  </Card>
</template>
