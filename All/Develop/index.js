// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let readMeFile = "README.md";


// TODO: Create an array of questions for user input
 questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }}
    },
    {
    type: "input",
    name: "description",
    message: "Please give your project a description.",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }}
    },
    {
    type: "input",
    name: "installation",
    message: "How do you install this?",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project installation instructions.');
          return false;
        }}
    },
    {
    type: "input",
    name: "usage",
    message: "How is this application used?",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter information on how your project is used.');
          return false;
        }}
    },
    {
    type: "input",
    name: "contributing",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project collaborators, if any.');
          return false;
        }}
    },
    {
    type: "list",
    name: "license",
    message: "Which license(s) should your project have?",
    choices: ["MIT", "Mozilla", "ISC", "GNU", "Apache"],
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project license choice(s).');
          return false;
        }}
    },
    {
    type: "input",
    name: "questions",
    message: "What is your GitHub username?",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your username on GitHub.');
          return false;
        }}
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a command to run tests.');
             }
        }
    },
    {
    type: "input",
    name: "tests",
    message: "Which command will run tests?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a command to run tests.');
         }
    }
    },
];

// TODO: Create a function to write README file
function writeReadMe(file, data) {
    fs.writeFile("README.md", data, err => {
        if (err) {
            throw err;
        } else console.log("Your shiny new file has been created!")
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeReadMe(readMeFile, generateMarkdown(data))
    })}

// Function call to initialize app
init();