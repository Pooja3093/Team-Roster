// Include packages needed for this application
const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Profile classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import templates
// const generateHTML = require('./src/template');
const generateCards = require('./src/card');

// Global variables
var team = [];
var manager;
var employee;
var confirmAddEmployee;

// Array of questions for user input
const questions = [
    'Please enter name: ',
    'Please enter ID: ',
    'Please enter email: ',
    'Please enter office number: ',
    'Please enter github username: ',
    'Please enter school name: '   
];

// Add manager info
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'name',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'id',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'officeNumber',
        }
    ])
    .then((data) => {
        manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        console.log(manager);
        team.push(manager);
    });
}


// Add employee info
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: questions[8],
            name: 'role',
            message: 'Please choose the employee role you want to add.',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: questions[0],
            name: 'name',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'id',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'github',
            when: (data) => data.role === 'Engineer',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'school',
            when: (data) => data.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then((data) => {
        if (data.role === "Engineer") {
            employee = new Engineer (data.name, data.id, data.email, data.github);

            console.log(employee);

        } else if (data.role === "Intern") {
            employee = new Intern (data.name, data.id, data.email, data.school);

            console.log(employee);
        }

        team.push(employee); 
        console.log(team);

        if (data.confirmAddEmployee) {
            return addEmployee(team); 
        } else {
            return team;
        }
        
    });
}


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 


// Application starts here
addManager()
  .then(addEmployee)
  .then(team => {
    return generateCards(team);
  })
  .then(htmlFile => {
    return writeFile(htmlFile);
  })
  .catch(err => {
    console.log(err);
  });