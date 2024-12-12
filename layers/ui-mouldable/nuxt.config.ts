import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const basePath = dirname(fileURLToPath(import.meta.url))
function resolve(path: string) {
  return join(basePath, path)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@ourloop/product-layer-core'],
  alias: {
    '@ui/moudlable': resolve('./components'),
    '@ui/moudlable/types': resolve('./types'),
  },
})
