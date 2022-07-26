module.exports = {
	content: ['./dist/index.js', './src/**/*.{vue,js,ts,jsx,tsx}'],
	safelist: [
		{
			pattern:
				/(bg|ring|text|border)-(primary|secondary|slate|gray|zinc|neutral|stone|red|organe|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-([1234567890]*|light|dark)/,
			// variants: ['hover', 'focus', 'sm', 'md', 'lg', 'xl', '2xl'],
		},
	],
	theme: {
		extend: {
			colors: {
				primary: '#eb6708',
				'primary-light': '#f88b3d',
				'primary-dark': '#aa4a05',
				secondary: '',
			},
			minHeight: {
				2: '0.5rem',
				14: '3.5rem',
				16: '4rem',
				32: '8rem',
				48: '12rem',
			},
			minWidth: {
				16: '4rem',
				32: '8rem',
				48: '12rem',
				80: '20rem',
				96: '24rem',
			},
			maxWidth: {
				16: '4rem',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
