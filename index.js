// Packages needed in this project
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer prompts
const questions = [
  
  {
    type: 'input',
    name: 'username',
    message: "Enter your GitHub username:",
  },
  {
    type: 'input',
    name: 'repoName',
    message: "Enter this repo's name:",
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: "Enter project title:",
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: "Include a Table of Contents (separate with spaces):",
  },
  {
    type: 'input',
    name: 'description',
    message: "Add a description for your project:",
  },
  {
    type: 'input',
    name: 'installation',
    message: "How is this application installed?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "How is this application used?",
  },
  {
    type: 'input',
    name: 'license',
    message: "Include a license:",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "How to contribute to this project:",
  },
  {
    type: 'input',
    name: 'tests',
    message: "The following tests are run:",
  },
  {
    type: 'input',
    name: 'questionsPic',
    message: "Enter a path to your profile picture:",
  },
  {
    type: 'input',
    name: 'questionsEmail',
    message: "Enter your e-mail for questions:",
  }
];

// Function to write README file
function writeToFile(fileName, data) {

  // Project Title
  fs.writeFileSync(fileName, "# " + data.projectTitle + '\n\n');

  // Badge
  fs.appendFileSync(fileName, '![' + data.projectTitle + ']' + '(https://img.shields.io/github/repo-size/' + data.username + '/' + data.repoName + ')\n\n');

  // Table of Contents
  fs.appendFileSync(fileName, "## Table of Contents" + '\n\n' + "* " + data.tableOfContents.split(" ").join("\n* ") + '\n\n');

  // Description
  fs.appendFileSync(fileName, "## Description" + '\n\n' + data.description + '\n\n');

  // Installation
  fs.appendFileSync(fileName, "## Installation" + '\n\n' + data.installation + '\n\n');

  // Usage
  fs.appendFileSync(fileName, "## Usage" + '\n\n' + data.usage + '\n\n');

  // License
  fs.appendFileSync(fileName, "## License" + '\n\n' + data.license + '\n\n');

  // Contributing
  fs.appendFileSync(fileName, "## Contributing" + '\n\n' + data.contributing + '\n\n');

  // Tests
  fs.appendFileSync(fileName, "## Tests" + '\n\n' + data.tests + '\n\n');

  // Contact (Profile Picture and E-mail)
  fs.appendFileSync(fileName, "## Contact" + '\n\n' + '![Profile Picture](' + data.questionsPic + ')\n\nE-mail: ' + data.questionsEmail);

  console.log("Success!");

}

// Function to initialize inquirer to write the README file
function init() {

  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("TEST.md", data);
  });

}

init();