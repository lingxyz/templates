# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Feature Added
### 目录约定
``` shell
src
  assets # 静态资源
  components # 全局组件
  layouts # 页面模板
    defaultLayout.vue # 默认的模板
    404Layout.vue # 404 模板
  pages #页面
    components 页面组件
  plugins # 插件
  routes # 路由
```
### 编译
- [x] 编译工具：[Vite](https://github.com/vitejs/vite)
- [x] 预编译器：Pug
- [x] 预编译器：Stylus
### UI组件
- [ ] 样式初始化: 分层CSS
- [x] 组件：[Element-Plus](https://github.com/element-plus/element-plus)
### JS插件
- [ ] 插件: Filter
- [ ] 插件: Directive
### 网络
- [x] Axios
- [x] 支持内网ip访问
- [ ] 跨域代理
- [x] 路由: vue-router@4
- [ ] 路由: webpack 根据目录自动生成路由
### 数据
- [ ] Store集成
- [ ] 配置：
### 测试
- [ ] 接口数据模拟：Mock.js
- [ ] 单元测试
- [ ] 集成测试
### 部署
- [ ] 部署：Dockerfile配置
- [ ] CDN集成
### 治理
- [ ] 客户端错误监控：Fundebug.js

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
