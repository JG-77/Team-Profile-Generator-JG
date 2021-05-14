const inquirer = require('inquirer');
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
                message: 'What is your name?',
                },
            ])
    }

    
}