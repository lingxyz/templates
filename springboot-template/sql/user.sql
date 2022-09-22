CREATE TABLE user(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(255) INDEX NOT NULL ,
  password VARCHAR(255) NOT NULL ,
  phone VARCHAR(255) NOT NULL ,
) ENGINE=INNODB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

insert into user ( user_name, password, phone) values ( 'admin', '123456', '17788889999');

-- curl http://localhost:8080/user/queryUserById?id=1000
