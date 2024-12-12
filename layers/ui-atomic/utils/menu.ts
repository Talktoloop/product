import type * as Menu from '../types/menu'

function menuItem<T extends Menu.MenuItem>(type: T['__type'], item: Omit<T, 'id' | '__type'>): T {
  return {
    id: nanoid(),
    __type: type,
    ...item,
  } as T
}

export function isMenuItemMenu(item: Menu.MenuItem): item is Menu.MenuItemMenu {
  return item.__type === 'MenuItemMenu'
}

export function menuItemMenu(item: Omit<Menu.MenuItemMenu, '__type' | 'id'>): Menu.MenuItemMenu {
  return menuItem('MenuItemMenu', item)
}

export function isMenuItemMenuItem(item: Menu.MenuItem): item is Menu.MenuItemMenuItem {
  return item.__type === 'MenuItemMenuItem'
}

export function menuItemMenuItem(
  item: Omit<Menu.MenuItemMenuItem, '__type' | 'id'>
): Menu.MenuItemMenuItem {
  return menuItem('MenuItemMenuItem', item)
}

export function isMenuItemCheckbox(item: Menu.MenuItem): item is Menu.MenuItemCheckbox {
  return item.__type === 'MenuItemCheckbox'
}

export function menuItemCheckbox(
  item: Omit<Menu.MenuItemCheckbox, '__type' | 'id'>
): Menu.MenuItemCheckbox {
  return menuItem('MenuItemCheckbox', item)
}

export function isMenuItemRadioGroup(item: Menu.MenuItem): item is Menu.MenuItemRadioGroup {
  return item.__type === 'MenuItemRadioGroup'
}

export function menuItemRadioGroup(
  item: Omit<Menu.MenuItemRadioGroup, '__type' | 'id'>
): Menu.MenuItemRadioGroup {
  return menuItem('MenuItemRadioGroup', item)
}

export function isMenuItemSeparator(item: Menu.MenuItem): item is Menu.MenuItemSeparator {
  return item.__type === 'MenuItemSeparator'
}

export function menuItemSeparator(
  item: Omit<Menu.MenuItemSeparator, '__type' | 'id'>
): Menu.MenuItemSeparator {
  return menuItem('MenuItemSeparator', item)
}
