# TypeScript Packages

## Adding a new TypeScript package

### 1. Create a new TypeScript package

- Goto the coorent package directory
  - For core packages, go to the `core` directory
  - For optional packages, go to the `opt/packages` directory
- Run `yarn init`
- Goto the `{core|opt/packages}/<package-name>` directory

### 2. Setup the package

- Update the `package.json` file
  - Rename the package in the `name` field
    - Use the following format: `@ourloop/product-<core|opt/packages>-<package-name>`
  - Mark the package as private: `"private": true`
  - Add a version field
    - Use the version of the root package e.g. `"version": "0.0.1"`
  - Add a `dependencies` field:
    - Add the core/config package as a dependency
      - Use the following format: `"@ourloop/product-core-config": "*"`
    - Add the core/types package as a dependency
      - Use the following format: `"@ourloop/product-core-types": "*"`
  - Mark the package as a `module`: `"type": "module"`
  - Add the export field:
    ```json
    "exports": {
      ".": "./src/index.ts",
      "types": "./src/types/index.ts"
    }
    ```
- Add a `tsconfig.json` file
  - Use the following format:
    ```json
    {
      "$schema": "https://json.schemastore.org/tsconfig.json",
      "extends": "@ourloop/product-core-config/tsconfig",
      "include": ["src/**/*"]
    }
    ```
- Setup the starting files structure
  - Add a `src` directory
    - Add a `index.ts` file
  - Add a `types` directory
  - Add an `index.ts` file

### 3. ESLint

- Add an `eslint.config.mjs` file
- Add the following code:

  ```js
  import { composer } from 'eslint-flat-config-utils' // This is in the root package.json
  import eslint from '@eslint/js' // This is in the root package.json

  const myConfig = {
    // Your config here
  }

  export default composer(myConfig).append(eslint.configs.recommended)
  ```

- Add your package to the parent `eslint.config.mjs` file:

  ```js
  import { extendAndJoin } from '@ourloop/product-core-config/eslint'
  import design from './design/eslint.config.js'
  import yourApp from './your-app/eslint.config.js'

  export default extendAndJoin({ design, 'your-app': yourApp })
  ```

### 4. Yarn

- Move to the repository root directory and run:
  - `yarn install`
  - `yarn prepare`
