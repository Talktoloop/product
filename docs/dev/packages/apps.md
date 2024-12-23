# Nuxt App Packages

## Adding a new Nuxt app

### 1. Create the app

- Go to the `apps` directory
- Run `npx nuxi@latest init <app-name>`
- Go to the `apps/<app-name>` directory

### 2. Setup the app

- Update the `package.json` file
  - Rename the layer in the `name` field
    - Use the following format: `@ourloop/product-app-<app-name>`
  - Add a `dependencies` field and add the layers you need as dependencies
    - If you need UI: `"@ourloop/product-layer-ui-design": "*"`
    - If you need Backend: `"@ourloop/product-layer-backend": "*"`
  - Rename the `dev:prepare` script to `prepare`
- Update the `nuxt.config.ts` file
  - Add the layers you need to the `extends` array
    - UI: `'@ourloop/product-layer-ui-design'`
    - Backend: `'@ourloop/product-layer-shell'`
- Run yarn
  - Move to the root directory and run:
    - `yarn install`
    - `yarn prepare`

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
    { core, shell, 'ui-base': uiBase, 'ui-design': uiDesign, 'your-layer': yourLayer },
    'nuxt'
  )
  ```

### 4. Yarn

- Move to the repository root directory and run:
  - `yarn install`
  - `yarn prepare`
