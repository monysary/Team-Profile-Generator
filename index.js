const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const questions = require("./src/questions");
const managerQuestions = questions.managerQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;
const addMember = questions.addMember;

const companyTeam = []

// Function to prompt for manager employee properties
const askManager = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const manager = new Manager (
                response.managerName,
                response.managerID,
                response.managerEmail,
                response.managerOffice
            );
            companyTeam.push(manager);
            console.log("-----Manager add to team!-----");
            console.log(companyTeam);
            askAddMember();
        })
}

// Function to prompt for engineer employee properties
const askEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        const engineer = new Engineer (
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineerGitHub
        );
        companyTeam.push(engineer);
        console.log("-----Engineer add to team!-----");
        console.log(companyTeam);
        askAddMember();
    })
}

// Function to prompt for intern employee properties
const askIntern = () => {
    inquirer.prompt(internQuestions)
    .then((response) => {
        const intern = new Intern (
            response.internName,
            response.internID,
            response.internEmail,
            response.internSchool
        );
        companyTeam.push(intern);
        console.log("-----Intern add to team!-----");
        console.log(companyTeam);
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
                break
        }
    })
}

askManager()
