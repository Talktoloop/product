import type { StorybookConfig } from '@storybook-vue/nuxt'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const basePath = dirname(fileURLToPath(import.meta.url))
function resolve(path: string) {
  return join(basePath, path)
}

const config: StorybookConfig = {
  stories: [
    resolve('../stories/**/*.mdx'),
    resolve('../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'),
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/test',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    tsconfigPath: resolve('../tsconfig.json'),
    check: true,
    checkOptions: {
      eslint: true,
    },
  },
}
export default config
