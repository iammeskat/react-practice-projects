/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/*.{html,js,jsx}",

		"./src/components/*.{html,js,jsx}",
		"./src/components/**/*.{html,js,jsx}",
		"./src/components/**/**/*.{html,js,jsx}",
		"./src/components/**/**/**/*.{html,js,jsx}",

		"./src/containers/*.{html,js,jsx}",
		"./src/containers/**/*.{html,js,jsx}",
		"./src/containers/**/**/*.{html,js,jsx}",
		"./src/containers/**/**/**/*.{html,js,jsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '1128px'
			}
		},
		extend: {
			screens: {
				xs: "375px",
				smx: "425px",
				s500: "500px"
			},
		},
	},
	plugins: [],
}

