import type { Component } from 'vue'
import type { BaseMenuItem, MenuItemSeparator } from '@ui/base/types'

export interface BaseInputMenu extends BaseMenuItem {
  label: string
  icon?: Component
  inset?: never
}

export interface InputMenuItemChoice extends BaseInputMenu {
  __type: 'InputMenuItemChoice'
  value: string
  selected: boolean
}

export interface InputMenuItemMenu extends BaseInputMenu {
  __type: 'InputMenuItemMenu'
  menu: InputMenuItem[]
}

export interface InputMenuChoice extends BaseInputMenu {
  __type: 'InputMenuChoice'
  multiple: boolean
  value: string
  items: { label: string; value: string; checked?: boolean }[]
}

export interface InputMenuItemMenuItem extends BaseInputMenu {
  __type: 'InputMenuItemMenuItem'
  action: () => void
}

export type InputMenuItem =
  | InputMenuItemMenu
  | InputMenuChoice
  | InputMenuItemMenuItem
  | MenuItemSeparator
