package com.example.demo.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.ConversionNotSupportedException;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 全局异常捕获
 */
@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final String logExceptionFormat = "Capture Exception By GlobalException Handler: Code %s, Detail: %s";
    private static Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    // 运行时异常
    @ExceptionHandler(RuntimeException.class)
    public Result runtimeException(Exception ex) {
        return resultFormat(ResultCode.RUNTIME_Exception, ex);
    }
    // 空指针异常
    @ExceptionHandler(NullPointerException.class)
    public Result nullPointerException(NullPointerException ex) {
        return resultFormat(ResultCode.NULL_POINTER_Exception, ex);
    }
    // 类型转换异常
    @ExceptionHandler(ClassCastException.class)
    public Result lassCastException(ClassCastException ex) {
        return resultFormat(ResultCode.CLASS_CAST_EXCEPTION, ex);
    }
    // IO异常
    @ExceptionHandler(IOException.class)
    public Result iOException(IOException ex) {
        return resultFormat(ResultCode.IO_EXCEPTION, ex);
    }
    // 未知方法异常
    @ExceptionHandler(NoSuchMethodException.class)
    public Result noSuchMethodException(NoSuchMethodException ex) {
        return resultFormat(ResultCode.NO_SUCH_METHOD_EXCEPTION, ex);
    }
    // 数据越界异常
    @ExceptionHandler(IndexOutOfBoundsException.class)
    public Result indexOutOfBoundsException(IndexOutOfBoundsException ex) {
        return resultFormat(ResultCode.INDEX_OUT_OF_BOUNDS_EXCEPTION, ex);
    }
    // 400错误
    @ExceptionHandler({TypeMismatchException.class})
    public Result typeMismatchException(TypeMismatchException ex) {
        return resultFormat(ResultCode.TYPE_MISMATCH_EXCEPTION, ex);
    }
    // 400错误
    @ExceptionHandler({MissingServletRequestParameterException.class})
    public Result missingServletRequestParameterException(MissingServletRequestParameterException ex) {
        return resultFormat(ResultCode.MISSING_SERLET_REQUEST_PARAMETER_EXCEPTION, ex);
    }

    // 405错误
    @ExceptionHandler({HttpRequestMethodNotSupportedException.class})
    public Result request405(HttpRequestMethodNotSupportedException ex) {
        return resultFormat(ResultCode.HTTP_REQUEST_METHOD_NOT_EXCEPTION, ex);
    }
    // 406错误
    @ExceptionHandler({HttpMediaTypeNotAcceptableException.class})
    public Result request406(HttpMediaTypeNotAcceptableException ex) {
        return resultFormat(ResultCode.HTTP_MEDIA_TYPE_NOT_ACCEPTABLE_EXCEPTION, ex);
    }
    // 500错误
    @ExceptionHandler({ConversionNotSupportedException.class, HttpMessageNotReadableException.class})
    public Result server500(RuntimeException ex) {
        return resultFormat(ResultCode.ERROR, ex);
    }
    // 栈溢出
    @ExceptionHandler({StackOverflowError.class})
    public Result stackOverflowError(StackOverflowError ex) {
        return resultFormat(ResultCode.STACKOVERFLOW_ERROR, ex);
    }
    // 除数不能为0
    @ExceptionHandler({ArithmeticException.class})
    public Result arithmeticException(ArithmeticException ex) {
        return resultFormat(ResultCode.ARITHMETIC_EXCEPTION, ex);
    }
    // 其它错误
    @ExceptionHandler(value = Exception.class)
    public Result errorHandler(Exception ex) {
        return resultFormat(ResultCode.ERROR, ex);
    }

    private <T extends Throwable> Result resultFormat(ResultCode code, T ex) {
        ex.printStackTrace();
        log.error(String.format(logExceptionFormat, code.getCode(), code.getMsg(), ex.getMessage()));
        return ResultResponse.resultResponse(code, ex.getMessage());
    }
}
