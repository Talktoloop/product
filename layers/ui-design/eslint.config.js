import withNuxt from './.playground/.nuxt/eslint.config.mjs'
import { join, config } from '@ourloop/product-core-config/eslint'

export default join(config(withNuxt(), 'nuxt'), {
  ignores: ['.playground/**'],
})
