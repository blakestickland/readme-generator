

// Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {

  // If there is no license, return an empty string
  if (license === "none") {
      return "";
  }

  // If an MIT License is selected, format the URL like this...
  else if (license === "MIT License") {
    return  `[![${license}](https://img.shields.io/badge/MIT-License-brightgreen)](https://choosealicense.com/licenses/)`; 
  }
  else if (license === "Apache License 2.0") {
    return  `[![${license}](https://img.shields.io/badge/Apache%202.0-License-brightgreen)](https://choosealicense.com/licenses/)`; 
  }

  // If one of the other licenses is selected, format the URL like this...
  return  `[![${license}](https://img.shields.io/badge/${license}-License-brightgreen)](https://choosealicense.com/licenses/)`;
};

const generateMarkdown = (answers) => {
  return `<!-- Title of the project -->
  # ${answers.title}
  
  ${renderLicenseBadge(answers.license)}
  

  <!-- Description of the project -->
  ${answers.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  [${answers.license}](https://choosealicense.com/licenses/)
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.usage}
  \`\`\`bash
  npm run tests
  \`\`\`

  ## Questions
  Please refer any questions via Github or my email address.
  Github username: [${answers.github_username}](https://github.com/${answers.github_username})

  Email: ${answers.email_address}

  `;
}


module.exports = { generateMarkdown };
