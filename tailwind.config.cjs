/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class',
  plugins: [
    require('tw-elements/dist/plugin.cjs'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Roboto Mono'],
        body: ['Mulish', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brocant: {
          100: '#cb997e',
          200: '#ddbea9',
          300: '#ffe8d6',
          400: '#b7b7a4',
          500: '#a5a58d',
          600: '#6b705c',
        },
      },
    },
  },
};
