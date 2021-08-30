package com.example.demo.dao;

import com.example.demo.entity.User;

public interface UserMapper {
  int deleteByPrimaryKey(Integer userId);

  int insert(User record);

  int insertSelective(User record);

  User selectByPrimaryKey(Integer userId);

  int updateByPrimaryKeySelective(User record);

  int updateByPrimaryKey(User record);
}