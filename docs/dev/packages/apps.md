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
    import withNuxt from './.nuxt/eslint.config.mjs'
    import { config, join } from '@ourloop/product-core-config/eslint'

    export default join(config(withNuxt(), 'nuxt'), {
      ignores: ['.nuxt/**', '.output/**'],
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

### 5. Tailwind

The core layer has a tailwind config that is used by all apps, additionally, each of the ui layers has a tailwind config that is used by the apps that depend on it. However, you need to provide a minimal config for your app to allow tailwind to discover the classes you use in your app.

- Creating a new file in the `apps/<app-name>/tailwind.config.js` file
- Initialise it as follows:

  ```js
  const { join } = require('path')

  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [join(__dirname, './{components,layouts,pages,utils}/**/*.{js,ts,jsx,tsx,vue}')],
  }
  ```

  The content array should include the path to all the files that contain tailwind classes, the default one here will include all the most common paths in the app.

### 6. Docker

- Add the app to the `docker-compose.yml` file:

  ```yml
  <app-name>:
    build:
      context: .
      dockerfile: ./Dockerfile.app.dockerfile
      args:
        - APP_NAME=<app-name>
        - APP_PORT=${COMPOSE_APP_<app-name>_PORT}
    ports:
      - '${COMPOSE_APP_<app-name>_PORT}:${COMPOSE_APP_<app-name>_PORT}'
    environment:
      - NODE_ENV=development
      - NUXT_PORT=${COMPOSE_APP_<app-name>_PORT}
    volumes:
      - ./core:/usr/src/product/core
      - ./layers:/usr/src/product/layers
      - ./apps/<app-name>:/usr/src/product/apps/<app-name>
    depends_on:
      - mysql # (optional) or other services
  ```

- Update the the template `.env` file `.env.template`:

  ```
  COMPOSE_APP_<app-name>_PORT=<port>
  ```

### 7. Getting started

- The nuxt template comes with a default `app.vue` file, if you remove it you will be furnished with a default that includes:
  - [Nuxt Layout](https://nuxt.com/docs/api/components/nuxt-layout)
  - [Nuxt Page](https://nuxt.com/docs/api/components/nuxt-page)
  - [Nuxt Route Announcer](https://nuxt.com/docs/api/components/nuxt-route-announcer)
  - [Nuxt Loading Indicator](https://nuxt.com/docs/api/components/nuxt-loading-indicator)
