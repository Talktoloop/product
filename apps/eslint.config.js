import { extendAndJoin } from '@ourloop/product-core-config/eslint'
import design from './design/eslint.config.js'
import demo from './demo/eslint.config.js'

export default extendAndJoin({ design, demo })
