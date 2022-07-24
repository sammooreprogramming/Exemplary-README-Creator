// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
    },
    {
    type: "input",
    name: "description",
    message: "Please give your project a description."
    },
    {
    type: "input",
    name: "installation",
    message: "How do you install this?"
    },
    {
    type: "input",
    name: "usage",
    message: "How is this application used?"
    },
    {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
    type: "list",
    name: "license",
    message: "Which license should your project have?",
    choices: ["none", "MIT", "Mozilla", "Open", "ISC", "GNU", "Academic", "Apache"]
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?"
    },
    {
    type: "input",
    name: "repository",
    message: "What is your Github repository link?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
