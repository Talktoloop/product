# Shell Layer

The Shell Layer is a Nuxt-specific composable layer within the `@ourloop/product` monorepo. It is designed to provide foundational features and configurations that can be composed into Nuxt applications, enhancing their functionality and maintainability.

## Purpose

The Shell Layer serves as a base layer for Nuxt applications, offering a set of pre-configured features and settings that streamline the development process. By leveraging the Shell Layer, developers can ensure consistency across applications and reduce the overhead of setting up common configurations.

## Features

- **Composable Architecture**: Easily integrate the Shell Layer into your Nuxt applications to benefit from shared configurations and features.
- **Pre-configured Settings**: Includes default settings and tools to accelerate development and maintain consistency.

## Usage

To use the Shell Layer in your application:

1. Add the Shell Layer as a dependency in your application's `package.json`.
2. Configure your `nuxt.config.ts` to extend from the Shell Layer.

```typescript
export default defineNuxtConfig({
  extends: ["@ourloop/product-layer-shell"]
})
```

## Development

For development within the Shell Layer:

1. Ensure all dependencies are installed using Yarn.
2. Follow the monorepo's guidelines for building and running packages.

## Contributing

Contributions to the Shell Layer are welcome. Please follow the monorepo's contribution guidelines when making changes.

## License

[Your License Here]