# 小程序脚手架

本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)

### 开发

- 1. 安装 wepy

```bash
npm install wepy-cli -g
```

- 2. 下载源代码

```bash
git clone git@git.meiwan.me:zhangl/dzminiapp.git
```

- 3. 安装开发依赖

```bash
cd dzminiapp
npm install
```

- 4. 编译源代码

```bash
wepy build [--watch]
# 或者运行
npm run dev
```

- 5.导入至开发者工具

编译完成后会生成`dist`目录。

打开开发者工具，新建小程序项目，目录指向 `/dzminiapp/dist`

**切记： 取消勾选`开发者工具->项目->开启ES6转ES5`，否则代码运行出现错误。**


### 产出

产出时，会压缩 `css` `js`，进行 `eslint` 验证
```bash
npm run build
```
具体配置见 `/wepy.config.js`

### 目录结构

```bash
├── dist                   微信开发者工具指定的目录（产出目录）
├── node_modules
├── src                    代码编写的目录
|   ├── common             公用js方法库
|   |   ├── cm_a.js        可复用js a
|   |   └── cm_b.js        可复用js b
|   ├── components         组件文件夹（非完整页面）
|   |   ├── com_a.wpy      可复用组件 a
|   |   └── com_b.wpy      可复用组件 b
|   ├── pages              页面文件夹（完整页面）
|   |   ├── index.wpy      页面 index
|   |   └── page.wpy       页面 page
|   ├── assets             图片资源库
|   |   ├── a.png          图片 a
|   |   └── b.jpg          图片 b
|   ├── mocks              mock假数据
|   |   ├── a.png          图片 a
|   |   └── a.js           返回假数据对象
|   └── app.wpy            小程序配置项（全局样式配置、声明钩子等）
└── package.json           package 配置
```

### 其他

- [微信小程序开发者文档](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
- [小程序框架wepy文档](https://wepyjs.github.io/wepy)