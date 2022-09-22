package com.example.demo.entities;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * 用户实体
 */
@Entity // This tells Hibernate to make a table out of this class
@Data // lombok, need plugin
@EntityListeners(AuditingEntityListener.class)
@org.hibernate.annotations.Table(appliesTo = "user", comment = "[用户]用户表")
@Table(name = "user", indexes = {@Index(columnList="phone")})
@TableName("user") // mybatis-plus
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @TableId(type = IdType.AUTO) // mybatis-plus
  private Integer id;
  @Column(columnDefinition = "varchar(100) COMMENT '用户名'")
  private String userName;
  @Column(columnDefinition = "varchar(100) COMMENT '密码'")
  private String password;
  @Column(columnDefinition = "varchar(11) COMMENT '手机号'")
  private String phone;
  @Column(columnDefinition = "tinyint(1) default 0 comment '是否删除 0:否 1:是'")
  private Integer isDeleted = 0;
  // 创建时间
  @CreatedDate
  @Column(name = "create_time")
  private Date createTime;
  // 修改时间
  @LastModifiedDate
  @Column(name = "modify_time")
  private Date modifyTime;
}
