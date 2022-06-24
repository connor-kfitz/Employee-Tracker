// Import SQL Dependency
const mysql = require('mysql2');

// Connect to SQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );


module.exports = db;
