
-- Drop and recreate the database
DROP DATABASE IF EXISTS university_db;
CREATE DATABASE university_db;
USE university_db;

-- Create table: admission_forms
CREATE TABLE admission_forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    dob DATE,
    gender VARCHAR(10),
    address TEXT,
    collegename VARCHAR(100),
    application_id VARCHAR(50),
    degree VARCHAR(50),
    courses VARCHAR(100),
    personalStatement TEXT
);

-- Create table: education_info
CREATE TABLE education_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    school VARCHAR(150),
    tenthPercentage DECIMAL(5,2),
    twelfthPercentage DECIMAL(5,2),
    regId VARCHAR(50)
);
select*from education_info;
-- Show all tables
SHOW TABLES;

-- View structure and data
DESCRIBE admission_forms;
SELECT * FROM admission_forms;
SELECT DISTINCT fullName FROM admission_forms;
SELECT fullName, email, phone FROM admission_forms;

-- SQL functions & utilities
SELECT (10 - 20) AS substract;
SELECT LENGTH('prasad') AS total_length;
SELECT REPEAT('@', 10);
SELECT LOWER('INDIA');
SELECT UPPER('india');
SELECT CURDATE();
SELECT DAY(CURDATE());
SELECT NOW();
SELECT CONCAT('india', ' is', ' in', ' ashia') AS merged;
SELECT ASCII('a');
SELECT ASCII('3');
