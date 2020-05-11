// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  const licenseBadge = () => {
    if (data.license === 'MIT') {
      return 'https://img.shields.io/badge/license-MIT-brightgreen';
    }
    else if (data.license === 'APACHE 2.0') {
      return 'https://img.shields.io/badge/license-APACHE%202.0-orange'
    }
    else if (data.license === 'GPL 3.0') {
      return 'https://img.shields.io/badge/license-GPL%203.0-blue'
    }
    else if (data.license === 'BSD 3') {
      return 'https://img.shields.io/badge/license-BSD%203-red'
    }
  };

  return `# ${data.title}

  ### License Badge

  ![Github License](${licenseBadge()})

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
    
  To install necessary dependencies, run the following command:
    
    ${data.depends}
  
  ## Usage

  ${data.repoUse}

  ## License

  This project is licensed under the ${data.license} license

  ## Contributing

  ${data.contribute}

  ## Tests

  To run tests, run the following command

    ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work [here](https://github.com/${data.github}) .  
`;
}

module.exports = generateMarkdown;
