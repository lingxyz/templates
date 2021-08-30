package com.example.demo.service.impl;

import com.example.demo.common.Result;
import com.example.demo.dao.UserExtendsMapper;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * service.mpl
 */
@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserExtendsMapper userMapper;

  // 自定义方法

  /**
   * 注册
   * @param user
   * @return User
   */
  @Override
  public Result<User> regist(User user) {
    Result<User> result = new Result<User>();
    result.setSuccess(false);
    result.setDetail(null);
    try {
      User existUser = userMapper.findUserByName(user.getUserName());
      if(existUser != null){
        //如果用户名已存在
        result.setMsg("用户名已存在");
      } else {
        userMapper.insert(user);
        //System.out.println(user.getId());
        result.setMsg("注册成功");
        result.setSuccess(true);
        result.setDetail(user);
      }
    } catch (Exception e) {
      result.setMsg(e.getMessage());
      e.printStackTrace();
    }
    return result;
  }

  /**
   * 登录
   * @param user
   * @return User
   */
  @Override
  public Result<User> login(User user) {
    Result<User> result = new Result<User>();
    result.setSuccess(false);
    result.setDetail(null);
    try {
      User exitUser = userMapper.login(user);
      if (exitUser == null) {
        result.setMsg("用户名或密码错误");
      } else {
        result.setMsg("登录成功");
        result.setSuccess(true);
        user.setUserId(exitUser.getUserId());
        result.setDetail(user);
      }
    } catch (Exception e) {
      result.setMsg(e.getMessage());
      e.printStackTrace();
    }
    return result;

  }

  // 自动生成的mapper方法
  @Override
  public int deleteByPrimaryKey(Integer userId) {
    return userMapper.deleteByPrimaryKey(userId);
  }

  @Override
  public int insert(User record) {
    return userMapper.insert(record);
  }

  @Override
  public int insertSelective(User record) {
    return userMapper.insertSelective(record);
  }

  @Override
  public User selectByPrimaryKey(Integer userId) {
    return userMapper.selectByPrimaryKey(userId);
  }

  @Override
  public int updateByPrimaryKeySelective(User record) {
    return userMapper.updateByPrimaryKeySelective(record);
  }

  @Override
  public int updateByPrimaryKey(User record) {
    return userMapper.updateByPrimaryKey(record);
  }
}
