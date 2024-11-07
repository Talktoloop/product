export default defineAppConfig({
  core: {
    name: 'Core'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    core?: {
      /** Project name */
      name?: string
    }
  }
}
