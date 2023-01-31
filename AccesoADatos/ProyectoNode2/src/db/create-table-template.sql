-- Active: 1675159090577@@127.0.0.1@33061@Node
CREATE TABLE Users(  
    Userid int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
) COMMENT '';