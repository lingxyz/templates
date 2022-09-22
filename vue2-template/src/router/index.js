/**
 * 路由：根据src目录规则自动获取
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// function: 由 path 获取路由
const path2Route = path => {
  return path.replace(/(\.\/|\/index\.vue|\.vue|index)/g, '')
}

// webpack：获取所有页面
const pages = require.context('../pages', true, /\.vue$/)

// 路由解析
const routes = pages.keys().map(item => {
  return {
    path: `/${path2Route(item)}`,
    component: () => import(`../pages${item.replace('./', '/')}`)
  }
})

export default new Router({
  mode: 'history',  // HTML5 history 模式
  routes
})
