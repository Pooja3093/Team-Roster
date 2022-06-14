//Include packages needed for this application
const inquirer = require('inquirer');

// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email,);
        this.officeNumber = officeNumber;
    }
    getOfficenumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;