// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === MIT)   if (license === MIT) {
  return '[![License: MIT](https://img.shields.io/badge/node-lightblue?logo=node&style=plastic)](https://opensource.org/licenses/MIT)';
 }

 else if (license === Mozilla) {
  return '[![License: Mozilla Public License 2.0](https://img.shields.io/badge/Mozilla-grey?logo=node&style=plastic)](https://opensource.org/licenses/MPL-2.0)';
 }

 else if (license === ISC) {
  return '[![License: ISC](https://img.shields.io/badge/ISC-orange?logo=node&style=plastic)](https://opensource.org/licenses/ISC)';
 }

 else if (license === GNU) {
  return '[![License: General Public License](https://img.shields.io/badge/GNU-red?logo=node&style=plastic)](https://opensource.org/licenses/GPL-3.0)';
 }
 
 else if (license === Apache) {
  return '[![License: Apache 2.0](https://img.shields.io/badge/Apache%202.0-green?logo=node&style=plastic)](https://opensource.org/licenses/Apache-2.0)';
 }

 else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === MIT)   if (license === MIT) {
    return '(https://opensource.org/licenses/MIT)';
   }
  
   else if (license === Mozilla) {
    return '(https://opensource.org/licenses/MPL-2.0)';
   }
  
   else if (license === ISC) {
    return '(https://opensource.org/licenses/ISC)';
   }
  
   else if (license === GNU) {
    return '(https://opensource.org/licenses/GPL-3.0)';
   }
   
   else if (license === Apache) {
    return '(https://opensource.org/licenses/Apache-2.0)';
   }
  
   else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  # Description(#description)
  # Installation(#description)
  # Usage(#usage)
  # Credits(#credits)
  # License(#license)
  # Github Information(#github)


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
