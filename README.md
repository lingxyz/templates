# Starter

一款企业级通用应用初始化脚手架。支持生成Vue，Nuxt，Egg，Springboot，beego等项目定制模板，灵感来源于 Vue-cli 和 Fis3。

## Useage

### 直接克隆指定模板
```bash
git clone https://github.com/zhanglingx/[name]-templates.git
```

### 通过cli工具生成模板

- Install

```bash
npm i st -g
```

- Create Initial Project

```bash
st init [target template]
```
根据提示进行相应的交互输入即可

- Create Initial Project with UI

```bash
st ui
```

启动本地服务，浏览器自动打开`localhost:8080`

### 参数说明

#### 命令行

| Command                                 | Comment        |
| --------------------------------------- | -------------- |
| st init [template type] [target folder] | 初始化项目     |
| st server (—port [port])                | 可视化服务     |
| st list                                 | 查看模板列表   |
| st -v                                   | 查看版本       |
| st -h                                   | 查看命令行列表 |

### 模板配置
param | type | comment
---- | --- | ---
xx | Array | xx

## Features
- [ ] `st init` 由框架模板初始化项目
- [ ] `st ui` UI可视化
- [ ] `st dev` 无配置开发模式
- [ ] `st build` 打包编译
- [ ] `st deploy` 快速发布
- [ ] 插件支持
- [x] `st -V` output the version number
- [x] `st -h` display help for command

## Templates
- [x] [vue-template](https://github.com/zhanglingx/vue-template) `template` `web`
- [ ] js-plugins-template `template` `plugins`
- [ ] vue-components-template `template` `components`
- [x] [nuxt-template](https://github.com/zhanglingx/nuxt-template) `template` `web`
- [x] [angular-template](https://github.com/zhanglingx/angular-template) `template` `web`
- [ ] mpvue-template `template` `wechat-miniapp`
- [x] [wepy-template](https://github.com/zhanglingx/wepy-template) `template` `wechat-miniapp`
- [ ] flutter-template `template` `native`
- [ ] cordova-template `template` `hybird`
- [x] [node-template](https://github.com/zhanglingx/node-template) `template` `node`
- [x] [egg-template](https://github.com/zhanglingx/egg-template) `template` `node`
- [x] [koa-template](https://github.com/zhanglingx/koa-template) `template` `node`
- [ ] nest-template `template` `node`
- [x] [springboot-template](https://github.com/zhanglingx/springboot-template) `template` `java`
- [ ] java-package-template `template` `java`
- [ ] beego-template `template` `go`
- [x] [ci-template](https://github.com/zhanglingx/ci-template) `template` `php`