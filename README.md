# Team Profile Generator

## Description
The Team Profile Generator is a tool that takes in user responses in the console to generate a team consisting of one manager, engineers, and interns, then renders the information into a styled HTML file to be viewed on a browser. 

## Installation
Install dependencies by running the following command in terminal: 
```
npm i
```

## Test
Perform tests by running the following command in terminal: 
```
npm test
```
The tests consist of 4 test suites with a total of 24 tests.

## Usage
The user initiates the generator by typing in 
```
node index.js
```
into the terminal. A set of prompts will appear first asking for a manager's name, id, email, and office number. The prompt then asks the user if they would like to add an engineer, intern, or select "I'm done" to finish building the team. In addition to name, id, and email, the engineer prompts will ask for their GitHub username, and the intern prompts will ask for their school in place of office number.

Once the team building is done, the generator will create an HTML file with the team's information rendered. Running the HTML file on a browser will display the entire team with sections separating the manager, engineers, and interns.

Restarting the generator will replace any previously rendered HTML file with a new one.

Demo video: 

## Credits
Inquirer Node Package
Jest Node Package
BootStrap CSS Framework
Flaticon icon fonts

## License
N/A

## Questions
For questions, please email me at email@gmail.com

For other projects, please check out my GitHub at [github.com/monysary](github.com/monysary)