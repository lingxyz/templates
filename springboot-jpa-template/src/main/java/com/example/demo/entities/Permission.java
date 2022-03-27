package com.example.demo.entities;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * 权限实体
 */

@Entity // This tells Hibernate to make a table out of this class
@Data // lombok, need plugin
@EntityListeners(AuditingEntityListener.class)
public class Permission {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String name; // 权限名
    private Integer code; // 权限code
    //  创建时间
    @CreatedDate
    @Column(name="create_time")
    private Date createTime;
    //  修改时间
    @LastModifiedDate
    @Column(name="modify_time")
    private Date modifyTime;
}