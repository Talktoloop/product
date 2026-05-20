declare module 'stjs' {
  interface STResult {
    keys(): string[]
    values(): any[]
    paths(): string[]
    objects(): any[]
    root(): any
    transform(template: any): STResult
  }

  interface ST {
    select(context: any): STResult
  }

  const st: ST
  export default st
}
