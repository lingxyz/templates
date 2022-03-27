# Koa-cli

Todo:
- redis
- 跨域
- 部署
- 登录验证
- 重构日志系统
- 前端bower

### DB
- Mysql: mysql sequelize
- MongoDB: mongoose
- Redis

### views
- HTML 采用 pug
- CSS 采用 stylus

### Directory
```bash
|---app
|     |---bin   # 程序启动目录
|     |    └──www   # 入口文件
|     |
|     |---common    # 公用js
|     |
|     |---routes    # 路由
|     |
|     |---controller    # 控制器
|     |
|     |---db    # 数据库连接配置
|     |
|     |---logs  # 日志（程序运行时创建）
|     |
|     |---model  # 模型
|     |
|     |---node_modules  # npm 依赖
|     |
|     |---public    # 静态资源目录
|     |		|---libs    # 通过 bower 安装的依赖包
|     |		|	  └── jquery
|     |     |      └── bootstrap
|     |     |---stylus      # stylus for css 
|     |     |---js          # es6 for js 
|     |     |---iconfont    # font icons
|     |     └───images      # images
|     |     
|     |---views # 前端目录
|     |      |---includes # 公用视图文件
|     |      |---pages # 视图目录
|     |      |     └── index.pug # 主页
|     |      |     └── list.pug # 列表页
|     |      |     └── detail.pug # 详情页
|     |      |
|     |      |---layout.pug # 视图入口文件
|     |
|     |---app.js # 入口文件
|     |
|     |---nodemon.json.js   # nodemon config
|     |
|     |---package.json # npm 包配置
|     |
|     |---README.md # 入口文档
|     |
|     |---.bowerrc # bower 配置文件
|     |
|     |---.bower.json # bower 包依赖配置文件
|     |
|     |---.gitigore # git 忽略文件列表
        ......
```

### Build Setup

ENV: node 8.9
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# first start server with pm2 named api
$ npm run prd

# restart server with pm2
$ npm run restart
```

For detailed explanation on how things work, checkout the [Koa-cli](https://github.com/zhanglingrd/koa-cli).

