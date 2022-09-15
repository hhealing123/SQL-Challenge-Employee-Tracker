const connection = require("../config/connection");
const questionArrays = require("../lib/question")
const initiateProject = require("../../index");
require("console.table");

const showDepartments = () => {
    const sqlQuery = 'SELECT * FROM department ORDER BY department.name;'
    return connection.promise().query(sqlQuery);
};

const showRoles = () => {
    const sqlQuery = 'SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id;'
    return connection.promise().query(sqlQuery);
};

const showEmployees = () => {
    const sqlQuery = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;'
    return connection.promise().query(sqlQuery)  
};

const addDepartment = (newDepartment) => {
    const sqlQuery = 'INSERT INTO department SET ?'
    return connection.promise().query(sqlQuery, newDepartment)
};

const addEmployee = (newEmployee) => {
    const sqlQuery = 'INSERT INTO employee SET ?'
    return connection.promise().query(sqlQuery, newEmployee)
};

const addRole = (newRole) => {
    const sqlQuery = 'INSERT INTO role SET ?'
    return connection.promise().query(sqlQuery, newRole)
};

const updateEmployee = (employeeUpdate) => {
    const sqlQuery = `UPDATE employee SET role_id = ${employeeUpdate.updatedEmployeeRole} WHERE employee.id = ${employeeUpdate.updatedEmployee};`
    return connection.promise().query(sqlQuery)
};

module.exports = { showDepartments, showEmployees, showRoles, addDepartment, addEmployee, addRole, updateEmployee };