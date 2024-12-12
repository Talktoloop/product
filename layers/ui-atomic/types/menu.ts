export interface BaseMenuItem {
  __type: string
  id: string
  inset?: boolean
  disabled?: boolean
}

export interface MenuItemSeparator extends BaseMenuItem {
  __type: 'MenuItemSeparator'
}

export interface MenuItemMenuBase extends BaseMenuItem {
  label: string
  icon?: Component
  shortcut?: string
}

export interface MenuItemMenuItem extends MenuItemMenuBase {
  __type: 'MenuItemMenuItem'
}

export interface MenuItemMenu extends MenuItemMenuBase {
  __type: 'MenuItemMenu'
  menu: MenuItem[]
}

export interface MenuItemCheckbox extends BaseMenuItem {
  __type: 'MenuItemCheckbox'
  label: string
  icon?: Component
  shortcut?: string
  checked?: boolean
}

export interface MenuItemRadioGroup extends BaseMenuItem {
  __type: 'MenuItemRadioGroup'
  label: string
  icon?: Component
  shortcut?: string
  value: string
  items: {
    label: string
    value: string
    checked?: boolean
  }[]
}

export type MenuItem =
  | MenuItemCheckbox
  | MenuItemRadioGroup
  | MenuItemSeparator
  | MenuItemMenu
  | MenuItemMenuItem
