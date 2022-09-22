package com.example.demo.common;

// import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.service.Contact;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * swagger2初始化配置
 * http://localhost:8080/v2/api-docs
 * http://localhost:8080/swagger-ui.html
 */
@Configuration
@EnableSwagger2
// 是否开启swagger，正式环境需要关闭，可根据springboot的多环境配置进行设置
// @ConditionalOnProperty(name = "swagger.enable",  havingValue = "true")
public class Swagger2 {
  @Bean
  public Docket apiDocket() {
    return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(getApiInfo())
      .select()
      .apis(RequestHandlerSelectors.basePackage("com.example.demo"))
      .paths(PathSelectors.ant("/user/**"))
      .build();
  }

  // 构建 api文档的详细信息函数
  private ApiInfo getApiInfo() {
    return new ApiInfoBuilder()
      // 页面标题
      .title("Spring Boot 测试使用 Swagger2 构建RESTful API")
      // 描述
      .description("API描述")
      // 创建人信息
      .contact(new Contact("Zero", "URL", "EMAIL"))
      // 版本号
      .version("1.0")
      .build();
  }
}
