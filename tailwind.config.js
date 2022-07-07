module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#eb6708",
				"primary-light": "#f88b3d",
				"primary-dark": "#aa4a05",
				secondary: "",
			},
			minHeight: {
				32: "8rem;",
				48: "12rem;",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
