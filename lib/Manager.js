// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email,);
        this.officeNumber = officeNumber;
    }
    getOfficenumber(){
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter Office Number: ',
            name: 'officeNumber',
          }
        ])
        .then((response) => {
            return response.officeNumber;
        });
    }
    getRole(){
        return 'Manager';
    }
}