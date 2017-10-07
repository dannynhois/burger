-- create database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

-- create table
CREATE TABLE burgers (
    id INT(20) AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT 0,
    date TIMESTAMP,
    PRIMARY KEY(id)
);