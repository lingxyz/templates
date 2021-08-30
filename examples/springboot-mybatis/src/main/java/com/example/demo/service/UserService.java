package com.example.demo.service;

import com.example.demo.common.Result;
import com.example.demo.entity.User;

public interface UserService {
  // 自定义方法
  Result<User> login(User user);
  Result<User> regist(User user);

  // 自动生成的mapper方法
  int deleteByPrimaryKey(Integer userId);

  int insert(User record);

  int insertSelective(User record);

  User selectByPrimaryKey(Integer userId);

  int updateByPrimaryKeySelective(User record);

  int updateByPrimaryKey(User record);
}