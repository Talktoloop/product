# Design Language

## Spacing

Our UI follows an 8px based grid system for consistency across all devices:

- Base unit: 8px
- Sub-unit: 4px (for smaller components)

### Spacing Scale

| Size | Value | Variable     | Usage                                  |
| ---- | ----- | ------------ | -------------------------------------- |
| XXS  | 4px   | $spacing-xxs | Icon-text margins                      |
| XS   | 8px   | $spacing-xs  | Label-input spacing                    |
| S    | 16px  | $spacing-s   | Mobile container padding               |
| M    | 24px  | $spacing-m   | Desktop container padding              |
| MM   | 32px  | $spacing-mm  | Container/form field spacing           |
| L    | 48px  | $spacing-l   | Section margins                        |
| XL   | 64px  | $spacing-xl  | Section margins                        |
| XXL  | 80px  | $spacing-xxl | Large device heading-container margins |

## Layout

The layout system uses a responsive grid with margins, columns, and gutters that adapt across breakpoints.

### Grid Components

- **Columns**: Fixed-width vertical sections
- **Gutters**: Fixed-width spaces between columns
- **Margins**: Variable outer spacing (minimum 16px)

### Breakpoints

| Name          | Start  | Width Range | Columns | Column Width | Gutter |
| ------------- | ------ | ----------- | ------- | ------------ | ------ |
| mobile-small  | 0      | <400px      | 4       | 60px         | 16px   |
| mobile-large  | 400px  | 401-720px   | 4       | 80px         | 16px   |
| tablet        | 720px  | 721-1024px  | 8       | 64px         | 24px   |
| desktop-small | 1024px | 1025-1440px | 8       | 72px         | 32px   |
| desktop-large | 1400px | >1400px     | 12      | 72px         | 32px   |

## Colors

### Brand Colors

Our primary brand colors define our visual identity:

| Color         | Value                         | Light Variant                 | Dark Variant                  | Usage                                           |
| ------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------------------------- |
| loop-purple   | `#6B4DE6` (hsl(255 75% 60%))  | `#F5F2FE` (hsl(255 85% 98%))  | `#5B42C3` (hsl(255 45% 40%))  | Primary brand color, main CTAs, key UI elements |
| action-teal   | `#05C3B6` (hsl(176 95% 39%))  | `#E5F8F7` (hsl(176 57% 93%))  | `#04A69B` (hsl(176 95% 25%))  | Secondary actions, progress indicators          |
| emphasis-blue | `#0066FF` (hsl(217 100% 50%)) | `#E5F0FF` (hsl(217 100% 95%)) | `#0052CC` (hsl(217 100% 35%)) | Links, highlighting, tertiary actions           |

### Semantic Colors

Functional colors that convey specific meanings:

| Color           | Value                        | Light Variant                | Dark Variant                 | Usage                                        |
| --------------- | ---------------------------- | ---------------------------- | ---------------------------- | -------------------------------------------- |
| success-teal    | `#05C3B6` (hsl(176 95% 39%)) | `#E5F8F7` (hsl(176 57% 93%)) | `#04A69B` (hsl(176 95% 25%)) | Success states, completion, positive actions |
| alert-gold      | `#FFB800` (hsl(44 100% 50%)) | `#FFF8E5` (hsl(44 100% 95%)) | `#CC9300` (hsl(44 100% 35%)) | Warning states, important notifications      |
| destructive-red | `#FF3B3B` (hsl(0 100% 61%))  | `#FFE5E5` (hsl(0 100% 95%))  | `#CC2F2F` (hsl(0 100% 45%))  | Error states, destructive actions            |

### Neutral Colors

| Name     | Value                     | Usage                                |
| -------- | ------------------------- | ------------------------------------ |
| Gray-100 | `#F7F7F7` (hsl(0 0% 97%)) | Page backgrounds, subtle backgrounds |
| Gray-200 | `#EBEBEB` (hsl(0 0% 92%)) | Borders, dividers, disabled states   |
| Gray-300 | `#C2C2C2` (hsl(0 0% 76%)) | Disabled text, secondary icons       |
| Gray-400 | `#A3A3A3` (hsl(0 0% 64%)) | Placeholder text, tertiary text      |
| Gray-500 | `#737373` (hsl(0 0% 45%)) | Secondary text, icons                |
| Gray-600 | `#404040` (hsl(0 0% 25%)) | Primary text, headings               |

### Color Application Guidelines

1. **Accessibility**

   - Maintain WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
   - Test color combinations with color blindness simulators
   - Never rely solely on color to convey meaning

2. **Variant Usage**

   - Light variants: Backgrounds, subtle emphasis, disabled states
   - Base colors: Primary UI elements, text, icons
   - Dark variants: Hover states, active states, pressed states

3. **Component-Specific Guidelines**
   - Interactive elements should use brand colors
   - Form validation should use semantic colors
   - Text should use neutral colors for hierarchy
   - Background surfaces should use neutral colors

### State Colors

| State    | Color           | Usage                            |
| -------- | --------------- | -------------------------------- |
| Default  | loop-purple     | Primary interactive elements     |
| Action   | action-teal     | Interactive components           |
| Emphasis | emphasis-blue   | Highlighted elements             |
| Success  | success-teal    | Positive feedback and completion |
| Warning  | alert-gold      | Cautionary messages              |
| Error    | destructive-red | Error feedback and warnings      |
| Disabled | gray variants   | Non-interactive elements         |

### Input States

| State        | Usage                           |
| ------------ | ------------------------------- |
| Default      | Normal input field state        |
| Focus/Active | Highlighted state when selected |
| Error        | Invalid or missing input        |
| Success      | Valid input confirmation        |
| Disabled     | Non-interactive state           |

### Special Cases

- Voice Recorder: Uses destructive-red as the primary action color due to conventional recording UI patterns
- Story Progress: Uses success-teal for progress indicators

## Typography

Our typography system uses Noto Sans as the primary typeface, providing excellent legibility and cross-platform compatibility.

### Font Scale

| Size | Value | Variable  | Usage                       |
| ---- | ----- | --------- | --------------------------- |
| XXS  | 12px  | $text-xxs | Fine print, footnotes       |
| XS   | 14px  | $text-xs  | Helper text, captions       |
| S    | 16px  | $text-s   | Body text, input fields     |
| M    | 18px  | $text-m   | Subheadings, important text |
| L    | 24px  | $text-l   | Section headers             |
| XL   | 32px  | $text-xl  | Page titles                 |
| XXL  | 48px  | $text-xxl | Hero headlines              |

### Font Weights

| Weight  | Value | Variable        | Usage                      |
| ------- | ----- | --------------- | -------------------------- |
| Regular | 400   | $weight-regular | Body text, general content |
| Medium  | 500   | $weight-medium  | Subheadings, emphasis      |
| Bold    | 700   | $weight-bold    | Headers, strong emphasis   |

### Line Heights

| Size    | Value | Variable         | Usage                 |
| ------- | ----- | ---------------- | --------------------- |
| Tight   | 1.2   | $leading-tight   | Headlines, short text |
| Normal  | 1.5   | $leading-normal  | Body text, paragraphs |
| Relaxed | 1.8   | $leading-relaxed | Long-form content     |

### Text Styles

#### Headers

- H1: 48px/1.2 Bold ($text-xxl/$leading-tight/$weight-bold)
- H2: 32px/1.2 Bold ($text-xl/$leading-tight/$weight-bold)
- H3: 24px/1.3 Medium ($text-l/$leading-tight/$weight-medium)
- H4: 18px/1.4 Medium ($text-m/$leading-normal/$weight-medium)

#### Body Text

- Body Large: 18px/1.5 Regular ($text-m/$leading-normal/$weight-regular)
- Body: 16px/1.5 Regular ($text-s/$leading-normal/$weight-regular)
- Body Small: 14px/1.5 Regular ($text-xs/$leading-normal/$weight-regular)

#### UI Elements

- Labels: 14px/1.2 Medium ($text-xs/$leading-tight/$weight-medium)
- Input Text: 16px/1.5 Regular ($text-s/$leading-normal/$weight-regular)
- Helper Text: 14px/1.5 Regular ($text-xs/$leading-normal/$weight-regular)
- Error Text: 14px/1.5 Medium ($text-xs/$leading-normal/$weight-medium)
- Button Text: 16px/1.2 Medium ($text-s/$leading-tight/$weight-medium)

### Typography Guidelines

1. **Hierarchy**

   - Use consistent heading levels (H1-H4) for proper document structure
   - Maintain clear visual hierarchy through size and weight combinations
   - Limit heading levels to maximum of 3 per section

2. **Readability**

   - Keep body text between 45-75 characters per line
   - Use adequate spacing between paragraphs ($spacing-s)
   - Maintain minimum 16px font size for body text
   - Ensure sufficient contrast with background colors

3. **Responsive Behavior**

   - Scale down heading sizes on mobile devices (reduce by 25%)
   - Maintain minimum 14px font size on mobile
   - Adjust line heights for optimal readability on different devices

4. **Accessibility**
   - Use semantic HTML elements for proper document structure
   - Maintain proper heading hierarchy for screen readers
   - Ensure sufficient color contrast (minimum 4.5:1 for body text)
   - Avoid using font size alone to convey importance
