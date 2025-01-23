# Component Refactoring Status

## Completed [✓]

- Command component set - Committed f40203b
  - Added dark mode variants and improved readability with tw template literals for:
    - Command.vue
    - CommandDialog.vue
    - CommandEmpty.vue
    - CommandGroup.vue
    - CommandInput.vue
    - CommandItem.vue
    - CommandList.vue
    - CommandSeparator.vue
    - CommandShortcut.vue
- Context Menu component set - Committed 61dafaa
  - Added dark mode variants and improved readability for:
    - ContextMenuContent.vue
    - ContextMenuItem.vue
    - ContextMenuSeparator.vue
    - ContextMenuSubContent.vue
    - ContextMenuSubTrigger.vue
    - ContextMenuLabel.vue
    - ContextMenuRadioItem.vue
    - ContextMenuCheckboxItem.vue
  - No styling changes needed for:
    - ContextMenu.vue (wrapper)
    - ContextMenuSub.vue (wrapper)
    - ContextMenuTrigger.vue (wrapper)
    - ContextMenuGroup.vue (wrapper)
    - ContextMenuRadioGroup.vue (wrapper)

## Ready to Commit [~]

- Dialog component:
  - Added dark mode variants and improved readability for:
    - DialogContent.vue
    - DialogDescription.vue
    - DialogFooter.vue
    - DialogHeader.vue
    - DialogTitle.vue
  - No styling changes needed for:
    - Dialog.vue (wrapper)

## Todo [•]

- Drawer
- Dropdown Menu
- Form
- Hover Card
- Input
- Label
- Menubar
- Navigation Menu
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Tooltip

## Current Status

Dialog component refactoring complete, ready to commit. Added dark mode variants and improved readability for all styled components, while identifying wrapper components that don't require styling changes.
