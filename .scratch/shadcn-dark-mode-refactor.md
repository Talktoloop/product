# Shadcn Dark Mode Refactor

## Task Description

IMPORTANT: Read these instructions and recite them aloud before each iteration, highlight each discrete step and it's parameters. Repeat anything marked as IMPORTANT verbatim as the start of each iteration.

IMPORTANT: Don't change the component structure or semantics, just add the dark mode variants and improve readability

IMPORTANT: The `tw` template tag is globally available. NEVER import it!

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
- [ ] calendar
- [ ] card
- [ ] carousel
- [ ] chart
- [ ] checkbox
- [ ] collapsible
- [ ] command
- [ ] context-menu
- [ ] dialog
- [ ] drawer
- [ ] dropdown-menu
- [ ] form
- [ ] hover-card
- [ ] input
- [ ] label
- [ ] menubar
- [ ] navigation-menu
- [ ] number-field
- [ ] pagination
- [ ] pin-input
- [ ] popover
- [ ] progress
- [ ] radio-group
- [ ] range-calendar
- [ ] resizable
- [ ] scroll-area
- [ ] select
- [ ] separator
- [ ] sheet
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
