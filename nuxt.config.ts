// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    ssr: false,
    target: 'static',
    experimental: {appManifest: false},
    referrer: 'no-referrer',
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@vant/nuxt'
    ],
    build: {
        transpile: ['pinia-plugin-persistedstate'],
        rollupConfig: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                // assetFileNames: ({ name }) => {
                //     // Define naming convention based on the file type
                //     if (/\.css$/i.test(name)) {
                //         return '[name].css';
                //     }
                //     if (/\.(pngjpe?ggifsvgwebp)$/i.test(name)) {
                //         return 'img/[name][extname]';
                //     }
                //     if (/\.(woffwoff2eotttfotf)$/i.test(name)) {
                //         return 'fonts/[name][extname]';
                //     }
                //     if (/\.(mp4webmogv)$/i.test(name)) {
                //         return 'videos/[name][extname]';
                //     }
                //     // Fallback for other assets
                //     return '[name][extname]';
                // },
            },
            // output: {
            //     app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
            //     chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
            //     css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
            //     json: ({ isDev }) => isDev ? '[name].json' : '[name].json',
            //     img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
            //     font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
            //     video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
            // },
        },
    },
    app: {
        baseURL: '/user/',
        head: {
            title: '科汇直饮水员工端',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
            ],
            link: [],
            script: [
                {src: '/user/js/jweixin-1.6.0.js'}
            ]
        }
    },
    css: [
        '~/assets/css/style.scss'
    ],
    runtimeConfig: {
        public: {
            apiBaseURL: 'http://kh.xhwxpos.com',
        },
        app: {
            apiBaseURL: 'http://kh.xhwxpos.com',
        }
    },
    nitro: {
        output: {
            publicDir: 'user',
        },
        // 用于客户端代理
        devProxy: {
            '/wxh5': {
                target: 'http://kh.xhwxpos.com/wxh5', // 这里是接口地址
                changeOrigin: true,
                // prependPath: true,
                pathRewrite: {'^/wxh5': ''}
            },
            // '/uploads': {
            //     target: 'https://kh.xhwxpos.com/uploads', // 这里是接口地址
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