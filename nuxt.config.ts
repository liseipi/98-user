// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    ssr: false,
    target: 'static',
    experimental: {
        appManifest: false,
        payloadExtraction: false,   //启用此选项时（默认情况下）提取使用nuxt generate生成的页面的有效负载
        defaults: {
            nuxtLink: {
                prefetch: false,
            },
        },
    },
    referrer: 'no-referrer',
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@vant/nuxt',
    ],
    build: {
        transpile: ['pinia-plugin-persistedstate'],
        // rollupConfig: {
        //     output: {
        //         entryFileNames: '[name].[ext]',
        //         chunkFileNames: '[name].[ext]',
        //         assetFileNames: `[name].[hash].[ext]`
        //     },
        // },
        // analyze: {
        //     analyzerMode: 'static'
        // },
    },
    app: {
        // keepalive: true,
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
    vite: {
        build: {
            modulePreload: false,
            rollupOptions: {
                output: {
                    entryFileNames: '_nuxt/[name].[hash].js',
                    chunkFileNames: '_nuxt/[name].[hash].js',
                    assetFileNames: `_nuxt/[name].[hash].[ext]`,
                    // manualChunks: (id: string) => {
                    //     // console.log('manualChunks:', id);
                    //     if (id.includes('vant')) {
                    //         return 'vantUi';
                    //     }
                    // }
                }
            },
        }
    }
})