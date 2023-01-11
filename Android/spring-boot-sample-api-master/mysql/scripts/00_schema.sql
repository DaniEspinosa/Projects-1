CREATE USER IF NOT EXISTS 'test_user'@'%' IDENTIFIED BY 'test_pass';

CREATE DATABASE IF NOT EXISTS `test`;
GRANT ALL ON `test`.* TO 'test_user'@'%';