const defaultColors = require('tailwindcss/colors')

const colors = {
    'neutral-lightest': defaultColors.white,
    'neutral-lighter': defaultColors.slate['100'],
    'neutral-light': defaultColors.slate['300'],
    'neutral': defaultColors.slate['500'],
    'neutral-dark': defaultColors.slate['700'],
    'neutral-darker': defaultColors.slate['900'],
    'neutral-darkest': defaultColors.slate['950'],

    'primary-lighter': defaultColors.blue['100'],
    'primary-light': defaultColors.blue['300'],
    'primary': defaultColors.blue['500'],
    'primary-dark': defaultColors.blue['700'],
    'primary-darker': defaultColors.blue['900'],

    'secondary-lighter': defaultColors.lime['100'],
    'secondary-light': defaultColors.lime['300'],
    'secondary': defaultColors.lime['500'],
    'secondary-dark': defaultColors.lime['700'],
    'secondary-darker': defaultColors.lime['900'],

    'info-lighter': defaultColors.blue['100'],
    'info-light': defaultColors.blue['300'],
    'info': defaultColors.blue['500'],
    'info-dark': defaultColors.blue['700'],
    'info-darker': defaultColors.blue['900'],

    'success-lighter': defaultColors.green['100'],
    'success-light': defaultColors.green['300'],
    'success': defaultColors.green['500'],
    'success-dark': defaultColors.green['700'],
    'success-darker': defaultColors.green['900'],

    'warning-lighter': defaultColors.yellow['100'],
    'warning-light': defaultColors.yellow['300'],
    'warning': defaultColors.yellow['500'],
    'warning-dark': defaultColors.yellow['700'],
    'warning-darker': defaultColors.yellow['900'],

    'danger-lighter': defaultColors.red['100'],
    'danger-light': defaultColors.red['300'],
    'danger': defaultColors.red['500'],
    'danger-dark': defaultColors.red['700'],
    'danger-darker': defaultColors.red['900'],

    'white': defaultColors.white,
    'black': defaultColors.black,
};
const fontColors = {
    'neutral-lightest-font': colors['neutral-darker'],
    'neutral-lighter-font': colors['neutral-darker'],
    'neutral-light-font': colors['neutral-darker'],
    'neutral-font': colors['neutral-darker'],
    'neutral-dark-font': colors['neutral-lighter'],
    'neutral-darker-font': colors['neutral-lighter'],
    'neutral-darkest-font': colors['neutral-lighter'],

    'primary-light-fonter': colors['neutral-darker'],
    'primary-light-font': colors['neutral-darker'],
    'primary-font': colors['neutral-lighter'],
    'primary-dark-font': colors['neutral-lighter'],
    'primary-dark-fonter': colors['neutral-lighter'],

    'secondary-light-fonter': colors['neutral-darker'],
    'secondary-light-font': colors['neutral-darker'],
    'secondary-font': colors['neutral-lighter'],
    'secondary-dark-font': colors['neutral-lighter'],
    'secondary-dark-fonter': colors['neutral-lighter'],

    'info-light-fonter': colors['neutral-darker'],
    'info-light-font': colors['neutral-darker'],
    'info-font': colors['neutral-lighter'],
    'info-dark-font': colors['neutral-lighter'],
    'info-dark-fonter': colors['neutral-lighter'],

    'success-lighter-font': colors['neutral-darker'],
    'success-light-font': colors['neutral-darker'],
    'success-font': colors['neutral-lighter'],
    'success-dark-font': colors['neutral-lighter'],
    'success-darker-font': colors['neutral-lighter'],

    'warning-lighter-font': colors['neutral-darker'],
    'warning-light-font': colors['neutral-darker'],
    'warning-font': colors['neutral-lighter'],
    'warning-dark-font': colors['neutral-lighter'],
    'warning-darker-font': colors['neutral-lighter'],

    'danger-lighter-font': colors['neutral-darker'],
    'danger-light-font': colors['neutral-darker'],
    'danger-font': colors['neutral-lighter'],
    'danger-dark-font': colors['neutral-lighter'],
    'danger-dark-fonter': colors['neutral-lighter'],
};

// TODO:: add 2xs-font

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/index.js', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
        {
            pattern:
                /(bg|ring|text|border)-(neutral|primary|secondary|success|info|warning|danger)/,
            variants: ['hover', 'focus'],
        },
        {
            pattern:
                /text-(neutral|primary|secondary|success|info|warning|danger)-font/,
            variants: ['hover', 'focus'],
        },
    ],
    theme: {
        colors: {
            ...colors,
            ...fontColors,
        },
        extend: {
            animation: {
                skeleton: 'skeleton 2s ease-out infinite',
            },
            keyframes: {
                'skeleton': {
                    '0%, 100%': {'background-color': colors['neutral-light']},
                    '50%': {'background-color': colors['neutral-lighter']},
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')],
};
