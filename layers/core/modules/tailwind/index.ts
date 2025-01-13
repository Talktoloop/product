// ~/modules/nuxt-tailwind-mod/index.ts
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_options, nuxt) {
    nuxt.hook('tailwindcss:loadConfig', function (tailwindConfig) {
      console.dir(tailwindConfig, { depth: 4 })
    })
    nuxt.hook('tailwindcss:resolvedConfig', function (resolvedConfig) {
      console.log('Tailwind colors:', Object.keys(resolvedConfig.theme.colors).join(', '))
      console.log('Tailwind spacing:', Object.keys(resolvedConfig.theme.spacing).join(', '))
      console.log('Tailwind fontFamily:', Object.keys(resolvedConfig.theme.fontFamily).join(', '))
      console.log(
        'Tailwind borderRadius:',
        Object.keys(resolvedConfig.theme.borderRadius).join(', ')
      )
      console.log('Tailwind fontSize:', Object.keys(resolvedConfig.theme.fontSize).join(', '))
      console.log('Tailwind lineHeight:', Object.keys(resolvedConfig.theme.lineHeight).join(', '))
      console.log(
        'Tailwind letterSpacing:',
        Object.keys(resolvedConfig.theme.letterSpacing).join(', ')
      )
      console.log('Tailwind fontWeight:', Object.keys(resolvedConfig.theme.fontWeight).join(', '))
      console.log('Tailwind variants:', Object.keys(resolvedConfig.variants).join(', '))
    })
  },
})
