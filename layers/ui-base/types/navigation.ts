import type { Component } from 'vue'
import type { MenuLink } from './menu'

export interface BaseNavigationItem {
  __type: string
  id: string
  disabled?: boolean
  label?: string
  icon?: Component
}

export interface NavigationItemLink<_ extends string = never> extends BaseNavigationItem {
  __type: 'NavigationItemLink'
  link: MenuLink
}

export interface NavigationItemMenu<T extends string = never> extends BaseNavigationItem {
  __type: 'NavigationItemMenu'
  rows?: 'auto' | 3 | 4 | 5 | 6
  slot?: { id: string; name: T; link?: MenuLink }
  menu?: NavigationItemLink<string>[]
}

export type NavigationItem<T extends string = never> = NavigationItemLink<T> | NavigationItemMenu<T>

export type NavigationContentSlots<T extends Array<unknown>> = {
  [K in keyof T as T[K] extends NavigationItemMenu<infer _>
    ? T[K]['slot'] extends { id: string; name: infer _ }
      ? T[K]['slot']['name']
      : never
    : never]: (props: { value: T[K] }) => VNode
}
