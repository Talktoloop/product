export default defineAppConfig({
  ui: {
    name: 'Hello from Nuxt layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    ui?: {
      /** Project name */
      name?: string
    }
  }
}
