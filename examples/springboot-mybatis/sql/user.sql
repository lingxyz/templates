CREATE TABLE user(
  user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(255) INDEX NOT NULL ,
  password VARCHAR(255) NOT NULL ,
) ENGINE=INNODB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

insert into user ( user_name, password) values ( 'zero', '000000');

-- curl http://localhost:8080/user/queryUserById?id=1000