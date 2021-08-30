package com.example.demo.dao;

import com.example.demo.entity.User;

public interface UserExtendsMapper extends UserMapper {
  User login(User record);
  User findUserByName(String userName);
}
