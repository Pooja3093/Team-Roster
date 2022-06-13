// Import the parent class
const Employee = require('./Employee');

// Create an `Intern` class that extends the `Employee` class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email,);
        this.github = github;
    }
    getGithub(){
        inquirer
        .prompt([
          {
            type: 'input',
            message: 'Please enter Github Username: ',
            name: 'github',
          }
        ])
        .then((response) => {
            const profileUrl =  'https://github.com/' + response.github;
            return profileUrl;
        });
        
    }
    getRole(){
        return 'Engineer';
    }
}