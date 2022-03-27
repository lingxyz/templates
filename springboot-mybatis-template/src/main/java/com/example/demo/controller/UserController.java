package com.example.demo.controller;

import com.example.demo.common.Result;
import com.example.demo.entity.User;
import com.example.demo.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**
 * 用户管理 Controller
 * @author zero
 */
@RestController
@RequestMapping("/user")
@Api(tags = "注册中心")
public class UserController {

  @Autowired
  private UserServiceImpl userService;

  /**
   * 用户注册
   * @param userName 用户名
   * @param password 密码
   * @return Result<User>
   */
  @PostMapping("/regist")
  @ApiOperation(value = "注册接口", notes = "根据用户名和密码注册，不能重复")
  @ApiImplicitParams({
    @ApiImplicitParam(name = "userName", value = "用户名", paramType = "body", required = true),
    @ApiImplicitParam(name = "password", value = "密码", paramType = "body", required = true)
  })
  public Result<User> regist(User user) {
    return userService.regist(user);
  }

  /**
   * 登录
   * @param userName 用户名
   * @param password 密码
   * @return Result<User>
   */
  @PostMapping(value = "/login")
  @ApiOperation(value = "登录接口", notes = "根据用户名和密码登录")
  @ApiImplicitParams({
    @ApiImplicitParam(name = "userName", value = "用户名", paramType = "body", required = true),
    @ApiImplicitParam(name = "password", value = "密码", paramType = "body", required = true)
  })
  public Result<User> login(User user){
    return userService.login(user);
  }

}