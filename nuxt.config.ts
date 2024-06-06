// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        '@': resolve(__dirname, '/src'),
        '~': resolve(__dirname, '/'),
        '@@': resolve(__dirname, '/assets'),
    },
    css: ['~/assets/scss/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});



