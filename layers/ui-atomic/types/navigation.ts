import type { NuxtLinkProps } from '#app'
import type { Component } from 'vue'

export interface BaseNavigationItem {
  __type: string
  id: string
  disabled?: boolean
  label?: string
  icon?: Component
}

export interface NavigationItemLink extends BaseNavigationItem {
  __type: 'NavigationItemLink'
  link: NuxtLinkProps
}

export interface NavigationItemContent extends BaseNavigationItem {
  __type: 'NavigationItemContent'
  content: NavigationItem[]
}

export type NavigationItem = NavigationItemLink | NavigationItemContent
