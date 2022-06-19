// Import
const inquirer = require('inquirer');

// Variables
mainMenuPromptQuestions = ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role']

// Functions
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

 

 
