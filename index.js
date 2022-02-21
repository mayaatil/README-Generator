//add in utils folder to access generateMarkdown.js for lisencing and readme structure
const markdown = require("./utils/generateMarkdown.js");
//inquirer package for question prompts
const inquirer = require("inquirer");
//fs for reading and writing files
const fs = require("fs");

//create an array of questions for user input: title, description, table of contents, installation, usage, license, contributing, tests, and questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of the project",
  },
  {
    type: "input",
    name: "description",
    messgae: "Please enter a description of the project",
  },

  {
    type: "input",
    name: "installation",
    message: "Please enter any installation instructions for this project",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter any usage information for the user",
  },
  {
    type: "checkbox",
    name: "license",
    //create selection for licenses
    message: "Please select the license(s) used for this project",
    choices: ["MIT", "IBM", "ISC", "N/A"],
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter any contribution guidelines for this repository",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter any tests that need to be run for this project",
  },
  {
    type: "checkbox",
    name: "walkthrough",
    message: "Please select the link to the demo walkthrough",
    choices: [
      "https://drive.google.com/file/d/1xFmhicy7b4Bs-Fs4NgpMZikVigi244s-/view",
    ],
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your Github username",
  },
];

//create a function to write README file
//send responses to readme file
function writeToFile(response) {
  //create readme file and stringify responses
  fs.writeFile("README.md", response, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

//create a function to initialize app
function init() {
  //pass questions through inquierer
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    //send responses to markdown to get structure
    let structure = markdown(response);
    writeToFile(structure);
  });
}

// Function call to initialize app
init();
