
const generateManager = function (manager) {
    return `
    <div class="card h-100">
        <div class="card-header">
            <h3 class="name">${manager.name}</h3>
            <h4 class="role"><img src="https://img.icons8.com/cute-clipart/30/000000/rocket.png"/>Manager</h4>
                </div>
                <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
}
const generateEngineer = function (engineer) {
    return `
    <div class="card h-100">
        <div class="card-header">
            <h3 class="name">${engineer.name}</h3>
            <h4 class="role"><img src="https://img.icons8.com/cute-clipart/30/000000/rocket.png"/>Manager</h4>
                </div>
                <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="gitHub">GitHub: <a href="https://github.com/${engineer.github}"target="_blank>${engineer.github}</a></p>
        </div>
        `;

};

const generateIntern = function (intern) {
    return `
    <div class="card h-100">
        <div class="card-header">
            <h3 class="name">${intern.name}</h3>
            <h4 class="role"><img src="https://img.icons8.com/cute-clipart/30/000000/rocket.png"/>Manager</h4>
                </div>
                <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            
        </div>
        </div>
        `;
};

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);

            if (role === "Engineer") {
                const engineerCard = generateEngineer(employee);
                pageArray.push(engineerCard);
            }
            if (role === "Intern") {
                const internCard = generateIntern(employee);
                pageArray.push(internCard);

            }
        }
    }
}
const generateTeamProfile = function (employeeCards){
    return`
    
    < !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Team Profile Generator</title>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
                            <link rel="stylesheet" href="style.css" />

                            <body>
                                <header>
                                    <nav class="navbar" id="navbar">
                                        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
                                    </nav>
                                </header>
                                <main>
                                    <div class="container">
                                        <div class="row justify-content-center" id="employee-cards">
                                            ${employeeCards}
                                        </div>
                                    </div>
                                </main>
                            </body>
                        </link>
                        `;
                        }
                        
                        module.exports = generateHTML;