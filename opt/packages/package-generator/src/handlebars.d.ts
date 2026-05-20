declare module 'handlebars/dist/cjs/handlebars' {
  interface HandlebarsTemplateDelegate<T = any> {
    (context: T, options?: RuntimeOptions): string
  }

  interface RuntimeOptions {
    data?: any
    helpers?: { [key: string]: Function }
    partials?: { [key: string]: HandlebarsTemplateDelegate }
  }

  interface Handlebars {
    compile(input: string, options?: CompileOptions): HandlebarsTemplateDelegate
  }

  interface CompileOptions {
    data?: boolean
    compat?: boolean
    knownHelpers?: { [key: string]: boolean }
    knownHelpersOnly?: boolean
    noEscape?: boolean
    strict?: boolean
    assumeObjects?: boolean
    preventIndent?: boolean
    ignoreStandalone?: boolean
    explicitPartialContext?: boolean
  }

  const handlebars: Handlebars
  export default handlebars
}
