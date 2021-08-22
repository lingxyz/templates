# Starter

一款企业级通用应用初始化脚手架。支持生成Vue，Nuxt，Egg，Springboot，beego等项目定制模板，灵感来源于 Vue-cli 和 Fis3。

## Quick Start

### 直接克隆
```bash
# 克隆指定demo，安装依赖后可直接起服务
git clone -b [name]-example https://github.com/zhanglingme/starter.git [local folder name]
# 克隆指定模板，需要执行st编译后才可起服务
git clone -b [name]-template https://github.com/zhanglingme/starter.git [local folder name]
```

### 通过cli工具生成模板

```bash
#  install starter tools
npm i st -g
# Create Initial Project, 根据提示进行相应的交互输入即可
st init [target template]
# Create Initial Project with UI on `localhost:8080`
st ui
# 编译本地模板
st build [target template path] -d [dest path]
```

## Features
- [ ] `st init` 由框架模板初始化项目
- [ ] `st ui` UI可视化
- [ ] `st dev` 无配置开发模式
- [ ] `st build` 打包编译
- [ ] `st deploy` 快速发布
- [ ] 插件支持
- [x] `st -V` output the version number
- [x] `st -h` display help for command

### 命令行

| Command                                 | Comment        |
| --------------------------------------- | -------------- |
| st init [template type] [target folder] | 初始化项目     |
| st server (—port [port])                | 可视化服务     |
| st list                                 | 查看模板列表   |
| st -v                                   | 查看版本       |
| st -h                                   | 查看命令行列表 |

### 参数说明
todo..
### 模板配置
param | type | comment
---- | --- | ---
xx | Array | xx

## Templates
- [x] [vue3-example](https://github.com/zhanglingme/starter/tree/vue3-example) `web`
- [x] [vue-template](https://github.com/zhanglingme/vue-template) `web`
- [ ] js-plugins-template `plugins`
- [ ] vue-components-template `components`
- [x] [nuxt-template](https://github.com/zhanglingme/nuxt-template) `web`
- [x] [angular-template](https://github.com/zhanglingme/angular-template) `web`
- [ ] mpvue-template `wechat-miniapp`
- [x] [wepy-template](https://github.com/zhanglingme/wepy-template) `wechat-miniapp`
- [ ] flutter-template `native`
- [ ] cordova-template `hybird`
- [x] [node-template](https://github.com/zhanglingme/node-template) `node`
- [x] [egg-template](https://github.com/zhanglingme/egg-template) `node`
- [x] [koa-template](https://github.com/zhanglingme/koa-template) `node`
- [x] [nest-example](https://github.com/zhanglingme/starter/tree/nest-example) `node`
- [x] [springboot-template](https://github.com/zhanglingme/springboot-template) `java`
- [ ] java-package-template `java`
- [ ] beego-template `go`
- [x] [ci-template](https://github.com/zhanglingme/ci-template) `php`
