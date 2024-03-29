package com.example.demo.modules.user;

import com.example.demo.common.Result;
import com.example.demo.common.ResultResponse;
import com.example.demo.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@Controller // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URLs start with /demo (after Application path)
public class UserController {
  @Resource // This means to get the bean called userRepository
  // Which is auto-generated by Spring, we will use it to handle the data
  private UserRepository userRepository;
  @Resource
  private UserService userService;

  //  新增操作
  @PostMapping(path="/add") // Map ONLY POST Requests
  public @ResponseBody Result addNewUser (@RequestParam String name
          , @RequestParam String phone) {
    userService.saveUser(name, phone);
    return ResultResponse.success();
  }

  // 更新操作
  @PostMapping(path="/update") // Map ONLY POST Requests
  public @ResponseBody Result updateUser (@RequestParam String name
          , @RequestParam String phone, @RequestParam int id) {
    userService.updateUserById(name, phone, id);
    return ResultResponse.success();
  }
  // 更新操作：事务回滚
  @PostMapping(path="/updateUser") // Map ONLY POST Requests
  public @ResponseBody Result updateUserAndPermission (@RequestParam String name
          , @RequestParam String permissionName, @RequestParam int id) {
    userService.updateUserAndPermissionById(name, permissionName, id);
    return ResultResponse.success();
  }

  //  查询1条操作
  @GetMapping(path="/getUser")
  public @ResponseBody Result getUser(@RequestParam String phone) {
    User data = userService.findByPhone(phone);
    return ResultResponse.success(data);
  }
  //  查询所有
  @GetMapping(path="/all")
  public @ResponseBody Result getAllUsers() {
    List<User> data = userService.findAll();
    return ResultResponse.success(data);
  }
  // 查询操作：分页 排序
  @GetMapping(path="/page")
  public @ResponseBody Result getUserList(@RequestParam int pageIndex, @RequestParam int pageSize) {
    Page<User> data = userService.findPageList(pageIndex, pageSize);
    return ResultResponse.success(data);
  }
  // todo: 查询操作，汇总

  // 查询操作：连表查询:根据id查询1条
  @GetMapping(path="/getPermission")
  public @ResponseBody Result getUserPermission(@RequestParam Long id) {
    Map<String, Object> data = userService.getPermissionByUserId(id);
    return ResultResponse.success(data);
  }

  // 删除操作
  @PostMapping("/delete")
  public @ResponseBody Result deleteById(@RequestParam int id) {
    userService.deleteUserById(id);
    return ResultResponse.success();
  }

//  文件上传
  @PostMapping("/uploadFile")
  public Result uploadFile(@RequestParam("filename") MultipartFile file) {
    if (file.isEmpty()) {
      return ResultResponse.error("请选择文件！");
    }
    String fileName = file.getOriginalFilename();  // 文件名
    String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
    if(!suffixName.equals(".jpg") && !suffixName.equals(".png")){
      return ResultResponse.error("请选择图片！！！");
    }
    String filePath = "~/temp-rainy/"; // 上传后的路径
    // fileName = UUID.randomUUID() + suffixName; // 新文件名
    // 文件从内存保存到磁盘
    File dest = new File(filePath + suffixName);
    if (!dest.getParentFile().exists()) {
      dest.getParentFile().mkdirs();
    }
    try {
      file.transferTo(dest);
    } catch (IOException e) {
      e.printStackTrace();
    }
    //  返回路径给前端，或保存到数据库
    String filename = "/temp-rainy/" + fileName;
    return ResultResponse.success(filename);
  }
  // 文件下载：直接返回前端文件地址，浏览器会自动下载

  // 触发全局异常捕获
  @GetMapping(path="/exception")
  public @ResponseBody Result emitException() {
    int a = 1/0;
    return ResultResponse.success();
  }
}