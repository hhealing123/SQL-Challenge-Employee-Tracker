# SQL Challenge: Employee Tracker

## Description
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). This week's project is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Note that this application won’t be deployed, thus I will need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met.

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation & Usage & Tests
Type `npm init` in the terminal to get package.json.

Type `npm install` in the terminal to install dependencies for the project.

Type `node index.js` to initiate the application.

Note that there is no testing for this project!

## Table of Contents
* [Description](#description)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation & Usage](#installation--usage--tests)
* [Project Demo](#project-demonstration)
* [Final Thoughts](#final-thoughts)
* [Utilized Resources](#utilized-resources)
* [Contact](#contact)

## Project Demonstration
[Project Video Demo](https://user-images.githubusercontent.com/106945679/190521573-043d3e41-5a80-4ba8-9271-5f065395b7a3.mp4)

## Final Thoughts
I didn't find any particularly hard challenges for this week's project because it was mainly using concepts that were previously used in other weekly projects; furthermore I had prior knowledge in using SQL, so using SQL and structuring SQL queries were not hard for me. In addition, I really enjoyed making this application as I could see changes instantly depending on what I put into inquirer prompt. The only hard time that I had was re-arranging names of functions and use it correctly. For examplle, at one point I had over 500 lines of codes in my index.js and made me really confused to find correct names of functions. Hence, I had to separate files that contain functions for performing specific SQL queries for the project; for instance, I separated `connection.js`, `query.js`, and `question.js` files so that they don't all stay in one file and confuse me whenever I had to use functions.

## Utilized Resources
[Console Table](https://www.npmjs.com/package/console.table)

## Contact
As always if you have any questions my GitHub user name is `hhealing123` and you can reach out to me at `hhealing123@gmail.com`!