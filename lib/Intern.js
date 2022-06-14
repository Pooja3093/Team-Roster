//Include packages needed for this application
const inquirer = require('inquirer');

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email,);
        this.school = school;
    }
    getschool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;