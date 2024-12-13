import type { NuxtLinkProps } from '#app'
import type { Component } from 'vue'

export interface BaseNavigationItem {
  __type: string
  id: string
  disabled?: boolean
  label?: string
  icon?: Component
}

export interface NavigationItemLink<_ extends string = never> extends BaseNavigationItem {
  __type: 'NavigationItemLink'
  link: NuxtLinkProps
}

export interface NavigationItemContent<T extends string = never> extends BaseNavigationItem {
  __type: 'NavigationItemContent'
  slot: T
}

export type NavigationItem<T extends string = never> =
  | NavigationItemLink<T>
  | NavigationItemContent<T>

export type NavigationContentSlots<T extends Array<unknown>> = {
  [K in keyof T as T[K] extends NavigationItemContent<infer _> ? T[K]['slot'] : never]: (props: {
    value: T[K]
  }) => VNode
}
