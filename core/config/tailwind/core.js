import process from 'node:process'
import console from 'node:console'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import tailwindDefault from 'tailwindcss/defaultConfig'

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/core.js');
}
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  presets: [tailwindDefault],
  plugins: [
    forms,
    aspectRatio,
    containerQueries,
  ],
};
