// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Description

${data.description}



# Installation

To run the application: ${data.installation}



# Usage

This application is used thusly: ${data.usage}



# Credits

The following contributed to this assignment: ${data.credits}



# License


This application's license category is: ${data.license}



# GitHub Information

Here is the link to the GitHub page: ${data.github}

#`;
}

module.exports = generateMarkdown;
