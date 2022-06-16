export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '관리자 대시보드',
        htmlAttrs: {
            lang: 'ko'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: '관리자 대시보드'},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            { rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' }
        ],
        script: [
        //    {src : ''}
        ],
    },
    server: {
        port: 8080,
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '~assets/css/app.css',
        '~assets/css/util.css',
        '~assets/css/common.css',
        '~assets/css/elcustom.css',
        '~assets/css/auth.css',
        '~assets/font-awesome/css/font-awesome.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/group'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    }
}
