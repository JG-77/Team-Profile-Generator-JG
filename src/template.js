let cardArray = []

function managerCard(data) { 
    return `
    <div class="card text-white bg-success border border-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center"><strong>${data.getName()}</strong></h5>
            <p class="card-text text-center">Manager</p>
        </div>
        <ul class="list-group list-group-flush p-2 bg-dark">
            <li class="list-group-item bg-success text-white">Id: ${data.getId()}</li>
            <li class="list-group-item bg-success text-white">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
            <li class="list-group-item bg-success text-white">Office number: ${data.getOfficeNum()}</li>
        </ul>
    </div>
    `;
}

function engineerCard(data) { 
    return `
    <div class="card text-white bg-success border border-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center"><strong>${data.getName()}</strong></h5>
            <p class="card-text text-center">Engineer</p>
        </div>
        <ul class="list-group list-group-flush p-2 bg-dark">
            <li class="list-group-item bg-success text-white">Id:  ${data.getId()}</li>
            <li class="list-group-item bg-success text-white">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
            <li class="list-group-item bg-success text-white">GitHub: <a href="https://github.com/${data.getGitHub()}" target="_blank">https://github.com/${data.getGitHub()}</a></li>
        </ul>
    </div>
    `;
}

function internCard(data) { 
    return `
    <div class="card text-white bg-success border border-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center"><strong>${data.getName()}</strong></h5>
            <p class="card-text text-center">Intern</p>
        </div>
        <ul class="list-group list-group-flush p-2 bg-dark">
            <li class="list-group-item bg-success text-white">Id: ${data.getId()}</li>
            <li class="list-group-item bg-success text-white">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
            <li class="list-group-item bg-success text-white">School: ${data.getSchool()}</li>
        </ul>
    </div>`
    ;
}

function generateHTML (teamRole) {
   
     function teamRoleTemplate(teamArray) {
    for(let i = 0; i < teamArray.length; i++) {
        const role = teamArray[i].getRole();       
        if(role === "Manager") {             
            cardArray.push(managerCard(teamArray[i]));
        } else if(role === "Engineer") {
            cardArray.push(engineerCard(teamArray[i]));
        } else if(role === "Intern") {
            cardArray.push(internCard(teamArray[i]))
        }
    }}
    
 teamRoleTemplate(teamRole);

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css"/>
    <title>Team Generator</title>
</head>
<body class="bg-dark">
    <div class="jumbotron jumbotron-fluid bg-success">
        <div class="container">
            <h1 class="display-4 text-center text-white">Project Team</h1>
            <p class="lead text-center text-white">Information on each project team member is displayed below.</p>
        </div>
    </div>
    <main>
    ${cardArray}
    
    </main>
    </body>
    </html>`;
} 



module.exports = generateHTML;