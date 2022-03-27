# Getting Started

## Startup

1. 数据库初始化

- 本地搭建数据库，执行 `sql` 目录下的 sql
- 修改 `application.yml` 和 `generatorConfig.xml` 目录下的`数据库连接地址`、`用户名`和`密码`

2. 生成 mapper

```
mvn mybatis-generator:generate -e
```

3. 运行项目

```bash
./mvnw spring-boot:run
```

4. 前端测试

- 登录：http://localhost:8080/login.html
- 注册：http://localhost:8080/regist.html

## Features
- [x] mybatis-generator
- [x] druid 连接池
- [x] swagger2 接口文档