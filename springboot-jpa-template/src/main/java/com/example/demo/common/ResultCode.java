package com.example.demo.common;

import lombok.Getter;

/**
 * 全局统一返回相应枚举类
 */
@Getter
public enum ResultCode {
    // 通用错误
    SUCCESS(200, "操作成功"),
    WARNING(201, "操作失败"),
    ERROR(500, "服务器内部错误"),
    STACKOVERFLOW_ERROR(501, "栈溢出"),
    MISSING_SERLET_REQUEST_PARAMETER_EXCEPTION(400, "MissingServletRequestParameterException"),
    HTTP_REQUEST_METHOD_NOT_EXCEPTION(405, "请求方法错误"),
    HTTP_MEDIA_TYPE_NOT_ACCEPTABLE_EXCEPTION(406, "Not acceptable/无法接受"),
    HTTP_MESSAGE_NOT_READABLE_EXCEPTION(400, "http message not readable exception"),
    TYPE_MISMATCH_EXCEPTION(400, "type mismatch exception"),
    //  1000系列，异常捕获
    FAILED(1001, "接口错误"),
    VALIDATE_FAILED(1002, "参数校验失败"),
    RUNTIME_Exception(1003, "运行时异常"),
    NULL_POINTER_Exception(1004, "空指针异常"),
    CLASS_CAST_EXCEPTION(1005, "class cast exception"),
    IO_EXCEPTION(1006, "io exception"),
    NO_SUCH_METHOD_EXCEPTION(1007, "未知方法异常"),
    INDEX_OUT_OF_BOUNDS_EXCEPTION(1008, "数组越界异常"),
    ARITHMETIC_EXCEPTION(1009, "除数不能为0"),

    // 2000系列用户错误
    USER_NOT_EXIT(2000, "用户不存在"),
    USER_LOGIN_FAIL(2001, "用户名或密码错误"),
    USER_NOT_LOGIN(2002, "用户还未登录，请先登录"),
    NO_PERMISSION(2003, "权限不足，请联系管理员");

    private int code;
    private String msg;

    ResultCode(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
