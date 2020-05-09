const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username? (Required)',
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log('Please enter your Github username.')
                return false;
            }
        }
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
}

// function call to initialize program
init();
