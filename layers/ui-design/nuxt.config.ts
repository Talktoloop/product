import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const basePath = dirname(fileURLToPath(import.meta.url))
function resolve(path: string) {
  return join(basePath, path)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',
  devtools: { enabled: true },
  extends: ['@ourloop/product-layer-ui-base'],
  modules: ['@nuxt/eslint'],
  alias: {
    '@ui/design': resolve('./components'),
    '@ui/design/types': resolve('./types'),
  },
})
