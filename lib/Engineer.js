//Include packages needed for this application
const inquirer = require('inquirer');

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email,);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;