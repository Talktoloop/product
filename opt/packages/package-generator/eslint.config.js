import { composer } from 'eslint-flat-config-utils' // This is in the root package.json
import eslint from '@eslint/js' // This is in the root package.json

const myConfig = {}

export default composer(myConfig).append(eslint.configs.recommended)
