const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Department Requests
app.get('/api/department', (req, res) => {
  db.query(`SELECT id, dep_name AS Department FROM department`, (err, results) => {
    res.json({
      data: results
    });
    console.log(results)
    });
});

app.post('/api/new-department', ({ body }, res) => {
  const sql = `INSERT INTO department (dep_name)
    VALUES (?)`;
  const params = [body.dep_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Role Requests
app.get('/api/role', (req, res) => {
  db.query(`SELECT id, title, salary, department_id FROM empRole`, (err, results) => {
    res.json({
      data: results
    });
    console.log(results)
    });
});

app.post('/api/new-role', ({ body }, res) => {
  const sql = `INSERT INTO empRole (title, salary, department_id)
    VALUES (?, ?, ?)`;
  const params = [body.title, body.salary, body.department_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Employee Requests
app.get('/api/employee', (req, res) => {
  db.query(`SELECT id, first_name, last_name, role_id, manager_id FROM employee`, (err, results) => {
    res.json({
      data: results
    });
    console.log(results)
    });
});

app.post('/api/new-employee', ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;
  const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Port Connection Verification
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


