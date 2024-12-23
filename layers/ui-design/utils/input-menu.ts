import type { MenuItemMenu, MenuItemMenuItem, MenuItemRadioGroup } from '@ui/atomic/types'

import type {
  InputMenuItem,
  InputMenuItemChoice,
  InputMenuItemMenu,
  InputMenuChoice,
  InputMenuItemMenuItem,
} from '@ui/design/types/input-menu'

function inputMenuItem<M extends InputMenuItem>(
  type: M['__type'],
  item: Omit<M, 'id' | '__type'>
): M {
  return {
    id: crypto.randomUUID(),
    __type: type,
    ...item,
  } as M
}

export function isInputMenuItemChoice(
  item: unknown | InputMenuItemChoice
): item is InputMenuItemChoice {
  return isTypeOf(item, 'InputMenuItemChoice')
}

export function isInputMenuItemMenu(item: unknown | InputMenuItemMenu): item is InputMenuItemMenu {
  return isTypeOf(item, 'InputMenuItemMenu')
}

export function isInputMenuChoice(item: unknown | InputMenuChoice): item is InputMenuChoice {
  return isTypeOf(item, 'InputMenuChoice')
}

export function isInputMenuItemMenuItem(
  item: unknown | InputMenuItemMenuItem
): item is InputMenuItemMenuItem {
  return isTypeOf(item, 'InputMenuItemMenuItem')
}

// Helper Functions
export function inputMenuItemMenuItem(
  item: Omit<InputMenuItemMenuItem, '__type' | 'id'>
): InputMenuItemMenuItem {
  return inputMenuItem<InputMenuItemMenuItem>('InputMenuItemMenuItem', item)
}

export function inputMenuChoice(item: Omit<InputMenuChoice, '__type' | 'id'>): InputMenuChoice {
  return inputMenuItem<InputMenuChoice>('InputMenuChoice', item)
}

export function inputMenuItemMenu(
  item: Omit<InputMenuItemMenu, '__type' | 'id'>
): InputMenuItemMenu {
  return inputMenuItem<InputMenuItemMenu>('InputMenuItemMenu', item)
}

export function toMenuItem(menu: InputMenuItem): MenuItemMenu {
  const toMenuItem = condP(
    menu,
    [isInputMenuItemMenuItem, toMenuItemMenuItem],
    [isInputMenuItemMenu, toMenuItemMenu],
    [isInputMenuChoice, toMenuItemChoice],
    [isMenuItemSeparator, identity]
  ) as undefined | ((menu: InputMenuItem) => MenuItemMenu)
  if (!toMenuItem) throw new Error('Invalid input menu item')
  return toMenuItem(menu)
}

export function toMenuItemMenuItem(menu: InputMenuItemMenuItem): MenuItemMenuItem {
  return menuItemMenuItem({
    label: menu.label,
    icon: menu.icon,
    link: {
      onClick: menu.action,
    },
  })
}

export function toMenuItemMenu(menu: InputMenuItemMenu): MenuItemMenu {
  return menuItemMenu({
    label: menu.label,
    icon: menu.icon,
    menu: menu.menu.map((item) => toMenuItem(item)),
  })
}

export function toMenuItemChoice(menu: InputMenuChoice): MenuItemMenu | MenuItemRadioGroup {
  if (menu.multiple) {
    return menuItemMenu({
      label: menu.label,
      icon: menu.icon,
      menu: menu.items.map((item) => menuItemCheckbox({ label: item.label, value: item.value })),
    })
  } else {
    return menuItemRadioGroup(menu)
  }
}

export const inputMenuVariants = {
  choice: isInputMenuChoice,
  menu: isInputMenuItemMenu,
  item: isInputMenuItemMenuItem,
}
