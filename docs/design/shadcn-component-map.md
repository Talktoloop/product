# Shadcn Component Map

This document maps the Shadcn Vue components to Atomic Design categories, following Brad Frost's methodology for creating systematic design systems.

## Atomic Design Overview

Atomic design consists of five distinct levels:

1. **Atoms**: Basic building blocks (buttons, inputs, labels)
2. **Molecules**: Simple combinations of atoms (form fields, search bars)
3. **Organisms**: Complex combinations of molecules (navigation bars, forms)
4. **Templates**: Page-level arrangements
5. **Pages**: Specific instances of templates

## Component Categorization

### Atoms

Basic interface elements that can't be broken down further:

- Badge
- Button
- Checkbox
- Input
- Label
- Separator
- Skeleton
- Switch
- RadioGroupItem
- TooltipTrigger
- Progress

### Molecules

Simple combinations of atoms that form common UI patterns:

- Accordion
- Alert
- Avatar
- Calendar
- Card
- Carousel
- Dialog
- Drawer
- DropdownMenu
- Form (individual fields)
- HoverCard
- Menubar
- NavigationMenu
- Pagination
- Popover
- ScrollArea
- Select
- Slider
- Tabs
- Toast
- Tooltip

### Organisms

Complex UI components composed of molecules and/or atoms:

- AutoForm
- Command (command palette)
- ContextMenu
- DataTable
- Form (complete forms)
- NavigationMenu (with all subcomponents)
- Sheet
- Sidebar
- Table

### Charts (Special Category)

Specialized visualization components that can be atoms or molecules depending on usage:

- AreaChart
- BarChart
- ChartCrosshair
- ChartLegend
- ChartTooltip
- DonutChart
- LineChart

## Implementation Notes

1. Components are categorized based on their complexity and composition
2. Some components can shift categories based on their specific implementation
3. All components are built using Shadcn Vue as a foundation
4. Chart components follow the same atomic principles but are specialized for data visualization

## References

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Shadcn Vue Documentation](https://www.shadcn-vue.com/)
