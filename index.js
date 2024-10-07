// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project. Consider your motivation, the problem this project solves, and what you learned.",
    "What kind of license should your project have?",
    "What features does your project have?",
    "What command should be run to run tests?",
    "What does the user need to know to use this project?",
    "Write the installation instructions here:",
    "What does the user need to know about contributing to the repo?",
];

// TODO: Create a function to write README file
function writeToFile(data) {//it's always going to be README, so I removed the filename.
    const fileContent = generateMarkdown(data);//generate the string literal using the user's answers
    fs.writeFile(`dist/README.md`, fileContent, (err) =>
        err ? console.error(err) : console.log('File written successfully.'));
}

// TODO: Create a function to initialize app
function init() {
    //ask each question here? send data to writeToFile
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'username'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'descriptionDetails'
        },
        {
            type: 'list',
            message: questions[4],
            name: 'licenseDetails',
            choices: ['MIT', 'ISC', 'Apache 2.0', 'GNU GPLv3', 'None']
        },
        {
            type: 'input',
            message: questions[5],
            name: 'featureDetails'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'testDetails'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'usageDetails'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'installationDetails'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'contributeDetails'
        },
    ]).then((response) => {writeToFile(response);});
}

// Function call to initialize app
init();
