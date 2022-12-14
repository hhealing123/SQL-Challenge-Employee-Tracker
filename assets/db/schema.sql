-- Drops the employeeTracker_db if it exists currently --
DROP DATABASE IF EXISTS employeeTracker_db;

-- Create new database --
CREATE DATABASE employeeTracker_db;

-- Use employeeTracker_db -- 
USE employeeTracker_db;

-- Create the following tables: "department", "role", and "employee" within employeeTracker_db --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    department_id INT,
    salary DECIMAL,
    FOREIGN KEY (department_id)
    REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE SET NULL
);