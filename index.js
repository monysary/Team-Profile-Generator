const inquirer = require("inquirer");
const questions = require("./src/questions");
const managerQuestions = questions.managerQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;
const addMember = questions.addMember;

const askManager = () => {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            console.log("Manager created!");
            askAddMember();
        })
}

const askEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        console.log("Engineer created!");
        askAddMember();
    })
}

const askIntern = () => {
    inquirer.prompt(internQuestions)
    .then((response) => {
        console.log("Intern created!");
        askAddMember();
    })
}

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