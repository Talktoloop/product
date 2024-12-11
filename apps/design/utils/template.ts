import type { Meta, StoryContext } from '@storybook/vue3'
import dedent from 'dedent'

const reservedWords = [] as string[]

export function propList<T extends object>(
  props: T,
  bind: boolean = false,
  omit: (keyof T)[] = []
) {
  return Object.entries(props)
    .filter(([key]) => !omit.includes(key as keyof T))
    .map(([key, value]) => {
      if (bind) {
        const keyName = reservedWords.includes(key) ? `_${key}` : key
        return `:${key}="${keyName}"`
      }
      if (typeof value === 'string') {
        return `${key}='${value}'`
      }
      return `:${key}="${JSON.stringify(value)}"`
    })
    .join(' ')
}

export function parseArgs<T extends object>(args: T, slotNames: (keyof T)[] = []) {
  const props = computed(() => {
    return Object.entries(args)
      .filter(([key]) => !slotNames.includes(key as keyof T))
      .reduce((acc, [key, value]) => {
        return { ...acc, [key]: value }
      }, {} as T)
  })
  const slots = computed(() => {
    return Object.entries(args)
      .filter(([key]) => slotNames.includes(key as keyof T))
      .reduce((acc, [key, value]) => {
        const keyName = reservedWords.includes(key) ? `_${key}` : key
        return { ...acc, [keyName]: value }
      }, {} as T)
  })
  return { props, slots }
}

export function template(componentName: string, slotNames: string[]) {
  const slots = slotNames
    .map(
      (slotName) => /* html */ `
        <template #${slotName}>
          <div v-html="slots.${slotName}" />
        </template>
      `
    )
    .join('')
  return dedent`
      <${componentName} v-bind="props">
        ${slots}
      </${componentName}>
    `
}

export function source(componentName: string, slotNames: string[]) {
  return (_code: string, storyContext: StoryContext) => {
    const slots = slotNames
      .map((slotName) =>
        slotName === 'default' && slotNames.length === 1
          ? storyContext.args[slotName]
          : /* html */ `<template #${slotName}>${storyContext.args[slotName]}</template>`
      )
      .join('\n')

    const args = propList(storyContext.args, false, slotNames)
    return dedent`
      <${componentName} ${args}>
        ${slots}
      </${componentName}>
    `
  }
}

export function withSlots(components: Record<string, Component>, slotNames: string[]) {
  if (Object.keys(components).length !== 1) {
    throw new Error('withSlots expects a single component')
  }
  const [[componentName, _component]] = Object.entries(components)
  return {
    render: (_, { args }) => ({
      components,
      setup: () => parseArgs(args, slotNames),
      template: template(componentName, slotNames),
    }),
    args: {
      class: 'bg-muted text-muted-foreground text-center flex items-center justify-center',
    },
    parameters: {
      docs: {
        source: {
          transform: source(componentName, slotNames),
        },
      },
    },
  } as Meta<typeof _component>
}
