
const { mergeConfig } = require('vite')

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],

    framework: {
        name: "@storybook/vue3-vite",
        options: {}
    },

    core: {
        builder: '@storybook/builder-vite', // or '@storybook/builder-webpack5'
        disableTelemetry: true,
    },

    async viteFinal(config) { // or webpackFinal(config)
        return mergeConfig(config, {
            plugins: []
        })
    },

    docs: {
        autodocs: true
    }
};
