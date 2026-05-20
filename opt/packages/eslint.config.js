import { extendAndJoin } from '@ourloop/product-core-config/eslint'
import packageGenerator from './package-generator/eslint.config.js'

export default extendAndJoin({
  'package-generator': packageGenerator
})
