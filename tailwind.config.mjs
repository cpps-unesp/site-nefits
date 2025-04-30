import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
  plugins: [typography],
}
