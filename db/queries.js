const db = require('./sqlConnection');

class query {
    constructor(db) {
        this.db = db;
    }

    viewDepartment() {
        return this.db.promise().query(`SELECT * FROM department`);
    }            
}

module.exports = new query(db);