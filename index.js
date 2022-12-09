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
const myTeam = []

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
            myTeam.push(manager);
            console.log("-----Manager add to team!-----");
            console.log(myTeam);
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
        myTeam.push(engineer);
        console.log("-----Engineer add to team!-----");
        console.log(myTeam);
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
        myTeam.push(intern);
        console.log("-----Intern add to team!-----");
        console.log(myTeam);
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
                generateHTML();
                break
        }
    })
}

// Function to build HTML file
const generateHTML = () => {
    fs.writeFile("./dist/index.html", 
    `
    // TODO: Add html code here
    `,
    (error) => error ? console.error(error) : console.log("HTML file generated!"))
}

// Function to add employees into HTML file
const generateTeam = () => {
    
}

// askManager()
generateHTML()