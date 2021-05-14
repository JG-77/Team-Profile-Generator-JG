const inquirer = require('inquirer');
const generateHTML = require('./template')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// class AskPrompt {} will I need a class?

    // Prompt asking employee name
    function askEmployeeName() {
        inquirer.prompt([
                {
                type: 'input', 
                name: 'name',
                message: "What is the employee's name?",
                },
            ])
            .then(data =>{
               console.log(data.name) //const getName = getName(data.name);
            //     if(getName) {
            //         console.log('Name input recieved!')
            //     } else {
            //        console.error('No input recieved!') 
            //     }
            })
    }
    // Prompt asking employee ID
    function askEmployeeId() {
        inquirer
            .prompt([
                {
                type: 'input', 
                name: 'id',
                message: "What is this employee's ID?",
                validate: data => /[a-z1-9]/gi.test(data), 
                },
            ])
            .then(data =>{
                console.log(data.id)
            })
    }
    // Prompt asking employee email    
    function askEmployeeEmail() {
        inquirer
            .prompt([
                {
                type: 'input', 
                name: 'email',
                message: "What is this employee's email?",
                },
            ])
             .then(data =>{
                console.log(data.email)
            })
    }
    // Prompt asking employee role
    function askRole() {
        inquirer
            .prompt([
                {
                type: 'list', 
                name: 'role',
                message: "What is this employee's role?",
                choices: ['Manager', 'Engineer', 'Intern'] //choice will then lead to one of the following functions
                },
            ])
            .then(data =>{
                console.log(data.role)
            })
    }

     // Prompt asking Manager office number (if user selected manager)
    function askManagerOffice() {
        inquirer
            .prompt([
                {
                type: 'input', 
                name: 'office',
                message: "What is this manager's office number?",
                },
            ])
            .then(data =>{
                console.log(data.office)
            })
    }   
      
    // Prompt asking Engineer GitHub Username (if user selected engineer)
    function askEngineerGitHub() {
        inquirer
            .prompt([
                {
                type: 'input', 
                name: 'gitHub',
                message: "What is this engineer's GitHub username?",
                },
            ])
            .then(data =>{
                console.log(data.gitHub)
            })
    }   

    // Prompt asking Intern's school (if user selected intern)
    function askInternSchool() {
        inquirer
            .prompt([
                {
                type: 'input', 
                name: 'school',
                message: "At what school is this intern studying?",
                },
            ])
            .then(data =>{
                console.log(data.school)
            })
    } 

// askEmployeeName();
// askEmployeeId();
// askEmployeeEmail();
// askRole();
// askManagerOffice();
// askEngineerGitHub();
// askInternSchool();