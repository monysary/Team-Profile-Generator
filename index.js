// Declaring all necessary modules and tools
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./src/questions");
const managerQuestions = questions.managerQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;
const addMember = questions.addMember;
const fs = require("fs");

// Array to store employee information
const managerTeam = [];
const engineerTeam = [];
const internTeam = [];

// Function to prompt for manager employee properties
const askManager = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.managerOffice
            );
            managerTeam.push(manager);
            console.log("-----Manager add to team!-----");
            askAddMember();
        })
}

// Function to prompt for engineer employee properties
const askEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const engineer = new Engineer(
                response.engineerName,
                response.engineerID,
                response.engineerEmail,
                response.engineerGitHub
            );
            const makeEngineer =
                `
            <div class="feature col shadow-lg">
            <div><i class="fi fi-sr-settings"></i></div>
            <h2>${engineer.name}</h2>
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
            `
            engineerTeam.push(makeEngineer);
            console.log("-----Engineer add to team!-----");
            askAddMember();
        })
}

// Function to prompt for intern employee properties
const askIntern = () => {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internID,
                response.internEmail,
                response.internSchool
            );
            const makeIntern =
                `
            <div class="feature col shadow-lg">
            <div><i class="fi fi-sr-backpack"></i></div>
            <h2>${intern.name}</h2>
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
            </div>
            `
            internTeam.push(makeIntern);
            console.log("-----Intern add to team!-----");
            askAddMember();
        })
}

// Function to prompt adding engineer or intern to team
const askAddMember = () => {
    inquirer.prompt(addMember)
        .then((response) => {
            switch (response.teamMember) {
                case "Engineer":
                    askEngineer();
                    break
                case "Intern":
                    askIntern();
                    break
                case "I'm done":
                    console.log("Generating HTML file...");
                    console.log(managerTeam);
                    generateHTML();
                    break
            }
        })
}

// Function to build HTML file
const generateHTML = () => {
    fs.writeFile("./dist/index.html",
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'>
            <title>My Team Roster</title>
            <style>
                .b-example-divider {
                    height: 3rem;
                    background-color: rgba(0, 0, 0, .1);
                    border: solid rgba(0, 0, 0, .15);
                    border-width: 1px 0;
                    box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
                }
        
                i {
                    font-size: 100px;
                }

                .row {
                    gap: 20px;
                }
            </style>
        </head>
        
        <body>
            <header class="container">
                <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <h1>My Team</h1>
                </div>
            </header>
            <main>
                <div class="b-example-divider"></div>
                <div class="container  px-4 py-5">
                    <h2 class="pb-2 border-bottom">Managers</h2>
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div class="feature col shadow-lg">
                            <div><i class="fi fi-sr-briefcase"></i></div>
                            <h2>${managerTeam[0].name}</h2>
                            <p>ID: ${managerTeam[0].id}</p>
                            <p>Email: <a href="mailto:${managerTeam[0].email}">${managerTeam[0].email}</a></p>
                            <p>Office: ${managerTeam[0].officeNumber}</p>
                        </div>
                    </div>
                </div>
                <div class="b-example-divider"></div>
                <div class="container  px-4 py-5">
                    <h2 class="pb-2 border-bottom">Engineers</h2>
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    ${engineerTeam.join("")}
                    </div>
                </div>
                <div class="b-example-divider"></div>
                <div class="container  px-4 py-5">
                    <h2 class="pb-2 border-bottom">Interns</h2>
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    ${internTeam.join("")}
                    </div>
                </div>
                <div class="b-example-divider"></div>
            </main>
            <footer class="container">
                <div class="py-3 my-4">
                    <p class="text-center text-muted border-bottom pb-3 mb-3"> Made by monysary, with help from:</p>
                    <ul class="nav justify-content-center">
                        <li class="text-muted nav-link px-2">BootStrap</li>
                        <li class="text-muted nav-link px-2">&</li>
                        <li class="text-muted nav-link px-2">Uicons by <a href="https://www.flaticon.com/uicons"
                                class="text-muted">Flaticon</a></li>
                    </ul>
                </div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>
        </body>
        
        </html>
    `,
        (error) => error ? console.error(error) : console.log("HTML file generated!"))
}

askManager()