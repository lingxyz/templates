/**
 * store: 自动加载所有模块
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store()

// 由 path 获取 nameSpace
const path2Space = path => {
  path = path.replace(/(\.\/|\/index\.js|\.js|index)/g, '')
  return path.split('/')
}

// 获取所有store
const modules = require.context('./', true, /\.js$/)

// 模块动态注册
modules.keys()
  .filter(o => o !== './index.js')
  .map(path => ({path, space: path2Space(path)}))
  .sort((a, b) => a.space.length - b.space.length)
  .forEach(item => {
    store.registerModule(item.space, modules(item.path).default)
  })

export default store
