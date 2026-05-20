declare module '@nuxt/schema' {
  interface RuntimeConfig {
    api: {
      baseUrl: string
      token?: string
    }
  }
}
