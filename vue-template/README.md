# vue-template

A full FE framework based on Vue-cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## directory
```bash
app
|---build  # 编译配置
|     |---build.js
|     └───check-versions.js
|
|---mock   # 数据模拟
|
|---src    # 开发目录
|     |---assets    # 资源文件
|     |     |- images   # 图片
|     |     |- icons    # iconfont/svg
|     |     |- stylus   # stylus
```

## from vue-cli
- [webpack](https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md)
- [browserslist](https://github.com/browserslist/browserslist)
- [Dev Server Proxy](https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy)
- [Babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app)
- [CSS](https://github.com/vuejs/vue-cli/blob/dev/docs/css.md)
- [ESLint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
- [TypeScript](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript)
- Unit Testing
    - [Jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)
    - [Mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha)
- E2E Testing
    - [Cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress)
    - [Nightwatch](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch)
- dependencies
    - [vue](https://cn.vuejs.org/index.html)
    - [vue-router](https://router.vuejs.org/zh-cn/)

For details, check out the [docs for vue-cli](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md)、[guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## need todo
- [vuex](https://vuex.vuejs.org/zh-cn/)
- docs: 项目文档说明
- wepack
    - 自动打开浏览器 是否以ip打开
- icon: 采用`iconfont`减少流量，托管于[iconfont](http://www.iconfont.cn/)
- CSS模块自动加载
- eslint

## new function
- template: support [pug](https://pugjs.org/)
- css: support [stylus](http://stylus-lang.com/)
- 兼容老项目: 将老项目拷贝在`static`目录下，相关router前加`/static`域
- 模块加载：`webpack`自动加载`router`模块，`store`模块
- [mock](http://mockjs.com/): use `localStorage.mock = true` to open mock
- app config: 新增项目配置文件 `src/config.js`，设置`development`和`production`环境下的应用配置
- H5模拟原生转场动画：
	- 同级页面之间跳转动画`fade`，可在`app.vue`中配置
	- 父转子动画`slide-right`
	- 子转父动画`slide-left`

## deploy
- hash router
- [H5 history router](https://router.vuejs.org/zh-cn/essentials/history-mode.html)
- 首屏预编译
- 产出静态页面
- 服务端渲染

> more: [vue-loader](https://vue-loader-v14.vuejs.org/zh-cn/)、[awesome-vue](https://github.com/vuejs/awesome-vue)