const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection (
    {
        host: "localhost",
        user: "root",
        password: "123",
        database: "employeeTracker_db"
    },
);

module.exports = db;