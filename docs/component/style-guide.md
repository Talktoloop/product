# Component Style Guide

This guide combines our design language with Tailwind implementation details.

## Spacing System

Our UI follows an 8px based grid system implemented through Tailwind's spacing scale.

### Spacing Scale

| Design Token | Tailwind Class | Value | Usage                        |
| ------------ | -------------- | ----- | ---------------------------- |
| $spacing-xxs | `space-xxs`    | 4px   | Icon-text margins            |
| $spacing-xs  | `space-xs`     | 8px   | Label-input spacing          |
| $spacing-s   | `space-s`      | 16px  | Mobile container padding     |
| $spacing-m   | `space-m`      | 24px  | Desktop container padding    |
| $spacing-mm  | `space-mm`     | 32px  | Container/form field spacing |
| $spacing-l   | `space-l`      | 48px  | Section margins              |
| $spacing-xl  | `space-xl`     | 64px  | Section margins              |
| $spacing-xxl | `space-xxl`    | 80px  | Large device margins         |

```javascript:core/config/tailwind/spacing.js
startLine: 8
endLine: 18
```

## Colors

### Brand Colors

Primary brand colors are implemented using Tailwind's color system:

| Color         | Tailwind Class | Light Theme       | Dark Theme        |
| ------------- | -------------- | ----------------- | ----------------- |
| Loop Purple   | `bg-primary`   | hsl(255 75% 60%)  | hsl(255 75% 70%)  |
| Action Teal   | `bg-secondary` | hsl(176 95% 32%)  | hsl(176 95% 45%)  |
| Emphasis Blue | `bg-emphasis`  | hsl(217 100% 45%) | hsl(217 100% 60%) |

### Semantic Colors

| Purpose     | Tailwind Class   | Light Theme      | Dark Theme       |
| ----------- | ---------------- | ---------------- | ---------------- |
| Success     | `bg-success`     | hsl(176 95% 32%) | hsl(176 95% 45%) |
| Warning     | `bg-warning`     | hsl(44 100% 50%) | hsl(44 100% 60%) |
| Destructive | `bg-destructive` | hsl(0 100% 45%)  | hsl(0 100% 71%)  |

### Color Scale Usage

Each color supports a scale from 50-950:

```html
<!-- Example of primary color scale usage -->
<div class="bg-primary-50">Lightest</div>
<div class="bg-primary">Default</div>
<div class="bg-primary-950">Darkest</div>

<!-- Dark mode variants -->
<div class="dark:bg-primary-50">Dark mode light</div>
<div class="dark:bg-primary">Dark mode default</div>
<div class="dark:bg-primary-950">Dark mode dark</div>
```

### Implementation Details

Colors are configured in Tailwind with both light and dark mode variants:

```javascript:core/config/tailwind/colors.js
startLine: 7
endLine: 9
```

## Dark Mode

Dark mode is implemented using Tailwind's class strategy:

```javascript:core/config/tailwind/core.js
startLine: 7
endLine: 7
```

Enable dark mode by adding the `dark` class to any parent element:

```html
<html class="dark">
  <!-- Content will use dark mode styles -->
</html>
```

## Typography

Typography is handled through Tailwind's typography plugin:

```javascript:core/config/tailwind/typography.js
startLine: 6
endLine: 7
```

### Font Scale

| Size | Tailwind Class | Value | Usage                 |
| ---- | -------------- | ----- | --------------------- |
| XXS  | `text-xxs`     | 12px  | Fine print, footnotes |
| XS   | `text-xs`      | 14px  | Helper text           |
| S    | `text-sm`      | 16px  | Body text             |
| M    | `text-base`    | 18px  | Subheadings           |
| L    | `text-lg`      | 24px  | Section headers       |
| XL   | `text-xl`      | 32px  | Page titles           |
| XXL  | `text-2xl`     | 48px  | Hero headlines        |

### Font Weights

| Weight  | Tailwind Class | Value |
| ------- | -------------- | ----- |
| Regular | `font-normal`  | 400   |
| Medium  | `font-medium`  | 500   |
| Bold    | `font-bold`    | 700   |

### Common Patterns

```html
<!-- Headers -->
<h1 class="text-2xl font-bold leading-tight">Hero Title</h1>
<h2 class="text-xl font-bold leading-tight">Page Title</h2>
<h3 class="text-lg font-medium leading-snug">Section Header</h3>

<!-- Body Text -->
<p class="text-base leading-normal">Regular body text</p>
<p class="text-sm leading-normal">Smaller body text</p>

<!-- UI Elements -->
<label class="text-xs font-medium leading-tight">Form Label</label>
<input class="text-sm leading-normal" />
<span class="text-xs text-destructive">Error message</span>
```

## Plugins

The following Tailwind plugins are enabled:

```javascript:core/config/tailwind/core.js
startLine: 8
endLine: 12
```

### Usage Examples

```html
<!-- Forms plugin -->
<input type="text" class="form-input" />
<select class="form-select" />

<!-- Aspect ratio plugin -->
<div class="aspect-w-16 aspect-h-9">
  <img src="..." alt="..." />
</div>

<!-- Container queries plugin -->
<div class="@container">
  <div class="@lg:text-xl">Responsive to container</div>
</div>
```
