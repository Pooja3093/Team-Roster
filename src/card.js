// Import templates
const generateHTML = require('./template');

//  Manager Card
function generateManagerCard(managerData){
   return` <div class="col-4 mt-4">
   <div class="card h-100">
       <div class="card-header">
           <h3>${managerData.name}</h3>
           <h5>Manager</h5><i class="material-icons">content_paste</i>
       </div>
       <div class="card-body">
           <p class="id">ID: ${managerData.id}</p>
           <p class="office">Office Number: ${managerData.officeNumber}</p>
           <p class="email">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></p>
       </div>
   </div>
</div>`
}


//  Engineer Card
function generateEngineerCard(engineerData){
    return`<div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineerData.name}</h3>
            <h5>Engineer</h5><i class="material-icons">laptop_mac</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineerData.id}</p>
            <p class="github">Github: <a href="https://github.com/${engineerData.github}">${engineerData.github}</a></p>
            <p class="email">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></p>
        </div>
    </div>
</div>`
}


//  Intern card
function generateInternCard(internData){
    return`  <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${internData.name}</h3>
            <h5>Intern</h5><i class="material-icons">assignment_ind</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${internData.id}</p>
            <p class="school">School: ${internData.school}</p>
            <p class="email">Email:<a href="mailto:${internData.email}">${internData.email}</a></p>
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