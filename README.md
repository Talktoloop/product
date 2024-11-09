# Product Monorepo

A Nuxt-based monorepo using a layered architecture approach for scalable application development.

## Repository Structure

This monorepo is organized into the following workspaces:

```
.
├── apps/     # Application projects
├── core/     # Core business logic and shared functionality
├── layers/   # Nuxt composable layers
└── opt/      # Optional tooling and development utilities
```

### Workspace Details

- **apps/** - Contains all end-user applications
- **core/** - Houses essential shared business logic and components
- **layers/** - Nuxt-specific composable layers for feature composition
- **opt/packages/** - Optional development tools (CLI utilities, documentation generators, etc.)

## Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn (v4.2.2)

### Installation

1. Clone the repository:

   ```bash
   git clone https://gitlab.com/bahul1/product.git
   cd product
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Setup environment variables:

   ```bash
   cp .env.template .env
   ```

   or

   ```bash
   ln -s .env.template .env
   ```

4. Prepare packages:

   ```bash
   yarn prepare
   ```

5. Start the development environment:

   ```bash
   docker compose up
   ```

### Development

To start developing:

1. Prepare packages:

   ```bash
   yarn prepare
   ```

2. Run a specific app:
   ```bash
   yarn workspace @ourloop/[app-name] dev
   ```

## Development Guidelines

### Adding New Packages

1. Create a new directory in the appropriate workspace
2. Initialize with `package.json`
3. Add to workspace dependencies as needed

### Using Layers

Layers can be composed in applications by:

1. Adding the layer as a dependency
2. Configuring in `nuxt.config.ts`

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a merge request
