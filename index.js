// Import
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const queries = require('./db/queries');

// Variables
mainMenuPromptQuestions = ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role'];

// Functions
function mainMenu() {
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
      if(data.mainMenuPromt == mainMenuPromptQuestions[0]){
          // Function Placeholder
      }
      else if(data.mainMenuPromt == mainMenuPromptQuestions[1]){
          // Function Placeholder
      }
      else if(data.mainMenuPromt == mainMenuPromptQuestions[2]){
          // Function Placeholder
      }
      else if(data.mainMenuPromt == mainMenuPromptQuestions[3]){
          // Function Placeholder
      }
      else if(data.mainMenuPromt == mainMenuPromptQuestions[4]){
          // Function Placeholder
      }
      else if(data.mainMenuPromt == mainMenuPromptQuestions[5]){
          // Function Placeholder
      }
      else if(data.mainMenuPromt == mainMenuPromptQuestions[6]){
          // Function Placeholder
      }
   });
  }

function viewDepartments() {
  queries.viewDepartment()
    .then(([data]) => {
        console.log(consoleTable.getTable(data))
    });
};

function viewRoles() {
    queries.viewRole()
      .then(([data]) => {
          console.log(consoleTable.getTable(data))
      });
  };

function viewEmployees() {
queries.viewEmployee()
    .then(([data]) => {
        console.log(consoleTable.getTable(data))
    });
};

viewDepartments();
viewRoles();
viewEmployees();

