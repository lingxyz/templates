# Node 脚手架工具

> 技术选型

核心：[Node.js](https://nodejs.org)
核心框架：[Express](http://www.expressjs.com.cn)
数据库：[MongoDB](https://www.mongodb.com)

相关工具库：

- 数据库操作：[mongoose](http://www.nodeclass.com/api/mongoose.html)
- 打包工具：[grunt](http://www.gruntjs.net)
- 测试工具：[schemas](https://bower.io/)

前端：

- 模板引擎：jade
- 前端包依赖管理工具：[bower]()

> 目录结构：

<!-- 

controllers：控制器,对请求的操作(相当于MVC中的C)。

utils：工具库。

config：配置目录。

test：测试目录

redis缓存
 -->

```
|---site
|     |---config #配置文件
|     |      |---index.js 主要配置
|     |
|     |---docs #文档
|     |      |---api.md 接口文档
|     |
|     |---modals #模型
|     |
|     |---schemas #模式
|     |
|     |---views #前端目录
|     |      |---includes # 公用视图文件
|     |      |---pages # 视图目录
|     |      |     └── index.jade # 主页
|     |      |     └── list.jade # 列表页
|     |      |     └── detail.jade # 详情页
|     |      |     └── admin.jade # 后台
|     |      |
|     |      |---layout.jade # 视图入口文件
|     |
|     |---public #静态资源目录
|     |		└── libs # 通过bower 安装的依赖包
|     |			  └── jquery
|     |           └── bootstrap
|     |
|     |---app.js #入口文件
|     |
|     |---routes.js #路由
|     |
|     |---package.json #npm 包配置
|     |
|     |---README.md #入口文档
|     |
|     |---.bowerrc #bower 配置文件
|     |
|     |---.bower.json #bower 包依赖配置文件
|     |
|     |---.gitigore #git 忽略文件列表
        ......
```

> 使用

```
安装 node npm
npm install node-cli
cd node-cli 
npm install
bower install
node app.js(开发：supervisor app.js)
localhost:3000
```

> 服务器环境部署

```
nginx 路由转发
pm2/forever 进程守护
```