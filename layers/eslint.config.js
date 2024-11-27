import { extendAndJoin } from '@ourloop/product-core-config/eslint'
import core from './core/eslint.config.js'
import shell from './shell/eslint.config.js'
import uiAtomic from './ui-atomic/eslint.config.js'
import uiDesign from './ui-design/eslint.config.js'

export default extendAndJoin({ core, shell, 'ui-atomic': uiAtomic, 'ui-design': uiDesign }, 'nuxt')
