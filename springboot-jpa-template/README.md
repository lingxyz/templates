# springboot-starter

## 快速开始
- 更改MySQL数据源
在 `application.properties`中配置数据库连接
- 在idea中配置lombok
- 在idea中配置热更新

## 技术选型
`原则：更新、更简洁`
- Java 11
- JPA
- Lombok
- Gradle

## 目录约定
```
src.main.java.com.example.demo
  common # 全局class、拦截器，待后期分离
  entities # 实体
  modules # 业务模块
    someModule
      xxController # 控制器
      xxService # Service
      xxRespontory # Respontory
```

## Feature Added
- [x] 全局异常拦截器
- [x] 自定义全局统一响应
- [x] 全局统一返回相应枚举类

## example list
- [x] 新增操作
```
curl localhost:8080/demo/add -d name=Zero -d phone=18866668888
```
- [x] 更新操作
```
curl localhost:8080/demo/update -d name=Zero -d phone=18866668888 -d id=1
```
- [x] 更新操作(事务)
```
curl localhost:8080/demo/updateUser -d name=Zero -d permissionName=查看 -d id=1
```
- [x] 查询1条操作
```
curl localhost:8080/demo/getUser?phone=18866668888
```
- [x] 查询所有
```
curl localhost:8080/demo/all
```
- [x] 查询所有(分页、排序)
```
curl localhost:8080/demo/page?pageIndex=0&pageSzie=20
```

- [ ] 查询操作（汇总）

- [x] 查询操作(连表查询:根据id查询1条)
```
curl localhost:8080/demo/getPermission?id=1
```

- [x] 删除操作
```
curl localhost:8080/demo/delete -d id=1
```

- [x] 文件上传
```
curl localhost:8080/demo/uploadFile -F "file_path"
```

- [x] 全局异常捕获测试
```
curl localhost:8080/demo/exception
```
