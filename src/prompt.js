const inquirer = require('inquirer');
const generateHTML = require('./template')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

class AskPrompt {

    constructor () {

    }
    // Prompt asking employee name
    askEmployeeName() {
        inquirer.prompt([
                {
                type: 'input', 
                name: 'name',
                message: "What is the employee's name?",
                },
            ])
            .then(data =>{
                const getName = getName(data.name);
                if(getName) {
                    console.log('Name input recieved!')
                } else {
                   console.error('No input recieved!') 
                }
            })
    }
    // Prompt asking employee ID
    // askEmployeeId() {
    //     inquirer
    //         .prompt([
    //             {
    //             type: 'input', 
    //             name: 'id',
    //             message: "What is this employee's ID?",
    //             },
    //         ])
    //         .then(data =>{
                
    //         })
    // }
    // // Prompt asking employee email    
    // askEmployeeEmail() {
    //     inquirer
    //         .prompt([
    //             {
    //             type: 'input', 
    //             name: 'email',
    //             message: "What is this employee's email?",
    //             },
    //         ])
    //          .then(data =>{
                
    //         })
    // }
    // // Prompt asking employee role
    // askRole() {
    //     inquirer
    //         .prompt([
    //             {
    //             type: 'list', 
    //             name: 'role',
    //             message: "What is this employee's role?",
    //             choices: ['Manager', 'Engineer', 'Intern']
    //             },
    //         ])
    //         .then(data =>{
                
    //         })
    // }

        
        
        
    }
AskPrompt.askEmployeeName();
    
