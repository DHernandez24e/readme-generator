// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

//   return `# ${data.title}
//   //License

//   ## Description
//   ${data.test}

//   ## Table of Contents
//   * [Installation] (#installation)
//   * [Usage] (#usage)
//   * [Credits] (#credits)
//   * [License] (#license)
//   * [Contributing] (#contributing)
//   * [Tests] (#tests)
//   * [Questions] (#questions)

//   ## Installation
    
//     To install necessary dependencies, run the following command:
    
//     ${data.depends}
  
//   ## Usage

//   ## License

//     This project is licensed under the ${data.license} license

//   ## Contributing

//     ${data.contribute}

//   ## Tests

//     To run tests, run the following command

//     ${data.tests}

//   ## Questions
//     If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.github}.  
// `;
}

module.exports = generateMarkdown;
