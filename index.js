// The require will allow to use npm dependencies needed for this project
const connection = require("./assets/config/connection");
const inquirer = require("inquirer");
require("console.table");

// Imports question arrays from question.js file
const { startQuestions, employeeQuestions, roleQuestions, departmentQuestions } = require("./assets/lib/question");
// Imports query.js file which allow us to add, access, and process data 
const { showDepartments, showEmployees, showRoles, addDepartment, addEmployee, addRole, updateEmployee } = require("./assets/lib/query");

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`
     ══════════════════════════════════════════════════════
    ║ ╔═══╗     ╔╗                 ╔═╗╔═╗                  ║                                   
    ║ ║╔══╝     ║║                 ║ ╚╝ ║                  ║
    ║ ║╚══╦╗╔╦══╣║╔══╦╗ ╔╦══╦══╗   ║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗ ║
    ║ ║╔══╣╚╝║╔╗║║║╔╗║║ ║║║═╣║═╣   ║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝ ║
    ║ ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣   ╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝  ║
    ║ ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝                 ╔═╝║      ║
    ║        ║║      ╔═╝║                        ╚══╝      ║
    ║        ╚╝      ╚══╝             Made by. Harvey Lee  ║
     ══════════════════════════════════════════════════════
    Connected to employeeTracker_db database!
    \n\n`)
    // Will initiate the project
    initiateQuestions();
});

// Allow user to select the below questions and perform actions based on the questions
const initiateQuestions = () => {
    inquirer.prompt(startQuestions)
        .then((answers) => {
            switch (answers.start_menu) {
                case "View All Employees":
                    viewEmployees()
                    break;
                case "Add Employee":
                    addNewEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add Role":
                    addNewRole();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "Add Department":
                    addNewDepartment();
                    break;
                case "Quit":
                    console.log("Thank you for using the employee tracker application! Goodbye!")
                    break;
            }
            if (answers.start_menu === "Quit") {
                return;
            }
        }
    );
};

const viewEmployees = () => {
    showEmployees().then((result) => {
        console.table(result[0])
    }
    ).then(() => initiateQuestions())
};

const viewDepartments = () => {
    showDepartments().then((result) => {
        console.table(result[0])
    }
    ).then(() => initiateQuestions())
};

const viewRoles = () => {
    showRoles().then((result) => {
        console.table(result[0])
    }
    ).then(() => initiateQuestions())
};

const addNewDepartment = () => {
    inquirer.prompt(departmentQuestions).then((answers) => {
        addDepartment(answers).then((result) => {
            console.log(`Added ${answers.name} to the database`)
        }).then(() => initiateQuestions())
    })
};

const addNewRole = () => {
    showDepartments().then((result) => {
        const departmentChoices = result[0].map((department) =>
        (
            {
                name: department.name,
                value: department.id
            }
        )
        );
        roleQuestions.push({
            type: "list",
            message: "Which department does the role belong to?",
            name: "department_id",
            choices: departmentChoices
        })
        inquirer.prompt(roleQuestions).then((answers) => {
            addRole(answers).then((result) => {
                console.log(`Added ${answers.title} to the database`)
            }).then(() => initiateQuestions())
        })
    })

};

const addNewEmployee = () => {
    showRoles().then((result) => {
        const roleChoices = result[0].map((role) =>
        (
            {
                name: role.title,
                value: role.id
            }
        )
    );
        showEmployees().then((result) => {
            const managerChoices = result[0].map((employee) =>
            (
                {
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id
                }
            ))
            employeeQuestions.push({
                type: "list",
                message: "What is the employee's role?",
                name: 'role_id',
                choices: roleChoices
            },
            {
                type: "list",
                message: "Who is the employee's manager?",
                name: "manager_id",
                choices: managerChoices
            })
        inquirer.prompt(employeeQuestions).then((answers) => {
            addEmployee(answers).then((result) => {
                console.log(`Added ${answers.first_name + " " + answers.last_name} to the database`)
            }).then(() => initiateQuestions())
        })
        })
    })
};

const updateEmployeeRole = () => {
    showEmployees().then((result) =>{
        const updateEmployeeChoices = result[0].map((employee) =>
        (
            {
                name: employee.first_name,
                value: employee.id
            }
        )
        );
        showRoles().then((result) => {
            const updateRole = result[0].map((role) =>
            (
                {
                    name: role.title,
                    value: role.id
                }
            )
        );
        const updateRoleQuestions = [
            {
                type: "list",
                message: "Which employee's role do you want to update?",
                name: "updatedEmployee",
                choices: updateEmployeeChoices
            },
            {
                type: "list",
                message: "Which role do you want to assign the selected employee?",
                name: "updatedEmployeeRole",
                choices: updateRole
            }
        ];
        inquirer.prompt(updateRoleQuestions).then((answers) => {
            updateEmployee(answers).then((result) => {
                console.log("Updated employee's role");
                initiateQuestions();
            })
        })
    })
})
};