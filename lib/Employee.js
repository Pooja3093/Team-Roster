const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter Employee name: ',
            name: 'name',
          }
        ])
        .then((response) => {
          return response.name;
        });
        
    }

    getId(){
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter Employee ID: ',
            name: 'id',
          }
        ])
        .then((response) => {
          return response.id;
        });
    }

    getEmail(){
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter Employee Email: ',
            name: 'email',
          }
        ])
        .then((response) => {
          return response.email;
        });
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;