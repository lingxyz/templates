/**
 * nuxt 配置
 */

// const resolve = require('path').resolve

export default {
  // nuxt generate to spa
  mode: "spa",

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }, // 响应式
      {name: "apple-mobile-web-app-capable", content: "yes"}, // full screen app
      {name: "apple-mobile-web-app-status-bar-style", content: "black"}, // 状态栏显示样式
      {name: "format-detection", content: "telephone=no"}, // 禁止ios phone call
      {hid: 'description', name: 'description', content: process.env.npm_package_description || 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
 loading: { color: '#3B8070' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: "~assets/stylus/common/style.styl", lang: "stylus"},
    // "~/assets/iconfont/iconfont.css",
    // 'element-ui/lib/theme-chalk/index.css'
    "mint-ui/lib/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/axios.js', ssr: true},
    // '@/plugins/element-ui',
    '@/plugins/mint-ui',
    {src: "~plugins/rem.js", ssr: true},
    {src: "~plugins/filters.js", ssr: true},
    {src: "~plugins/directive.js", ssr: true},
    // {src: "~plugins/mock.js", ssr: false},
    // {src: '~plugins/fundebug.js', ssr: true},
    {src: "~plugins/utils.js", ssr: true},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: [
    // http proxy
    "@gauseen/nuxt-proxy"
  ],
  /**
   * http proxy config
   */
  proxyTable: {
    "/api": {target: "http://10.36.1.27:7098", ws: false}
  },
  /**
   * router config
   */
  router: {
    base: "/", // set app root url
  },

  /*
  ** 将node环境变量NODE_ENV传递给浏览器端，用于区分不同环境项目配置
  */
  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 全局 stylus css 变量引入
    // styleResources: {
    //   stylus: [
    //     resolve(__dirname, './assets/stylus/common/variables.styl')
    //   ]
    // },
    // transpile: [/^element-ui/],
    transpile: [/^mint-ui/],
    // extract each page style file into an independent file
    extractCSS: {
      allChunks: true
    },
    // Run ESLint on save
    extend(config, {isDev, Client}) {
      if (isDev && Client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
}
