const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'IAmA2025BeEECSAl',
    database: 'test_schema'
})

module.exports = connection;