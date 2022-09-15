const inquirer = require("inquirer");

// This will ask what user wants to do
const startQuestions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "start_menu",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    }
];

// This will ask user to input Employee's first and last name
const employeeQuestions = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name"
    }
];

// This will ask user to input employee's title and salary of the role
const roleQuestions = [
    {
        type: "input",
        message: "What is the name of the role?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary"
    },
];

// This will ask user to input name of the new department that employee belongs to
const departmentQuestions =[
    {
        type: "input",
        message: "What is the name of the department?",
        name: "name"
    }
];

module.exports = { startQuestions, employeeQuestions, roleQuestions, departmentQuestions };