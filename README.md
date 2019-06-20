# linc
linc（ling-cli）是一款企业级项目初始化脚手架。支持生成Vue，Nuxt，Egg，Springboot，beego等项目定制模板

## 功能概览
- [ ] linc-cli `cli`
- [ ] linc-app `可视化`
- [x] [vue-template](vue-template) `template`
- [ ] js-plugin-template `template`
- [ ] vue-component-template `template`
- [x] [nuxt-template](nuxt-template) `template`
- [ ] mpvue-template `template`
- [ ] flutter-template `template`
- [ ] cordova-template `template`
- [x] [egg-template](egg-template) `template`
- [ ] nest-template `template`
- [ ] springboot-template `template`
- [ ] java-package-template `template`
- [ ] beego-template `template`

## 快速上手

- 安装

```bash
npm i linc -g
```

- 初始化项目

```bash
li init [template type] [target folder]
```

根据提示进行相应的交互输入即可

- 可视化操作

运行
```bash
li server
```
启动本地服务，浏览器自动打开`localhost:8080`

## 参数说明

### 命令行

| Command                                 | Comment        |
| --------------------------------------- | -------------- |
| li init [template type] [target folder] | 初始化项目     |
| li server (—port [port])                | 可视化服务     |
| li list                                 | 查看模板列表   |
| li -v                                   | 查看版本       |
| li -h                                   | 查看命令行列表 |

## 模板配置
param | type | comment
---- | --- | ---
xx | Array | xx