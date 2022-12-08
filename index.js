const inquirer = require("inquirer");
const questions = require("./src/questions");
const employeeQuestions = questions.employeeQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;

inquirer.prompt(employeeQuestions)
    .then((response) => {
        switch (response.teamMember) {
            case "Engineer":
                inquirer.prompt(engineerQuestions)
                    .then((response) => {
                        
                    })
                break
            case "Intern":
                inquirer.prompt(internQuestions)
                    .then((response) => {
                        
                    })
                break
            case "I'm done":
                console.log("Generating HTML file...");
                break
        }
    })