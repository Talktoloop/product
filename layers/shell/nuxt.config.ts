import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const basePath = dirname(fileURLToPath(import.meta.url))
function resolve(path: string) {
  return join(basePath, path)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@ourloop/product-layer-core', '../ui-design'],
  modules: ['@nuxt/eslint', '@pinia/nuxt', 'nuxt-remote-fn'],
  imports: {
    dirs: [resolve('stores')],
  },
  alias: {
    '@shell/fns': resolve('fns'),
  },
  runtimeConfig: {
    api: {
      baseUrl: process.env.API_BASE_URL || 'http://localhost:5000',
      token: process.env.API_TOKEN,
    },
  },
})
