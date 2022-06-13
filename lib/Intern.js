// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email,);
        this.school = school;
    }
    getschool(){
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter School: ',
            name: 'school',
          }
        ])
        .then((response) => {
          return response.id;
        });
    }
    getRole(){
        return 'Intern';
    }
}