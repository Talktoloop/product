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
  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '@nuxt/eslint'],
  watch: [join(__dirname, '../../core', 'config', 'tailwind', '**/*.js')],
  alias: {
    '@core/types': resolve('../../core/types'),
  },
})
