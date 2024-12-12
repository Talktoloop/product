# Layers

## Adding a new layer

### 1. Create a new layer

### 2. Setup the layer

- Update the `package.json` file
  - Rename the layer in the `name` field
  - Use the following format: `@ourloop/project-layer-<layer-name>`
  - Add a `dependencies` field and add the core layer as a dependency
    - Use the following format: `"@ourloop/product-layer-core": "*"`
  - Rename the `dev:prepare` script to `prepare`
- Update the `eslint.config.js` file

  - Replace the contents with the following:

    ```js
    import withNuxt from './.playground/.nuxt/eslint.config.mjs'
    import { config, join } from '@ourloop/product-core-config/eslint'

    export default join(config(withNuxt(), 'nuxt'), {
      ignores: ['.playground/**'],
    })
    ```

- Update the `nuxt.config.ts` file
  - Add the core layer to the `extends` array
    - Use the following format: `'@ourloop/product-layer-core'`
- Run yarn
  - Move to the root directory and run:
    - `yarn install`
    - `yarn prepare`

### 3. Add the layer to the project
