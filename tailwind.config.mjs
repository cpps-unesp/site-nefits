import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/styles/**/*.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        primary: '#ab090e',
        neutral: '#656565',
        light: '#eeeeee',
        light2: '#f1e6e6',
      },
    },
  },
  plugins: [typography, aspectRatio],
}
