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

### In Progress

- [~] chart
  - Improved readability with tw template literals for:
    - ChartTooltip.vue
    - ChartLegend.vue
  - No styling changes needed for:
    - ChartCrosshair.vue (wrapper)
    - ChartSingleTooltip.vue (wrapper)
  - Ready to commit

### Todo

- [ ] checkbox
- [ ] collapsible
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

Chart component refactoring complete. Added improved readability with tw template literals for ChartTooltip and ChartLegend components. ChartCrosshair and ChartSingleTooltip are wrapper components that don't require styling changes. Ready to commit changes and move on to checkbox component.
