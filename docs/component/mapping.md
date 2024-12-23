# Mapping Shadcn Components to Base Design System

## Atoms

Fundamental building blocks that cannot be broken down further:

- Atom/Input (ShadcnInput): Basic text input
- Atom/Button (ShadcnButton): Basic clickable element
- Atom/Checkbox (ShadcnCheckbox): Single checkbox input
- Atom/Label (ShadcnLabel): Form label element
- Atom/Switch (ShadcnSwitch): Toggle switch
- Atom/Textarea (ShadcnTextarea): Multiline text input
- Atom/Select (ShadcnSelect): Basic dropdown
- Atom/Badge (ShadcnBadge): Status indicator
- Atom/Avatar (ShadcnAvatar): User image/initials
- Atom/Progress (ShadcnProgress): Progress indicator
- Atom/Skeleton (ShadcnSkeleton): Loading placeholder
- Atom/Separator (ShadcnSeparator): Visual divider
- Atom/RadioGroup (ShadcnRadioGroup): Radio input group
- Atom/Slider (ShadcnSlider): Range input
- Atom/Toggle (ShadcnToggle): State toggle button

## Molecules

Combinations of atoms forming simple components:

- Form Components:

  - Molecule/Form/Item (ShadcnFormItem): Form field container
  - Molecule/Form/Label (ShadcnFormLabel): Form field label
  - Molecule/Form/Control (ShadcnFormControl): Form control wrapper
  - Molecule/Form/Description (ShadcnFormDescription): Field description
  - Molecule/Form/Message (ShadcnFormMessage): Validation message
  - Molecule/Form/NumberField (ShadcnNumberField): Numeric input with controls
  - Molecule/Form/PinInput (ShadcnPinInput): Code entry field
  - Molecule/Form/TagsInput (ShadcnTagsInput): Multiple tag input

- Interactive Elements:

  - Molecule/Tooltip (ShadcnTooltip): Hover information
  - Molecule/HoverCard (ShadcnHoverCard): Rich hover content
  - Molecule/Popover (ShadcnPopover): Click-triggered popup
  - Molecule/Menu/Dropdown (ShadcnDropdownMenu): Menu dropdown
  - Molecule/Menu/Context (ShadcnContextMenu): Right-click menu
  - Molecule/Menu/Bar (ShadcnMenuBar): Application menu
  - Molecule/Menu/Navigation (ShadcnNavigationMenu): Navigation dropdown

- Display Elements:
  - Molecule/Alert (ShadcnAlert): Status message
  - Molecule/Toast (ShadcnToast): Notification popup
  - Molecule/Card (ShadcnCard): Content container
  - Molecule/AspectRatio (ShadcnAspectRatio): Ratio container
  - Molecule/ScrollArea (ShadcnScrollArea): Scrollable container

## Organisms

Complex UI components composed of molecules and/or atoms:

- Dialog Components:

  - Organism/Dialog (ShadcnDialog): Modal dialog
  - Organism/Sheet (ShadcnSheet): Slide panel
  - Organism/DrawerContent (ShadcnDrawerContent): Side drawer
  - Organism/AlertDialog (ShadcnAlertDialog): Confirmation dialog

- Navigation Components:

  - Organism/Tabs (ShadcnTabs): Content tabs
  - Organism/Breadcrumb (ShadcnBreadcrumb): Navigation path
  - Organism/Pagination (ShadcnPagination): Page navigation
  - Organism/Command (ShadcnCommand): Command palette
  - Organism/Menu/Navigation (ShadcnNavigationMenu): Nav structure

- Data Display:

  - Organism/Table (ShadcnTable): Data grid
  - Organism/Calendar (ShadcnCalendar): Date picker
  - Organism/RangeCalendar (ShadcnRangeCalendar): Date range picker
  - Organism/Accordion (ShadcnAccordion): Expandable sections
  - Organism/Collapsible (ShadcnCollapsible): Toggle content
  - Organism/Carousel (ShadcnCarousel): Slideshow

- Chart Components:

  - Organism/Chart/Bar (ShadcnChartBar): Bar visualization
  - Organism/Chart/LineChart (ShadcnChartLineChart): Line visualization
  - Organism/Chart/AreaChart (ShadcnChartAreaChart): Area visualization
  - Organism/Chart/DonutChart (ShadcnChartDonutChart): Donut/pie visualization
  - Organism/Chart/Tooltip (ShadcnChartTooltip): Chart data tooltip
  - Organism/Chart/Legend (ShadcnChartLegend): Chart legend

- Sidebar Components:
  - Organism/Sidebar (ShadcnSidebar): Side navigation
  - Organism/Sidebar/Menu (ShadcnSidebarMenu): Navigation menu
  - Organism/Sidebar/Group (ShadcnSidebarGroup): Grouped navigation
  - Organism/Sidebar/Header (ShadcnSidebarHeader): Navigation header
  - Organism/Sidebar/Footer (ShadcnSidebarFooter): Navigation footer

## Implementation Pattern

```typescript
import { Component } from '../shadcn/ui/component'

export type * from '../shadcn/ui/component'

// Only set name prefix for atomic components
Component.name = 'AtomComponent' // or 'MoleculeComponent', 'OrganismComponent' for molecules and organisms

export default Component
```

## Component Requirements

1. Naming:

   - Prefix with 'Atom', 'Molecule', 'Organism' for atomic, molecule and organism components respectively
   - Modify the component name to include the atomic category prefix and order the name from most generic to most specific
   - Set component.name property appropriately

2. Types:

   - Export all types from source
   - Maintain type safety
   - Use `export type * from '...'` syntax

3. Location:
   - Place in appropriate atomic category directory
   - Use PascalCase for directory and file names
   - One component per file
   - Place sub-components or nested components in a sub-directory e.g. `Organism/Sidebar/Menu`
   - Match filename to component name
