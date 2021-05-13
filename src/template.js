function managerCard() {
    return `<div class="card text-white bg-success border border-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-center"><strong>Name</strong></h5>
        <p class="card-text text-center">Manager</p>
    </div>
    <ul class="list-group list-group-flush p-2 bg-dark">
        <li class="list-group-item bg-success text-white">Id: </li>
        <li class="list-group-item bg-success text-white">Email: </li>
        <li class="list-group-item bg-success text-white">Office number: </li>
    </ul>`;
}

function engineerCard() {
    return `<div class="card text-white bg-success border border-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-center"><strong>Name</strong></h5>
        <p class="card-text text-center">Engineer</p>
    </div>
    <ul class="list-group list-group-flush p-2 bg-dark">
        <li class="list-group-item bg-success text-white">Id: </li>
        <li class="list-group-item bg-success text-white">Email: </li>
        <li class="list-group-item bg-success text-white">GitHub: https://github.com/ </li>
    </ul>`;
}

function internCard() {
    return `<div class="card text-white bg-success border border-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-center"><strong>Name</strong></h5>
        <p class="card-text text-center">Intern</p>
    </div>
    <ul class="list-group list-group-flush p-2 bg-dark">
        <li class="list-group-item bg-success text-white">Id: </li>
        <li class="list-group-item bg-success text-white">Email: </li>
        <li class="list-group-item bg-success text-white">School: </li>
    </ul>`;
}

function generateHTML () {
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

</body>
</html>`;
}

module.exports = {
    generateHTML,
    managerCard,
    engineerCard,
    internCard
};