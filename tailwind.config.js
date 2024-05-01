/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/*.{html,js,jsx}",

		"./src/components/*.{html,js,jsx}",
		"./src/components/**/*.{html,js,jsx}",
		"./src/components/**/**/*.{html,js,jsx}",
		"./src/components/**/**/**/*.{html,js,jsx}",

		"./src/container/*.{html,js,jsx}",
		"./src/container/**/*.{html,js,jsx}",
		"./src/container/**/**/*.{html,js,jsx}",
		"./src/container/**/**/**/*.{html,js,jsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '4rem',
			screens: {
				sm: '1500px'
			}
		},
		extend: {
			screens: {
				xs: "375px",
				smx: "425px",
			},
		},
	},
	plugins: [],
}

