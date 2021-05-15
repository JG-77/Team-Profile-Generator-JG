const inquirer = require('inquirer');
const generateHTML = require('./template')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require('fs');
const path = require('path');
let teamArray = [];


function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Prompt asking employee namen id, and email
function askEmployeeQuestions() {
    inquirer.prompt([
            {
            type: 'input', 
            name: 'name',
            message: "What is the employee's name?",
            },
            {
            type: 'input', 
            name: 'id',
            message: "What is this employee's ID?",
            //validate: data => /[a-z1-9]/gi.test(data), 
            },
            {
            type: 'input', 
            name: 'email',
            message: "What is this employee's email?",
            },
        ])
        .then(data =>{
           console.log(data.name)
            if(data.name) {
                console.log('Name input recieved!')
                askRole(data);
            } else {
               console.error('No input recieved!') 
            }
        })
}
    
// Prompt asking employee role
function askRole(data) {
    inquirer
        .prompt([
            {
            type: 'list', 
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Engineer', 'Intern'] //choice will then lead to one of the following functions
            },
        ])
        .then(dataRole =>{    
            console.log(dataRole.role);
            if(dataRole.role === 'Manager') {
                askManagerOffice(data);
            } else if(dataRole.role === 'Engineer'){
               askEngineerGitHub(data);
            } else if(dataRole.role === 'Intern'){
                   askInternSchool(data);
            }
    })
}

// Prompt asking Manager office number (if user selected manager)
function askManagerOffice(data) {
    inquirer
        .prompt([
            {
            type: 'input', 
            name: 'office',
            message: "What is this manager's office number?",
            },
        ])
        .then(dataOff =>{
            console.log(dataOff.office)
            data.office = dataOff.office;
            const newManager = new Manager(data.name, data.id, data.email, data.office)
            teamArray.push(newManager);

            if(dataOff.office) {
                console.log('office number input recieved!')
                createAnother(data);
            } else {
               console.error('No input recieved!') 
            }
        })
}   
      
// Prompt asking Engineer GitHub Username (if user selected engineer)
function askEngineerGitHub(data) {
    inquirer
        .prompt([
            {
            type: 'input', 
            name: 'gitHub',
            message: "What is this engineer's GitHub username?",
            },
        ])
        .then(dataGit =>{
            console.log(dataGit.gitHub)
            data.gitHub = dataGit.gitHub
            const newEngineer = new Engineer(data.name, data.id, data.email, data.gitHub)
            teamArray.push(newEngineer);
            if(dataGit.gitHub) {
                console.log('username input recieved!')
                createAnother(data);
                
            } else {
               console.error('No input recieved!') 
            }
       })
 }   

// Prompt asking Intern's school (if user selected intern)
function askInternSchool(data) {
    inquirer
        .prompt([
            {
            type: 'input', 
            name: 'school',
            message: "At what school is this intern studying?",
            },
        ])
        .then(dataSchool =>{
            console.log(dataSchool.school)
            data.school = dataSchool.school
            const newIntern = new Intern(data.name, data.id, data.email, data.school)
            teamArray.push(newIntern);
            if(dataSchool.school) {
                console.log('school input recieved!')
                createAnother(data);
            } else {
               console.error('No input recieved!') 
            }
        })
} 

function createAnother(data) {
    inquirer
        .prompt([
           {
            type: 'list', 
            name: 'option',
            message: "Would you like to add another role?",
            choices: ['Yes, create another role.', 'No, these are all the roles.']
            }, 
        ])
        .then(dataOpt =>{
            console.log(dataOpt.option);
            if(dataOpt.option === 'Yes, create another role.') {
                askEmployeeQuestions();
            } else {
                //console.log(teamArray)
                createFile(teamArray);
            }
        })
}

function createFile(data) {
    writeToFile('../../Team-Profile-Generator-JG/dist/index.html', generateHTML(data))
    console.log('Successfully generated HTML file in "dist" folder')
    //console.log(data)
}

askEmployeeQuestions();
    


