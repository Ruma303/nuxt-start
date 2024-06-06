// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        '~': resolve(__dirname, '/'),
        '@': resolve(__dirname, '/pages'),
        '@@': resolve(__dirname, '/assets'),
    },
    css: ['/assets/scss/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    experimental: {
        watcher: "chokidar",
    },
    build: {
        hotMiddleware: {
            client: {
                overlay: false,
            },
        },
    },
    // ssr: true,
});
