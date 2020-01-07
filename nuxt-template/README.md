# nuxt-template

> A Nuxt.js template to initial project

## Additional Features
- [x] html 使用 pug
- [x] css 使用 stylus
- [x] html header config
- [x] use axios for http request
- [x] use mint-ui UI components
- [x] env config
- [x] api proxy
- [x] use mock.js to intercepting data request
- [ ] change eslint
- [ ] unit
- [ ] e2e
- [ ] 个性化过度效果

## Build Setup

ENV: node 8.9

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build:test
$ npm run build:uat
$ npm run build:prd
$ npm run start

# generate static project
$ npm run generate:test
$ npm run generate:uat
$ npm run generate:prd

package dir: /dist
```

## Mock async data
### 设置数据模拟
- 在浏览器设置`localStorage.mock = true`
- 在`/test/mock`文件夹中，增加文件，拦截请求并模拟数据，参照[mock.js](http://mockjs.com/)
- 在`mock/index.js`中引入新增的mock文件

### 取消数据模拟
- 在浏览器设置`localStorage.removeItem('mock')`

## 客户端错误监控
需要在`app.config.js`中配置apikey
> view adddress: https://www.fundebug.com

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## File Tree

```
.
├── assets     # 资源目录
├── components # 全局组件
├── layouts    # 布局
│   └── default.vue
├── middleware # 中间件
├── pages      # 页面
│   └── index.vue
├── plugins    # 插件
│   ├── fetch.js
│   ├── fundebug.js
│   └── mint-ui.js
├── static     # 静态文件目录
│   └── favicon.ico
├── store      # vuex状态树
├── styles     # 全局分层样式表
│   ├── reset.styl
│   ├── variables.styl
│   ├── base.styl
│   ├── common.styl
│   ├── resetMintUI.styl
│   └── style.styl
├── app.config.js  # 项目全局配置
├── nuxt.config.js # nuxt 框架配置
├── package-lock.json
├── package.json
├── .editorconfig
├── .gitignore
└── README.md
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).