# config

This directory contains the configuration files for the `@ourloop/product-core-config` package.

## Package Information

- **Name**: `@ourloop/product-core-config`
- **Version**: `0.0.1`
- **Type**: `module`

## Exports

The package exports the following modules:

- `./tailwind/core`: Core Tailwind configuration
- `./tailwind/typography`: Typography configuration
- `./tailwind/spacing`: Spacing configuration
- `./tailwind/colors`: Colors configuration

## Dependencies

The package relies on the following Tailwind CSS plugins:

- `@tailwindcss/aspect-ratio` (version `^0.4.2`)
- `@tailwindcss/container-queries` (version `^0.1.1`)
- `@tailwindcss/forms` (version `^0.5.9`)
- `@tailwindcss/typography` (version `^0.5.15`)
- `tailwindcss` (version `^3.4.14`)

## Tailwind Configuration

### Core Configuration

- **Dark Mode**: Enabled with class
- **Plugins**: Includes forms, aspect-ratio, and container-queries plugins

### Typography Configuration

- Utilizes the `@tailwindcss/typography` plugin

### Spacing Configuration

- Extends spacing with custom values, e.g., `128: '32rem'`

### Colors Configuration

- Defines custom color palettes for `primary`, `secondary`, `muted`, `success`, and `destructive` themes
