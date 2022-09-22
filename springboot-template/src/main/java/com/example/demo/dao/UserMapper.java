package com.example.demo.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entities.User;

public interface UserMapper extends BaseMapper<User> {
  //MP规则：以对象的方式操作数据库，CURD操作
  //示例：查询所有的user用户
  User login(User record);
  User findUserByName(String userName);
}
