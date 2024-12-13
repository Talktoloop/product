import { ChevronRightIcon } from 'lucide-vue-next'
import type * as Menu from '../types/menu'

function menuItem<T extends Menu.MenuItem>(type: T['__type'], item: Omit<T, 'id' | '__type'>): T {
  return {
    id: nanoid(),
    __type: type,
    ...item,
  } as T
}

export function isMenuItem(item: unknown | Menu.MenuItem): item is Menu.MenuItem {
  return isTypeOf(item, 'MenuItem')
}

export function isMenuItemMenu(item: unknown | Menu.MenuItemMenu): item is Menu.MenuItemMenu {
  return isTypeOf(item, 'MenuItemMenu')
}

export function menuItemMenu(item: Omit<Menu.MenuItemMenu, '__type' | 'id'>): Menu.MenuItemMenu {
  return menuItem('MenuItemMenu', item)
}

export function menuItemSubMenu(
  item: Omit<Menu.MenuItemMenu, '__type' | 'id' | 'icon'>
): Menu.MenuItemMenu {
  return menuItem('MenuItemMenu', { ...item, icon: ChevronRightIcon })
}

export function isMenuItemMenuItem(
  item: unknown | Menu.MenuItemMenuItem
): item is Menu.MenuItemMenuItem {
  return isTypeOf(item, 'MenuItemMenuItem')
}

export function menuItemMenuItem(
  item: Omit<Menu.MenuItemMenuItem, '__type' | 'id'>
): Menu.MenuItemMenuItem {
  return menuItem('MenuItemMenuItem', item)
}

export function isMenuItemCheckbox(
  item: unknown | Menu.MenuItemCheckbox
): item is Menu.MenuItemCheckbox {
  return isTypeOf(item, 'MenuItemCheckbox')
}

export function menuItemCheckbox(
  item: Omit<Menu.MenuItemCheckbox, '__type' | 'id'>
): Menu.MenuItemCheckbox {
  return menuItem('MenuItemCheckbox', item)
}

export function isMenuItemRadioGroup(
  item: unknown | Menu.MenuItemRadioGroup
): item is Menu.MenuItemRadioGroup {
  return isTypeOf(item, 'MenuItemRadioGroup')
}

export function menuItemRadioGroup(
  item: Omit<Menu.MenuItemRadioGroup, '__type' | 'id'>
): Menu.MenuItemRadioGroup {
  return menuItem('MenuItemRadioGroup', item)
}

export function isMenuItemSeparator(
  item: unknown | Menu.MenuItemSeparator
): item is Menu.MenuItemSeparator {
  return isTypeOf(item, 'MenuItemSeparator')
}

export function menuItemSeparator(
  item: Omit<Menu.MenuItemSeparator, '__type' | 'id'> = {}
): Menu.MenuItemSeparator {
  return menuItem('MenuItemSeparator', item)
}

export const menuItemVariants = {
  separator: isMenuItemSeparator,
  checkbox: isMenuItemCheckbox,
  radioGroup: isMenuItemRadioGroup,
  menu: isMenuItemMenu,
  item: isMenuItemMenuItem,
}
