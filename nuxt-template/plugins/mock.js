/**
 * async data mock
 * open mock: localStorage.mock = true
 * mock data: 在mock文件夹中创建.js文件，导出{url: String/Regexp, type: 'get'/'post', data: Object/Function}
 */

import Mock from 'mockjs'
import { isMock } from '../app.config'

if (isMock) {
  const modules = require.context('../mock', true, /\.js$/)
  modules.keys().forEach(key => {
    const data = modules(key).default
    Mock.mock(data.url, data.type, data.data)
  })

  console.log('%cUse mock.js to intercepting data requests.', 'color: #4caf50')
} else {
  console.log('%cClose async data mock.', 'color: #4caf50')
}