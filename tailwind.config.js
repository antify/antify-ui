module.exports = {
	content: ['./dist/index.js', './src/components/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#eb6708',
				'primary-light': '#f88b3d',
				'primary-dark': '#aa4a05',
				secondary: '',
			},
			minHeight: {
				2: '0.5rem;',
				16: '4rem;',
				32: '8rem;',
				48: '12rem;',
			},
			minWidth: {
				16: '4rem;',
				32: '8rem;',
				48: '12rem;',
				80: '20rem;',
				96: '24rem;',
			},
			maxWidth: {
				16: '4rem;',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
