package com.example.demo.common;

/**
 * 自定义全局统一响应
 */
public class ResultResponse {
    public static Result success() {
        return resultResponse(ResultCode.SUCCESS, "");
    }

    public static Result success(Object data) {
        return resultResponse(ResultCode.SUCCESS, data);
    }

    public static Result warning() {
        return resultResponse(ResultCode.WARNING, "");
    }

    public static Result warning(Object data) {
        return resultResponse(ResultCode.WARNING, data);
    }

    public static Result error() {
        return resultResponse(ResultCode.ERROR, "");
    }

    public static Result error(Object data) {
        return resultResponse(ResultCode.ERROR, data);
    }

    public static Result resultResponse(ResultCode resultCode, Object data) {
        return resultResponse(resultCode.getCode(), resultCode.getMsg(), data);
    }

    public static Result resultResponse(int code, String msg, Object data) {
        Result result = new Result();
        result.setCode(code);
        result.setMsg(msg);
        result.setData(data);
        return result;
    }
}
