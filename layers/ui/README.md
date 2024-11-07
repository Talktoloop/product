# UI Layer

The UI Layer is a crucial part of the `@ourloop/product` monorepo, providing reusable UI components and styles for building consistent and scalable user interfaces.

## Purpose

The UI Layer is designed to offer a collection of reusable UI components and styles that can be utilized across various applications within the monorepo. It ensures consistency and reusability of UI elements and design patterns.

## Structure

The UI Layer is organized to facilitate easy access and integration of UI components and styles:

```
.
├── components/   # Reusable Vue components
├── assets/       # CSS and other static assets
└── config/       # Configuration files and settings
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn (v4.2.2)

### Installation

1. Navigate to the UI directory:
```bash
cd layers/ui
```

2. Install dependencies:
```bash
yarn install
```

### Development

To start developing within the UI Layer:

1. Build the UI package:
```bash
yarn build
```

2. Run tests:
```bash
yarn test
```

## Usage

To use the UI Layer in your application:

1. Add the UI Layer as a dependency in your application's `package.json`.
2. Extend from the UI Layer in your `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  extends: ["@ourloop/product-layer-ui"]
})
```
3. The components are now available for use in your Nuxt application.
