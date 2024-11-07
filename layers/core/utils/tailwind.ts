import ctl from '@netlify/classnames-template-literals'

export const tw = (strings: TemplateStringsArray, ...patterns: (string | undefined)[]) =>
  ctl(strings.map((s, i) => s + ' ' + patterns[i] || null).join(' '))
