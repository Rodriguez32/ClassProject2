DROP DATABASE IF EXISTS appdb;
CREATE DATABASE appdb;

USE appdb;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NULL,
  password VARCHAR(100) NULL,
  email VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM users;

CREATE TABLE creators (
  contract_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (contract_id)
);

CREATE TABLE receipients (
  contract_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  PRIMARY KEY (contract_id)
);

CREATE TABLE contracts (
  id INT NOT NULL AUTO_INCREMENT,
  contract_id INT NOT NULL,
  type VARCHAR(100) NULL,
  date TIMESTAMP NOT NULL default current_timestamp,
  FOREIGN KEY (contract_id) REFERENCES receipients(contract_id),
  PRIMARY KEY (id)
);


