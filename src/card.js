// Import templates
const generateHTML = require('./template');

//  Manager Card
function generateManagerCard(managerData){
   return` <div class="column">
            <div class="card">
            <div class="container">
                <h2>${managerData.name}</h2>
                <p class="title">${managerData.getRole()}</p>
                <p>ID: ${managerData.id}</p>
                <p>Office Number: ${managerData.officeNumber}</p>
                <p>Email: <span><a href = 'mailto:${managerData.email}'>${managerData.email}</a></span></p>
            </div>
            </div>
        </div>`
}


//  Engineer Card
function generateEngineerCard(engineerData){
    return` <div class="column">
            <div class="card">
            <div class="container">
                <h2>${engineerData.name}</h2>
                <p class="title">${engineerData.getRole()}</p>
                <p>ID: ${engineerData.id}</p>
                <p>Github Username: <span><a href = 'https://github.com/${engineerData.username}'>${engineerData.username}</a></span></p>
                <p>Email: <span><a href = 'mailto:${engineerData.email}'>${engineerData.email}</a></span></p>
            </div>
            </div>
        </div>`
}


//  Intern card
function generateInternCard(internData){
    return` <div class="column">
            <div class="card">
            <div class="container">
                <h2>${internData.name}</h2>
                <p class="title">${internData.getRole()}</p>
                <p>ID: ${internData.id}</p>
                <p>School: ${internData.school}</p>
                <p>Email: <span><a href = 'mailto:${internData.email}'>${internData.email}</a></span></p>
            </div>
            </div>
        </div>`
}

// Push data from input to respective cards 
generateCards = (data) => {

    // array for cards to be inserted in HTML
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        //  Check role to select card in which data is to be pushed
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);

            cardArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);

            cardArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateInternCard(employee);

            cardArray.push(internCard);
        }
        
    }

    // joining cards [from array to string] to be inserted in HTML later
    const employeeCards = cardArray.join('')

    // return to generated page
    const generateTeam = generateHTML(employeeCards); 
    return generateTeam;
}

module.exports = generateCards;