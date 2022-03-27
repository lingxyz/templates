package com.example.demo.entities;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
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
@org.hibernate.annotations.Table(appliesTo = "user", comment = "用户表")
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  private String name; // 用户名
  private String password; // 密码
  private String phone; // 手机号
  private String realName; // 真实姓名
  private String department; // 部门
  //  创建时间
  @CreatedDate
  @Column(name="create_time")
  private Date createTime;
  //  修改时间
  @LastModifiedDate
  @Column(name="modify_time")
  private Date modifyTime;

//  权限关联表，1对多
  @ManyToOne
  @JoinColumn(name = "permission_id")
  private Permission permission;

}