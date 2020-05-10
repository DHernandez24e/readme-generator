const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name? (Required)",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a name for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'depends',
        message: 'What command should you run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should you run to run tests?',
        default: 'None'
    },
    {
        type: 'input',
        name: 'repoUse',
        message: 'What does the user need to know about using the repo?',
        default: 'Nothing'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
        default: 'Nothing'
    }
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) throw err;
        console.log('Generating README...');
    })
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    }).then(markdown => {
        return writeToFile(markdown)
    });
}

// function call to initialize program
init();
