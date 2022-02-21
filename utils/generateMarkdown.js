// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "N/A") {
    return `![${license}]{https://img.shields.io/badge/License-${license}-yellow.svg}`;
  } else {
    return "";
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  
  ## Description
  ${response.description}
  
  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## License
  ${response.license} was used for this application
  
  ## Contributing
  ${response.contribution}
  
  ## Tests
  ${response.tests}
  
  ## Questions
  If there are any additional questions, please contact via email at ${response.email}, or via Github:
  [${response.username}](https://github.com/${response.username})
  `;
}

module.exports = generateMarkdown;
