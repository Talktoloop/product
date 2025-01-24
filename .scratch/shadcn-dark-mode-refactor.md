# Shadcn Dark Mode Refactor

## Task Description

IMPORTANT: Read these instructions and recite them aloud before each iteration, highlight each discrete step and it's parameters. Repeat anything marked as IMPORTANT verbatim as the start of each iteration.

IMPORTANT: Don't change the component structure or semantics, just add the dark mode variants and improve readability

IMPORTANT: The `tw` template tag is globally available. You should not import it!

IMPORTANT: Make a git commit after each root component has been refactored. Use a COMMIT_MESSAGE file to store the commit message and then delete it after the commit has been made.

Refactor all components to:

1. Use improved semantic names (if necessary)
2. Add dark mode variants
3. Apply tw`...` template tag to improve readability (available globally)
4. Introduce constants for complex class combinations
5. Resolve all linting errors before committing

## Important Notes

- Don't modify component structure or semantics
- ⚠️ NEVER import `tw`, it's already available globally
- Use semantic color names from the design system
- Keep related styles grouped together in the template literals

## Component Refactoring Steps

0. Read these instructions and recite them to yourself before each iteration
1. Read the component file
2. Create semantic class constants using globally available `tw` tag
3. Add dark mode variants to the classes
4. Replace inline classes with constants
5. DO NOT add any imports for `tw`
6. DO NOT modify component structure or logic

## Progress Tracking

- Update the status from `[ ]` to `[x]` after each component/sub-component/etc has been refactored.
- Make a git commit after each root component has been refactored. after the commit has been made.
- Update the status from `[x]` to `[*]` after the commit hase been made and the working state is clear.
- Mark components with `[~]` if they depend on other components that need to be refactored first

### Shadcn Components

- [*] accordion (committed f7bc513)
  - [*] AccordionTrigger.vue - Added dark mode variants and improved readability
  - [*] AccordionContent.vue - Added dark mode variants and improved readability
  - [*] AccordionItem.vue - Added dark mode border color
  - [*] Accordion.vue - No styling needed (wrapper component)
- [*] alert (committed fcb5627)
  - [*] Alert variants - Added dark mode variants and improved readability
  - [*] AlertTitle.vue - Added dark mode text color and improved readability
  - [*] AlertDescription.vue - Added dark mode text color and improved readability
- [*] alert-dialog (committed d43d7c5)
  - [*] AlertDialogContent.vue - Added dark mode variants and improved readability
  - [*] AlertDialogTitle.vue - Added dark mode text color and improved readability
  - [*] AlertDialogDescription.vue - Added dark mode text color and improved readability
  - [*] Other components - No styling needed (wrapper components)
- [x] aspect-ratio (no styling needed)
  - [x] AspectRatio.vue - No styling needed (wrapper component)
- [~] auto-form (depends on form, input, textarea)
  - [~] AutoFormField.vue - Uses form components
  - [~] AutoFormFieldInput.vue - Uses input and textarea components
  - [~] Other field components - Use other shadcn components
- [*] avatar (committed 8c36c3a)
  - [*] Avatar.vue - Added dark mode variants and improved readability
  - [*] AvatarImage.vue - Improved readability with tw template literals
  - [*] AvatarFallback.vue - No styling needed (wrapper component)
- [*] badge (committed ca8124d)
  - [*] Badge variants - Added dark mode variants and improved readability with tw template literals
  - [*] Badge.vue - No styling needed (wrapper component)
- [*] breadcrumb (committed a6a94b5)
  - [*] BreadcrumbList.vue - Added dark mode variants and improved readability
  - [*] BreadcrumbLink.vue - Added dark mode variants and improved readability
  - [*] BreadcrumbPage.vue - Added dark mode variants and improved readability
  - [*] Other components - No styling needed (wrapper components)
- [*] button (already done)
- [*] calendar (committed 9bfc287)
  - [*] Calendar.vue - Added dark mode variants and improved readability
  - [*] CalendarCell.vue - Already has dark mode variants
  - [*] CalendarCellTrigger.vue - Already has dark mode variants
  - [*] CalendarHeadCell.vue - Already has dark mode variants
  - [*] CalendarHeader.vue - No styling needed (wrapper component)
  - [*] CalendarHeading.vue - Already has dark mode variants
  - [*] CalendarPrevButton.vue - No styling needed (uses button variants)
  - [*] CalendarNextButton.vue - No styling needed (uses button variants)
  - [*] Other components - No styling needed (wrapper components)
- [*] card (already has dark mode)
  - [*] Card.vue - Already has dark mode variants
  - [*] CardContent.vue - No styling needed (only padding)
  - [*] CardDescription.vue - Already has dark mode variants
  - [*] CardFooter.vue - No styling needed (only padding and flex)
  - [*] CardHeader.vue - No styling needed (only padding and flex)
  - [*] CardTitle.vue - Already has dark mode variants
- [*] carousel (committed 80cd1f6)
  - [*] Carousel.vue - Added dark mode variants and improved readability
  - [*] CarouselContent.vue - Added dark mode variants and improved readability
  - [*] CarouselItem.vue - Added dark mode variants and improved readability
  - [*] CarouselPrevious.vue - Added dark mode variants and improved readability
  - [*] CarouselNext.vue - Added dark mode variants and improved readability
- [*] chart (committed 3ae219c)
  - [*] ChartLegend.vue - Added dark mode variants and improved readability
  - [*] ChartTooltip.vue - Added dark mode variants and improved readability
  - [*] AreaChart.vue - Added dark mode variants and improved readability
  - [*] BarChart.vue - Added dark mode variants and improved readability
  - [*] LineChart.vue - Added dark mode variants and improved readability
  - [*] DonutChart.vue - Added dark mode variants and improved readability
  - [*] Other components - No styling needed (wrapper components)
- [*] checkbox (committed 4f2e1d8)
  - [*] Checkbox.vue - Added dark mode variants and improved readability
- [*] collapsible (committed 4f2e1d8)
  - [*] CollapsibleContent.vue - Added dark mode variants and improved readability
  - [*] Other components - No styling needed (wrapper components)
- [*] command (committed f40203b)
  - [*] Command.vue - Added dark mode variants and improved readability
  - [*] CommandDialog.vue - Added dark mode variants and improved readability
  - [*] CommandEmpty.vue - Added dark mode variants and improved readability
  - [*] CommandGroup.vue - Added dark mode variants and improved readability
  - [*] CommandInput.vue - Added dark mode variants and improved readability
  - [*] CommandItem.vue - Added dark mode variants and improved readability
  - [*] CommandList.vue - Added dark mode variants and improved readability
  - [*] CommandSeparator.vue - Added dark mode variants and improved readability
  - [*] CommandShortcut.vue - Added dark mode variants and improved readability
- [*] context-menu (committed 61dafaa)
  - [*] ContextMenuContent.vue - Added dark mode variants and improved readability
  - [*] ContextMenuItem.vue - Added dark mode variants and improved readability
  - [*] ContextMenuSeparator.vue - Added dark mode variants and improved readability
  - [*] ContextMenuSubContent.vue - Added dark mode variants and improved readability
  - [*] ContextMenuSubTrigger.vue - Added dark mode variants and improved readability
  - [*] ContextMenuLabel.vue - Added dark mode variants and improved readability
  - [*] ContextMenuRadioItem.vue - Added dark mode variants and improved readability
  - [*] ContextMenuCheckboxItem.vue - Added dark mode variants and improved readability
  - [*] No styling needed for wrapper components (ContextMenu.vue, ContextMenuSub.vue, ContextMenuTrigger.vue, ContextMenuGroup.vue, ContextMenuRadioGroup.vue)
- [*] dialog (committed c3ed177)
  - [*] DialogContent.vue - Added dark mode variants and improved readability
  - [*] DialogDescription.vue - Added dark mode variants and improved readability
  - [*] DialogFooter.vue - Added dark mode variants and improved readability
  - [*] DialogHeader.vue - Added dark mode variants and improved readability
  - [*] DialogTitle.vue - Added dark mode variants and improved readability
  - [*] No styling needed for Dialog.vue (wrapper)
- [*] drawer (committed d72d884)
  - [*] DrawerContent.vue - Added dark mode variants and improved readability
  - [*] No styling needed for Drawer.vue and DrawerOverlay.vue (wrappers)
- [*] dropdown-menu (committed 298d41f)
  - [*] DropdownMenuContent.vue - Added dark mode variants and improved readability
  - [*] DropdownMenuItem.vue - Added dark mode variants and improved readability
  - [*] DropdownMenuLabel.vue - Added dark mode variants and improved readability
  - [*] DropdownMenuSeparator.vue - Added dark mode variants and improved readability
  - [*] DropdownMenuShortcut.vue - Added dark mode variants and improved readability
  - [*] No styling needed for DropdownMenu.vue (wrapper)
- [*] form (committed 05ba64b)
  - [*] FormDescription.vue - Added dark mode variants and improved readability
  - [*] FormLabel.vue - Added dark mode variants and improved readability
  - [*] FormMessage.vue - Added dark mode variants and improved readability
  - [*] No styling needed for FormControl.vue and FormItem.vue (wrappers)
- [*] hover-card (committed 6e71928)
  - [*] HoverCardContent.vue - Added dark mode variants and improved readability
  - [*] No styling needed for HoverCard.vue (wrapper)
- [*] input (committed b710e0b)
  - [*] Input.vue - Added dark mode variants and improved readability
- [*] label (committed 4af70e1)
  - [*] Label.vue - Added dark mode variants and improved readability
- [*] menubar (committed a23f644)
  - [*] Menubar.vue - Added dark mode variants and improved readability
  - [*] MenubarContent.vue - Added dark mode variants and improved readability
  - [*] MenubarItem.vue - Added dark mode variants and improved readability
  - [*] MenubarSeparator.vue - Added dark mode variants and improved readability
  - [*] MenubarShortcut.vue - Added dark mode variants and improved readability
- [*] navigation-menu (committed c6f8b89)
  - [*] NavigationMenu.vue - Added dark mode variants and improved readability
  - [*] NavigationMenuContent.vue - Added dark mode variants and improved readability
  - [*] NavigationMenuIndicator.vue - Added dark mode variants and improved readability
  - [*] NavigationMenuList.vue - Added dark mode variants and improved readability
  - [*] NavigationMenuTrigger.vue - Added dark mode variants and improved readability
  - [*] NavigationMenuViewport.vue - Added dark mode variants and improved readability
  - [*] No styling needed for NavigationMenuItem.vue and NavigationMenuLink.vue (wrappers)
- [*] number-field (committed fa8bfcd)
  - [*] NumberField.vue - Improved readability with tw template literals
  - [*] NumberFieldContent.vue - Improved readability with tw template literals
  - [*] NumberFieldInput.vue - Added dark mode variants and improved readability
  - [*] NumberFieldDecrement.vue - Added dark mode variants and improved readability
  - [*] NumberFieldIncrement.vue - Added dark mode variants and improved readability
- [*] pagination (committed 680022e)
  - [*] PaginationPrev.vue - Improved readability with tw template literals
  - [*] PaginationNext.vue - Improved readability with tw template literals
  - [*] PaginationFirst.vue - Improved readability with tw template literals
  - [*] PaginationLast.vue - Improved readability with tw template literals
  - [*] PaginationEllipsis.vue - Improved readability with tw template literals
  - [*] No styling needed for PaginationList, PaginationListItem, and PaginationRoot (imported from radix-vue)
- [*] pin-input (committed f47b55f)
  - [*] PinInput.vue - Improved readability with tw template literals
  - [*] PinInputGroup.vue - Improved readability with tw template literals
  - [*] PinInputInput.vue - Added dark mode variants and improved readability
  - [*] PinInputSeparator.vue - Added dark mode variants and improved readability
- [*] popover (committed 9e27af1)
  - [*] PopoverContent.vue - Added dark mode variants and improved readability
  - [*] No styling needed for Popover.vue and PopoverTrigger.vue (wrappers)
- [*] progress (committed c42d34b)
  - [*] Progress.vue - Added dark mode variants and improved readability
- [*] radio-group (committed c95e8c8)
  - [*] RadioGroup.vue - Improved readability with tw template literals
  - [*] RadioGroupItem.vue - Added dark mode variants and improved readability
- [*] range-calendar (committed 740bfe5)
  - [*] RangeCalendar.vue - Improved readability with tw template literals
  - [*] RangeCalendarHeader.vue - Improved readability with tw template literals
  - [*] RangeCalendarGrid.vue - Improved readability with tw template literals
  - [*] RangeCalendarCell.vue - Added dark mode variants and improved readability
  - [*] RangeCalendarHeading.vue - Added dark mode variants and improved readability
  - [*] RangeCalendarHeadCell.vue - Added dark mode variants and improved readability
  - [*] RangeCalendarCellTrigger.vue - Added dark mode variants and improved readability
  - [*] RangeCalendarPrevButton.vue - Added dark mode variants and improved readability
  - [*] RangeCalendarNextButton.vue - Added dark mode variants and improved readability
  - [*] RangeCalendarGridRow.vue - Improved readability with tw template literals
  - [*] No styling needed for RangeCalendarGridHead.vue and RangeCalendarGridBody.vue (wrappers)
- [*] resizable (committed a22a8f6)
  - [*] ResizableHandle.vue - Added dark mode variants and improved readability
  - [*] ResizablePanelGroup.vue - Improved readability with tw template literals
  - [*] No styling needed for ResizablePanel (imported from radix-vue)
- [*] scroll-area (committed ff3a53b)
  - [*] ScrollArea.vue - Improved readability with tw template literals
  - [*] ScrollBar.vue - Added dark mode variants and improved readability
- [*] select (committed 708c386)
  - [*] SelectContent.vue - Added dark mode variants and improved readability
  - [*] SelectItem.vue - Added dark mode variants and improved readability
  - [*] SelectTrigger.vue - Added dark mode variants and improved readability
  - [*] SelectSeparator.vue - Added dark mode variants and improved readability
  - [*] SelectLabel.vue - Added dark mode variants and improved readability
  - [*] No styling needed for Select.vue, SelectGroup.vue, SelectValue.vue, SelectItemText.vue (wrappers)
- [*] separator (committed 9425907)
  - [*] Separator.vue - Added dark mode variants and improved readability
- [*] sheet (committed a126ec8)
  - [*] SheetContent.vue - Added dark mode variants and improved readability
  - [*] SheetDescription.vue - Added dark mode variants and improved readability
  - [*] SheetTitle.vue - Added dark mode variants and improved readability
  - [*] SheetHeader.vue - Improved readability with tw template literals
  - [*] SheetFooter.vue - Improved readability with tw template literals
  - [*] No styling needed for Sheet.vue, SheetClose.vue, and SheetTrigger.vue (wrappers)
- [ ] sidebar
- [ ] skeleton
- [ ] slider
- [ ] sonner
- [ ] stepper
- [ ] switch
- [ ] table
- [ ] tabs
- [ ] tags-input
- [ ] textarea
- [ ] toast
- [ ] toggle
- [ ] toggle-group
- [ ] tooltip
- [ ] v-calendar

### Base Components

TODO: List all base components

### Design Components

TODO: List all design components

## Current Status

✅ Completed avatar component set:

- Added dark mode variants to avatar base classes
- Improved readability with tw template literals
- Ready to commit changes

## Dependencies

Some components depend on others and will be refactored after their dependencies:

- auto-form → form, input, textarea
- (more to be added as we discover them)

## Commit Message Template

```
refactor(ui): add dark mode and improve readability for {component}

- Add dark mode variants
- Improve class readability with tw template tag
- Extract complex classes to constants
- Update semantic naming (if applicable)
```
