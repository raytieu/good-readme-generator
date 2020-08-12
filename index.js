const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: 'input',
    name: 'username',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: "What is your project title?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Add a description for your project.",
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: "Include a Table of Contents here.",
  },
  {
    type: 'input',
    name: 'Installation',
    message: "How to Install",
  },
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  }
];

function writeToFile(fileName, data) {
  //this is where you use fs and path to write the file and save it to the path in the directory
}

function init() {
  //start inquirer.prompt
  //use the writeToFile function in here

}

init();

// First thing is to ask user for github info (1. username, 2. repo info) through the terminal command line; use inquirer prompt
// get user input and write a new readme with the user input, use template with headers (function within this js file) that receives the answer data; use fs
// save the file into the directory (md file); use path