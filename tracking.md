# Component Refactoring Status

## Progress

### Completed

- [x] aspect-ratio - Committed 8c36c3a
  - No styling changes needed (wrapper component)
  - Added comments to identify extended shades
- [x] avatar - Committed 8c36c3a
  - Added dark mode variants to Avatar.vue, AvatarImage.vue, AvatarFallback.vue
  - Improved readability with template literals
- [x] carousel - Committed 8c36c3a
  - Improved readability with tw template literals for:
    - Carousel.vue
    - CarouselContent.vue
    - CarouselItem.vue
    - CarouselNext.vue
    - CarouselPrevious.vue
- [x] chart - Committed efb33b5
  - Improved readability with tw template literals for:
    - ChartTooltip.vue
    - ChartLegend.vue
  - No styling changes needed for:
    - ChartCrosshair.vue (wrapper)
    - ChartSingleTooltip.vue (wrapper)
- [x] checkbox - Committed 3903483
  - Added dark mode variants and improved readability with tw template literals

### In Progress

- [~] collapsible
  - Improved readability with tw template literals for CollapsibleContent.vue
  - No styling changes needed for:
    - Collapsible.vue (wrapper)
    - CollapsibleTrigger.vue (wrapper)
  - Ready to commit

### Todo

- [ ] command
- [ ] context-menu
- [ ] dialog
- [ ] dropdown-menu
- [ ] form
- [ ] hover-card
- [ ] input
- [ ] label
- [ ] menubar
- [ ] navigation-menu
- [ ] popover
- [ ] progress
- [ ] radio-group
- [ ] scroll-area
- [ ] select
- [ ] separator
- [ ] sheet
- [ ] skeleton
- [ ] slider
- [ ] switch
- [ ] table
- [ ] tabs
- [ ] textarea
- [ ] toast
- [ ] toggle
- [ ] tooltip

## Current Status

Collapsible component refactoring complete. Improved readability with tw template literals for CollapsibleContent.vue. Collapsible.vue and CollapsibleTrigger.vue are wrapper components that don't require styling changes. Ready to commit changes and move on to command component.
