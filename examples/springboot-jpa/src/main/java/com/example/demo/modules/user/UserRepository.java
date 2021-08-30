package com.example.demo.modules.user;

import com.example.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Map;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends JpaRepository<User, Integer> {
  // 按电话号码请求
  User findByPhone(String phone);

  // 更新：按照userid
  @Modifying
  @Query("update User set name=:name, phone=:phone where id=:id")
  void updateUserById(String name, String phone, int id);

  // 更新事务回滚：按照userid
  @Modifying
  @Query("update Permission set name=:permissionName where id=:id")
  void updatePermissionById(String permissionName, int id);

  // 连表查询
  @Query(
    value="SELECT u.id, u.name, u.phone, p.id as permission_id, p.name as permission_name from user u " +
            "LEFT JOIN permission p "+
            "on u.permission_id = p.id "+
            "where u.id = :id",
    nativeQuery=true
  )
  Map<String, Object> getPermissionByUserId(Long id);

}