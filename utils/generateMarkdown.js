// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "None":
      return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "None":
      return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None") {
    return `## License

  This project is protected under the ${license} license.  
  If you'd like to learn more about this license, please visit: ${renderLicenseLink(license)}`;
  }
  else {
    return "";
  }
}

function renderTableOfContents(license) {
  if (license != "None") {
    return `## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)`;
  } else {
    return `## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenseDetails)}

  ## Description

  ${data.descriptionDetails}

  ${renderTableOfContents(data.licenseDetails)}

  ## Installation

  ${data.installationDetails}

  ## Usage

  ${data.usageDetails}

  ## Credits

  https://github.com/${data.username}

  ${renderLicenseSection(data.licenseDetails)}

  ## Features

  ${data.featureDetails}

  ## Contributing

  ${data.contributeDetails}

  ## Tests

  To begin testing, use the following command: ${data.testDetails}

  ## Still have questions? 

  My profile: https://github.com/${data.username}  
  Please direct any questions to ${data.email}!

`;
}

export default generateMarkdown;