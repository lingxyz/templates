package com.example.demo.common;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * 向前端返回信息封装
 *
 * @param <T>
 * @param <T> 可变类型
 */

@ApiModel(description= "返回响应数据")
public class Result<T> {
  //返回信息

  @ApiModelProperty(value = "返回信息")
  private String msg;
  //数据是否正常请求

  @ApiModelProperty(value = "是否成功")
  private boolean success;
  //具体返回的数据

  @ApiModelProperty(value = "返回对象")
  private T detail;

  // getter and setter
  public String getMsg() {
    return this.msg;
  };

  public void setMsg(String msg) {
    this.msg = msg;
  };

  public boolean getSuccess() {
    return this.success;
  };

  public void setSuccess(boolean success) {
    this.success = success;
  };

  public T getDetail() {
    return this.detail;
  };

  public void setDetail(T detail) {
    this.detail = detail;
  };
}
