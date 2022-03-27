package com.example.demo.common;

import lombok.Data;

/**
 * 全局统一返回实体类
 */
@Data
public class Result {
    public int code;
    public String msg;
    public Object data;
}
