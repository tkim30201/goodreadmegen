const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const path = require ('path');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'Project usage',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Licenses for the Project',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Any contributors',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Any tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'e-mail',
        name: 'email'
    }

];

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((res) => {
        writeToFile('readme.md', generateMarkdown({...res}));
    }).catch(e => console.log(e));
}

init();