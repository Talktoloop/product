export default defineAppConfig({
  shell: {
    name: 'Hello from Nuxt layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    shell?: {
      /** Project name */
      name?: string
    }
  }
}
