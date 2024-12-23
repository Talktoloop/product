# Nuxt Layer Packages

## Adding a new layer

### 1. Create a new layer

- Goto the `layers` directory
- Run `npx nuxi@latest layer add <layer-name>`
- Goto the `layers/<layer-name>` directory

### 2. Setup the layer

- Update the `package.json` file
  - Rename the layer in the `name` field
    - Use the following format: `@ourloop/product-layer-<layer-name>`
  - Add a `dependencies` field and add the core layer as a dependency
    - Use the following format: `"@ourloop/product-layer-core": "*"`
  - Rename the `dev:prepare` script to `prepare`
- Update the `nuxt.config.ts` file
  - Add the core layer to the `extends` array
    - Use the following format: `'@ourloop/product-layer-core'`

### 3. ESLint

- Update the `eslint.config.js` file

  - Replace the contents with the following:

    ```js
    import withNuxt from './.playground/.nuxt/eslint.config.mjs'
    import { config, join } from '@ourloop/product-core-config/eslint'

    export default join(config(withNuxt(), 'nuxt'), {
      ignores: ['.playground/**'],
    })
    ```

- Add your layer to the parent `eslint.config.js` file:

  ```js
  import { extendAndJoin } from '@ourloop/product-core-config/eslint'
  import core from './core/eslint.config.js'
  import shell from './shell/eslint.config.js'
  import uiBase from './ui-base/eslint.config.js'
  import uiMouldable from './ui-mouldable/eslint.config.js'
  import uiDesign from './ui-design/eslint.config.js'
  import yourLayer from './your-layer/eslint.config.js'

  export default extendAndJoin(
    {
      core,
      shell,
      'ui-base': uiBase,
      'ui-mouldable': uiMouldable,
      'ui-design': uiDesign,
      'your-layer': yourLayer,
    },
    'nuxt'
  )
  ```

### 4. Yarn

- Move to the repository root directory and run:
  - `yarn install`
  - `yarn prepare`
