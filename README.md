# nuxt-cli

> A project cli with nuxt.js

## Todo:
- change eslint
- unit
- e2e
- 个性化过度效果

## 定制：
- html 使用 pug
- css 使用 stylus
- html header config
- use axios for http request
- use mint-ui UI components
- env config
- api proxy
- use mock.js to intercepting data request

## Build Setup

ENV: node 8.9

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Mock async data
### 设置数据模拟
- 在浏览器设置`localStorage.mock = true`
- 在`/test/mock`文件夹中，增加文件，拦截请求并模拟数据，参照[mock.js](http://mockjs.com/)
- 在`mock/index.js`中引入新增的mock文件

### 取消数据模拟
- 在浏览器设置`localStorage.removeItem('mock')`

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
