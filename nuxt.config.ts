export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    ssr: false,
    // target: 'static',
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
        extractCSS: true,
        // terser: {
        //     terserOptions: {
        //         compress: {
        //             drop_console: true,
        //         },
        //     },
        // },
    },
    routeRules: {
        '/': { prerender: true },
    },
    app: {
        baseURL: '/user/',
        head: {
            title: '科汇直饮水User',
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
        // prerender: {
        //     crawlLinks: false,
        //     routes: ['/'],
        // },
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
    // modern: 'client',
    performance: {
        gzip: true,
    },
    // 优化 Vite 配置
    vite: {
        build: {
            // 减少小文件数量
            minify: 'terser', // 使用 terser 压缩
            rollupOptions: {
                output: {
                    // 合并小文件
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            // 将所有 node_modules 合并到 vendor
                            return 'vendor';
                        }
                        if (id.includes('pages/')) {
                            const pageName = id.split('/pages/')[1].split('.')[0];
                            return `page-${pageName}`;
                        }
                    },
                },
            },
            // 限制 chunk 大小，合并小文件
            chunkSizeWarningLimit: 1000, // 提高警告阈值
        },
        // 控制预构建
        optimizeDeps: {
            exclude: ['vant'], // 避免 Vant 全量预构建
            include: [], // 手动指定需要预构建的依赖
        },
    },
    // 限制组件自动导入
    // components: {
    //     global: false,
    //     dirs: ['~/components'],
    // },
    // Vant 按需加载
    vant: {
        lazyload: true, // 尝试启用懒加载（视模块版本支持）
    },
})