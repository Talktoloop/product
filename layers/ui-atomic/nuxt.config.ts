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
  modules: ['@nuxtjs/color-mode', 'shadcn-nuxt', '@nuxt/eslint'],
  colorMode: {
    classSuffix: '',
  },
  shadcn: {
    prefix: 'shadcn-',
    componentDir: resolve('./shadcn/ui'),
  },
  alias: {
    '@ui/shadcn': resolve('./shadcn/ui'),
    '@ui/atomic': resolve('./components'),
  },
})
