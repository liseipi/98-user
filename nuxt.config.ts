// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    ssr: false,
    experimental: {appManifest: false},
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@vant/nuxt'
    ],
    build: {
        transpile: ['pinia-plugin-persistedstate']
    },
    app: {
        // baseURL: '/98-user/',
        // baseURL: '/html/',
        head: {
            title: '科汇直饮水',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
            ],
            link: [],
            script: [
                {src: '/html/js/jweixin-1.6.0.js'}
            ]
        }
    },
    css: [
        '~/assets/css/style.scss'
    ],
    runtimeConfig: {
        public: {
            apiBaseURL: 'https://hiv.xhwxpos.com',
        },
        app: {
            apiBaseURL: 'https://hiv.xhwxpos.com',
        }
    },
    nitro: {
        output: {
            publicDir: 'docs',
        },
        // 用于客户端代理
        devProxy: {
            '/wxh5': {
                target: 'https://hiv.xhwxpos.com/wxh5', // 这里是接口地址
                changeOrigin: true,
                // prependPath: true,
                pathRewrite: {'^/wxh5': ''}
            },
            // '/uploads': {
            //     target: 'https://hiv.xhwxpos.com/uploads', // 这里是接口地址
            //     changeOrigin: true,
            //     // prependPath: true,
            //     pathRewrite: {'^/uploads': ''}
            // }
        },
        // 该配置用于服务端请求转发
        // routeRules: {
        //   '/api/**': {
        //     proxy: 'https://xxx.com/api/**'
        //   }
        // }
    },
})