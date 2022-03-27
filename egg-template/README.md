# egg-template

基于Egg.js，打造开箱即用的Node.js模板


### 项目适配改动

#### 中间件
- ＋鉴权中间件`/app/middleware/auth.js`
- ＋跨域中间件`/app/middleware/cros.js`
- ＋日志中间件`/app/middleware/log.js`

#### 框架扩展
- ＋Context扩展`/app/extend/context.js`

#### `ESLint`校验规则

`.eslintrc`添加`rules`配置，更改默认eslint规则：
- 使用`tab`缩进
- 行末不强制使用`;`结尾
- 文件末尾不以`tab`空行结束

#### 配置
- ＋默认配置`/app/config/config.default.js`
- ＋生产环境配置`/app/config/config.prod.js`

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


如需进一步了解，参见 [egg 文档][egg]。

[egg]: https://eggjs.org
