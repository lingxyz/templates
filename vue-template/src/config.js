/**
 * 项目配置
 * 页面组件中通过 `this.$config` 来获取配置
 */

const env = process.env.NODE_ENV
const isDev = env === 'development'

const config = {
    baseURL: isDev ? '/api' : '/api/a'
}

export default {
    install (Vue, options) {
        Vue.prototype.$config = config
    }
}