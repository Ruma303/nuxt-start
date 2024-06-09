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
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nuxt App',
            meta: [
                { hid: 'description', name: 'description', content: 'Nuxt App' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: '~/assets/scss/main.scss' },
            ]
        },
        // pageTransition: { name: 'page', mode: 'out-in' },
        //layoutTransition: { name: 'layout', mode: 'out-in' }
        pageTransition: {
            name: 'fade',
            mode: 'out-in' // default
          },
          layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        }
    },
});
