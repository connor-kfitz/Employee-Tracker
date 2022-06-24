// Import
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const queries = require('./db/queries');

// Variables
mainMenuPromptQuestions = ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role'];
departmentList =[];
departmentIDList =[];
roleList =[];
roleIDList =[];
managerList =[];
managerIDList =[];


// --Functions--
// Main Function
function mainMenu() {
    getDepartments();
    getRoles();
    getEmployees();
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'mainMenuPrompt',
            message: 'What would you like to do?',
            choices: mainMenuPromptQuestions
        }
    ])
    .then((data) => {

        if(data.mainMenuPrompt == mainMenuPromptQuestions[0]){
        viewDepartments()
        return;
        }
        else if(data.mainMenuPrompt == mainMenuPromptQuestions[1]){
        viewRoles();
        return;
        }
        else if(data.mainMenuPrompt == mainMenuPromptQuestions[2]){
        viewEmployees();
        return;
        }
        else if(data.mainMenuPrompt == mainMenuPromptQuestions[3]){
        addDepartment();
        return;
        }
        else if(data.mainMenuPrompt == mainMenuPromptQuestions[4]){
        console.log(departmentList);
        addRoles();
        }
        else if(data.mainMenuPrompt == mainMenuPromptQuestions[5]){
        addEmployees();
        }
        else if(data.mainMenuPrompt == mainMenuPromptQuestions[6]){
        updateRole();
        }
    });
    }

// Add Data Functions
function addDepartment(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'addDepartmentPrompt',
            message: 'What is the name of the department you want to add?',
        }
    ])
    .then((data) => {
        for(i=0; i < departmentList.length; i++){
            if(data.addDepartmentPrompt == departmentList[i]){
                console.log('You cannot enter a department that already exists!');
                return mainMenu();
            }
        }
        queries.addDepartment(data.addDepartmentPrompt)
        .then(() => {
            viewDepartments();
            
        })
    })
}

function addRoles(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'addRoleTitle',
            message: 'What is the title of the role you want to add?',
        },
        {
            type: 'input',
            name: 'addRoleSalary',
            message: 'What is the salary of the role you want to add?',
        },
        {
            type: 'list',
            name: 'addRoleDepartment',
            message: 'What is the department of the role you want to add?',
            choices: departmentList
        }
    ])
    .then((data) => {
        for(i=0; i < roleList.length; i++){
            if(data.addRoleTitle == roleList[i]){
                console.log('You cannot enter a role that already exists!');
                return mainMenu();
            }
        }
        queries.addRole(data.addRoleTitle, data.addRoleSalary, departmentIDList[departmentList.indexOf(data.addRoleDepartment)])
        .then(() => {
            viewRoles();
        })
    })
}

function addEmployees() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'addFirstName',
            message: 'What is the first name of the employee you want to add?',
        },
        {
            type: 'input',
            name: 'addLastName',
            message: 'What is the last name of the employee you want to add?',
        },
        {
            type: 'list',
            name: 'addRole',
            message: 'What is the role of the employee you want to add?',
            choices: roleList
        },
        {
            type: 'list',
            name: 'addRoleManager',
            message: 'Who is the employee\'s Manager?',
            choices: managerList
        }
    ])
    .then((data) => {  
    queries.addEmployee(data.addFirstName, data.addLastName, roleIDList[roleList.indexOf(data.addRole)], managerIDList[managerList.indexOf(data.addRoleManager)])
        .then(() => {
            viewEmployees();
        })
    })
};

// Update Data Functions
function updateRole(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'updateRoleSel',
            message: 'Which employee\'s role would you like to update?',
            choices: managerList
        },
        {
            type: 'list',
            name: 'updateRole',
            message: 'What should the new employee\'s role be?',
            choices: roleList
        },
    ])
    .then((data) => {
        queries.updateRole(managerIDList[managerList.indexOf(data.updateRoleSel)], roleIDList[roleList.indexOf(data.updateRole)])
            .then(() => {
                viewEmployees();
            })
    })
}

// View Data Functions
function viewDepartments() {
  queries.viewDepartment()
    .then(([data]) => {
        console.log(consoleTable.getTable(data))
        mainMenu();
    });
};

function viewRoles() {
    queries.viewRole()
      .then(([data]) => {
          console.log(consoleTable.getTable(data))
          mainMenu();
      });
  };

function viewEmployees() {
queries.viewEmployee()
    .then(([data]) => {
        console.log(consoleTable.getTable(data))
        mainMenu();
    });
};

// Data Collection Functions
function getDepartments(){
    queries.viewDepartment()
    .then(([data]) => {
        for(i=0; i < data.length; i++){
            if(!departmentList.includes(data[i].Department)){
                departmentList.push(data[i].Department);
                departmentIDList.push(data[i].ID)
            }
        }
    });
}

function getRoles(){
    queries.viewRole()
    .then(([data]) => {
        for(i=0; i < data.length; i++){
            if(!roleList.includes(data[i].Title)){
                roleList.push(data[i].Title);
                roleIDList.push(data[i].ID);
            }
        }
    });
}

function getEmployees(){
    queries.viewEmployee()
    .then(([data]) => {
        for(i=0; i < data.length; i++){
            managerList.push(data[i].First + " " + data[i].Last);
            managerIDList.push(data[i].ID)
        }
    });
}

// Start Program
mainMenu();
