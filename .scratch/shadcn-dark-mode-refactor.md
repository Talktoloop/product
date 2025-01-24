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
- [*] command (already has dark mode)
  - [*] Command.vue - Already has dark mode variants
  - [*] CommandDialog.vue - Already has dark mode variants
  - [*] CommandEmpty.vue - Already has dark mode variants
  - [*] CommandGroup.vue - Already has dark mode variants
  - [*] CommandInput.vue - Already has dark mode variants
  - [*] CommandItem.vue - Already has dark mode variants
  - [*] CommandList.vue - Already has dark mode variants
  - [*] CommandSeparator.vue - Already has dark mode variants
  - [*] CommandShortcut.vue - Already has dark mode variants
- [*] context-menu (already has dark mode)
  - [*] ContextMenuContent.vue - Already has dark mode variants
  - [*] ContextMenuSubContent.vue - Already has dark mode variants
  - [*] ContextMenuSubTrigger.vue - Already has dark mode variants
  - [*] ContextMenuCheckboxItem.vue - Already has dark mode variants
  - [*] ContextMenuItem.vue - Already has dark mode variants
  - [*] ContextMenuRadioItem.vue - Already has dark mode variants
  - [*] ContextMenuLabel.vue - Already has dark mode variants
  - [*] ContextMenuSeparator.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] dialog (already has dark mode)
  - [*] DialogContent.vue - Already has dark mode variants
  - [*] DialogDescription.vue - Already has dark mode variants
  - [*] DialogTitle.vue - Already has dark mode variants
  - [*] DialogScrollContent.vue - Already has dark mode compatible styles
  - [*] Other components - No styling needed (wrapper components)
- [*] drawer (already has dark mode)
  - [*] DrawerContent.vue - Already has dark mode variants
  - [*] DrawerDescription.vue - Already has dark mode compatible styles
  - [*] DrawerOverlay.vue - Already has dark mode compatible styles
  - [*] DrawerTitle.vue - Already has dark mode compatible styles
  - [*] Other components - No styling needed (wrapper components)
- [*] dropdown-menu (already has dark mode)
  - [*] DropdownMenuContent.vue - Already has dark mode variants
  - [*] DropdownMenuItem.vue - Already has dark mode variants
  - [*] DropdownMenuLabel.vue - Already has dark mode variants
  - [*] DropdownMenuShortcut.vue - Already has dark mode variants
  - [*] DropdownMenuSeparator.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] form (already has dark mode)
  - [*] FormDescription.vue - Already has dark mode variants
  - [*] FormLabel.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] hover-card (already has dark mode)
  - [*] HoverCardContent.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] input (already has dark mode)
  - [*] Input.vue - Already has dark mode variants
  - [*] PinInputInput.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] label (already has dark mode)
  - [*] Label.vue - Already has dark mode variants
  - [*] FormLabel.vue - Already has dark mode variants
  - [*] DropdownMenuLabel.vue - Already has dark mode variants
  - [*] ContextMenuLabel.vue - Already has dark mode variants
  - [*] SelectLabel.vue - Already has dark mode variants
- [*] menubar (already has dark mode)
  - [*] Menubar.vue - Already has dark mode variants
  - [*] MenubarContent.vue - Already has dark mode variants
  - [*] MenubarItem.vue - Already has dark mode variants
  - [*] MenubarShortcut.vue - Already has dark mode variants
  - [*] MenubarSeparator.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] navigation-menu (already has dark mode)
  - [*] NavigationMenuViewport.vue - Already has dark mode variants
  - [*] NavigationMenuIndicator.vue - Already has dark mode variants
  - [*] NavigationMenuTrigger.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] number-field (committed fa8bfcd)
  - [*] NumberField.vue - Improved readability with tw template literals
  - [*] NumberFieldContent.vue - Improved readability with tw template literals
  - [*] NumberFieldInput.vue - Added dark mode variants and improved readability
  - [*] NumberFieldDecrement.vue - Added dark mode variants and improved readability
  - [*] NumberFieldIncrement.vue - Added dark mode variants and improved readability
- [*] pagination (already has dark mode)
  - [*] PaginationFirst.vue - Already has dark mode variants (via Button)
  - [*] PaginationPrev.vue - Already has dark mode variants (via Button)
  - [*] PaginationNext.vue - Already has dark mode variants (via Button)
  - [*] PaginationLast.vue - Already has dark mode variants (via Button)
  - [*] PaginationEllipsis.vue - Already has dark mode variants
- [*] pin-input (already has dark mode)
  - [*] PinInputInput.vue - Already has dark mode variants
  - [*] PinInputSeparator.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] popover (already has dark mode)
  - [*] PopoverContent.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] progress (already has dark mode)
  - [*] Progress.vue - Already has dark mode variants
- [*] radio-group (already has dark mode)
  - [*] RadioGroupItem.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] range-calendar (already has dark mode)
  - [*] RangeCalendarCell.vue - Already has dark mode variants
  - [*] RangeCalendarHeading.vue - Already has dark mode variants
  - [*] RangeCalendarHeadCell.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] resizable (committed a22a8f6)
  - [*] ResizableHandle.vue - Added dark mode variants and improved readability
  - [*] ResizablePanelGroup.vue - Improved readability with tw template literals
  - [*] No styling needed for ResizablePanel (imported from radix-vue)
- [*] scroll-area (already has dark mode)
  - [*] ScrollBar.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] select (already has dark mode)
  - [*] SelectContent.vue - Already has dark mode variants
  - [*] SelectTrigger.vue - Already has dark mode variants
  - [*] SelectItem.vue - Already has dark mode variants
  - [*] SelectLabel.vue - Already has dark mode variants
  - [*] SelectSeparator.vue - Already has dark mode variants
  - [*] Other components - No styling needed (wrapper components)
- [*] separator (already has dark mode)
  - [*] Separator.vue - Already has dark mode variants
- [*] sheet (committed a126ec8)
  - [*] SheetContent.vue - Added dark mode variants and improved readability
  - [*] SheetDescription.vue - Added dark mode variants and improved readability
  - [*] SheetTitle.vue - Added dark mode variants and improved readability
  - [*] SheetHeader.vue - Improved readability with tw template literals
  - [*] SheetFooter.vue - Improved readability with tw template literals
  - [*] No styling needed for Sheet.vue, SheetClose.vue, and SheetTrigger.vue (wrappers)
- [*] sidebar (already has dark mode)
  - [*] Sidebar.vue - Already has dark mode variants through semantic colors
  - [*] SidebarMenuAction.vue - Already has dark mode variants through semantic colors
  - [*] SidebarMenuButton.vue - Already has dark mode variants through semantic colors
  - [*] SidebarMenuSubButton.vue - Already has dark mode variants through semantic colors
  - [*] Other components - No styling needed (wrapper components)
- [*] skeleton (committed)
  - [*] Skeleton.vue - Added dark mode variants and improved readability
  - [*] SidebarMenuSkeleton.vue - Uses Skeleton.vue, inherits dark mode support
- [*] slider (committed)
  - [*] Slider.vue - Added dark mode variants and improved readability
- [*] sonner (already has dark mode)
  - [*] Sonner.vue - Already has dark mode variants through semantic colors (bg-background, text-foreground, border-border)
  - [*] Other components - No styling needed (wrapper components)
- [*] stepper (committed)
  - [*] StepperDescription.vue - Added dark mode variants and improved readability
  - [*] StepperIndicator.vue - Added dark mode variants and improved readability
  - [*] StepperSeparator.vue - Added dark mode variants and improved readability
  - [*] StepperTitle.vue - Added dark mode variants and improved readability
  - [*] StepperTrigger.vue - Added dark mode variants and improved readability
  - [*] Other components - No styling needed (wrapper components)
- [*] switch (committed)
  - [*] Switch.vue - Added dark mode variants and improved readability
- [*] table (committed beb06da)
  - [*] Table.vue - Added dark mode variants and improved readability
  - [*] TableCaption.vue - Added dark mode variants and improved readability
  - [*] TableCell.vue - Added dark mode variants and improved readability
  - [*] TableEmpty.vue - Added dark mode variants and improved readability
  - [*] TableFooter.vue - Added dark mode variants and improved readability
  - [*] TableHead.vue - Added dark mode variants and improved readability
  - [*] TableHeader.vue - Added dark mode variants and improved readability
  - [*] TableRow.vue - Added dark mode variants and improved readability
  - [*] TableBody.vue - No styling needed (wrapper component)
- [*] tabs (committed f4c356c)
  - [*] TabsList.vue - Added dark mode variants and improved readability
  - [*] TabsContent.vue - Added dark mode variants and improved readability
  - [*] TabsTrigger.vue - Added dark mode variants and improved readability
  - [*] Tabs.vue - No styling needed (wrapper component)
- [*] tags-input (committed 7e648fc)
  - [*] TagsInput.vue - Added dark mode variants and improved readability
  - [*] TagsInputInput.vue - Added dark mode variants and improved readability
  - [*] TagsInputItem.vue - Added dark mode variants and improved readability
  - [*] TagsInputItemDelete.vue - Added dark mode variants and improved readability
  - [*] TagsInputItemText.vue - Added dark mode variants and improved readability
- [x] textarea
  - [x] Textarea.vue - Added dark mode variants and improved readability
- [x] toast
  - [x] Toast variants - Added dark mode variants and improved readability
  - [x] ToastAction.vue - Added dark mode variants and improved readability
  - [x] ToastClose.vue - Added dark mode variants and improved readability
  - [x] ToastDescription.vue - Added dark mode variants and improved readability
  - [x] ToastTitle.vue - Added dark mode variants and improved readability
  - [x] Other components - No styling needed (wrapper components)
- [x] toggle
  - [x] Toggle.vue - Added dark mode variants and improved readability
  - [x] toggleVariants - Added dark mode variants for all states
- [x] toggle-group
  - [x] ToggleGroup.vue - No styling needed (wrapper component)
  - [x] ToggleGroupItem.vue - Inherits dark mode variants from toggle component
- [x] tooltip
  - [x] Tooltip.vue - No styling needed (wrapper component)
  - [x] TooltipContent.vue - Added dark mode variants and improved readability
- [x] v-calendar
  - [x] Calendar.vue - Added dark mode variants and improved readability for:
    - Calendar container and title
    - Popover content and navigation
    - Day cells and highlights
    - Time picker components
  - [x] Other components - No styling needed (wrapper components)

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
