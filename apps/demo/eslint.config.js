import withNuxt from './.nuxt/eslint.config.mjs'
import { config, join } from '@ourloop/product-core-config/eslint'

export default join(config(withNuxt(), 'nuxt'), {
  ignores: ['.nuxt/**', '.output/**'],
})
