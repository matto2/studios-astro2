/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
			  h1: ['2xl', { fontWeight: 'bold' }],
			  h2: ['xl', { fontWeight: 'bold' }],
			  h3: ['lg', { fontWeight: 'bold' }],
			},
		  },	},
	plugins: [],
}
