// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    ssr: false,
    experimental: {appManifest: false},
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        '~/assets/css/style.scss'
    ],
})