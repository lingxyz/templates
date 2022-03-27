package com.example.demo.modules.user;

import com.example.demo.entities.Permission;
import com.example.demo.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.awt.print.Pageable;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
  @Resource
  private UserRepository userRepository;
  // 新增保存
  public void saveUser(String name, String phone) {
    User user = new User();
    user.setName(name);
    user.setPhone(phone);
    userRepository.save(user);
  }

  // 更新：by id
  @Transactional
  public void updateUserById(String name, String phone, int id) {
    userRepository.updateUserById(name, phone, id);
  }

  // 更新事务：by id
  @Transactional
  public void updateUserAndPermissionById(String name, String permissionName, int id) {

    String phone = "12288778899";
    Optional<User> user = userRepository.findById(id);
    Permission permission = user.get().getPermission();
    try {
      this.updateUserById(name, phone, id);
      userRepository.updatePermissionById(permissionName, permission.getId());
    } catch(RuntimeException e) {
      //    throw new RuntimeException("事务回滚");
    }
  }

  // 请求1条：按电话号码
  public User findByPhone(String phone) {
    return userRepository.findByPhone("131288886666");
  }
  // 请求所有
  public List<User> findAll() {
    return userRepository.findAll();
  }

  // 请求分页、排序
  public Page<User> findPageList(int pageIndex, int pageSize) {
//    Sort sort = new Sort(Sort.Direction.ASC, "id");
    PageRequest pageRequest = PageRequest.of(pageIndex, pageSize, Sort.Direction.ASC, "id");
    return userRepository.findAll(pageRequest);
  }



  // 请求：根据id连表查询1条
  public Map<String, Object> getPermissionByUserId(Long id) {
    return userRepository.getPermissionByUserId(id);
  }

  // 删除1条
  public void deleteUserById(int id) {
    userRepository.deleteById(id);
  }
}
