const db = require('./sqlConnection');

class query {
    constructor(db) {
        this.db = db;
    }

    viewDepartment() {
        return this.db.promise().query(`SELECT department.id AS ID, dep_name AS \`Department\`
                                        FROM department`);
    }   
    
    viewRole() {
        return this.db.promise().query(`SELECT empRole.id AS ID, title AS Title, salary AS Salary, dep_name AS \`Department Name\`
                                        FROM empRole
                                        LEFT JOIN department 
                                        ON empRole.department_id = department.id`);
    }  

    viewEmployee() {
        return this.db.promise().query(`SELECT employee.id AS ID, first_name AS \`First\`, last_name AS \`Last\`, title AS Title, salary AS Salary, dep_name AS \`Department Name\`, manager_id AS \`Manager ID\`
                                        FROM employee
                                        LEFT JOIN empRole
                                        ON employee.role_id = empRole.id
                                        LEFT JOIN department
                                        ON empRole.department_id = department.id`);
    } 

    addDepartment(depName) {
        return this.db.promise().query(`INSERT INTO department (dep_name)
                                        VALUES (?)`, depName);
    }

    addRole(titleInput, salaryInput, departmentIdInput) {
        return this.db.promise().query(`INSERT INTO empRole (title, salary, department_id)
                                        VALUES (?, ?, ?)`, [titleInput, salaryInput, departmentIdInput]);
    }

    addEmployee(firstName, lastName, roleID, managerID) {
        return this.db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                                        VALUES (?, ?, ?, ?)`, [firstName, lastName, roleID, managerID]);
    }

    updateRole(empSelID, newRoleID){
        return this.db.promise().query(`UPDATE employee
                                        SET role_id = ?
                                        WHERE id = ?`, [newRoleID, empSelID]);
    }
}

module.exports = new query(db);