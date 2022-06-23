const db = require('./sqlConnection');

class query {
    constructor(db) {
        this.db = db;
    }

    viewDepartment() {
        return this.db.promise().query(`SELECT * 
                                        FROM department`);
    }   
    
    viewRole() {
        return this.db.promise().query(`SELECT empRole.id, title, salary, dep_name
                                        FROM empRole
                                        LEFT JOIN department 
                                        ON empRole.department_id = department.id`);
    }  

    viewEmployee() {
        return this.db.promise().query(`SELECT employee.id, first_name, last_name, title, salary, dep_name
                                        FROM employee
                                        LEFT JOIN empRole
                                        ON employee.role_id = empRole.id
                                        LEFT JOIN department
                                        ON empRole.department_id = department.id`);
    } 

    
}

module.exports = new query(db);