/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Comfortaa', 'sans-serif'],       // Para uso global como font-sans
		  comfortaa: ['Comfortaa', 'sans-serif'],  // Alternativa opcional como font-comfortaa
		},
		colors: {
		  primary: '#ab090e',
		  neutral: '#656565',
		  light: '#eeeeee',
		  light2: '#f1e6e6',
		},
	  },
	},
	plugins: [],
  }
  