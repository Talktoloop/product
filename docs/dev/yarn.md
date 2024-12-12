# Yarn

## Adding a new package

1. Choose a location for the package:

   - `core/*` for core packages
   - `layers/*` for Nuxt layer packages
   - `apps/*` for Nuxt application packages
   - `opt/packages/*` for optional, non-product packages

2. Create the package in the chosen location

   - Nuxt Layers: see [Nuxt Layers](./packages/layers.md#adding-a-new-layer)
   - Nuxt Apps: see [Nuxt Apps](./packages/apps.md#adding-a-new-app)
   - Core and optional packages: see [Core and Optional Packages](./packages/typescript.md#adding-a-new-core-or-optional-package)

3. Add the package to the `package.json` file

4. Add the package to the `workspaces` array in the `package.json` file

5. Add the package to the `prepare` script in the `package.json` file
