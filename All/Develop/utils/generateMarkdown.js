// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// variable declarations
let blank = "";
let MIT;
let Mozilla;
let Apache;
let GNU;
let ISC;
let license;


//functions
function renderLicenseBadge(license) {
 if (!license === false) return `[![${license} license](https://img.shields.io/badge/NodeJS-${license}-red.svg)](${renderLicenseLink(license)})`
 else return blank;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === MIT) {
    return '(https://opensource.org/licenses/MIT)';
   }
   
   else if (license === Mozilla) {
    return '(https://opensource.org/licenses/MPL-2.0)';
   }
  
   else if (license === ISC) {
    return '(https://opensource.org/licenses/ISC)';
   }
  
   else if (license === GNU) {
    return '(https://opensource.org/licenses/GPL-2.0)';
   }
   
   else if (license === Apache) {
    return '(https://opensource.org/licenses/Apache-2.0)';
   }
  
   else return blank;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
renderLicenseBadge(license);
renderLicenseLink(license);
}

renderLicenseSection(license);

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}

 ## Badge(s)
 ${renderLicenseBadge(data.licenses)}


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


This application's license category is: ${data.license}. If you have questions, please consult the documentation at ${renderLicenseLink(data.licenses)}.


# GitHub Information

Here is the link to the GitHub page: ${data.github}

#`;
}

module.exports = generateMarkdown;
