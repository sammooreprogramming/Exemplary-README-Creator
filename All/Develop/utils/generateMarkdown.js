// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//functions
function renderLicenseBadge(license) {

 if (license === 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
 } 

 else if (license === 'Mozilla') {
  return `[![license: Mozilla](https://img.shields.io/badge/Mozilla-License-red.svg)](https://www.mozilla.org/en-US/MPL/)`
 } 

 else if (license === 'Apache') {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
 } 

 else if (license === 'GNU') {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
 } 

 else if (license === 'ISC') {
  return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`  
 } else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
   }
   
   else if (license === 'Mozilla') {
    return `[License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
   }
  
   else if (license === 'ISC') {
    return `[License: MIT](https://opensource.org/licenses/ISC)`;
   }
  
   else if (license === 'GNU') {
    return `[License: MIT](https://opensource.org/licenses/GPL-2.0)`;
   }
   
   else if (license === 'Apache 2.0') {
    return `[License: MIT](https://opensource.org/licenses/Apache-2.0)`;
   }

   else return "";
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
  
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}

 # Badge
 ${renderLicenseBadge(data.license)}


  ## Table of Contents
  - [Description](#description)
  - [Installation](#description)
  - [Credits](#credits)
  - [License](#license)
  - [Github Information](#github)


# Description

${data.description}


# Installation

To run the application: ${data.installation}


# Usage

This application is used thusly: ${data.usage}


# Credits

The following contributed to this assignment: ${data.credits}


# License 
This application's license category is: ${data.license}. If you have questions, please consult the documentation at ${renderLicenseLink(data.license)}.


# GitHub Information

Here is the link to the GitHub page: ${data.github}

#`;
}

module.exports = generateMarkdown;
