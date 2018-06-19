/**
 * nuxt 配置
 */

const resolve = require('path').resolve

module.exports = {
  // nuxt generate to spa
  mode: "spa",
  // Headers of the page
  head: {
    title: "This is page title",
    meta: [
      {charset: "utf-8"},
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      }, // 响应式
      {name: "apple-mobile-web-app-capable", content: "yes"}, // full screen app
      {name: "apple-mobile-web-app-status-bar-style", content: "black"}, // 状态栏显示样式
      {name: "format-detection", content: "telephone=no"}, // 禁止ios phone call
      {hid: "description", name: "description", content: "Nuxt.js project"}
    ],

    link: [
      {rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },

  // vue plugins
  plugins: [
    // {src: '~plugins/axios.js', ssr: true},
    {src: "~plugins/mint-ui.js", ssr: true},
    {src: "~plugins/rem.js", ssr: true},
    {src: "~plugins/filters.js", ssr: true},
    {src: "~plugins/directive.js", ssr: true},
    {src: "~plugins/mock.js", ssr: false},
    // {src: "~plugins/utils.js", ssr: true},
  ],
  // require global css
  css: [
    "mint-ui/lib/style.css",
    // "~/assets/iconfont/iconfont.css",
    {src: "~assets/stylus/common/style.styl", lang: "stylus"}
  ],
  modules: [
    // http proxy
    "@gauseen/nuxt-proxy"
  ],
  // http proxy config
  proxyTable: {
    "/api": {target: "http://10.36.1.27:7098", ws: false}
  },
  // router config
  router: {
    base: "/", // set app root url
  },
  // Customize the progress bar color
  loading: {color: "#3B8070"},
  // 环境变量
  env: {
    baseUrl: "http://10.36.1.27:7098",  // ajax base url
    paymentURL: 'http://sitpay.xsycloud.com.cn',
  },
  // Build configuration
  build: {
    // remove axios repeat package, only package once
    vendor: ["axios", "~/plugins/mint-ui"],
    // extract each page style file into an independent file
    extractCSS: {
      allChunks: true
    },
    // 全局 stylus css 变量引入
    styleResources: {
			stylus: [
				resolve(__dirname, './assets/stylus/common/variables.styl')
			]
		},
    // Run ESLint on save
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
