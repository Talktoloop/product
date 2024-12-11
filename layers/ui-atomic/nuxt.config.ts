import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const basePath = dirname(fileURLToPath(import.meta.url))
function resolve(path: string) {
  return join(basePath, path)
}

const shadcnComponentDir = resolve('./shadcn/ui')
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
    componentDir: shadcnComponentDir,
  },
  alias: {
    '@ui/shadcn': shadcnComponentDir,
    '@ui/atomic': resolve('./components'),
  },
})
