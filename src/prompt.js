const inquirer = require('inquirer');
const generateHTML = require('./template')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

class AskPrompt {

    constructor () {

    }

    askEmployeePrompt() {
        inquirer
            .prompt([
                {
                type: 'input', 
                name: 'name',
                message: "What is the employee's name?",
                },
                {
                type: 'input', 
                name: 'id',
                message: "What is this employee's ID?",
                },
                {
                type: 'input', 
                name: 'email',
                message: "What is this employee's email?",
                },
            ])
    }

    
}